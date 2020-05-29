import Vue from "vue";
import VueRouter from "vue-router";
import DebugView from "@/views/DebugView";
import LandingView from "@/views/LandingView";
import DashboardView from "@/views/main/DashboardView";
import CalendarView from "@/views/main/CalendarView";
import CommunityView from "@/views/main/CommunityView";
import SettingsView from "@/views/main/SettingsView";
import SigninView from "@/views/auth/SigninView";
import SignupView from "@/views/auth/SignupView";
import PasswordResetView from "@/views/auth/PasswordResetView";
import ResultView from "@/views/auth/ResultView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/debug/",
    name: "DebugView",
    component: DebugView
  },
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
  },
  {
    path: "/register/",
    name: "SignupView",
    component: SignupView
  },
  {
    path: "/password-reset/",
    name: "PasswordResetView",
    component: PasswordResetView
  },
  {
    path: "/result/:page",
    name: "ResultView",
    component: ResultView,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
