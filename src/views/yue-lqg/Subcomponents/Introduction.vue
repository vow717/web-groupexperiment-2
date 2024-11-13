
<script setup>
import { ref } from 'vue'
// 为每个图片资源增加一个title属性，用于显示文字内容，并加入介绍性文字与底部图片资源
const arr = ref([
  {src: 'src/assets/lqg/images/p1.png', title: '“乐也者，情之不可变者也”'},
  {src: 'src/assets/lqg/images/p2.png', title: '"乐主和同，则远近皆合"'},
  { src: 'src/assets/lqg/images/p3.png', title: '"感于物而动，故形于声"'},
  { src: 'src/assets/lqg/images/p4.png', title: '"乐，五声八音总名"'}
])

const Imgs = ref([
  { id: '1', img:'src/assets/lqg/images/imgUrl/t1.jpg'},
  { id: '2', img:'src/assets/lqg/images/imgUrl/t2.jpg'},
  { id: '3', img:'src/assets/lqg/images/imgUrl/t3.jpg'},
  { id: '4', img:'src/assets/lqg/images/imgUrl/t4.jpg'},
  { id: '5', img:'src/assets/lqg/images/imgUrl/t5.jpg'},
  { id: '6', img:'src/assets/lqg/images/imgUrl/t6.jpg'},
  { id: '7', img:'src/assets/lqg/images/imgUrl/t7.jpg'},
  { id: '8', img:'src/assets/lqg/images/imgUrl/t8.jpg'},
])
const carouselImages = ref([
  { src: 'src/assets/lqg/images/b1.jpg' },
  { src: 'src/assets/lqg/images/b2.jpg' }, // 添加更多图片
  { src: 'src/assets/lqg/images/b3.jpg' }
]);


</script>

<template>
  <div class="overall">
    <!-- 背景图 -->
  <el-carousel height="550px">
      <el-carousel-item v-for="(item, index) in carouselImages" :key="index">
        <img :src="item.src" class="background" />
      </el-carousel-item>
    </el-carousel>
    <!-- 圆形图 -->
    <div class="container">
      <div class="circle-container">
        <div v-for="item in arr" :key="item.src" class="circle-wrapper">
          <div class="circle">
            <img :src="item.src" class="image"/>
          </div>
          <!-- 圆形图片下方的标题 -->
          <div>{{ item.title }}</div>
          <!-- 圆形图片下方的文字介绍 -->
        </div>
      </div>
    </div>
    <div style="height: 350px; margin-bottom: 100px; margin-left: 50px;">
        <div class="image-card">
          <img style="width: 100%;height: 100%; " src="../../../assets/lqg/images/p5.png" alt="">
        </div>
        <div class="bottom-description">
          <h2 style="margin-bottom: 15px;">乐之简历</h2>
          <p>指《云门大卷》、《咸池》、《大韶》、《大夏》、《大濩》、《大武》六套乐舞。</p>
          <p>正如同《礼记·乐记》记载的那样，

“清明象天，广大象地，终始象四时,周旋象风雨,，五色成文而不乱，八风从律而不奸，百度得数而有常。大小相成,终始相生,倡和清浊,迭相为径。故乐行而志清,礼修而行成，耳目聪明，血气和平，移风易俗，天下皆宁。”</p>
          <p>孔子认为：一个国家要想和谐、稳固，必合乎礼、正乎乐。</p>
        </div>
      </div>
      <img src="../../../assets/lqg/images/p6.png" class="background1">
      <div class="dishs">
        <span style="margin-left: 60px; font-size: 30px;">Welcome to yue</span>
        <el-divider />
        <div class="todish">
            <div class="dsih image-card1" v-for="item in Imgs" @click="btn(item.id)">
                <img :src="item.img">
            </div>
        </div>
    </div>
  </div>
</template>


<style scoped>

.container{
  margin-bottom: 100px;
}
.overall {
  width: 100%;
}
.background {
  width: 100%;
  height: 550px; /* 设置高度为500px */
  object-fit: fill; /* 保持图片比例 */
}

/* 圆形图和标题的样式 */
.circle-wrapper {
  text-align: center; /* 使文字内容居中 */
  margin: 10px; /* 设置间距 */
  display: flex; /* 使用flex布局 */
  flex-direction: column; /* 子元素垂直排列 */
  align-items: center; /* 子元素水平居中对齐 */
  font-size: 20px;
}

.circle-container {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.circle .image { 
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.description {
  margin-top: 10px; /* 添加介绍文字的上边距 */
}

.circle:hover {
  transform: scale(1.1);
}

/* 底部图片的样式 */
.bottom-images {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* 与圆形图的底部间距 */
}

.bottom-image {
  width: 30%; /* 控制底部图片的宽度，根据三张图片并排显示来设定 */
  margin: 0 5px; /* 设置图片间的间隔 */
  border-radius: 10px; /* 给图片添加圆角效果 */
}

/* 底部图片上方的文字介绍样式 */
.bottom-description {
  width: 55%;
  height: 100%;
  float: right;
  margin-right: 100px;
  font-size: 1.8em; /* 调整文字大小 */
  color: #333; /* 文字颜色 */
}

.bottom-description p{
  text-align: left;
  margin: 10px;
}

/* 卡片容器样式，赋予背景及间距 */
.card-container {
    background: #f2f2f2; /* 浅灰色背景，简洁风格 */
    border-radius: 10px; /* 圆角边框，增添柔和触感 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 轻微阴影，立体感强 */
    overflow: hidden; /* 隐藏溢出，确保内部图片不破坏形状 */
    width: 90%; /* 卡片宽度，根据需要调整 */
    margin: 20px auto; /* 上下外边距20px，居中显示 */
    text-align: center; /* 文字居中 */
  }

  /* 卡片图片样式 */
  .card-container img {
    width: 100%; /* 宽度撑满容器，保持比例 */
    opacity: 0.85; /* 图片透明度，增添神秘感 */
    transition: opacity 0.3s ease; /* 鼠标悬浮效果 */
  }
  

  /* 图片悬浮效果 */
  .card-container img:hover {
    opacity: 1; /* 鼠标悬停时不透明显示 */
  }

  .card-description{
    font-size: 1.4em;
  }

  .dishs {
  width: 100%;
  margin-top: 100px;
}

.todish {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.dsih {
  width: 23%;
  margin: 0.5% 1%;
}

.image-card {
  width: 35%; 
  height: 500px; 
  float: left; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.image-card1 img {
  width: 100%;
  height: 100%;
  object-fit: fill; /* 设置为fill让图片填充整个容器，可能会导致图片变形 */
}
.image-card1 {
  width: 23%; 
  height: 400px; 
  float: left; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.background1 {
  width: 100%;
  max-height: 300px;
   object-fit: fill; /* 使用cover属性让图片覆盖整个容器，可能会裁剪图片以填满容器 */
}
</style>