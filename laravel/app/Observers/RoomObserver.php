<?php

namespace App\Observers;

use App\Events\RoomCreated;
use App\Events\RoomDeleted;
use App\Models\Room;

class RoomObserver
{
    /**
     * Handle the room "created" event.
     *
     * @param  \App\Models\Room  $room
     * @return void
     */
    public $afterCommit = true;
    public function created(Room $room)
    {
        RoomCreated::dispatch($room);
    }

    /**
     * Handle the room "updated" event.
     *
     * @param  \App\Models\Room  $room
     * @return void
     */
    public function updated(Room $room)
    {
        //
    }

    /**
     * Handle the room "deleted" event.
     *
     * @param  \App\Models\Room  $room
     * @return void
     */
    public function deleted(Room $room)
    {
        RoomDeleted::dispatch($room);
    }

    /**
     * Handle the room "restored" event.
     *
     * @param  \App\Models\Room  $room
     * @return void
     */
    public function restored(Room $room)
    {
        //
    }

    /**
     * Handle the room "force deleted" event.
     *
     * @param  \App\Models\Room  $room
     * @return void
     */
    public function forceDeleted(Room $room)
    {
        //
    }
}
