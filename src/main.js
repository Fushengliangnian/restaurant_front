import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'vant/lib/index.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'weui'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus, {locale: zhCn,})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.mount('#app')

