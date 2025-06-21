import { defineStore } from "pinia";
import { ref, computed } from "vue";
import keycloak from "@/plugins/keycloak/keycloak";

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = computed<boolean | undefined>(() => keycloak.authenticated);
    const login = async () => {
        await keycloak.login();
    }
    const logout = async () => {
        await keycloak.logout();
    }
    return {
        isAuthenticated, login, logout
    }
})