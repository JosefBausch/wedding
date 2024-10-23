<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RsvpCode extends Model
{
    use HasFactory;

    // Define the table associated with the model if it doesn't follow Laravel's naming convention
    protected $table = 'rsvp_codes';

    // Specify the fillable fields for mass assignment
    protected $fillable = [
        'code',
        'invitee',
        'user_id',
        'expected_party_size',
        'actual_party_size',
        'is_accepted',
        'invited_to_both',
    ];

    // Define the relationship with the User model (assuming a User model exists)
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
