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
            $query->where('item_type', $request->itemType); // Use item_type to match the column name in your database
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
            'itemTypes' => ItemType::getValues(),
            'initialFilter' => $request->filter,
            'initialSearch' => $request->search,
            'initialType' => $request->itemType, // Ensure this matches the frontend parameter
            'initialSort' => $request->sort,
        ]);
    }

}
