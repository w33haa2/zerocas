<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Waterlevellogs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('waterlevellogs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('location');
            $table->string('waterlevel');
            $table->timestamp('dateTimeRead');
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('waterlevellogs');
    }
}
