import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { getAuth } from 'firebase/auth'
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

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
    },
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/RegisterComponent.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/LoginComponent.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  const currentUser = getAuth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    alert("You need to login first!");
    next('login');
  }
  else if (!requiresAuth && currentUser) next('game');
  else next();
})

export default router;
