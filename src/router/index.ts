import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from './guards/authGuard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Home/Home.vue")
    },
    {
      path: "/ressources",
      name: "ressources",
      component: () => import("@/views/pages/Ressources.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/pages/Profile.vue"),
      meta: {
        requiresAuth: true,
      }
    }
  ],
})

router.beforeEach(authGuard);

export default router
