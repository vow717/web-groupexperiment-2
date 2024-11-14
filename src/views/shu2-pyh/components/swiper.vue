<template>
  <div class="container">
  <br>     
  <swiper-container  autoplay-delay="2000" speed="500" loop="true" space-between="25"
        :slides-per-view="3"
        @swiperprogress="onProgress" @swiperslidechange="onSlideChange">

        <swiper-slide v-for="s in swiperSlides">
      <div class="a">
        <img :src="s.url" alt="">
        <div class="card text-overlay">
        <div class="card-body">
        <h5 class="card-title"><strong>{{ s.title }}</strong></h5>
        <br>
        <h6 class="card-subtitle">作者:{{ s.author }}</h6>
        <p class="card-text">{{s.info}}</p>
        </div> 
        </div>
      </div>
        </swiper-slide>
        </swiper-container>
      </div>
 
</template>

<script setup>
import { reactive, ref } from 'vue';
import {slides} from '../js/data.js';
const borderRadius=ref('10px');
const swiperSlides = reactive(slides);


</script>
<style scoped>
swiper-container {
 
  width:100%;
  height: 400px;
  color:white;
}

swiper-slide .a{
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 18px;

  border-radius: 10px;
  border:solid 1px gainsboro;
  box-shadow: 2px 1px 3px black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
 
}
swiper-slide img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-overlay {
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5); /* 半透明背景，可以根据需要调整 */
  color: white;
  text-align: center;
  width: 100%;
  height: 40px;
  overflow: hidden;
  transition: height 0.3s ease;
}
.card{
  border:none;
}
swiper-slide .a:hover .text-overlay {
  height: 80%; /* 根据需要调整高度 */
}
</style>