<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\MessageSent;
use App\Models\User;
use App\Models\Room;
class UserController extends Controller
{
    function message(Request $request){
        event($e=new MessageSent($request->message));
        $response = [
            'message' => $request->message
        ];
        return response($response,200);
    }
}
