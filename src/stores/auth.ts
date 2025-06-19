import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const authenticate = ref<boolean>(false);
    const isAuthenticated = computed<boolean>(() => authenticate.value);
    const setIsAuthenticated = (payload: boolean) => {
        authenticate.value = payload;
    }
    return {
        isAuthenticated, setIsAuthenticated
    }
})