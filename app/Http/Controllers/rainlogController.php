<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\rainlogs;
use App\Events\heavyrain;
use DateTime;
class rainlogController extends Controller
{
	public function index()
	{
	    return view('admin.dashboard.rainlogs');
	}

	public function refresh()
	{
	    $rainlogs = rainlogs::all();
	    return \DataTables::of(rainlogs::query())
	    ->make(true);
	}

	public function store(Request $request)
	{
		   $rainlogs= new rainlogs;
		   $rainlogs->location =$request->gis;

		   $rainlogs->raindata = $request->raindata;

		  if($request->raindata > 0 && $request->raindata < 2.5){
			 $rainlogs->description = "Light";

		  }
		  if($request->raindata == 0){
			$rainlogs->description = "Testing";

		 }
		  if($request->raindata >  2.5 && $request->raindata <= 7.50){
			 $rainlogs->description = "Moderate";
		  }
		  if($request->raindata >7.5){
			 $rainlogs->description = "Heavy";
		  }
		  $rainlogs->dateTimeRead = $request->dateSent;
		   $rainlogs->save();
		   $date =  new DateTime();
		   $date2 = $date->format('Y-m-d H:i:s');
		   event(new heavyrain($request->gis,$date2,$rainlogs->description));
	}
}
