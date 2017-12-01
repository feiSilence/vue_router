<template>
  <div id="app">

    <div class="nav-box">
      <ul class="nav">
        <router-link to="/" exact tag="li" event="mouseover">
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <li>
          <router-link :to="{path:'/document#abc'}" event="click" active-class="activeClass">document</router-link>
        </li>
        <li>
          <router-link to="/about" event="mouseover">about</router-link>
        </li>
        <li>
          <router-link to="/user" event="click">user</router-link>
        </li>
      </ul>
    </div>

    <router-view name="slider"></router-view>

    <router-view class="center"></router-view>

  </div>
</template>

/*页面导航，router-link声明式导航，会自动监听该标签，router-vier路由视窗*/

<script>
export default {
  name: 'app',
  data(){
      return {
          index: '/home'
      }
  }
}
</script>

<style>

</style>
