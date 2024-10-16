<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Enums\ItemType;

class RegistryCardsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $items = [
            [
                'title' => 'Stainless Steel Frying Pan',
                'link' => 'https://www.amazon.com/example-frying-pan',
                'image' => 'https://cdn.shopify.com/s/files/1/2131/5111/files/Web_Stainless_FryingPan_12in_1x1_Hero.jpg?v=1719871990',
                'is_reserved' => true,
                'item_type' => ItemType::Kitchenware,
            ],
            [
                'title' => 'Non-Stick Cookware Set',
                'link' => 'https://www.walmart.com/example-cookware-set',
                'image' => 'https://example.com/non-stick-cookware.jpg',
                'is_reserved' => false,
                'item_type' => ItemType::Kitchenware,
            ],
            [
                'title' => 'High-Quality Chef Knife',
                'link' => 'https://www.amazon.com/example-chef-knife',
                'image' => 'https://example.com/chef-knife.jpg',
                'is_reserved' => true,
                'item_type' => ItemType::Kitchenware,
            ],
            [
                'title' => 'Stand Mixer',
                'link' => 'https://www.kitchenaid.com/example-stand-mixer',
                'image' => 'https://example.com/stand-mixer.jpg',
                'is_reserved' => true,
                'item_type' => ItemType::Electronics,
            ],
            [
                'title' => 'Coffee Maker',
                'link' => 'https://www.breville.com/example-coffee-maker',
                'image' => 'https://example.com/coffee-maker.jpg',
                'is_reserved' => false,
                'item_type' => ItemType::Electronics,
            ],
            [
                'title' => 'Blender',
                'link' => 'https://www.vitamix.com/example-blender',
                'image' => 'https://example.com/blender.jpg',
                'is_reserved' => false,
                'item_type' => ItemType::Electronics,
            ],
            [
                'title' => 'Toaster Oven',
                'link' => 'https://www.breville.com/example-toaster-oven',
                'image' => 'https://example.com/toaster-oven.jpg',
                'is_reserved' => false,
                'item_type' => ItemType::Electronics,
            ],
            [
                'title' => 'Food Processor',
                'link' => 'https://www.cuisinart.com/example-food-processor',
                'image' => 'https://example.com/food-processor.jpg',
                'is_reserved' => true,
                'item_type' => ItemType::Electronics,
            ],
            [
                'title' => 'Dish Set',
                'link' => 'https://www.crateandbarrel.com/example-dish-set',
                'image' => 'https://example.com/dish-set.jpg',
                'is_reserved' => false,
                'item_type' => ItemType::Kitchenware,
            ],
            [
                'title' => 'Cutlery Set',
                'link' => 'https://www.williams-sonoma.com/example-cutlery-set',
                'image' => 'https://example.com/cutlery-set.jpg',
                'is_reserved' => true,
                'item_type' => ItemType::Kitchenware,
            ],
            [
                'title' => 'Rice Cooker',
                'link' => 'https://www.zojirushi.com/example-rice-cooker',
                'image' => 'https://example.com/rice-cooker.jpg',
                'is_reserved' => true,
                'item_type' => ItemType::Electronics,
            ],
            [
                'title' => 'Air Fryer',
                'link' => 'https://www.ninja.com/example-air-fryer',
                'image' => 'https://example.com/air-fryer.jpg',
                'is_reserved' => false,
                'item_type' => ItemType::Electronics,
            ],
            // New items
            [
                'title' => 'Leather Sofa',
                'link' => 'https://www.ashleyfurniture.com/example-leather-sofa',
                'image' => 'https://example.com/leather-sofa.jpg',
                'is_reserved' => false,
                'item_type' => ItemType::Furniture,
            ],
            [
                'title' => 'Dining Table Set',
                'link' => 'https://www.ikea.com/example-dining-table-set',
                'image' => 'https://example.com/dining-table-set.jpg',
                'is_reserved' => false,
                'item_type' => ItemType::Furniture,
            ],
            [
                'title' => 'Smart TV',
                'link' => 'https://www.bestbuy.com/example-smart-tv',
                'image' => 'https://example.com/smart-tv.jpg',
                'is_reserved' => false,
                'item_type' => ItemType::Electronics,
            ],
            [
                'title' => 'Wall Art Set',
                'link' => 'https://www.wayfair.com/example-wall-art-set',
                'image' => 'https://example.com/wall-art-set.jpg',
                'is_reserved' => false,
                'item_type' => ItemType::Decor,
            ],
            [
                'title' => 'Table Lamp',
                'link' => 'https://www.potterybarn.com/example-table-lamp',
                'image' => 'https://example.com/table-lamp.jpg',
                'is_reserved' => false,
                'item_type' => ItemType::Decor,
            ],
        ];

        foreach ($items as $item) {
            DB::table('registry_cards')->insert([
                'title' => $item['title'],
                'link' => $item['link'],
                'image' => $item['image'],
                'is_reserved' => $item['is_reserved'],
                'item_type' => $item['item_type']->value,
                'user_id' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
