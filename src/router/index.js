import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Tugas1View from '@/views/Tugas1View.vue'
import Tugas2View from '@/views/Tugas2View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Portal Akademik AI | Universitas & Blog Tugas'
    }
  },
  {
    path: '/tugas-1',
    name: 'tugas-1',
    component: Tugas1View,
    meta: {
      title: 'Tugas 1: Sinergi AI & Kognisi Manusia | Blog Kecerdasan Buatan'
    }
  },
  {
    path: '/tugas-2',
    name: 'tugas-2',
    component: Tugas2View,
    meta: {
      title: 'Tugas 2: Teknik Pencarian & Optimasi AI | Blog Kecerdasan Buatan'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 90
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
