<script setup>
import { ref, watch, reactive, nextTick } from 'vue';

const textKey = ref(0);
const imgUrl = ref('src/assets/lqg/art/a1.jpg'); 
const title = ref('海陵岛');
const content = ref('');
const arr = ref([
  {
    src: 'src/assets/lqg/art/a1.jpg', // 这里假设一个图片路径，可根据实际情况修改
    title: '六乐之《云门大卷》',
    srcImg: 'src/assets/lqg/art/a1.jpg', // 这里假设一个详细图片路径，可根据实际情况修改
    content: '《云门大卷》是六乐之一，是古代用于祭祀天神的乐舞。它有着极高的艺术价值和文化内涵，其舞蹈动作和音乐旋律庄严肃穆，气势恢宏，充分展现出对上天的敬畏之情，体现了古代人们对天神的尊崇和祈求庇佑的愿望，是中华民族古代乐舞文化中的瑰宝。'
  },
  {
    src: 'src/assets/lqg/art/a2.jpg',
    title: '六乐之《咸池》',
    srcImg: 'src/assets/lqg/art/a2.jpg',
    content: '《咸池》作为六乐中的重要组成部分，主要用于祭地祇。在乐舞表演中，通过独特的音乐节奏和舞蹈编排，传达出与大地的亲近与感恩之意。其音乐风格古朴典雅，舞蹈动作可能与大地的承载、孕育万物等意象相关，体现了古代人们对土地的依赖和崇敬。'
  },
  {
    src: 'src/assets/lqg/art/a3.jpg',
    title: '六乐之《大韶》',
    srcImg: 'src/assets/lqg/art/a3.jpg',
    content: '《大韶》是六乐里极具特色的乐舞，相传为舜时代的乐舞。它具有优美的旋律和典雅的舞蹈动作，展现出一种和谐、美好的意境。在古代文化中，它体现了舜时期的政治清明、社会和谐，被视为德治之乐，对后世乐舞文化产生了深远影响。'
  },
  {
    src: 'src/assets/lqg/art/a4.jpg',
    title: '六乐之《大夏》',
    srcImg: 'src/assets/lqg/art/a4.jpg',
    content: '《大夏》是歌颂大禹治水功绩的乐舞。在表演形式上，可能通过舞蹈动作展现大禹治水过程中的艰辛与伟大，如开渠疏水、抗洪救灾等场景。其音乐节奏有力，体现了大禹治水所展现出的坚韧不拔精神和伟大功绩，是古代乐舞中具有历史叙事意义的重要作品。'
  },
  {
    src: 'src/assets/lqg/art/a5.jpg',
    title: '六乐之《大濩》',
    srcImg: 'src/assets/lqg/art/a5.jpg',
    content: '《大濩》是为纪念商汤伐桀而创作的乐舞。它在音乐和舞蹈上体现出了战争的激烈与胜利的喜悦，同时也展现了商汤的仁德。舞蹈动作可能包含了战争场面和庆祝胜利的元素，音乐则烘托出庄重而欢快的氛围，具有重要的历史文化价值。'
  },
  {
    src: 'src/assets/lqg/art/a6.jpg',
    title: '六乐之《大武》',
    srcImg: 'src/assets/lqg/art/a6.jpg',
    content: '《大武》是表现周武王伐纣的乐舞。整个乐舞充满了战斗的气势和胜利的豪情，舞蹈动作模拟了战争场景，如列阵、冲锋等，音乐节奏强烈，体现了周武王的英勇和正义之师的威武，是古代军事题材乐舞的杰出代表，同时也彰显了西周建立的伟大意义。'
  }
]);

const state = reactive({
  currentIndex: 0,
  totalVisibleImages: 4,
  displayImages: [],
});

const updateDisplayImages = () => {
  state.displayImages = [];
  for (let i = 0; i < state.totalVisibleImages; i++) {
    state.displayImages.push(arr.value[(state.currentIndex + i) % arr.value.length]);
  }
  imgUrl.value = state.displayImages[0].srcImg;
  title.value = state.displayImages[0].title;
  content.value = state.displayImages[0].content;
};

updateDisplayImages();

watch(() => state.currentIndex, updateDisplayImages);

watch([title, content], () => {
  textKey.value++;
});

watch([title, content], () => {
  nextTick().then(() => {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => {
      el.style.animation = 'none';
      nextTick().then(() => {
        el.style.animation = '';
      });
    });
  });
});

const navigateImages = (direction) => {
  const totalImages = arr.value.length;
  if (direction === 'next') {
    state.currentIndex = (state.currentIndex + 1) % totalImages;
  } else if (direction === 'prev') {
    state.currentIndex = (state.currentIndex - 1 + totalImages) % totalImages;
  }
  updateDisplayImages();
};

const setImageAsFirst = (index) => {
  state.currentIndex = (state.currentIndex + index) % arr.value.length;
  updateDisplayImages();
};

</script>

