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
        Schema::create('rsvp', function (Blueprint $table) {
            $table->bigIncrements('id')->primary();
            $table->string('phone_number', 12)->unique();;
            $table->string('primary_name');
            $table->integer('number_of_guests');
            $table->boolean('verified');
            $table->dateTime('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rsvp');
    }
};
