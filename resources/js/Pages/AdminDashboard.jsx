import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router } from '@inertiajs/react';

export default function AdminDashboard({ 
    auth,
    totalExpectedAttendees,
    totalActualAttendees,
    expectedInvitedToBoth,
    expectedNotInvitedToBoth,
    actualInvitedToBoth,
    actualNotInvitedToBoth,
    rsvpCodes,
    filters 
}) {
    const [acceptedFilter, setAcceptedFilter] = useState(filters.accepted || '');
    const [invitedFilter, setInvitedFilter] = useState(filters.invited || '');
    const [inviteeFilter, setInviteeFilter] = useState(filters.invitee || '');  // New invitee filter
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editRsvp, setEditRsvp] = useState(null);
    const [newRsvp, setNewRsvp] = useState({
        code: '',
        invitee: '',
        expected_party_size: '',
        actual_party_size: '',
        is_accepted: false,
        invited_to_both: false,
    });

    const handleEdit = (rsvp) => {
        setEditRsvp(rsvp);  // Populate the form with the RSVP data
        setIsFormOpen(true);  // Open the form for editing
    };

    const handleFilterChange = (filterType, value) => {
        // Update the filter state without triggering the form submission
        if (filterType === 'accepted') {
            setAcceptedFilter(value);
        } else if (filterType === 'invited') {
            setInvitedFilter(value);
        } else if (filterType === 'invitee') {
            setInviteeFilter(value);
        }
    };

    const handleFilterSubmit = () => {
        // Construct URL with filters and reload the page with updated parameters
        const params = new URLSearchParams();
        if (acceptedFilter) params.set('accepted', acceptedFilter);
        if (invitedFilter) params.set('invited', invitedFilter);
        if (inviteeFilter) params.set('invitee', inviteeFilter);
        window.location.href = `?${params.toString()}`;
    };

    // Handle input changes for the RSVP form
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (name === "code") {
            let formattedValue = value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Remove invalid characters
            if (formattedValue.length > 8) {
                formattedValue = formattedValue.slice(0, 8); // Limit length
            }
            
            let part1 = formattedValue.slice(0, 4).replace(/[^A-Z]/g, ""); // First 4 letters (A-Z)
            let part2 = formattedValue.slice(4).replace(/[^0-9]/g, ""); // Last 4 numbers (0-9)
    
            setNewRsvp((prev) => ({
                ...prev,
                [name]: part1 + (part2 ? `-${part2}` : ""),
            }));
        } else {
            setNewRsvp((prev) => ({
                ...prev,
                [name]: type === "checkbox" ? checked : value,
            }));
        }
    };

    const handleEditInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditRsvp((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        
        router.put(`/admin/rsvp/${editRsvp.id}`, editRsvp, {
            onSuccess: () => {
                setIsFormOpen(false);
                setEditRsvp(null);
            },
            onError: (errors) => {
                console.error("Error updating RSVP:", errors);
            },
        });
    };    

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/admin/rsvp/store', newRsvp, {
            onSuccess: () => {
                setNewRsvp({ code: '', invitee: '', expected_party_size: '', actual_party_size: '', is_accepted: false, invited_to_both: false });
                setIsFormOpen(false);
            },
        });
    };

    const handleDelete = (id) => {
        if (!window.confirm("Are you sure you want to delete this RSVP?")) return;
    
        router.delete(`/admin/rsvp/delete/${id}`, {
            onSuccess: () => {
                console.log("RSVP deleted successfully!");
            },
            onError: (errors) => {
                console.error("Error deleting RSVP:", errors);
            }
        });
    };

    const handleExportCsv = () => {
        // Create a hidden iframe or directly open the URL in a new tab
        const downloadUrl = '/admin/rsvp/export-csv';
        
        // Option 1: Using a hidden iframe (prevents page navigation)
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = downloadUrl;
        document.body.appendChild(iframe);
        setTimeout(() => document.body.removeChild(iframe), 2000);
        
        // Option 2: Alternative approach - open in new tab
        // window.open(downloadUrl, '_blank');
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Admin Dashboard" />
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>

                {/* Total Attendees Overview */}
                <p className="mt-4 text-lg">Total Expected Attendees: <strong>{totalExpectedAttendees}</strong></p>
                <p className="mt-2 text-lg">Total Actual Attendees: <strong>{totalActualAttendees}</strong></p>

                {/* Breakdown by Invitation Status */}
                <p className="mt-4 text-lg font-semibold">Invited to Ceremony & Reception:</p>
                <p className="ml-4">Expected: <strong>{expectedInvitedToBoth}</strong></p>
                <p className="ml-4">Actual: <strong>{actualInvitedToBoth}</strong></p>

                <p className="mt-4 text-lg font-semibold">Invited to Reception Only:</p>
                <p className="ml-4">Expected: <strong>{expectedNotInvitedToBoth}</strong></p>
                <p className="ml-4">Actual: <strong>{actualNotInvitedToBoth}</strong></p>
            </div>

            {/* Filters */}
            <div className="max-w-4xl mx-auto mt-6 p-4 bg-white rounded-lg shadow-md flex gap-4">
                <select
                    value={acceptedFilter}
                    onChange={(e) => handleFilterChange('accepted', e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="">All</option>
                    <option value="yes">Accepted</option>
                    <option value="no">Not Accepted</option>
                </select>

                <select
                    value={invitedFilter}
                    onChange={(e) => handleFilterChange('invited', e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="">All</option>
                    <option value="yes">Invited to Both</option>
                    <option value="no">Not Invited to Both</option>
                </select>

                {/* Invitee Search */}
                <input
                    type="text"
                    value={inviteeFilter}
                    onChange={(e) => handleFilterChange('invitee', e.target.value)}
                    placeholder="Search by Invitee"
                    className="p-2 border rounded"
                />

                {/* Filter Button */}
                <button
                    onClick={handleFilterSubmit}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Apply Filters
                </button>
            </div>

            {/* RSVP Table */}
            <div className="max-w-4xl mx-auto mt-6 p-4 bg-white rounded-lg shadow-md">
                <div className="flex justify-center items-center">
                    <h2 className="text-xl font-semibold mr-auto">RSVP Codes</h2>
                    <button
                        onClick={handleExportCsv}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                    >
                        Export to CSV
                    </button>
                </div>
                <table className="w-full mt-4 border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Edit:</th>
                            <th className="border p-2">Code</th>
                            <th className="border p-2">Invitee</th>
                            <th className="border p-2">Expected</th>
                            <th className="border p-2">Actual</th>
                            <th className="border p-2">Accepted</th>
                            <th className="border p-2">Invited to Both</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rsvpCodes.data.map((rsvp) => (
                            <tr key={rsvp.id} className="text-center">
                                <td className="border p-2">
                                    <button onClick={() => handleEdit(rsvp)} className="text-blue-600 hover:text-blue-800">
                                        <i className="fa-solid fa-edit"></i>
                                    </button>
                                </td>
                                <td className="border p-2">{rsvp.code}</td>
                                <td className="border p-2">{rsvp.invitee}</td>
                                <td className="border p-2">{rsvp.expected_party_size}</td>
                                <td className="border p-2">{rsvp.actual_party_size}</td>
                                <td className={`border p-2 ${rsvp.is_accepted ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                    {rsvp.is_accepted ? 'Yes' : 'No'}
                                </td>
                                <td className="border p-2">{rsvp.invited_to_both ? 'Yes' : 'No'}</td>
                                <td className="border p-2">
                                    <button onClick={() => handleDelete(rsvp.id)} className="text-red-600 hover:text-red-800">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Links */}
                <div className="flex justify-center mt-4 space-x-2">
                    {rsvpCodes.links.map((link, index) => (
                        <button
                            key={index}
                            onClick={() => router.visit(link.url)}
                            className={`px-3 py-1 rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>

            {isFormOpen && (
            <div className="max-w-4xl mx-auto mt-6 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Edit RSVP</h2>
                <form onSubmit={handleEditSubmit}>
                    <input
                        type="text"
                        name="code"
                        value={editRsvp.code}
                        onChange={handleEditInputChange}
                        className="p-2 border rounded mb-2"
                        required
                    />
                    <input
                        type="text"
                        name="invitee"
                        value={editRsvp.invitee}
                        onChange={handleEditInputChange}
                        className="p-2 border rounded mb-2"
                        required
                    />
                    <input
                        type="number"
                        name="expected_party_size"
                        value={editRsvp.expected_party_size}
                        onChange={handleEditInputChange}
                        className="p-2 border rounded mb-2"
                        required
                    />
                    <input
                        type="number"
                        name="actual_party_size"
                        value={editRsvp.actual_party_size}
                        onChange={handleEditInputChange}
                        className="p-2 border rounded mb-2"
                    />
                    <label>
                        Accepted:
                        <input
                            type="checkbox"
                            name="is_accepted"
                            checked={editRsvp.is_accepted}
                            onChange={handleEditInputChange}
                        />
                    </label>
                    <label>
                        Invited to Both:
                        <input
                            type="checkbox"
                            name="invited_to_both"
                            checked={editRsvp.invited_to_both}
                            onChange={handleEditInputChange}
                        />
                    </label>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded mt-4">
                        Update RSVP
                    </button>
                </form>
            </div>
            
        )}

        {/* Add RSVP Form */}
        <div className="w-full flex justify-center">
        <div className="w-2/3 mt-6 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Add New RSVP</h2>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-gray-700">Code</label>
              <input
                type="text"
                name="code"
                value={newRsvp.code}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Invitee</label>
              <input
                type="text"
                name="invitee"
                value={newRsvp.invitee}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Expected Party Size</label>
              <input
                type="number"
                name="expected_party_size"
                value={newRsvp.expected_party_size}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Actual Party Size</label>
              <input
                type="number"
                name="actual_party_size"
                value={newRsvp.actual_party_size}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Accepted</label>
              <input
                type="checkbox"
                name="is_accepted"
                checked={newRsvp.is_accepted}
                onChange={handleInputChange}
                className="mr-2"
              />
              Yes
            </div>

            <div>
              <label className="block text-gray-700">Invited to Both</label>
              <input
                type="checkbox"
                name="invited_to_both"
                checked={newRsvp.invited_to_both}
                onChange={handleInputChange}
                className="mr-2"
              />
              Yes
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Add RSVP
            </button>
          </form>
        </div>
        </div>
        </AuthenticatedLayout>
    );
}