<template>
  <div class="body">
    <transition name="fade" mode="out-in">
      <img :src="imgUrl" :key="imgUrl" style="width: 100%; height: 100%;">
    </transition>
    <div class="content">
      <h1 :key="`title-${textKey}`" style="font-size: 60px; color: #ffffff;" class="fade-in-up">{{ title }}</h1>
      <p :key="`content-${textKey}`" style="color: #ffffff;" class="fade-in-up">{{ content }}</p>
    </div>
    <div class="images-container">
      <div v-for="(image, index) in state.displayImages" :key="index" class="image" @click="setImageAsFirst(index)" :class="{ 'zoomed': index === 0 }">
        <img :src="image.src">
      </div>
    </div>
    <div class="button">  
      <button @click="navigateImages('prev')" class="nav-button">
        <img src="../../../assets/lqg/art/left.png">
      </button>
      <button @click="navigateImages('next')" class="nav-button">
        <img src="../../../assets/lqg/art/right.png">
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease forwards;
}

.fade-in-up {
  opacity: 0; /* 开始时不可见 */
  animation: fadeInUp 0.8s ease forwards; /* 动画名称，时长，缓动函数，让动画保持结束状态 */
  animation-delay: 0.5s; /* 延迟动画开始的时间 */
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter-from, .fade-leave-to {
    opacity: 0.8;
  }

  .body {
      height:88vh;
      width: 100%;
      position: relative;
  }

  
  .images-container {
      width: 40%;
      height: 30%;
      display: flex;
      position: absolute; 
      top: 30%;
      right: 5%;
      transition: transform 0.5s ease; /* 添加滑动动画 */
  }

  .button {
  position: absolute;
  top: 66%;
  left: 57%; /* 将按钮水平居中 */
  transform: translateX(-50%); /* 通过变换确保完全居中 */
  display: flex;
  gap: 20px; /* 设置按钮之间的间隔 */
  padding: 10px; /* 增加一点内边距，使得容器更加宽敞 */
  align-items: center;
  justify-content: center; /* 确保按钮内的内容居中 */
}

  .nav-button {
    cursor: pointer;
    width: 60px; /* 适当调整大小，确保足够的点击区域 */
    height: 60px;
    border-radius: 50%; /* 完全圆角，形成圆形按钮 */
    border: none;
    background-image: linear-gradient(45deg, #ffffff, #00aeff); /* 优雅的渐变背景 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* 给按钮添加一些淡淡的阴影，突出层次感 */
    display: flex;
    align-items: center;
    justify-content: center; /* 保证图片居中 */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* 平滑的变换和阴影过渡 */
  }

  .nav-button:hover {
    transform: scale(1.1); /* 鼠标悬停时放大 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 增强阴影效果突出按钮 */
  }

  .nav-button img {
    width: 20px; /* 调整图标大小，确保视觉上的和谐 */
    height: 20px;
  }
  .image {
      height: 10%;
      margin: 0 10px;
      transition: transform 1s ease; /* 添加缩放动画 */
  }

    .image-card {
    background-color: white; /* 卡片的背景色 */
    border-radius: 10px; /* 卡片边角的圆角 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 卡片的阴影效果 */
    overflow: hidden; /* 保证图片圆角边缘不溢出 */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* 动画平滑过渡 */
  }

  .image-card:hover {
    transform: translateY(-5px); /* 鼠标悬浮时卡片上移 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* 鼠标悬浮时阴影增强 */
  }


  .content{
    width: 450px;
    height: 300px;
    color: #000000;
    font-weight: 700;
    font-family: '楷体', 'KaiTi', serif;
    position: absolute; 
    top: 25%;
    left: 13%;
  }

  .content p{
    margin: 15px 5px;
    line-height: 25px;
    font-size: 18px;
  }

  .zoomed {
      transform: scale(1.2); /* 放大效果 */
      margin-right: 35px;
      z-index: 999; /* 确保放大后的图片高于其他图片 */
  }

  .images-container img {
    height: 1000%;
    width: 180px;
    border-radius: 4%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out; 
}

img:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

  .nav-button {
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
  }

  .nav-button img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  /* 增强图片边框及阴影，提升视觉层次感 */
.images-container img {
    width: 180px;
    border-radius: 4%; /* 使图片边框更加圆润 */
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); /* 加大阴影增强立体感 */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* 平滑的变换和阴影过渡 */
}

/* 提升图片悬停时的放大效果与阴影效果 */
.images-container img:hover {
    transform: scale(1.05); /* 轻微放大 */
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.4); /* 加深阴影，增强视觉效果 */
}

/* 调整内容显示风格，提升阅读体验 */
.content {
    color: #333; /* 修改为更柔和的颜色，增强阅读舒适度 */
    padding-left: 20px; /* 增加一点内边距，让文字不会紧贴边缘 */
    font-size: 18px; /* 细微调整文字大小以适应各屏幕 */
    transition: color 0.3s ease; /* 变换颜色的过渡效果 */
}

/* 导航按钮细微优化，提升点击响应感 */
.nav-button:hover {
    transform: scale(1.1); /* 稍微放大响应用户悬停 */
    background-image: linear-gradient(45deg, #2193b0, #6dd5ed); /* 更生动的背景色 */
}
</style>