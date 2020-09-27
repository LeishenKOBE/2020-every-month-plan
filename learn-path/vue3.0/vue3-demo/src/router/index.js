import { createRouter, createWebHistory } from "vue-router";

import TodayPage from "@/views/Today";
import TomorrowPage from "@/views/Tomorrow";
import WeekPage from "@/views/Week";
import MonthPage from "@/views/Month";
import YearPage from "@/views/Year";

const routes = [
  {
    path: "/",
    name: "today",
    component: TodayPage,
  },
  {
    path: "/tomorrow",
    name: "tomorrow",
    component: TomorrowPage,
  },
  {
    path: "/week",
    name: "week",
    component: WeekPage,
  },
  {
    path: "/month",
    name: "month",
    component: MonthPage,
  },
  {
    path: "/year",
    name: "year",
    component: YearPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
