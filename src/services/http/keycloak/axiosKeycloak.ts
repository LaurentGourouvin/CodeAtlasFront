import defaultAxiosInstance from "@/plugins/axios";

export const axiosKeycloakService = {
    disableAccount(userId: string) {
        return defaultAxiosInstance.put(`/keyclaok/users/${userId}/disable`);
    }
}