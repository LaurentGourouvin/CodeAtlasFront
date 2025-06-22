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
    },
    {
      path: "/explorer",
      name: "explorer",
      component: () => import('@/views/pages/UnderConstruction.vue')
    },
    {
      path: "/skill-map",
      name: 'skillmap',
      component: () => import('@/views/pages/UnderConstruction.vue')
    },
        {
      path: "/blog",
      name: 'blog',
      component: () => import('@/views/pages/UnderConstruction.vue')
    },
    {
      path: "/under-construction",
      name: "UnderConstruction",
      component: () => import('@/views/pages/UnderConstruction.vue')
    },
    {
      path: "/NotFound",
      name: "NotFound",
      component: () => import("@/views/pages/NotFound.vue")
    }
  ],
})

router.beforeEach(authGuard);

export default router
