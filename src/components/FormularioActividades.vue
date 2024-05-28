<template>
  <section class="w-full h-full flex flex-col p-3">
    <div class="flex gap-3 items-center text-gray-500">
      <h2 class="text-3xl font-bold">Bienvenido</h2>
      <i class="pi pi-home" style="font-size: 1.5rem"></i>
    </div>
    <div class="w-full flex justify-end">
      <Button
        label="Nueva Actividad"
        icon="pi pi-plus"
        severity="info"
        raised
        @click="verModal = true"
      />
    </div>

    <Dialog v-model:visible="verModal" modal header="Crear actividad">
      <div class="flex items-center gap-3 mb-3">
        <InputText
          v-model="nombreActividad"
          class="flex-auto"
          autocomplete="off"
          placeholder="Nombre actividad"
        />
      </div>
      <div class="flex items-center gap-3 mb-5">
        <Calendar
          class="w-full"
          v-model="fechaActividad"
          showIcon
          iconDisplay="input"
          placeholder="fecha de entrega"
        />
      </div>

      <div class="flex items-center gap-3 mb-5">
        <Textarea
          class="w-full"
          v-model="descripActividad"
          autoResize
          rows="5"
          cols="30"
        />
      </div>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button type="button" label="Crear" @click="visible = false"></Button>
      </div>
    </Dialog>

    <section
      class="h-full mt-5 flex justify-center items-center border-solid border-2 border-gray-400 rounded-md"
    >
      <ListaActividades />
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

import ListaActividades from "../components/ListaActividades.vue";

const verModal = ref(false);
const nombreActividad = ref("");
const fechaActividad = ref("");
const descripActividad = ref("");
</script>
