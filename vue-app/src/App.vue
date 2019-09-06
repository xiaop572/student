<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <div class="header">
      <div class="head-cont">
        <div class="logo">
          <img src="./assets/logo.png" alt />
        </div>
        <div class="nav">
          <router-link tag="li" :to="{name:'home'}">首页</router-link>
          <router-link tag="li" :to="{name:'about'}">关于</router-link>
          <router-link tag="li" :to="{name:'learn'}">学习</router-link>
          <router-link tag="li" :to="{name:'student'}">课程</router-link>
          <router-link tag="li" :to="{name:'community'}">社区</router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
    <router-view name="wenti"></router-view>
  </div>
</template>
<script>
import { baseUrl } from "../env.js";
export default {
  data() {
    return {};
  }
};
</script>
<style>
li {
  float: left;
  list-style: none;
  margin-right: 10px;
}
.active {
  color: blue;
}
</style>
