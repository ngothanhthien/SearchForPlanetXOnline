<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'account' => "user1",
            'password' => Hash::make('096421'),
            'level'=>2
        ]);
        DB::table('users')->insert([
            'account' => "user2",
            'password' => Hash::make('853204'),
            'level'=>2
        ]);
        DB::table('users')->insert([
            'account' => "user3",
            'password' => Hash::make('278331'),
            'level'=>2
        ]);
        DB::table('users')->insert([
            'account' => "admin",
            'password' => Hash::make('242104'),
            'level'=>0
        ]);
    }
}
