<template>
  <div class="h-screen w-full flex items-center justify-center">
    <Card class="w-8/12">
      <template #title>Registro de usuarios</template>
      <template #content>
        <div class="flex flex-col w-full items-center gap-3">
          <InputText
            class="w-10/12"
            type="text"
            v-model="nombreUsuario"
            placeholder="Nombre"
          />
          <InputText
            class="w-10/12"
            type="text"
            v-model="nombreUsuario"
            placeholder="Apellido"
          />
          <InputText
            class="w-10/12"
            type="password"
            v-model="nombreUsuario"
            placeholder="Contraseña"
            au
          />
          <div class="w-full flex justify-center gap-5">
            <Button label="Registrar" severity="warning" @click="registrar" />
            <Button label="Volver" severity="info" />
          </div>
        </div>
      </template>
    </Card>
    <Toast />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
const toast = useToast();

const nombreUsuario = ref("");

const registrar = () => {
  toast.add({
    severity: "success",
    summary: "Correcto",
    detail: "El usuario se ha registrado con exito",
    life: 3000,
  });
};
</script>
