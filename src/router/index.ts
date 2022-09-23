import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/index.vue";
import Profile from "../pages/profile.vue";
import Portfolio from "../pages/portfolio.vue";
import Contact from "../pages/contact.vue";


const routes = [
  {
    path: "/",
    name: "IndexPage",
    component: Index,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: Profile,
  },
  {
    path: "/portfolio",
    name: "PortfolioPage",
    component: Portfolio,
  },
    {
    path: "/contact",
    name: "ContactPage",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;