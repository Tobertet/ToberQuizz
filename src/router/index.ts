import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/:countryCode",
    component: () => import("@/views/ChallengeListView.vue"),
  },
  {
    path: "/:countryCode/:challengeNumber",
    component: () => import("@/views/ChallengeView.vue"),
  },
  {
    path: "/stats/:countryCode/:challengeNumber",
    component: () => import("@/views/ChallengeStatisticsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
