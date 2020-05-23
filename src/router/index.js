import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "@/views/LandingView";
import DashboardView from "@/views/DashboardView";
import CalendarView from "@/views/CalendarView";
import CommunityView from "@/views/CommunityView";
import SettingsView from "@/views/SettingsView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: LandingView
  },
  {
    path: "/dashboard/",
    name: "DashboardView",
    component: DashboardView
  },
  {
    path: "/calendar/",
    name: "CalendarView",
    component: CalendarView
  },
  {
    path: "/community/",
    name: "CommunityView",
    component: CommunityView
  },
  {
    path: "/settings/",
    name: "SettingsView",
    component: SettingsView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
