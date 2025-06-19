import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Home/Home.vue")
    },
    {
      path: "/thank-you",
      name: "thank-you",
      component: () => import("@/views/pages/Ressources.vue")
    }
  ],
})

export default router
