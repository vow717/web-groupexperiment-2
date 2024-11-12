<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const menus = [
  { name: '首页', path: '/shu-wkf' },
  { name: '历史渊源', path: '/shu-wkf/lsyy' },
  { name: '书写工具与材料板块', path: '/shu-wkf/sxgj' },
  { name: '书法鉴赏', path: '/shu-wkf/sfjs' },
  { name: '评分评论', path: '/shu-wkf/pfpl' },
  { name: '其他', path: '/shu-wkf/other' }
]
const route = useRoute()
const activeIndexR = ref('')

watch(
  route,
  () => {
    const p = menus.find((mn) => mn.path == route.path)
    activeIndexR.value = p?.path ?? ''
  },
  { immediate: true }
)
</script>
<template>
  <div style="position: relative; width: 100%; display: flex">
    <!--logo-->

    <img src="@/assets/wkfImgs/logo.png" alt="Logo" style="width: 20%; height: 120px" />
    <el-menu
      :default-active="activeIndexR"
      mode="horizontal"
      router
      style="width: 80%; display: flex; justify-content: center">
      <template v-for="(menu, index) of menus" :key="index">
        <el-menu-item :index="menu.path" style="padding: 30px">
          {{ menu.name }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<style></style>
