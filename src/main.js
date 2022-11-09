import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'

// font awesome
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

//element-plus
import "../node_modules/element-plus/dist/index.css"
import 'element-plus/dist/index.css'

// import ccss sendiri
import "./style.css"
createApp(App).use(router).use(ElementPlus).mount('#app')
