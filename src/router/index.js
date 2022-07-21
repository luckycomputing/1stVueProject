import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/components/home-page";
import signUp from "@/components/sign-up";
import logIn from "@/components/log-in";

const routes = [
  {
    name: "HomePage",
    component: homePage,
    path: "/",
  },
  {
    name: "signUp",
    component: signUp,
    path: "/sign-up",
  },
  {
    name: "logIn",
    component: logIn,
    path: "/log-in",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
