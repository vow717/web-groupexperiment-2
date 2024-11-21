<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
</script>
<template>
<div class="all">


  <div class="container">
  <div class="row g-0">
  <div class="col-md-1 img animate__animated animate__animated animate__bounceInDown">
   <img src="../assets/pyh/img1.jpg" alt="">
  </div>
  <div class="col-md-1 link animate__animated animate__bounceInUp">
    <router-link to="/li-wlr" ><h1>礼</h1></router-link>
  </div>

  <div class="col-md-1 img animate__animated animate__animated animate__bounceInDown">
   <img src="../assets/pyh/img2.jpg" alt="">
  </div>
  <div class="col-md-1 link animate__animated animate__bounceInUp">
    <router-link to="/yue-lqg"><h1>乐</h1></router-link>
  </div>

  <div class="col-md-1 img animate__animated animate__animated animate__bounceInDown">
   <img src="../assets/pyh/img3.jpg" alt="">
  </div>
  <div class="col-md-1 link animate__animated animate__bounceInUp">
    <router-link to="/she-pcg"><h1>射</h1></router-link>
  </div>

  <div class="col-md-1 img animate__animated animate__animated animate__bounceInDown">
   <img src="../assets/pyh/img4.jpg" alt="">
  </div>
  <div class="col-md-1 link animate__animated animate__bounceInUp">
    <router-link to="/yi-lxy/Login"><h1>御</h1></router-link>
  </div>

  <div class="col-md-1 img animate__animated animate__animated animate__bounceInDown">
   <img src="../assets/pyh/img5.jpg" alt="">
  </div>
  <div class="col-md-1 link animate__animated animate__bounceInUp">
    <router-link to="/shu-wkf"><h1>书</h1></router-link>
  </div>

  <div class="col-md-1 img animate__animated animate__animated animate__bounceInDown">
   <img src="../assets/pyh/img6.jpg" alt="">
  </div>
  <div class="col-md-1 link animate__animated animate__bounceInUp">
    <router-link to="/shu2-pyh/home"><h1>数</h1></router-link>
  </div>


</div>

</div>

</div>

</template>
<style scoped>
body{
  position: relative;
}

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.all{
  /* 背景 */
  background-color: #CA462F;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position:relative;
  min-height: 100vh;
  overflow-y: hidden;
}

.row{
  min-height: 500px;
  position:relative;
}

/* 图片容器 */
.col-md-1.img {
      position:relative;
      margin-top: 0;
      margin-bottom: 60px;
    }
/* 链接容器 */
.col-md-1.link {
  position: relative;
  margin-top: 60px; 
  box-shadow:1px 1px 2px black;
}

.col-md-1 a{
  text-decoration: none;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  color:white;
  /* 链接样式 */
  background-color: #1E3B7A;
}

a,img{
  transition: 0.15s;
  position: relative;
}
a:hover,img:hover{
  transform: scale(1.2);
  box-shadow:1px 1px 3px black;
  z-index:10;
}

.animate__animated.animate__bounceInDown {
  animation-duration: 1s;

}

.animate__animated.animate__bounceInUp {
  animation-duration: 1s; 

}
.col-md-1.link:nth-child(2), .col-md-1.img:nth-child(1),.col-md-1.link:nth-child(12),.col-md-1.img:nth-child(11) {
  animation-delay: 500ms;
}

.col-md-1.link:nth-child(4),.col-md-1.img:nth-child(3),.col-md-1.link:nth-child(10) ,.col-md-1.img:nth-child(9) {
  animation-delay: 1s;
}

.col-md-1.link:nth-child(6) ,.col-md-1.img:nth-child(5),.col-md-1.link:nth-child(8),.col-md-1.img:nth-child(7) {
  animation-delay: 1500ms;
}
</style>

