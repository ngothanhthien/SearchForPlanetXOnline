<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class UpdateAppController extends Controller
{
    function getMap(Request $request){
        $map=$request->map;
        $response=Http::withHeaders(['referer'=>'https://web.planetxapp.com/'])->retry(5, 60000)->get('https://web.planetxapp.com/assets/maps/'.$map.'.json');
        Storage::put('map/'.$map.'.json',$response->body());
        return $response;
    }
}
