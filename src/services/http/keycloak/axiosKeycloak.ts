import defaultAxiosInstance from "@/plugins/keycloak/axios";

export const axiosKeycloakService = {
    disableAccount(userId: string) {
        return defaultAxiosInstance.put(`/keyclaok/users/${userId}/disable`);
    }
}