import Vue from 'vue'
// 入口文件为 src/App.vue 文件 所以要引用
import App from './App'

// 引用路由配置文件  //将对象注入到根实例中，在组件中使用router-view
import router from './router/index'

//样式入口文件
import '@/assets/css/app'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
