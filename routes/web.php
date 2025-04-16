<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('dashboard');
})->name('dashboard');

Route::get('/projects', function () {
    return Inertia::render('projects');
})->name('projects');

Route::get('/resume', function () {
    return Inertia::render('resume');
})->name('resume');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
