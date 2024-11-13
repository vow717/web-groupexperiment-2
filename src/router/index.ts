import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/li-wlr',
    component: () => import('@/views/li-wlr/index.vue')
  },
  {
    path: '/she-pcg',
    component: () => import('@/views/she-pcg/index.vue')
  },
  {
    path: '/yue-lqg',
    component: () => import('@/views/yue-lqg/index.vue')
    
  },
  {
    path: '/shu-wkf',
    component: () => import('@/views/shu-wkf/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/shu-wkf/main/Home.vue')
      },
      {
        path: 'lsyy',
        component: () => import('@/views/shu-wkf/main/LsyyView.vue')
      },
      {
        path: 'sxgj',
        component: () => import('@/views/shu-wkf/main/SxgjView.vue')
      },
      {
        path: 'sfjs',
        component: () => import('@/views/shu-wkf/main/SfjsView.vue')
      },
      {
        path: 'pfpl',
        component: () => import('@/views/shu-wkf/main/PfplView.vue')
      },
      {
        path: 'other',
        component: () => import('@/views/shu-wkf/main/OtherView.vue')
      }
    ]
  },
  {
    path: '/shu2-pyh',component: () => import('@/views/shu2-pyh/index.vue'),
    
    children:[
      {path:'home',name:'home',component:()=>import('@/views/shu2-pyh/components/home.vue')},
      {path:'person',name:'person', component:()=>import('@/views/shu2-pyh/components/person.vue')},
      {path:'story',name:'story', component:()=>import('@/views/shu2-pyh/components/story.vue')}
    ]
  },
  {
    path: '/yi-lxy',
    component: () => import('@/views/yi-lxy/index.vue')
  }
]

const router = createRouter({
  // HTML5 Mode。createWebHistory()函数，生产环境下需要web容器完成转发
  // createWebHashHistory()函数仍使用#符号，无需配置
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
