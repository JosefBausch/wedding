<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\RsvpCode;
use App\Models\Invite;
use Illuminate\Http\RedirectResponse;

class RsvpController extends Controller
{
    public function check(Request $request, $code)
    {
        $auth = $request->user();
        $rsvp = RsvpCode::where('code', $code)->first();

        if (!$rsvp) {
            return redirect()->back()->withErrors(['error' => 'Invalid invite code']);
        }

        if ($rsvp->is_accepted) {
            return redirect()->back()->withErrors(['error' => 'This RSVP has already been accepted.']);
        }

        return Inertia::render('Invite/View', [
            'auth' => $auth,
            'invitee' => $rsvp->invitee,
            'expected_party_size' => $rsvp->expected_party_size,
            'inviteCode' => $code, 
        ]);
    }

    // Delete an RSVP by ID
    public function destroy($id): RedirectResponse
    {
        $rsvp = RsvpCode::findOrFail($id);
        $rsvp->delete();

        return redirect()->back()->with('success', 'RSVP deleted successfully.');
    }

    public function respond(Request $request)
    {
        $request->validate([
            'code' => 'required|string|exists:rsvp_codes,code',
            'actualPartySize' => 'required|integer|min:0',
        ]);

        $rsvp = RsvpCode::where('code', $request->code)->firstOrFail();

        // Update RSVP details, setting the user_id automatically
        $rsvp->update([
            'actual_party_size' => $request->actualPartySize,
            'is_accepted' => true, 
            'user_id' => auth()->id(), // ✅ Automatically set the logged-in user's ID
        ]);

        return redirect()->route('invite.index')->with('success', 'Your RSVP has been recorded!');
    }

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
        $validatedData = $request->validate([
            'actual_party_size' => 'required|integer|min:0',
        ]);

        $rsvp = RsvpCode::where('code', $code)->first();

        if (!$rsvp) {
            return back()->withErrors(['code' => 'The invite code is invalid.']);
        }

        // Update the RSVP entry with actual party size
        $rsvp->update([
            'user_id' => auth()->id(),
            'actual_party_size' => $validatedData['actual_party_size'],
            'is_accepted' => true,
        ]);

        return response()->json(['message' => 'RSVP updated successfully!']);
    }
}
