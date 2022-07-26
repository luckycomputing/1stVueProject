import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/components/home-page";
import signUp from "@/components/sign-up";
import logIn from "@/components/log-in";
import addRes from "@/components/add-res";
import updateRes from "@/components/update-res";

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
  {
    name: "addRes",
    component: addRes,
    path: "/add-restaurant",
  },
  {
    name: "updateRes",
    component: updateRes,
    path: "/update-restaurant",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
