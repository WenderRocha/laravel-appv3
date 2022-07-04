<template>
    <AuthenticatedLayout title="Dashboard">
        <template #header>
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 class="text-xl font-semibold leading-tight">
                   Perfil
                </h2>

                <Button :href="route('users.index')" variant="info" class="items-center gap-2 max-w-xs" v-slot="{ iconSizeClasses }">
                    <ArrowCircleLeftIcon aria-hidden="true" :class="iconSizeClasses" />
                    <span>Ver todos</span>
                </Button>
            </div>
        </template>

        <div class="p-6 overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1">
            <div class="grid grid-cols-1">
                <div class="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
  
                    <div class="flex flex-col items-center pb-10 pt-10">
                        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ user.name }}</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">{{ user.email }}</span>

                        <div class="flex flex-col mt-3">
                            <span class="text-md text-gray-600 dark:text-gray-400">
                                <span class="text-gray-800 font-semibold dark:text-gray-400 mr-1">Cadastro:</span> {{ user.created_at }}
                            </span>

                            <span class="text-md text-gray-600 dark:text-gray-400">
                                <span class="text-gray-800 font-semibold dark:text-gray-400 mr-1">Função:</span> Administrador
                            </span>

                            <span class="text-md text-gray-600 dark:text-gray-400">
                                <span class="text-gray-800 font-semibold dark:text-gray-400 mr-1">Plano:</span> Premium
                            </span>
                            <span class="text-md text-gray-600 dark:text-gray-400">
                                <span class="text-gray-800 font-semibold dark:text-gray-400 mr-1">Status:</span>
                                <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Ativo</span>
                            </span>
                        </div>

                        <div class="flex mt-4 space-x-3 lg:mt-6 pt-3">
                            
                            <div class="inline-flex rounded-md shadow-sm" role="group">
                            
                            <Link :href="route('users.edit', user.id)">
                                <button type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                    <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    Editar
                                </button>
                            </Link>

                            <button @click="excluir()" type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-red-900 bg-white rounded-r-md border border-red-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                Apagar
                            </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from '@/Layouts/Authenticated.vue'
import Button from '@/Components/Button.vue'
import { ArrowCircleLeftIcon } from "@heroicons/vue/outline"
import { Link } from '@inertiajs/inertia-vue3'
import { Inertia } from '@inertiajs/inertia'
import Swal from 'sweetalert2'

export default {
    
    name: 'Show',
    components: {
        AuthenticatedLayout, Button, ArrowCircleLeftIcon, Link, Inertia,Swal
    },

    props: {
        user: Object
    },

    methods: {
        excluir() {
            Inertia.delete(`/users/${this.user.id}`, {
                 onBefore: () =>  confirm(`Desea realmente exluir o usuário ${this.user.name} ?`),
                onSuccess: () => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: '<span class="text-lg text-red-700">Usuário deletado com sucesso!<span>',
                        showConfirmButton: false,
                        timer: 2050,
                        heightAuto: false,
                    })
                },
            })
            
        }
    }
}
</script>
