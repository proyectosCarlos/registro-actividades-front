<template>
  <section class="w-screen h-screen flex flex-col">
    <header class="h-auto w-full bg-white shadow-md py-3">
      <BarraNavegacion />
    </header>
    <main class="w-full w-screen grow grid grid-cols-4 gap-4 py-1">
      <aside class="col-span-1 bg-white-500 shadow-md"><ListaTareas /></aside>
      <section class="col-span-3"><FormularioActividades /></section>
    </main>
  </section>
</template>

<script setup>
import BarraNavegacion from "../components/BarraNavegacion.vue";
import ListaTareas from "../components/ListaTareas.vue";
import FormularioActividades from "../components/FormularioActividades.vue";
</script>
