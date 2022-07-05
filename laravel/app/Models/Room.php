<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Room extends Model
{
    use HasFactory,HasApiTokens;
    protected $fillable=['name','master_room'];
    function user(){
        return $this->hasMany(User::class);
    }
}
