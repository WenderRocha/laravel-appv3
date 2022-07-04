<?php

namespace App\Services;

use Illuminate\Support\Facades\Hash;
use App\Repositories\UserRepositoryInterface;

class UserService
{
    public function __construct(
        private UserRepositoryInterface $repository
    ){}

    public function store($data)
    {
        return $this->repository->store([
            'name' => $data->name,
            'email' => $data->email,
            'password' => Hash::make($data->password)
        ]);
    }

    public function getAll()
    {
        return  $this->repository->getAll();
    }

    public function get(int $id)
    {
        return $this->repository->get($id);
    }

    public function update($request, $id)
    {
        $user = $this->get($id);

        if(is_null($user)) {
            return redirect()->route('users.index');
        }

        $data =  $request->only('name', 'email');

        if($request->password) {
            $data['password'] = Hash::make($request->password);
        }

        return $this->repository->update($data, $id);
    }

    public function destroy(int $id)
    {

        $user = $this->get($id);

        if(is_null($user)) {
            return redirect()->route('users.index');
        }

        return $this->repository->destroy($id);
    }
}