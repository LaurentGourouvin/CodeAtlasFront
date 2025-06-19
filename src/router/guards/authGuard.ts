import { useAuthStore } from "@/stores/auth";
import type { NavigationGuard, RouteLocationNormalized, RouteLocationNormalizedLoaded, NavigationGuardNext } from "vue-router";

export const authGuard: NavigationGuard = (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {
    const store = useAuthStore();

    if (to.meta.requiresAuth) {
        if (store.isAuthenticated) {
            next();
        } else {
            next({ name: 'login' })
        }
    } else {
        next();
    }
}