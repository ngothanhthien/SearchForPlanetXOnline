<?php

namespace App\Observers;

use App\Models\Room;
use App\Models\User;

class UserObserver
{
    /**
     * Handle the user "created" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public $afterCommit = true;
    public function created(User $user)
    {
        //
    }

    /**
     * Handle the user "updated" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function updated(User $user)
    {
        
    }
    public function updating(User $user){
        if($user->isDirty('room_id')){
            $new_room_id=$user->room_id;
            $old_room_id=$user->getOriginal('room_id');
            if(!is_null($old_room_id)&&strcmp($new_room_id,$old_room_id)!=0){
                $room=Room::find($old_room_id);
                $number_user_in_room=$room->user()->count();
                if($number_user_in_room<=1){
                    $room->delete();
                }
            }
        }
    }
    /**
     * Handle the user "deleted" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function deleted(User $user)
    {
        //
    }

    /**
     * Handle the user "restored" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function restored(User $user)
    {
        //
    }

    /**
     * Handle the user "force deleted" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function forceDeleted(User $user)
    {
        //
    }
}
