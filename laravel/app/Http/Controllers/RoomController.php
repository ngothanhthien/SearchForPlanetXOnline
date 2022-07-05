<?php

namespace App\Http\Controllers;

use App\Events\RoomCreated;
use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    function create(Request $request)
    {
        $user = $request->user();
        while (1) {
            $room_id = mt_rand(1000, 9999);
            $isUsed = Room::where('name', $room_id)->first();
            if (is_null($isUsed)) {
                $room = Room::create([
                    'name' => $room_id,
                    'master_room' => $user->account
                ]);
                $user->room_id = $room->id;
                $user->save();
                break;
            }
        }
        return response(compact('room_id'), 200);
    }
    function show()
    {
        $rooms = Room::with('user')->get();
        $response = [];
        foreach ($rooms as $room) {
            $users = [];
            $usersInRoom = $room->user;
            foreach ($usersInRoom as $user) {
                $account = $user->account;
                if ($user->room_id != $room->id) {
                    array_push($users, $account);
                } else {
                    // isMaster
                    array_unshift($users, $account);
                }
            }
            $response[$room->name] = [
                'user' => $users,
                'totalUser' => $usersInRoom->count(),
                'capacity' => $room->capacity,
                'key' => $room->master_room,
            ];
        }
        return response([
            'rooms' => $response,
        ], 200);
    }
    function join(Request $request)
    {
        $roomRequest = $request->room_uid;
        $room = Room::where('name', $roomRequest)->first();
        if (is_null($room)) {
            return response(['message' => 'Room not found'], 404);
        }
        $user = $request->user();
        $totalUser = $room->user->count();
        if ($room->id != $user->room_id) {
            if ($totalUser >= $room->capacity) {
                return response([
                    'message' => 'Room full',
                    'user' => $user->account
                ], 200);
            }
            $user->room_id = $room->id;
            $user->save();
        }
        return response([
            'message' => 'joined',
            'user' => $user->account
        ], 200);
    }
}
