import "./assets/styles/index.css";
import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App";
import Projects from "./components/Projects";
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Resume from './components/Resume';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "home", path: "/", component: Home },
    { name: "contact", path: "/contact", component: Contact },
    { name: "projects", path: "/projects", component: Projects },
    { name: "blog", path: "/blog", component: Blog },
    { name: "resume", path: "/resume", component: Resume },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
