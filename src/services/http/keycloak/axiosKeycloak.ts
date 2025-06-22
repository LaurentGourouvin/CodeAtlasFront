import defaultAxiosInstance from "@/plugins/axios";
import type { AxiosResponse } from "axios";

export const axiosKeycloakService = {
    disableAccount(userId: string|undefined): Promise<AxiosResponse> {
        return defaultAxiosInstance.post(`/users/${userId}/desactivate`);
    }
}