<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
                'is_reserved' => false,
            ],
            [
                'title' => 'Non-Stick Cookware Set',
                'link' => 'https://www.walmart.com/example-cookware-set',
                'image' => 'https://example.com/non-stick-cookware.jpg',
                'is_reserved' => false,
            ],
            [
                'title' => 'High-Quality Chef Knife',
                'link' => 'https://www.amazon.com/example-chef-knife',
                'image' => 'https://example.com/chef-knife.jpg',
                'is_reserved' => false, // Changed to false
            ],
            [
                'title' => 'Stand Mixer',
                'link' => 'https://www.kitchenaid.com/example-stand-mixer',
                'image' => 'https://example.com/stand-mixer.jpg',
                'is_reserved' => false,
            ],
            [
                'title' => 'Coffee Maker',
                'link' => 'https://www.breville.com/example-coffee-maker',
                'image' => 'https://example.com/coffee-maker.jpg',
                'is_reserved' => false, // Changed to false
            ],
            [
                'title' => 'Blender',
                'link' => 'https://www.vitamix.com/example-blender',
                'image' => 'https://example.com/blender.jpg',
                'is_reserved' => false,
            ],
            [
                'title' => 'Toaster Oven',
                'link' => 'https://www.breville.com/example-toaster-oven',
                'image' => 'https://example.com/toaster-oven.jpg',
                'is_reserved' => false,
            ],
            [
                'title' => 'Food Processor',
                'link' => 'https://www.cuisinart.com/example-food-processor',
                'image' => 'https://example.com/food-processor.jpg',
                'is_reserved' => false, // Changed to false
            ],
            [
                'title' => 'Dish Set',
                'link' => 'https://www.crateandbarrel.com/example-dish-set',
                'image' => 'https://example.com/dish-set.jpg',
                'is_reserved' => false,
            ],
            [
                'title' => 'Cutlery Set',
                'link' => 'https://www.williams-sonoma.com/example-cutlery-set',
                'image' => 'https://example.com/cutlery-set.jpg',
                'is_reserved' => false,
            ],
            [
                'title' => 'Rice Cooker',
                'link' => 'https://www.zojirushi.com/example-rice-cooker',
                'image' => 'https://example.com/rice-cooker.jpg',
                'is_reserved' => false, // Changed to false
            ],
            [
                'title' => 'Air Fryer',
                'link' => 'https://www.ninja.com/example-air-fryer',
                'image' => 'https://example.com/air-fryer.jpg',
                'is_reserved' => false,
            ],
        ];

        foreach ($items as $item) {
            DB::table('registry_cards')->insert([
                'title' => $item['title'],
                'link' => $item['link'],
                'image' => $item['image'],
                'is_reserved' => $item['is_reserved'],
                'user_id' => null, // Set user_id to null since none are reserved
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
