<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class StoreUserFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:50|min:3',

            'email' => [
                'required',
                'email',
                'unique:users'
            ],

            'password' => [
                'required',
                'max:15',
                'min:8',
                'confirmed',
                Rules\Password::defaults()
               
            ],

            'password_confirmation' => [
                'required',
            ]


        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => ' O campo Nome é obrigátorio.',
            'name.min' => ' O campo Nome deve possuir no minimo 3 caracteres.',
            'name.max' => ' O campo Nome deve possuir no máximo 80 caracteres.',
            'name.sstring' => 'O campo Nome deve ser do tipo texto.',

            'email.required' => ' O campo E-mail é obrigátorio.',
            'email.email' => ' O campo E-mail deve ser um E-mail válido.',
            'email.unique' => ' O E-mail informado já está em uso, informe outro por favor.',

            'password.required' => ' O campo Senha é obrigátorio.',
            'password.min' => ' O campo Senha deve possuir no minimo 8 caracteres.',
            'password.max' => ' O campo Senha deve possuir no máximo 15 caracteres.',
            'password.confirmed' => ' As senhas não conferem, verifique e tente novamente.',
            'password_confirmation.required' => ' O campo Confirmar senha é obrigátorio.',
        ];
    }
}
