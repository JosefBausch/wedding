<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\RegistryCard;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class RegistryCardController extends Controller
{
    /*read*/
    public function index(RegistryCard $model)
    {
        return Inertia::render('Registry', [
            'cardData' => $model->all(),
            'count' => $model->count(),
        ]);
    }

    /* Update */
    public function update(Request $request, RegistryCard $model, $id)
    {
        // Log the incoming request data
        Log::info('Update request received for registry item ID: ' . $id);
        Log::info('Update request data: ', $request->all());

        // Validate the incoming request data
        $validatedData = $request->validate(
            [
                'is_reserved' => 'required|boolean', // Validate is_reserved as a boolean
            ],
            [
                'is_reserved.boolean' => 'The is_reserved field must be true or false.', // Custom error message for boolean validation
            ]
        );

        // Add the user_id to the validated data
        $validatedData['user_id'] = Auth::id();

        // Find the registry card by ID
        $registryCard = $model->findOrFail($id);

        // Update the registry card with validated data
        $registryCard->update($validatedData);

        // Redirect back with a success message
        return back()->with('message', 'Registry item updated successfully');
    }
    /*create*/
    public function store(Request $request, RegistryCard $model)
    {
        // Validate the request
        $validatedData = $request->validate([
            'title' => 'required|max:255|min:2',
            'description' => 'nullable|max:1000',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Adjust file size if needed
            'product_link' => 'required|url|max:255',
        ]);

        // Handle file upload
        if ($request->hasFile('image')) {
            // Store the image in the 'public/images' directory (adjust as needed)
            $imagePath = $request->file('image')->store('images', 'public');
            $validatedData['image'] = $imagePath;
        }

        // Create the new registry card with the validated data
        $model->create($validatedData);

        // Return back with success message
        return back()->with('message', 'Item added successfully');
    }

}

