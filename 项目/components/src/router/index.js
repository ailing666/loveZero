import Vue from "vue";
import VueRouter from "vue-router";
import Table from "../views/Table.vue";
import Form from "../views/Form.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Form",
    component: Form,
  },
  {
    path: "/table",
    name: "Table",
    component: Table,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
