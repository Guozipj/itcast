import Vue from 'vue'
// 引入路由，路由映射组件
import VueRouter from 'vue-router'

// 引入你的组件
import Login from '@views/login.vue'

// 创建登录组件
var router = new VueRouter({
  routes: [
    //   设置路由重定向
    {
      name: 'default',
      path: '/',
      redirect: { name: 'login' }
    },
    {
      name: 'login',
      path: 'login',
      component: Login
    }
  ]
})

// 让vue使用路由
Vue.use(VueRouter)

// 暴露路由让app.js接收
export default router
