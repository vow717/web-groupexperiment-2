<template>
    <div class="layout-header-wrapper">
        <div class="layout-header-container">
            <div class="layout-header-left">
                <img class="layout-header-left-img" src="../../../assets/lqg/video/vue.svg" alt="">
                <h4 class="layout-header-left-title">古代六艺——乐</h4>
            </div>
            <div class="layout-header-center"> <!-- 新增居中容器 -->
                <my-aside></my-aside>
            </div>
            <div class="layout-header-right">
                <el-button type="primary" round @click="onLogout">退出</el-button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router'
import MyAside from '../Subcomponents/MyAside.vue'; // 引入 MyAside 组件

const router = useRouter()
const onLogout = () => {
    router.push('/')
}
</script>

<style scoped>
.layout-header-wrapper {
    background-image: url('../../../assets/lqg/video/1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: auto; /* 根据内容自动调整高度 */
}

.layout-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px; 
    padding: 0 16px;
    background-color: rgba(255, 255, 255, 0.8);
    position: relative;
    z-index: 1;
}

.layout-header-left {
    display: flex;
    align-items: center;
}

.layout-header-left-title {
    color: black;
    margin-left: 10px;
}

/* 确保 my-aside 的样式应用 */
.my-aside {
    display: flex;
    align-items: center;
    margin: 0 2px; /* 添加左右间距 */
}
</style>
