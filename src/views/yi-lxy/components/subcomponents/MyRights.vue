<template>
  <div class="carousel">
    <div class="carousel-inner" :style="{ 'transform': `translateX(-${currentSlide * 100}%)` }">
      <div class="carousel-item" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.title" class="carousel-image" />
      </div>
    </div>
    <button class="carousel-prev" @click="prevSlide">上一张</button>
    <button class="carousel-next" @click="nextSlide">下一张</button>
  </div>
<div class="culture-container">
  <div class="culture-section"  style="background-image: url('src/views/yi-lxy/assets/马背景.jpg');  box-shadow: inset 10px 10px 5px rgba(0, 0, 0, 0.5);">
    <h2>马术文化</h2>
    <p>
      马术是一种古老的体育活动，起源于军事训练和战争。随着时间的推移，马术逐渐发展成为一项艺术和运动。马术文化不仅体现在精湛的骑术上，还包含了与马匹建立深厚情感联系的过程。
    </p>
    <h3>历史沿革</h3>
    <p>
      马术的历史可以追溯到古代文明时期，当时马匹被用于战争、运输和农业。随着时间的推移，不同地区形成了独特的马术风格，如欧洲的古典马术、阿拉伯的马术、以及中国的蒙古马术。
    </p>
    <h3>马术种类</h3>
    <ul>
      <li>盛装舞步：骑手和马匹表演一系列预先编排的动作，展现优雅和协调。</li>
      <li>障碍赛：骑手和马匹需要跨越一系列障碍物，考验速度和技巧。</li>
      <li>三日赛：结合了盛装舞步、障碍赛和越野赛，是马术运动的综合体现。</li>
    </ul>
    <h3>马术精神</h3>
    <p>
      马术强调人与马的和谐共处，尊重和理解马匹。骑手需要具备耐心、勇气和精准的操控能力。马术精神也体现在对马匹福利的关注，确保马匹的健康和幸福。
    </p>  
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        { title: 'Slide 1', image: 'src/views/yi-lxy/assets/马术壁画1.jpg'},
        { title: 'Slide 2', image: 'src/views/yi-lxy/assets/马术壁画2.jpg'},
        { title: 'Slide 3', image: 'src/views/yi-lxy/assets/马术壁画3.jpg'},
        { title: 'Slide 4', image: 'src/views/yi-lxy/assets/马术壁画4.jpg'},
        // ...更多图片
      ],
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide >= this.slides.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide <= 0) {
        this.currentSlide = this.slides.length - 1;
      } else {
        this.currentSlide--;
      }
    },
  },
};
</script>

<style scoped>
/* 全局样式调整 */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}

/* 轮播图样式调整 */
.carousel {
  position: relative;
  overflow: hidden;
  height: 80vh; /* 降低高度，以便为下方内容留出空间 */
  margin-bottom: 30px; /* 增加底部间距 */
  perspective: 1000px;
}

.carousel-inner {
  display: flex;  
  width: calc(100% + 20px); /* 增加宽度，使得两侧轮播图部分露出 */
  transform-style: preserve-3d; /* 保持不变，启用3D变换 */
  transition: transform 0.5s ease-in-out; /* 保持不变，为变换添加过渡效果 */
}

.carousel-item {
  flex: 0 0 auto; /* 确保每个轮播图项都有固定宽度 */
  width: calc(100% - 20px); /* 减少轮播图项的宽度，与.carousel-inner宽度配合 */
  margin: 0 10px; /* 添加外边距，使得轮播图之间有空间 */
  transform: translateZ(0) scale(0.95); /* 初始化时稍微缩小图片，为动态效果做准备 */
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out; /* 为变换和阴影添加过渡效果 */
  position: relative; /* 为阴影定位做准备 */
  z-index: 1; /* 确保图片在阴影之上 */
}

.carousel-image {
  height: 100%;
  width: 100%;
  display: block;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
  object-fit: cover; /* 覆盖整个容器，同时保持图片的宽高比 */
  object-position: center 1/3; /* 图片上移1/3部分 */
}
.carousel-item:hover {
  transform: translateZ(50px) scale(1.05); /* 鼠标悬停时，图片向前移动并稍微放大 */
}

.carousel-item:hover .carousel-image {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); /* 鼠标悬停时，增加阴影深度和模糊度 */
}

.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5); /* 更深的背景色 */
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 16px;
  color: #fff;
  transition: background-color 0.3s ease;
}
/* 动态阴影效果 */
.carousel-item::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 10px; /* 阴影位置稍微向下 */
  left: 0;
  background: rgba(0, 0, 0, 0.2); /* 阴影颜色 */
  border-radius: 15px; /* 阴影圆角与图片一致 */
  transform: rotateX(90deg) translateZ(-50px); /* 将阴影旋转并沿X轴移动 */
  transform-origin: 50% 100%; /* 设置旋转中心 */
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* 为变换和透明度添加过渡效果 */
  opacity: 0; /* 初始时不显示阴影 */
}
.carousel-item:hover::after {
  transform: rotateX(0deg) translateZ(0); /* 鼠标悬停时，阴影回到正常位置 */
  opacity: 1; /* 鼠标悬停时，显示阴影 */
}
.carousel-prev:hover,
.carousel-next:hover {
  background-color: rgba(0, 0, 0, 0.7); /* 更深的悬停背景色 */
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}
/* 文化部分样式调整 */
.culture-section {
  max-width: 1200px;
  margin: 0 auto; /* 水平居中，可以根据需要调整或移除 */
  padding: 10px;
  text-align: justify;
  margin-left: 0; /* 初始化，确保没有之前的左外边距 */
  /* 移除transform属性，以避免垂直偏移 */
  background-size: cover; /* 覆盖整个元素 */
  background-position: center; /* 背景图片居中 */
  background-repeat: no-repeat; /* 不重复背景图片 */
  margin-top: 10px; /* 添加顶部边距，与.carousel对齐 */
}
.culture-section h2 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.culture-section h3 {
  font-size: 1.5em;
  margin-top: 1em;
  margin-bottom: 0.5em;
}

.culture-section p {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 1em;
}

.culture-section ul {
  list-style-type: disc;
  padding-left: 20px;
}

.culture-section li {
  font-size: 1em;
  margin-bottom: 0.5em;
}
</style>