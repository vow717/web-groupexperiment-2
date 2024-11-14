//npm install element-plus --save 下个element-plus，是个ui组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//pyh
//运行前npm install





const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
