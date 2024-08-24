<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('registry', function (Blueprint $table) {
            $table->id();
            $table->string('item_name', 100);
            $table->string('item_link', 255)->nullable();
            $table->string('item_image', 255)->nullable();
            $table->tinyInteger('taken')->default(0);
            $table->string('taken_by', 65)->nullable();
        });
    }

    public function down() {
        Schema::dropIfExists('registry');
    }
};
