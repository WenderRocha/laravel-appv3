<template>
    <AuthenticatedLayout title="Editar Usuário">
        <template #header>
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 class="text-xl font-semibold leading-tight">
                    Editar o Usuário {{ user.name }}
                </h2>

                <div>
                    <Button :href="route('users.index')" variant="info" class="mr-2 items-center gap-2 max-w-xs" v-slot="{ iconSizeClasses }">
                        <ArrowCircleLeftIcon aria-hidden="true" :class="iconSizeClasses" />
                        <span>Ver todos</span>
                    </Button>
                    <Button :href="route('users.show', user.id)" variant="secondary" class="items-center gap-2 max-w-xs" v-slot="{ iconSizeClasses }">
                        <UserCircleIcon aria-hidden="true" :class="iconSizeClasses" />
                        <span>Perfil</span>
                    </Button>
                </div>
            </div>
        </template>

        <div class="p-6 overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1">
            <form @submit.prevent="submit" autocomplete="off">
                <div class="relative z-0 w-full mb-6 group">
                    <input :class="errors.name ? 'border border-red-500' : ''"  type="text" name="name" v-model="userData.name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  autocomplete="off" />
                    <label :class="errors.name ? 'text-red-700' : ''" for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                    <span v-if="errors.name" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span>{{ errors.name }}</span>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input :class="errors.email ? 'border border-red-500' : ''" type="email" name="email" v-model="userData.email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  autocomplete="off" />
                    <label :class="errors.email ? 'text-red-700' : ''" for="email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    <span v-if="errors.email" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span>{{ errors.email }}</span>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input :class="errors.password ? 'border border-red-500' : ''" type="password" name="password" v-model="userData.password" id="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  autocomplete="off" />
                    <label :class="errors.password ? 'text-red-700' : ''" for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Senha</label>
                    <span v-if="errors.password" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span>{{ errors.password }}</span>
                </div>
                <div class="relative z-0 w-full mb-6 group mt-5">
                    <input :class="errors.password_confirmation ? 'border border-red-500' : ''" type="password" name="password_confirmation" v-model="userData.password_confirmation" id="password_confirmation" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  autocomplete="off" />
                    <label :class="errors.password_confirmation ? 'text-red-700' : ''" for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmar senha</label>
                    <span v-if="errors.password_confirmation" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span>{{ errors.password_confirmation }}</span>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Nivel de permissão</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Usuário</option>
                    <option>Administrador</option>
                    <option>Suporte</option>
                    </select>
                </div>

                <Button variant="info" class="items-center gap-2 max-w-xs">
                    <span>Editar</span>
                </Button>
            </form>
        </div>
    </AuthenticatedLayout>
</template>

<script>
    import AuthenticatedLayout from '@/Layouts/Authenticated.vue'
    import Button from '@/Components/Button.vue'
    import { ArrowCircleLeftIcon, UserCircleIcon } from "@heroicons/vue/outline";
    import { Inertia } from '@inertiajs/inertia'
    import Swal from 'sweetalert2'
    import { InertiaProgress } from '@inertiajs/progress'
    

    export default {

        name: 'Create',

        props: {

            user: Object,
            errors: Object  
        },

        components: {
            AuthenticatedLayout,
            Button,
            ArrowCircleLeftIcon,
            UserCircleIcon,
            Inertia,
            Swal,
            InertiaProgress
        },

        data() {

            return {

                userData: {
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password,
                    password_confirmation: ''
                }
            
            }
        },

        methods: {

            submit() {

                Inertia.put(`/users/${this.user.id}`, this.userData, {

                    onBefore: (visit) => {},
                    onStart: (visit) => {},
                    onProgress: (progress) => {},
                    onSuccess: (page) => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: '<span class="text-lg text-cyan-700">Atualizado com sucesso!<span>',
                            showConfirmButton: false,
                            timer: 2000,
                            heightAuto: false,
                        })
                    },
                    onError: (errors) => {},
                    onCancel: () => {},
                    onFinish: visit => {},
                })
            }
        }

    }
</script>



