<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <header class="header">
      <my-header></my-header>
    </header>
    
    <!-- 右侧内容主体区域 -->
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import MyHeader from './subcomponents/MyHeader.vue';
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  flex: 0 0 auto; /* 不放大，不缩小，固定高度 */
  background: #ffffff;
}

.content {
  flex: 1 1 auto; /* 可以放大，可以缩小，自适应高度 */
  padding: 20px; /* 可根据需要调整内边距 */
}

.footer {
  flex: 0 0 auto; /* 不放大，不缩小，固定高度 */
  background: #f0f2f5; /* 底部背景颜色，可根据需要调整 */
}
</style>
