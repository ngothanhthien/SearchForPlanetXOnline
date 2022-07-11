<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectorNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sector_notes', function (Blueprint $table) {
            $table->string('room_uid',10)->primary();
            $table->smallInteger('num');
            $table->integer('user_id');
            $table->smallInteger('note')->nullable();
            $table->smallInteger('type')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sector_notes');
    }
}
