<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UpdateAppController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login',[AuthController::class,'login']);
Route::middleware('auth:sanctum')->group(function (){
    Route::post('/logout',[AuthController::class,'logout']);
    Route::post('/room/create',[RoomController::class,'create']);
    Route::post('/room/show',[RoomController::class,'show']);
    Route::post('room/join',[RoomController::class,'join']);
});
Route::post('/message',[UserController::class,'message']);
Route::post('/app/update',[UpdateAppController::class,'getMap']);