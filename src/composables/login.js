import { ref, onMounted, onUnmounted } from "vue";
import router from "@/router";
import axios from "axios";

export function useLogin() {
  const baseUrl = import.meta.env.VITE_API_URL;

  const usuario = ref("");
  const password = ref("");

  const logearUsuario = async () => {
    try {
      const response = await axios.get(`${baseUrl}usuarios`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // router.push({ name: "panel-principal" });

  return {
    usuario,
    password,
    logearUsuario,
  };
}
