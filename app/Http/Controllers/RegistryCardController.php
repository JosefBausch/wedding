<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\RegistryCard;
use Illuminate\Http\Request;
use App\Enums\ItemType;

class RegistryCardController extends Controller
{
    public function index(Request $request)
    {
        $query = RegistryCard::query();

        // Handle filtering
        if ($request->filter === 'registered') {
            $query->where('is_reserved', true);
        } elseif ($request->filter === 'not-registered') {
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
        ]);
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
}
