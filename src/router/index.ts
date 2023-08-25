import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "base",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BaseView.vue"),
      children: [
        {
          path: "/",
          name: "Dashboard",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/dashboard/DashboardPage.vue"),
        },
        {
          path: "/campaign",
          name: "Campaign",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/campaign/CampaignPage.vue"),
        },
        {
          path: "/message",
          name: "Message",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/message/MessagePage.vue"),
        },
        {
          path: "/facebook",
          name: "Facebook",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/facebook/FacebookPage.vue"),
        },
        {
          path: "/account",
          name: "Account",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/account/AccountPage.vue"),
        }
      ]
    },
    {
      path: "/sign-in",
      name: "login",
      component: () => import("../views/LoginView.vue")
    }
  ]
})

export default router