import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/li-wlr',
    component: () => import('@/views/li-wlr/index.vue'),
    children:[
      {path:'',component: ()=>import('@/views/li-wlr/components/首页.vue')}
    ]

  },

  {
    path: '/she-pcg',
    component: () => import('@/views/she-pcg/index.vue'),

    children: [
      {
        path: 'people',
        name: 'people',
        component: () => import('@/views/she-pcg/components/people.vue')
      }
    ]

  },

  {
    path: '/yue-lqg',
    component: () => import('@/views/yue-lqg/index.vue'),

    children: [
      {
        path: '',
        component: () => import('@/views/yue-lqg/Home.vue'),
        children: [
          {
            path: '',
            component: () => import('@/views/yue-lqg/Subcomponents/Introduction.vue')
          },
          {
            path: 'introduction',
            component: () => import('@/views/yue-lqg/Subcomponents/Introduction.vue')
          },
          {
            path: 'develop',
            component: () => import('@/views/yue-lqg/Subcomponents/Develop.vue')
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
            component: () => import('@/views/yue-lqg/Subcomponents/History.vue')
          },
          {
            path: '/history/:id',
            name: 'historyDetail',
            component: () => import('@/views/yue-lqg/Subcomponents/HistoryDetail.vue')
          },
          {
            path: 'art',
            component: () => import('@/views/yue-lqg/Subcomponents/Art.vue')
          }
        ]
      }
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
    path: '/shu2-pyh',
    component: () => import('@/views/shu2-pyh/index.vue'),

    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/shu2-pyh/components/home.vue')
      },
      {
        path: 'person',
        name: 'person',
        component: () => import('@/views/shu2-pyh/components/person.vue')
      },
      {
        path: 'story',
        name: 'story',
        component: () => import('@/views/shu2-pyh/components/story.vue')
      }
    ]
  },

  {
        path: '/yi-lxy',
        component: () => import('@/views/yi-lxy/Index.vue'),
        children:[
          { path: 'login', component: () => import ('@/views/yi-lxy/components/Login.vue') },
          { 
            path: 'home', 
            component: () => import ('@/views/yi-lxy/components/Home.vue'),
            children: [
              { 
                path: 'users', 
                component: () => import ('@/views/yi-lxy/components/subcomponents/MyUsers.vue'),
                children: [
                  {
                    path: ':id',
                    name:'details',
                    component: () => import ('@/views/yi-lxy/components/user/MyUserDetail.vue'), props: true
                  }
                ]
              },
              { 
                path: 'rights', 
                component: () => import ('@/views/yi-lxy/components/subcomponents/MyRights.vue') 
              },
              { 
                path: 'goods', 
                component: () => import ('@/views/yi-lxy/components/subcomponents/MyGoods.vue') 
              },
              { 
                path: 'orders', 
                component: () => import ('@/views/yi-lxy/components/subcomponents/MyOrders.vue') 
              },
              { 
                path: 'settings', 
                component: () => import ('@/views/yi-lxy/components/subcomponents/MySettings.vue') 
              },
              { 
                path: 'menu', 
                component: () => import ('@/views/yi-lxy/components/subcomponents/MyMenu.vue') 
              },
              // { 
              //   path: 'users/:id', 
              //   component: () => import ('./components/user/MyUserDetail.vue'), props: true 
              // }
            ] 
          }
        ]
    
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
