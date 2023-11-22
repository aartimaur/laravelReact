<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusinessController;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
/*
Route::get('/Users',function(){
    $users=User::get();
    return response()->json($users);
});*/


Route::post('login', [AuthController::class,'login']);

Route::group(['middleware' => 'api'],function ($router) {
    Route::post('logout', [AuthController::class,'logout']);
    
    Route::post('refresh',[AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);
    //-------------BUSINESS CODE START-------------
    
    Route::post('addBusiness',[BusinessController::class,'addBusiness']);
    Route::get('view-business',[BusinessController::class,'business']);
    //Route::get('view-business',[BusinessController::class,'business']);



});

   



