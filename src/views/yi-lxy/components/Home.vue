<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <my-header></my-header>
    <!-- 主体区域 -->
    <div class="home-main-box">
      <!-- 左侧边栏区域 -->
      <my-aside></my-aside>
      <!-- 右侧内容主体区域 -->
      <div class="home-main-body">
        <!-- 路由的占位符 -->
       
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
 
<script setup>
// 头部区域组件
import MyHeader from './subcomponents/MyHeader.vue'
// 左侧边栏组件
import MyAside from './subcomponents/MyAside.vue'
</script>
 
<style lang="less" scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
 
.home-container {
  display: flex;
  flex-direction: column;
  flex: 1; /* 让容器占据所有可用空间 */
  .home-main-box {
    display: flex;
    flex: 1; /* 让主体盒子占据所有可用空间 */
    .home-main-body {
      padding: 15px;
      flex: 1; /* 让内容主体占据所有剩余空间 */
    }
  }
}
 
/* 如果需要，可以为 my-header 和 my-aside 设置固定高度或最大高度 */
/* 例如：.my-header { height: 60px; } .my-aside { width: 200px; } */
</style>
