<?php

use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::delete('/users/{id}', [UserController::class, 'destroy'])->middleware(['auth', 'verified'])->name('users.destroy');
Route::put('users/{id}', [UserController::class, 'update'])->middleware(['auth', 'verified'])->name('users.update');
Route::get('users/{îd}/edit', [UserController::class, 'edit'])->middleware(['auth', 'verified'])->name('users.edit');
Route::get('/users', [UserController::class, 'index'])->middleware(['auth', 'verified'])->name('users.index');
Route::get('users/create', [UserController::class, 'create'])->middleware(['auth', 'verified'])->name('users.create');
Route::post('/users', [UserController::class, 'store'])->middleware(['auth', 'verified'])->name('users.store');
Route::get('/users/{id}', [UserController::class, 'show'])->middleware(['auth', 'verified'])->name('users.show');

















































Route::get('/components/buttons', function () {
    return Inertia::render('Components/Buttons');
})->middleware(['auth', 'verified'])->name('components.buttons');

require __DIR__ . '/auth.php';
