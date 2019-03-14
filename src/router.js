import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import PromptPage from './views/PromptPage.vue'
import Climate from './views/Climate.vue'
import CreateAvatar from './views/CreateAvatar.vue'

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
  ]
  }
]
})
