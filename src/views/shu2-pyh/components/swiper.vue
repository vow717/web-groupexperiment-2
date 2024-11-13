<template>
 <div class="container-fluid">
       <br>
       <br>
      <div class="row g-0">
        <swiper-container  autoplay-delay="2000" speed="500" loop="true" space-between="25"
        :slides-per-view="3" :pagination="{hideOnClick: true}"
        @swiperprogress="onProgress"@swiperslidechange="onSlideChange">

        <swiper-slide>
        <a href="">
         <img src="../imgs/002.jpg" alt="">
         <div class="text-overlay">隐藏的文字</div>
        </a>
        </swiper-slide>

        <swiper-slide>
          <a href="">
         <img src="../imgs/002.jpg" alt="">
         <div class="text-overlay">隐藏的文字</div>
        </a>
        </swiper-slide>
        
        <swiper-slide>
          <a href="">
         <img src="../imgs/002.jpg" alt="">
         <div class="text-overlay">隐藏的文字</div>
        </a>
        </swiper-slide>

        <swiper-slide>
          <a href="">
         <img src="../imgs/002.jpg" alt="">
         <div class="text-overlay">隐藏的文字</div>
        </a>
        </swiper-slide>

        <swiper-slide>
          <a href="">
         <img src="../imgs/002.jpg" alt="">
         <div class="text-overlay">隐藏的文字</div>
        </a>
        </swiper-slide>

        <swiper-slide>
          <a href="">
         <img src="../imgs/002.jpg" alt="">
         <div class="text-overlay">隐藏的文字</div>
        </a>
        </swiper-slide>

        <swiper-slide>
          <a href="">
         <img src="../imgs/002.jpg" alt="">
         <div class="text-overlay">隐藏的文字</div>
        </a>
        </swiper-slide>

        <swiper-slide>
        <a href="">
         <img src="../imgs/002.jpg" alt="">
         <div class="text-overlay">隐藏的文字</div>
        </a>
        </swiper-slide>

        </swiper-container>
      </div>
      </div>    
</template>

<script setup>

</script>
<style scoped>
swiper-container {
  overflow: visible;
  width:90%;
  height: 400px;
  color:white;
}

swiper-slide {
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
  position:relative
}
swiper-slide img{
  max-width: 100%;
  height: auto;
}
.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5); /* 半透明背景，可以根据需要调整 */
  color: white;
  text-align: center;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}
swiper-slide:hover .text-overlay {
  height: 60%; /* 根据需要调整高度 */
}
</style>