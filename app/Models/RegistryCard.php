<?php

namespace App\Models;
use App\Enums\ItemType;

use Illuminate\Database\Eloquent\Model;

class RegistryCard extends Model
{
    protected $table = 'registry_cards';
    protected $primaryKey = 'id';
    protected $fillable = [
        'title',
        'link',
        'image',
        'is_reserved',
        'item_type',
    ];

    protected $casts = [
        'is_reserved' => 'boolean',
        'item_type' => ItemType::class,
    ];
}
