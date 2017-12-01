<template>
  <div>
    关于我
    <hr>
    <ul class="nav">

      <!--<router-link to="/about" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link to="/about/work" tag="li">
        <a>work</a>
      </router-link>
      <router-link to="/about/hobby" tag="li">
        <a>hobby</a>
      </router-link>-->

      
      <router-link :to="{name:'About'}" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link :to="{name:'Work'}"  tag="li">
        <a>work</a>
      </router-link>
      <router-link :to="{name:'Hobby'}"  tag="li">
        <a>hobby</a>
      </router-link>
    </ul>
    <hr>

    <router-view></router-view>

  </div>
</template>

<script>
    export default {
      watch:{
        $route(){
            // 路径发生变化，$route会重新赋值，监控了这个属性，会执行这个函数
          console.log(this.$route)
        }
      },
      created(){
        // 渲染这个组件会调用一次这个生命周期函数
        // 复用这个组件，这个函数不会再次被调用了
        // 地址一旦发生变化，$route会重新生成一个路由信息对象
        console.log(this.$route)
      }
    }
</script>
<style>

</style>
