<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\waterlevellogs;
class waterlevellogscontroller extends Controller
{
    public function index()
	{
	    return view('admin.dashboard.waterlogs');
    }
    public function refresh()
	{
	    $rainlogs = waterlevellogs::all();
	    return \DataTables::of(rainlogs::query())
	    ->make(true);
	}
}
