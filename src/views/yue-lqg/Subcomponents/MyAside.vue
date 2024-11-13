<template>
  <el-menu class="horizontal-nav" mode="horizontal" :default-active="$route.path">
    <el-menu-item index="/yue-lqg/introduction">
      <router-link to="/yue-lqg/introduction">乐的介绍</router-link>
    </el-menu-item>
    <el-menu-item index="/yue-lqg/develop">
      <router-link to="/yue-lqg/develop">乐的发展</router-link>
    </el-menu-item>
    <el-menu-item index="/yue-lqg/start">
      <router-link to="/yue-lqg/start">乐的工具</router-link>
    </el-menu-item>
    <el-menu-item index="/yue-lqg/history">
      <router-link to="/yue-lqg/history">历史时期</router-link>
    </el-menu-item>
    <el-menu-item index="/yue-lqg/art" :ellipsis="false">
      <router-link to="/yue-lqg/art">六乐</router-link>
    </el-menu-item>
    <el-menu-item index="#" :ellipsis="false">
      <router-link to="#" class="menu-link">联系我们</router-link> <!-- 新增的菜单项 -->
    </el-menu-item>
  </el-menu>
</template>

<script setup>
// 这里可以添加相关逻辑，如果有的话，目前为空
</script>

<style scoped>
.horizontal-nav {
  background: transparent; /* 设置背景颜色为透明 */
  flex-grow: 1; /* 使其填满剩余空间 */
}

.horizontal-nav .el-menu-item {
  margin: 0 10px; /* 设置导航项之间的间距 */
  position: relative; /* 为伪元素定位 */
}

.horizontal-nav .el-menu-item a {
  text-decoration: none; /* 消除下划线 */
  color: black; /* 设置字体颜色 */
  padding: 5px 0; /* 为字体添加上下内边距 */
}

.horizontal-nav .el-menu-item:hover a::after {
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  bottom: 0; /* 横线位置 */
  width: 0; /* 初始宽度为0 */
  height: 2px; /* 横线高度 */
  background-color: black; /* 横线颜色 */
  transition: width 0.3s ease, left 0.3s ease; /* 动画效果 */
}

.horizontal-nav .el-menu-item:hover a::after {
  width: 100%; /* 鼠标悬浮时横线宽度为100% */
  left: 0; /* 从中间向外延伸 */
}

/* 确保所有链接的样式一致 */
.menu-link {
  text-decoration: none; /* 消除下划线 */
  color: black; /* 设置字体颜色 */
  padding: 5px 0; /* 为字体添加上下内边距 */
}
</style>
