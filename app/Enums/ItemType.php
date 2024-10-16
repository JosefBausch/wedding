<?php

namespace App\Enums;

enum ItemType: string
{
    case Furniture = 'furniture';
    case Electronics = 'electronics';
    case Kitchenware = 'kitchenware';
    case Decor = 'decor';
    case Other = 'other';

    public static function getValues(): array
    {
        return array_column(self::cases(), 'value');
    }
}
