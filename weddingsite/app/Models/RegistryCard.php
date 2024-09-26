<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistryCard extends Model
{
    protected $table = 'registry_cards';
    protected $primaryKey = 'id';
    protected $fillable = [
        'id',
        'title',
        'link',
        'image',
        'is_reserved',
        'user_id'
    ];
}
