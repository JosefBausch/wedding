<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegistryCardController;
use App\Http\Controllers\RsvpController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\AdminDashboardController;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/home', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

Route::get('/item-types', function () {
    return response()->json(App\Enums\ItemType::getValues());
});

Route::middleware(['auth', 'can:create-registry-item'])->group(function () {
    Route::post('/addregistryitem', [RegistryCardController::class, 'store'])->name('registry.store');
    Route::delete('/deleteregistryitem/{id}', [RegistryCardController::class, 'destroy'])->name('registry.destroy');
    Route::get('/admin/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');
    Route::post('/admin/rsvp/store', [AdminDashboardController::class, 'store'])->name('admin.rsvp.store');
    Route::put('/admin/rsvp/{id}', [AdminDashboardController::class, 'update']);
    Route::delete('/admin/rsvp/delete/{id}', [RsvpController::class, 'destroy'])->name('rsvp.destroy');
    Route::get('/admin/rsvp/export-csv', [AdminDashboardController::class, 'exportCsv'])->name('admin.rsvp.exportCsv');
});

Route::middleware('auth')->group(function () {
    Route::get('/registry', [RegistryCardController::class, 'index'])->name('registry.index');
    Route::post('/registry/{id}/update', [RegistryCardController::class, 'update'])->name('registry.update');

    Route::patch('/rsvp/update/{code}', [RsvpController::class, 'update'])->name('invite.update');
    Route::get('/rsvp/check/{code}', [RsvpController::class, 'check'])->name('invite.check');
    Route::get('/rsvp', [RsvpController::class, 'index'])->name('invite.index');
    Route::post('/rsvp/respond', [RsvpController::class, 'respond'])->name('invite.respond');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
