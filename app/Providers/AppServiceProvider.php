<?php

namespace App\Providers;

use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('App\Repositories\UserRepositoryInterface', 'App\Repositories\UserRepository');

        $this->app->bind('App\Repositories\UserRepositoryInterface', function() {
            return new UserRepository(new User());
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
