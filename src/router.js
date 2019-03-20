import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import CreateAvatar from './views/CreateAvatar.vue'
import PromptPage from './views/PromptPage.vue'
import Climate from './views/Climate.vue'
import Population from './views/Population.vue'
import Gravity from './views/Gravity.vue'
import Time from './views/Time.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/createavatar',
      name: 'createavatar',
      component: CreateAvatar
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/prompt',
      name: 'prompt',
      component: PromptPage,
      children: [
        // Weather will be rendered inside PromtPage's <router-view>
        { path: '/climate', component: Climate },
        { path: '/population', component: Population },
        { path: '/gravity', component: Gravity },
        { path: '/time', component: Time },
        { path: '/result', component: Result },
  ]
  }
]
})
