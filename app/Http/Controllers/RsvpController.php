<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RsvpController extends Controller
{
    public function Index(Request $request)
    {
        $auth = $request->user(); // Retrieve the authenticated user

        // Optional: Add logic to fetch any necessary data for RSVP page

        return inertia('Invite/View', [
            'auth' => $auth,
        ]);
    }
}
