<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectorTheoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sector_theories', function (Blueprint $table) {
            $table->string('room_uid',10)->primary();
            $table->smallInteger('num');
            $table->integer('user_id');
            $table->smallInteger('theory')->nullable();
            $table->smallInteger('time')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sector_theories');
    }
}
