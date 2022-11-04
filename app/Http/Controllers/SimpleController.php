<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class SimpleController extends Controller
{
    public function getAll() {
        $users = User::all();
        return $users;
    }
}
