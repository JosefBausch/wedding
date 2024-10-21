<?php

namespace App\Enums;

enum ItemType: string
{
    /*make sure you update the frontend enum of the same name!*/
    case FURNITURE = 'furniture';
    case ELECTRONICS = 'electronics';
    case KITCHENWARE = 'kitchenware';
    case DECOR = 'decor';
    case OTHER = 'other';
}
