import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import TodoList from "./views/TodoList.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // alias: "/company-info"
      component: About
    },
    {
      path: "/todo-list",
      name: "todo-list",
      component: TodoList
    }
  ]
});
