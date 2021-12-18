import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Startscreen',
    component: function () {
      return import('../views/Startscreen.vue')
    }
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: function () {
      return import('../views/Tutorial.vue')
    }
  },
  {
    path: '/game',
    name: 'Game',
    component: function () {
      return import('../views/Game.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
