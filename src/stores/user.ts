import { defineStore } from "pinia";
import { computed } from "vue";
import keycloak from "@/plugins/keycloak/keycloak";
import type { KeycloakTokenParsed } from "keycloak-js";

export const useUserStore = defineStore('user', () => {
    const userInfo = computed((): KeycloakTokenParsed|null => keycloak?.tokenParsed || null)
    console.log(userInfo.value)
    const name = computed<string>(() => {
        return userInfo.value?.name ?? 'Utilisateur'
    })
    const roles = computed<string[]>(() => {
        return userInfo.value?.realm_access?.roles ?? [];
    })
    return {
        userInfo, name, roles
    }
})