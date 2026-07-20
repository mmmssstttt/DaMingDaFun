import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import CasePage from './pages/CasePage.vue'
import MemberPage from './pages/MemberPage.vue'

const router = createRouter({
  history: createWebHashHistory('/DaMingDaFun/'),
  routes: [
    { path: '/', component: HomePage },
    { path: '/case/:id', component: CasePage, props: true },
    { path: '/member/:id', component: MemberPage, props: true },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
