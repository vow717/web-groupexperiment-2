<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import Header from './Header.vue'
import Main from './main/index.vue'
</script>
<template>
  <!--返回首页的icon的router-link-->
  <router-link to="/">
    <el-icon size="20"><ArrowLeft /></el-icon>
  </router-link>

  <div class="background">
    <div style="position: relative; width: 80%; margin: 0 auto">
      <Header />
      <Main />
    </div>
  </div>
</template>
<style>
.background {
  background-image: url('@/assets/wkfImgs/background2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100%;
  width: 100%;
}
</style>
