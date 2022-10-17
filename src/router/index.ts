import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import WeekView from "../views/WeekView.vue";
import TasksView from "../views/TasksView.vue";
import BasicTaskView from "../views/BasicTaskView.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: WeekView,
  },
  {
    path: "/tasks",
    name: "tasks",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-laded when the route is visited.
    component: TasksView,
  },
  {
    path: "/basic-tasks",
    name: "basic-tasks",
    component: BasicTaskView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
