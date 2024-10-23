<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRsvpCodesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rsvp_codes', function (Blueprint $table) {
            $table->id(); // Creates an auto-incrementing integer primary key
            $table->string('code'); // Creates a varchar column for the RSVP code
            $table->string('invitee'); // Creates a varchar column for the invitee
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('cascade'); // Foreign key referencing the users table, now nullable
            $table->unsignedInteger('expected_party_size'); // Unsigned integer for expected party size
            $table->unsignedInteger('actual_party_size')->nullable(); // Unsigned integer for actual party size, nullable
            $table->boolean('is_accepted')->default(false); // Boolean column for acceptance status, defaults to false
            $table->timestamps(0); // Creates created_at column without updated_at
            $table->boolean('invited_to_both')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rsvp_codes');
    }
}
