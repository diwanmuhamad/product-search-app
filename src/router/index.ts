import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
   
  },
  {
    path: '/product/:id',
    component: ProductView,
   
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const isAuthenticated = true

router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    !isAuthenticated && to.name !== 'home'
  ) {
    // redirect the user to the login page
    return { name: 'home' }
  }
})
router.afterEach((to, from, failure) => {
  if (!failure) sendToAnalytics(to.fullPath)
})




export default router
function sendToAnalytics(fullPath: string) {
  throw new Error('Function not implemented.')
}

