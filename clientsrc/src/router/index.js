import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../Pages/Home.vue";
// @ts-ignore
import Profile from "../Pages/Profile.vue";
// @ts-ignore
import BugDetails from "../Pages/BugDetails";
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: authGuard,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/bugDetails/:bugId",
    name: "BugDetails",
     // @ts-ignore
    component: () => import(/*webpackChunkName: "bug-details"*/ '../Pages/BugDetails.vue'),
    //component: BugDetails,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
