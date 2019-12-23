<?php

use App\User;
use Illuminate\Database\Seeder;

class users extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $data = [];
        
        for ($i = 1; $i <= 1 ; $i++) {
            array_push($data, [
                'name' => 'Juan Dela Cruz',
                'email' => 'test@example.com',
                'password' => bcrypt('123456'),
                'role'     => 10,
                'bio'      => 'test user',
            ]);
        }
        
        User::insert($data);
    }
}
