<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Models\User;

class RoleAndPermissionSeeder extends Seeder
{
    public function run()
    {
        // Create the permission
        $permission = Permission::create(['name' => 'create-registry-item']);

        // Create the Admin role and assign the permission
        $adminRole = Role::create(['name' => 'Admin']);
        $adminRole->givePermissionTo($permission);

        // Assign role to a user
        $user = User::find(1); // Assuming you want to assign it to the first user, adjust accordingly

        if ($user) {
            $user->assignRole('Admin');
        }
    }
}
