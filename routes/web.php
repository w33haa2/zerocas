<?php

Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');
Auth::routes();

/*
|------------------------------------------------------------------------------------
| Admin
|------------------------------------------------------------------------------------
*/
Route::group(['prefix' => ADMIN, 'as' => ADMIN . '.', 'middleware'=>['auth', 'Role:0']], function() {
     Route::get('/', 'DashboardController@index')->name('dash');

    Route::resource('users', 'UserController');
    Route::get('/rainlog', 'rainlogController@index')->name('rainlog');
    Route::get('/waterlevels', 'waterlevellogscontroller@index')->name('waterlevels');

});
Route::get('/', function () {
    return redirect('/admin');
});


Route::group(['middleware'], function()
{
    Route::get('test', function () {
        event(new App\Events\heavyrain('testni'));
        return "Event has been sent!";
    });
     Route::get('/coord', 'DashboardController@getCoordinates')->name('coord');
     Route::get('/getAPI', 'DashboardController@findAPI')->name('getAPI');
     Route::get('/get_latest', 'DashboardController@getLatest');
     Route::get('/refresh_rainlog', 'rainlogController@refresh')->name('refresh_rainlog');
     Route::get('/refresh_waterlog', 'waterlevellogscontroller@refresh')->name('refresh_waterlog');
     Route::post('/addlog', 'rainlogController@store')->name('addlog');
}




);
