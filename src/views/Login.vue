<template>
  <section class="w-screen h-screen flex justify-center items-center">
    <section
      class="w-10/12 md:w-10/12 lg:w-9/12 h-4/5 bg-white/30 backdrop-blur-3xl shadow-md rounded-lg p-2"
    >
      <div
        class="h-full grid grid-cols-1 md:grid-cols-2 grid-rows-1 rounded-lg"
      >
        <div class="imagen rounded-lg hidden md:flex"></div>

        <div
          class="flex flex-col justify-center items-center text-gray-500 gap-3"
        >
          <h1 class="text-3xl">¡Hola de nuevo! <span>&#128075;</span></h1>

          <form action="" class="w-10/12 flex flex-col gap-2">
            <InputText
              size="large"
              type="text"
              v-model="usuario"
              autocomplete="off"
              placeholder="Ingresa tu correo"
            />
            <InputText
              size="large"
              type="Password"
              v-model="password"
              autocomplete="off"
              placeholder="Ingresa tu contraseña"
            />

            <Button
              label="Ingresar"
              severity="warning"
              @click="logearUsuario"
            />
          </form>

          <span class="flex gap-1"
            >No tienes una cuenta?
            <router-link class="font-bold" to="/registro"
              >Registrate</router-link
            ></span
          >
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { useLogin } from "@/composables/login.js";

const { usuario, password, logearUsuario } = useLogin();
</script>

<style scoped>
.imagen {
  background-image: url("https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}
</style>
