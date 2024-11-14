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
    component: () => import('@/views/yue-lqg/index.vue'),
    
    component: () => import('@/views/yue-lqg/index.vue'),
    children: [
      {
        path: '', component: () => import('@/views/yue-lqg/Home.vue'),
        children: [
          {
            path: '',
            component: () => import ('@/views/yue-lqg/Subcomponents/Introduction.vue')
         },
          {
             path: 'introduction',
             component: () => import ('@/views/yue-lqg/Subcomponents/Introduction.vue')
          },
          {
            path: 'develop',
            component:() => import ('@/views/yue-lqg/Subcomponents/Develop.vue')
          },
          {
            path: 'start',
            component: () => import('@/views/yue-lqg/Subcomponents/tools.vue'),
            children: [
              {
                path: 'guqin',
                component: () => import('@/views/yue-lqg/Subcomponents/music/guqin.vue')
                 
              },
              {
                path: 'pipa',
                component: () => import('@/views/yue-lqg/Subcomponents/music/pipa.vue')
              },
              {
                path: 'dizi',
                component: () => import('@/views/yue-lqg/Subcomponents/music/dizi.vue')
              },
              {
                path: 'yueqin',
                component: () => import('@/views/yue-lqg/Subcomponents/music/yueqin.vue')
              }
              
             ]
          },
          {
            path: 'history',
            component:() => import('@/views/yue-lqg/Subcomponents/History.vue')
          },
          {
             path: '/history/:id', 
             name: 'historyDetail',
              component: () => import('@/views/yue-lqg/Subcomponents/HistoryDetail.vue')
          },
          {
            path: 'art',
              component:() => import('@/views/yue-lqg/Subcomponents/Art.vue')
          }

        ]
      }, 
    ]
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
