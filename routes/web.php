<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RegistryCardController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/rsvp', function () {
        return Inertia::render('Rsvp');
    })->name('rsvp');

    Route::get('/home', function () {
        return Inertia::render('Welcome');
    })->name('home');

    Route::get('/reservations', [RegistryCardController::class, 'index'])->name('registry.index');
    Route::post('/addreservation', [RegistryCardController::class, 'store'])->name('registry.store');
    Route::patch('/updatereservation/{id}', [RegistryCardController::class, 'update'])->name('registry.update');
    //Route::get('/registry', function() {
    //    return 'Registry route is working';
    //});


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
