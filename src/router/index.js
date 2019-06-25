import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Index from "@/view/index";
import app7 from "@/view/app7";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      meta: {
        title: "首页"
      }
    },
    {
      path: "/app7",
      name: "app7",
      component: app7,
      meta: {
        title: "app7"
      }
    }
  ]
});
