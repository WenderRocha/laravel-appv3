<template>
    <AuthenticatedLayout title="Dashboard">
        <template #header>
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 class="text-xl font-semibold leading-tight">
                    Novo Usuário
                </h2>

                <Button :href="route('users.index')" variant="info" class="items-center gap-2 max-w-xs" v-slot="{ iconSizeClasses }">
                    <ArrowCircleLeftIcon aria-hidden="true" :class="iconSizeClasses" />
                    <span>Voltar</span>
                </Button>
            </div>
        </template>

        <div class="p-6 overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-eval-1">
            You're logged in!
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/Authenticated.vue'
import Button from '@/Components/Button.vue'
import { ArrowCircleLeftIcon } from "@heroicons/vue/outline";
</script>
