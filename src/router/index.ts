import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Header,
  },
  {
    path: "/about",
    name: "About",
    component: Footer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
