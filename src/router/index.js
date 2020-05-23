import Vue from "vue";
import VueRouter from "vue-router";
import LandingView from "@/views/LandingView";
import DashboardView from "@/views/DashboardView";
import CalendarView from "@/views/CalendarView";
import CommunityView from "@/views/CommunityView";
import SettingsView from "@/views/SettingsView";
import SigninView from "@/views/SigninView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingView",
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
  },
  {
    path: "/signin/",
    name: "SigninView",
    component: SigninView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
