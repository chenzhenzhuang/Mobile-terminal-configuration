import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(to,from)
  next()
})
export default router
