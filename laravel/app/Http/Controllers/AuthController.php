<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

// use Illuminate\Http\Request;

class AuthController extends Controller
{
    function login(LoginRequest $request){
        $fields=$request->validated();
        $user=User::where('account',$fields['account'])->first();
        if(!$user||!Hash::check($fields['password'], $user['password'])){
            return response(['message'=>'Invalid account or password'],401);
        }
        $user->tokens()->delete();
        $token=$user->createToken('userToken')->plainTextToken;
        $response=[
            'user'=>$user["account"],
            'token'=>$token
        ];
        return response($response,200)
        ->header('Access-Control-Allow-Origin', '*')
        ->header('Access-Control-Allow-Methods', '*')
        ->header('Access-Control-Allow-Headers', 'X-CSRF-Token');
    }
}
