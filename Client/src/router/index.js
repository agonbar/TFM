import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Detail from '@/components/Detail'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    return next('/');
  }
  return next();
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    return next('/home');
  }
  return next();
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      beforeEnter: ifNotAuthenticated
    },
  ]
})
