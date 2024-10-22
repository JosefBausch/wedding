<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\RegistryCard;
use Illuminate\Http\Request;
use App\Enums\ItemType;
use Illuminate\Support\Facades\Log;

class RegistryCardController extends Controller
{
    public function index(Request $request)
    {
        $query = RegistryCard::query();

        // Handle filtering
        if ($request->filter === 'reserved') {
            $query->where('is_reserved', true);
        } elseif ($request->filter === 'not-reserved') {
            $query->where('is_reserved', false);
        }

        // Handle type filtering
        if ($request->itemType && $request->itemType !== 'all') {
            // Validate against the enum
            if (ItemType::tryFrom($request->itemType) !== null) {
                $query->where('item_type', $request->itemType); // Use item_type to match the column name in your database
            }
        }

        // Handle search
        if ($request->search) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        // Handle sorting
        $sortField = 'title';
        $sortDirection = 'asc';
        if ($request->sort) {
            [$sortField, $sortDirection] = explode('_', $request->sort);
        }
        $query->orderBy($sortField, $sortDirection);

        // Get the filtered and/or searched results
        $cardsData = $query->get();

        return Inertia::render('Registry/View', [
            'cardsData' => $cardsData,
            'count' => $cardsData->count(),
            'itemTypes' => $cardsData,
            'initialFilter' => $request->filter,
            'initialSearch' => $request->search,
            'initialType' => $request->itemType, // Ensure this matches the frontend parameter
            'initialSort' => $request->sort,
            'can' => [
                'create_registry_item' => auth()->user()->can('create-registry-item'),
            ],
        ]);
    }

    /* Update */
    public function update(Request $request, RegistryCard $model, $id)
    {
        // Log the incoming request data
        Log::info('Register request for item with id of: ' . $id);
        Log::info('Update request data: ', $request->all());

        // Validate the incoming request data
        $validatedData = $request->validate([
            'is_reserved' => 'required|boolean', // Ensure is_reserved is boolean
        ]);

        $registryItem = $model->findOrFail($id);

        // Update the is_reserved and user_id (set the current logged-in user's id)
        $registryItem->update([
            'is_reserved' => $validatedData['is_reserved'],
            'user_id' => auth()->id(), // Get the logged-in user's id
        ]);

        return back()->with('message', 'Registry item updated successfully');
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'link' => 'nullable|url',
            'image' => 'nullable|url',
            'item_type' => 'required|in:' . implode(',', array_column(ItemType::cases(), 'value')), // Use the enum values dynamically
            'is_reserved' => 'boolean',
        ]);

        // Create a new registry card with validated data
        RegistryCard::create($validatedData);

        return back()->with('message', 'Item added successfully');
    }

    /* Delete */
    public function destroy(RegistryCard $registryCardModel, $id)
    {
        // Find the registry item by ID
        $registryItem = $registryCardModel->findOrFail($id);

        // Delete the found registry item
        $registryItem->delete(); // Use $registryItem instead of $registryCardModel

        // Redirect back with a success message
        return back()->with('message', 'Registry item deleted successfully');
    }
}
