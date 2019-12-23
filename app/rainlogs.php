<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class rainlogs extends Model
{
	protected $primaryKey = 'id';
     protected $table = 'logs';
     protected $fillable = array(
         'location',
         'raindata',
        'description',
        'dateTimeRead',
     );

     public $timestamps = true;
}
