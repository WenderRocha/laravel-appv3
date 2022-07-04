<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

interface UserRepositoryInterface
{
    public function __construct(Model $model);
    public function store(array $data);
    public function getAll();
    public function get(int $id);
    public function update(Array $data, $id);
    public function destroy(int $id);
    public function paginate(int $qtd = 15);
}