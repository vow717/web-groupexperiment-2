<template>
  <div class="container">
    <!-- 乐艺展示的开篇词 -->
    <h1 class="culture-title">中国六艺之乐，传承千年的艺术</h1>
    <p class="culture-description">
      欢迎探索中国六艺中的“乐”，一种融合音乐、舞蹈、诗歌于一体的艺术形式，承载着中华民族的文化精髓。
    </p>

    <div class="circle-navigation-wrapper">
      <div v-for="(item, index) in arr" :key="index" class="circle-with-nav">
        <!-- 绑定内联样式，以加载背景图片，并为之添加阴影，增加层次感 -->
        <div class="circle"
          :style="{ backgroundImage: 'url(' + item.img + ')', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }"
          @mouseover="goTo(item.src)"></div>
       <router-link :to="`/home/start/${item.src}`" class="nav-text">{{ item.name }}</router-link>

      </div>
    </div>
  </div>

  <button @click="scrollToTop" class="top-button" title="返回顶部">
    <img src="../../../assets/lqg/images/ic_top.png" alt="返回顶部" />
    <!-- 添加文字提示 -->
    <span class="top-text">返回顶部</span>
  </button>

  <router-view />
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

// 初始化路由器实例
const router = useRouter();

const arr = ref([
  { img: "src/assets/lqg/music/1.png", src: "guqin", name: "古琴" },
  { img: "src/assets/lqg/music/2.png", src: "pipa", name: "琵琶" },
  { img: "src/assets/lqg/music/3.png", src: "dizi", name: "笛子" },
  { img: "src/assets/lqg/music/4.png", src: "yueqin", name: "月琴" },
]);

function goTo(path) {
  // 使用 router.push 时，确保路径是相对于当前路由的
  // 由于 guqin 等是 start 的子路由，因此这里需要加上父路由的路径
  router.push(`/yue-lqg/start/${path}`);
}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>

<!-- 此处保留您之前提供的样式，确保样式的一致性和功能的实现 -->

<style scoped>
/* 容器与内部元素布局优化，添加媒体查询以适应响应式设计 */
.circle-navigation-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  padding: 30px;
  margin-bottom: 60px;
}

.circle-with-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(25% - 60px);
}

.circle {
  width: 140px; /* 调整菱形的宽度，也是正方形的边长 */
  height: 140px; /* 调整菱形的高度，也是正方形的边长 */
  background-size: cover;
  transition: transform 0.3s ease;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); /* 创建菱形的剪切路径 */
}

.circle:hover {
  transform: translateY(-40px); /* 鼠标悬浮时向上滑动效果 */
  cursor: pointer;
}

.nav-text {
  font-size: 14px;
  margin-top: 8px;
  cursor: pointer;
  color: #333; /* 暗调颜色提升古朴感 */
  text-shadow: 1px 1px 2px #bbb; /* 文字阴影增加立体感 */
}

@media (max-width: 768px) {
  .circle-with-nav {
    background-color: rgb(32, 39, 46);
    flex-basis: calc(50% - 60px); /* 在小屏幕上展示二列 */
  }
}

.container {
  text-align: center; /* 使得文化标题和描述居中显示 */
}

.culture-title {
  font-size: 4em; /* 增加字号，突出标题 */
  color: #444; /* 文化沉稳的色彩 */
  margin-top: 40px;
  margin-bottom: 1em; /* 与描述之间的间隔 */
}

.culture-description {
  font-size: 1.5em; /* 增加字号，突出标题 */
  color: rgba(68, 68, 68, 0.8); /* 文化描述的半透明色彩展现出一种温润的感觉 */
  line-height: 1.8; /* 行高增加，提升阅读体验 */
  max-width: 1000px; /* 最大宽度限制 */
  margin: 0 auto 3em; /* 上下外间距将标题与展示区分离，更显整洁 */
  padding: 0 20px; /* 左右内间距防止文字紧贴屏幕边缘 */
}

.router{
  width: 100%;
}

/* 返回顶部按钮的样式 */
.top-button {
  position: fixed; /* 固定位置 */
  bottom: 100px; /* 底部距离 */
  right: 50px; /* 右侧距离 */
  width: 50px; /* 按钮宽度 */
  height: 50px; /* 按钮高度 */
  border-radius: 50%; /* 圆形按钮 */
  background: white; /* 背景颜色 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 阴影效果 */
  border: none; /* 无边框 */
  cursor: pointer; /* 鼠标悬停效果 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 图片大小适应按钮 */
.top-button img {
  width: 60px;
  height: 60px;
  margin-top: 20px;
}

.item-description {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
  text-align: center;
}

.top-button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.top-text {
  font-size: 12px;
  margin-top: 19px;
  font-weight: 900;
  color: #ffffff;
}
</style>