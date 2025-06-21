import { defineStore } from "pinia";
import { computed } from "vue";
import keycloak from "@/plugins/keycloak/keycloak";

export const useUserStore = defineStore('user', () => {
    const userInfo = computed(() => keycloak?.tokenParsed || null)

    const name = computed(() => {
        return userInfo.value?.name ?? 'Utilisateur'
    })
    return {
        userInfo, name
    }
})