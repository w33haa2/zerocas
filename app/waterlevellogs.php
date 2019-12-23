<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class waterlevellogs extends Model
{
    protected $primaryKey = 'id';
     protected $table = 'waterlevellogs';
     protected $fillable = array(
         'location',
         'waterlevel',
	    'dateTimeRead',
     );

     public $timestamps = true;
}
