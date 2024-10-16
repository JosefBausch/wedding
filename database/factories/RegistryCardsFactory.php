<?php

namespace Database\Factories;

use App\Models\RegistryCard;
use App\Enums\ItemType;
use Illuminate\Database\Eloquent\Factories\Factory;

class RegistryCardFactory extends Factory
{
    protected $model = RegistryCard::class;

    public function definition()
    {
        return [
            'title' => $this->faker->words(3, true),
            'link' => $this->faker->url,
            'image' => $this->faker->imageUrl(640, 480, 'product'),
            'is_reserved' => $this->faker->boolean(20), // 20% chance of being reserved
            'type' => $this->faker->randomElement(ItemType::cases()),
            'user_id' => null,
        ];
    }

    public function kitchenware()
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => ItemType::Kitchenware,
                'title' => $this->faker->randomElement(['Pan', 'Pot', 'Knife Set', 'Blender', 'Toaster']) . ' ' . $this->faker->word,
            ];
        });
    }

    public function furniture()
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => ItemType::Furniture,
                'title' => $this->faker->randomElement(['Sofa', 'Chair', 'Table', 'Bed', 'Dresser']) . ' ' . $this->faker->word,
            ];
        });
    }

    public function electronics()
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => ItemType::Electronics,
                'title' => $this->faker->randomElement(['TV', 'Laptop', 'Smartphone', 'Tablet', 'Speaker']) . ' ' . $this->faker->word,
            ];
        });
    }

    public function decor()
    {
        return $this->state(function (array $attributes) {
            return [
                'type' => ItemType::Decor,
                'title' => $this->faker->randomElement(['Painting', 'Vase', 'Rug', 'Curtains', 'Lamp']) . ' ' . $this->faker->word,
            ];
        });
    }
}
