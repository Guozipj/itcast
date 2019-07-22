import Vue from 'vue'
import App from './App.vue'

// 引入样式文件还有文件夹
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入封装好的路由
import router from '@views/router/router.js'
// 引入公共样式
import '@/style/index.less'

// 让vue使用element-ui
Vue.use(Elementui)

Vue.config.productionTip = false

new Vue({
  // 注入
  router,
  render: h => h(App)
}).$mount('#app')
