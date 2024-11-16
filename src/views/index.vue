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
  <div class="col-md-1 animate__animated animate__bounceInUp">
    <router-link to="/li-wlr" ><h1>礼</h1></router-link>
  </div>

  <div class="col-md-1 img animate__animated animate__animated animate__bounceInDown">
   <img src="../assets/pyh/img2.jpg" alt="">
  </div>
  <div class="col-md-1 animate__animated animate__bounceInUp">
    <router-link to="/yue-lqg"><h1>乐</h1></router-link>
  </div>

  <div class="col-md-1 img animate__animated animate__animated animate__bounceInDown">
   <img src="../assets/pyh/img3.jpg" alt="">
  </div>
  <div class="col-md-1 animate__animated animate__bounceInUp">
    <router-link to="/she-pcg"><h1>射</h1></router-link>
  </div>

  <div class="col-md-1 img animate__animated animate__animated animate__bounceInDown">
   <img src="../assets/pyh/img4.jpg" alt="">
  </div>
  <div class="col-md-1 animate__animated animate__bounceInUp">
    <router-link to="/yi-lxy/Login"><h1>御</h1></router-link>
  </div>

  <div class="col-md-1 img animate__animated animate__animated animate__bounceInDown">
   <img src="../assets/pyh/img5.jpg" alt="">
  </div>
  <div class="col-md-1 animate__animated animate__bounceInUp">
    <router-link to="/shu-wkf"><h1>书</h1></router-link>
  </div>

  <div class="col-md-1 img animate__animated animate__animated animate__bounceInDown">
   <img src="../assets/pyh/img6.jpg" alt="">
  </div>
  <div class="col-md-1 animate__animated animate__bounceInUp">
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

.animate__animated {
  will-change: transform, opacity;
}

.all{
  /* 背景 */
  background-color: #CA462F;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.row{
  min-height: 500px;
}


.col-md-1.img {
      margin-top: 0;
      margin-bottom: 60px;
    }
.col-md-1 {
  position: relative;
  margin-top: 60px; 
  box-shadow:1px 1px 2px black;
  z-index: 0;
}


a,img{
  transition: 0.3s;
  z-index:0;
}

a:hover,img:hover{
  z-index:9;
  transform: scale(1.1);
  box-shadow:1px 1px 2px black;
}

a{
  text-decoration: none;
}

.col-md-1 a{
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  color:white;

  /* 链接样式 */
  background-color: #1E3B7A;
}
  
</style>

