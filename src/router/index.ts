import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ChallengeView from "@/views/ChallengeView.vue";
import ChallengeListView from "@/views/ChallengeListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/:countryCode",
    name: "ChallengeList",
    component: ChallengeListView,
  },
  {
    path: "/:countryCode/:challengeNumber",
    name: "Challenge",
    component: ChallengeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
