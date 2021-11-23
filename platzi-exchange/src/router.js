import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'

Vue.use(Router) // Vue.use la que permite ir agregando plugins

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      name: 'error',
      component: Error,
    },
  ],
})
