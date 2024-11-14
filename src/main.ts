//npm install element-plus --save 下个element-plus，是个ui组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//pyh
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import  'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'animate.css'
import 'jquery'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
