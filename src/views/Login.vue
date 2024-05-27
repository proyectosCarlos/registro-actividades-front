<template>
  <section class="w-screen h-screen flex justify-center items-center">
    <Card class="w-10/12 md:w-4/12">
      <template #title>
        <div class="flex justify-center text-5xl text-green-400">
          <i class="pi pi-users"></i>
        </div>
      </template>
      <template #content>
        <h1 class="text-xl md:text-3xl text-orange-500 font-bold text-center">
          Aplicacion para registro de actividades
        </h1>

        <div
          class="w-100 flex flex-col gap-3 p-3 rounded-md border-2 shadow-dm"
        >
          <InputText
            type="text"
            size="large"
            v-model="login"
            placeholder="Ingresa tu correo"
            aria-autocomplete="false"
          />
          <InputText
            type="password"
            size="large"
            v-model="pass"
            placeholder="Ingresa tu contraseña"
            aria-autocomplete="false"
          />
          <router-link class="w-100">
            <Button label="Ingresar" class="w-full"
          /></router-link>
        </div>
      </template>
    </Card>
  </section>
</template>

<script setup>
import { ref } from "vue";

const login = ref("");
const pass = ref("");
</script>
