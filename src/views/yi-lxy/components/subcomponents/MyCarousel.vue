<template>
    <div class="carousel-container">
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          class="carousel-slide"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <img :src="slide" :alt="'Slide ' + (index + 1)" />
          <div class="carousel-caption">{{ captions[index] }}</div>
        </div>
      </div>
      <button @click="prevSlide" class="carousel-button prev">Prev</button>
      <button @click="nextSlide" class="carousel-button next">Next</button>
    </div>
  </template>
   
  <script setup>
  import { ref } from 'vue';
   
  const slides = ref([
    'src/views/yi-lxy/assets/轮播11.png',
    'src/views/yi-lxy/assets/轮播12.jpg',
    'src/views/yi-lxy/assets/轮播13.png',
    // 添加更多图片 URL...
  ]);
   
  const captions = ref([
    '这是第一张图片的叙述。dasdsadasdsadadadsadasdsadasd',
    '这是第二张图片的叙述。',
    '这是第三张图片的叙述。',
    // 添加更多叙述...
  ]);
   
  const currentIndex = ref(0);
   
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  };
   
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  };
  </script>
   
  <style scoped>
  .carousel-container {
    position: relative;
    width: 100%;
    height: 400px; /* 假设您想要的高度 */
    overflow: hidden;
  }
   
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%; /* 确保轨道高度与容器相同 */
  }
   
  .carousel-slide {
    flex: 0 0 100%; /* 每个幻灯片占据容器的全部宽度 */
    height: 100%; /* 每个幻灯片的高度与容器相同 */
    box-sizing: border-box;
    display: flex;
    flex-direction: column; /* 垂直布局图片和叙述 */
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中（图片会填满宽度，所以这里主要是为叙述居中） */
    padding: 20px; /* 添加内边距以留出叙述的空间 */
  }
   
  .carousel-slide img {
    width: 100%;
    height: auto; /* 保持图片的宽高比 */
    display: block; /* 移除图片底部的间隙 */
  }
   
  .carousel-caption {
    margin-top: 10px; /* 图片和叙述之间的间距 */
    text-align: center; /* 叙述居中 */
    color: white; /* 假设背景较暗，使用白色文字 */
    font-size: 16px; /* 设定字体大小 */
    /* 可以根据需要添加更多样式 */
  }
   
  /* 按钮样式保持不变 */
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
   
  .carousel-button.prev {
    left: 10px;
  }
   
  .carousel-button.next {
    right: 10px;
  }
  </style>