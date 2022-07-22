import { createRouter, createWebHistory } from 'vue-router'
import EventListView from "../views/EventListView.vue";
import AboutView from "../views/AboutView.vue";
import EventListView2 from '../views/EventListView2.vue'

const routes = [
  {
    path: '/',
    name: "EventList",
    component: EventListView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
