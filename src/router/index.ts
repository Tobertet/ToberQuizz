import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ChallengeView from "@/views/ChallengeView.vue";
import ChallengeListView from "@/views/ChallengeListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/:countryCode",
    component: ChallengeListView,
  },
  {
    path: "/:countryCode/:challengeNumber",
    component: ChallengeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
