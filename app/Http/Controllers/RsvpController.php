<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\RsvpCode;

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

    public function update(Request $request, $code)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'invite_code' => 'required|string|exists:rsvp_codes,code', // Check if the code exists
            'is_reserved' => 'nullable|boolean',
            'actual_party_size' => 'nullable|integer',
            'is_accepted' => 'nullable|boolean',
        ]);

        // Find the RSVP entry by the code
        $rsvp = RsvpCode::where('code', $code)->first();

        if (!$rsvp) {
            // Return error if no matching code is found
            return back()->withErrors(['code' => 'The invite code is invalid.']);
        }

        // Update the RSVP entry with necessary details
        $rsvp->update([
            'user_id' => auth()->id(),
            'is_reserved' => true,
            //'actual_party_size' => $validatedData['actual_party_size'],
            'actual_party_size' => 1,
            'is_accepted' => true,
        ]);

        return redirect()->back()->with('message', 'RSVP updated successfully!');
    }

}
