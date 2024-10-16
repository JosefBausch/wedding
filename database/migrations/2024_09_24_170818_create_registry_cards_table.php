<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registry_cards', function (Blueprint $table) {
            $table->id(); // Auto-incrementing ID
            $table->string('title'); // Title of the item
            $table->string('link'); // Link to Amazon/Walmart/etc.
            $table->string('image'); // URL of the item's image
            $table->boolean('is_reserved')->default(false); // Reservation status
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null'); // Foreign key for users

            // Adding the item_type column using the ItemType enum
            $table->enum('item_type', \App\Enums\ItemType::getValues())->default(\App\Enums\ItemType::Other->value); // Enum for item types

            $table->timestamps(); // Created at and Updated at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registry_cards');
    }
};
