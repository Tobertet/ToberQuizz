import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import ChallengeView from "@/views/ChallengeView.vue";
import ChallengeList from "@/views/ChallengeList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:countryCode",
    name: "ChallengeList",
    component: ChallengeList,
  },
  {
    path: "/:countryCode/:challengeIndex",
    name: "Challenge",
    component: ChallengeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
