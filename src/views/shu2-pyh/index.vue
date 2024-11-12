<template>
  <div class="all">
    <div class="container-fluid">
      <div class="row g-0 nav">
        <div class="col-4"><router-link to="/">返回首页</router-link></div>
        <div class="col-1">{{ a }}</div>
        <div class="col-1">2</div>
        <div class="col-1">3</div>
        <div class="col-1">4</div>
      </div>
      <hr>
      <div class="row g-0">
        <swiper-container  autoplay-delay="2000" speed="500" loop="true" space-between="25"
        :slides-per-view="5" :pagination="{hideOnClick: true}"
        @swiperprogress="onProgress"@swiperslidechange="onSlideChange">
        <swiper-slide>slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        </swiper-container>
      </div>

    </div><!-- container -->

  </div><!-- all -->

</template>

<script setup>
import './css/bootstrap.min.css'

import { register } from 'swiper/element/bundle';
register();

const a = 10;


</script>




<style scoped>

div.all{
  position:relative;
  min-height:100vh ;
  min-width: 100vh;
  background-color: black;
  background-image: url('https://ik.imagekit.io/hushimg/p5/bg.png?updatedAt=1731407254989');
  color:white;
  font-size:16px;
}
div{
}
.nav{
  background-image: url('https://ik.imagekit.io/hushimg/p5/menu_bg.png?updatedAt=1731421509808');
  height: 60px;
  align-items: center;
}

swiper-container {
      width:80%;
      height: 300px;
      background-color: #fff;
      color:black;
    }

    swiper-slide {
      text-align: center;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: aqua;
    }
    swiper-slide:hover {
      transform: scale(1.15);
      transition: scale,0.5s;
    }

</style>
