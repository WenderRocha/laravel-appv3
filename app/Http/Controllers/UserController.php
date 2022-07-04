<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Services\UserService;
use App\Http\Requests\StoreUserFormRequest;
use App\Http\Requests\UpdateUserFormRequest;

class UserController extends Controller
{

    public function __construct(
        private UserService $service
    ){}

    public function index()
    {
        $users = $this->service->paginate(10);
        return Inertia::render('User/Index', ['users' => $users]);
    }

    public function create()
    {
        return Inertia::render('User/Create');
    }

    public function store(StoreUserFormRequest $request)
    {
        $this->service->store($request);
        return  redirect()->route("users.index");
    }

    public function show(int $id)
    {
        return Inertia::render('User/Show', [
            'user' => $this->service->get($id)
        ]);
    }

    public function edit(int $id)
    {
        $user = $this->service->get($id);

        if(is_null($user)) {
            return redirect()->route('users.index');
        }

        return Inertia::render('User/Edit', ['user' => $user]);
    }

    public function update(UpdateUserFormRequest $request, int $id)
    {
        $this->service->update($request, $id);
        return redirect()->route('users.edit', $id);
    }

    public function destroy($id)
    {
        $this->service->destroy($id);
        return redirect()->route('users.index');
    }
}
