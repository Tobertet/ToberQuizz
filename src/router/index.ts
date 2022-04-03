import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ChallengeView from "@/views/ChallengeView.vue";
import ChallengeStatisticsView from "@/views/ChallengeStatisticsView.vue";
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
  {
    path: "/stats/:countryCode/:challengeNumber",
    component: ChallengeStatisticsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
