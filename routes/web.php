<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegistryCardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/home', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/registry', function () {
    return Inertia::render('Registry/View');
})->middleware(['auth', 'verified'])->name('registry.view');

// In your routes/web.php or routes/api.php
Route::get('/item-types', function () {
    return response()->json(App\Enums\ItemType::getValues());
});


Route::middleware('auth')->group(function () {
    Route::get('/registry', [RegistryCardController::class, 'index'])->name('registry.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
