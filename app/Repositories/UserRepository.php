<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

class UserRepository implements UserRepositoryInterface
{
    public function __construct(
        protected Model $model
    ){}

    public function store(array $data)
    {
        return $this->model->create($data);
    }

    public function getAll()
    {
        return  $this->model->all();
    }

    public function get(int $id)
    {
        return $this->model->find($id);
    }

    public function update(array $data, $id)
    {
        return $this->model->find($id)->update($data);
    }

    public function destroy(int $id)
    {
        return $this->model->find($id)->delete();
    }
}