<?php

use App\Models\Flight;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\RaspberryController;
use App\Http\Controllers\SignInController;
use App\Http\Controllers\RegisterController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/home', function() {
    return view('home', [
        "title" => "Home"
    ]);
});




Route::get('/weather', function() {
    return view('list_weather', [
        "title" => "Weather"
    ]);
});

Route::get('/settings', function() {
    return view('settings', [
        "title" => "Settings"
    ]);
});



// Route untuk GET data
//Route::get('/get_data', [RaspberryController::class, 'getData']);

// Route untuk POST data
//Route::post('/post_data', [RaspberryController::class, 'postData']);