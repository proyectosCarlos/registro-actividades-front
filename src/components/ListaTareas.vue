<template>
  <section class="h-full w-1full p-3 bg-slate-100 text-gray-700">
    <h2 class="text-xl font-semibold mb-3">Mis actividades</h2>
    <section class="flex flex-col gap-3">
      <div
        class="p-3 bg-white rounded-md cursor-pointer hover:bg-gray-100 flex justify-between"
      >
        <span class="flex gap-2 items-center">
          <Checkbox v-model="actCompletadas" :binary="true" />
          Completadas</span
        >

        <Badge value="2"></Badge>
      </div>

      <div
        class="p-3 bg-white rounded-md cursor-pointer hover:bg-gray-100 flex justify-between"
      >
        <span class="flex gap-2 items-center">
          <Checkbox v-model="actPendientes" :binary="true" />
          Pendientes</span
        >

        <Badge value="4" severity="info"></Badge>
      </div>

      <div
        class="p-3 bg-white rounded-md cursor-pointer hover:bg-gray-100 flex justify-between"
      >
        <span class="flex gap-2 items-center">
          <Checkbox v-model="actCanceladas" :binary="true" />
          Canceladas</span
        >

        <Badge value="3" severity="danger"></Badge>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

const actCompletadas = ref(false);
const actCanceladas = ref(false);
const actPendientes = ref(false);
</script>
