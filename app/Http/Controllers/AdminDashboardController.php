<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\RsvpCode;
use Illuminate\Support\Facades\Response;

class AdminDashboardController extends Controller
{
    public function exportCsv(Request $request)
{
    // Fetch all RSVP codes (without pagination)
    $rsvpCodes = RsvpCode::all();

    // Check if there are no RSVP codes
    if ($rsvpCodes->isEmpty()) {
        return response('No data available for export.', 404);
    }

    // Create a temporary file
    $filename = 'rsvp_codes_' . date('Y-m-d_H-i-s') . '.csv';
    $tempFile = fopen($filename, 'w');

    // Prepare the CSV header
    $csvHeader = ['ID', 'Code', 'Invitee', 'Expected Party Size', 'Actual Party Size', 'Accepted', 'Invited to Both'];
    fputcsv($tempFile, $csvHeader);

    // Add all RSVP data rows
    foreach ($rsvpCodes as $rsvp) {
        fputcsv($tempFile, [
            $rsvp->id,
            $rsvp->code,
            $rsvp->invitee,
            $rsvp->expected_party_size,
            $rsvp->actual_party_size,
            $rsvp->is_accepted ? 'Yes' : 'No',
            $rsvp->invited_to_both ? 'Yes' : 'No',
        ]);
    }

    // Close the file
    fclose($tempFile);

    // Create the response with the file content
    $response = response()->download($filename)->deleteFileAfterSend(true);

    return $response;
}

    public function store(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string|unique:rsvp_codes,code',
            'invitee' => 'required|string',
            'user_id' => 'nullable|exists:users,id',
            'expected_party_size' => 'required|integer|min:1',
            'actual_party_size' => 'nullable|integer|min:0',
            'is_accepted' => 'boolean',
            'invited_to_both' => 'boolean',
        ]);

        RsvpCode::create($validated);

        return redirect()->route('admin.dashboard')->with('success', 'RSVP Code added successfully.');
    }

    public function index(Request $request)
    {
        $acceptedFilter = $request->query('accepted'); 
        $invitedFilter = $request->query('invited');
        $inviteeFilter = $request->query('invitee');  // New invitee filter

        $query = RsvpCode::query();

        // Apply the accepted filter
        if ($acceptedFilter === 'yes') {
            $query->where('is_accepted', true);
        } elseif ($acceptedFilter === 'no') {
            $query->where('is_accepted', false);
        }

        // Apply the invited filter
        if ($invitedFilter === 'yes') {
            $query->where('invited_to_both', true);
        } elseif ($invitedFilter === 'no') {
            $query->where('invited_to_both', false);
        }

        // Apply the invitee search filter
        if ($inviteeFilter) {
            $query->where('invitee', 'like', '%' . $inviteeFilter . '%');
        }

        $rsvpCodes = $query->select(['id', 'code', 'invitee', 'expected_party_size', 'actual_party_size', 'is_accepted', 'invited_to_both'])
            ->paginate(15);

        // **New Calculations**
        $totalExpectedAttendees = RsvpCode::sum('expected_party_size'); 
        $totalActualAttendees = RsvpCode::sum('actual_party_size');

        $expectedInvitedToBoth = RsvpCode::where('invited_to_both', true)->sum('expected_party_size');
        $expectedNotInvitedToBoth = RsvpCode::where('invited_to_both', false)->sum('expected_party_size');

        $actualInvitedToBoth = RsvpCode::where('invited_to_both', true)->sum('actual_party_size');
        $actualNotInvitedToBoth = RsvpCode::where('invited_to_both', false)->sum('actual_party_size');

        return Inertia::render('AdminDashboard', [
            'auth' => auth()->user(),
            'totalExpectedAttendees' => $totalExpectedAttendees,
            'totalActualAttendees' => $totalActualAttendees,
            'expectedInvitedToBoth' => $expectedInvitedToBoth,
            'expectedNotInvitedToBoth' => $expectedNotInvitedToBoth,
            'actualInvitedToBoth' => $actualInvitedToBoth,
            'actualNotInvitedToBoth' => $actualNotInvitedToBoth,
            'rsvpCodes' => $rsvpCodes,
            'filters' => [
                'accepted' => $acceptedFilter,
                'invited' => $invitedFilter,
                'invitee' => $inviteeFilter,  // Pass the invitee filter to the frontend
            ],
        ]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'code' => 'required|string|unique:rsvp_codes,code,' . $id,
            'invitee' => 'required|string',
            'user_id' => 'nullable|exists:users,id',
            'expected_party_size' => 'required|integer|min:1',
            'actual_party_size' => 'nullable|integer|min:0',
            'is_accepted' => 'boolean',
            'invited_to_both' => 'boolean',
        ]);

        $rsvpCode = RsvpCode::findOrFail($id);
        $rsvpCode->update($validated);

        return redirect()->route('admin.dashboard')->with('success', 'RSVP Code updated successfully.');
    }

}
