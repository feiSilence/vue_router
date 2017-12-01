import Vue from 'vue'
import VueRouter from 'vue-router'
// 光引用不成，还得使用
Vue.use(VueRouter)

//引入页面模板
import home from '@/page/home'
import document from '@/page/document'
import about from '@/page/about'
import user from '@/page/user'
import noFound from '@/page/404'

//引入子页面模板，子路由配置
import study from '@/page/about/study'
import work from '@/page/about/work'
import hobby from '@/page/about/hobby'
import slider from '@/components/document/slider'

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',  //router-link被激活设置的类名
  scrollBehavior(to,from,savePosition){ // 点击浏览器的前进后退或切换导航触发
    //console.log(to); // 要进入的目标路由对象 要去向哪里
    //console.log(from) // 离开的路由对象  从哪里来
    //console.log(savePosition) // 记录滚动条的坐标 点击前进后退的时候记录值

    //记录滚动条位置
    /*if(savePosition){
      return savePosition;
    }else{
      return {x:0,y:0}
    }*/

    // /document#abc根据hash值定位组件中id为abc的元素
    if( to.hash){
      return {
        selector: to.hash
      }
    }

  },
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/document',
      components: {  //一个页面包含两个router-view，components
        default: document,
        slider: slider
      }
    },
    {
      path: '/about',
      component: about,
      children: [
        {
          path: '', // 默认的子路由  /about
          name: 'About',
          component: study
        },
        {
          path: 'work',  // /work
          name: 'Work',  //aboutWork 用路由name指向路由路径，动态绑定name
          component: work
        },
        {
          path: 'hobby', // /hobby
          name: 'Hobby',
          component: hobby
        }
      ]
    },
    {
      path: '/user/:tip?/:userId?',
      //动态路由设置 /user/vip/1  /user/common/2  /user
      component: user
    }
  ]
})

export default router;
