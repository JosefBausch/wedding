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
        DB::table('registry_cards')->insert([
            [
                'title' => 'Stainless Steel Frying Pan',
                'link' => 'https://www.amazon.com/example-frying-pan',
                'image' => 'https://cdn.shopify.com/s/files/1/2131/5111/files/Web_Stainless_FryingPan_12in_1x1_Hero.jpg?v=1719871990',
                'is_reserved' => false,
                'user_id' => null, // Change to a user ID if needed
            ],
            [
                'title' => 'Non-Stick Cookware Set',
                'link' => 'https://www.walmart.com/example-cookware-set',
                'image' => 'https://example.com/non-stick-cookware.jpg',
                'is_reserved' => false,
                'user_id' => null, // Change to a user ID if needed
            ],
            [
                'title' => 'High-Quality Chef Knife',
                'link' => 'https://www.amazon.com/example-chef-knife',
                'image' => 'https://example.com/chef-knife.jpg',
                'is_reserved' => true,
                'user_id' => null, // Change to a valid user ID for reservation
            ],
        ]);
    }
}
