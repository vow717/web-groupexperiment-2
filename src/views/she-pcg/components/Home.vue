<script setup lang="ts">

import HomeBar from "./Bar.vue";
import PictureDisplay from "./PictureDisplay.vue";
import History from './History.vue';
import Footer from './footer-p.vue';

</script>

<template>
  <div id="Home" class="background">
    <HomeBar/>
    <div class="textContainer">
      养国子以道，乃教之六艺<br>一曰五礼，二曰六乐，三曰五射<br>四曰五驭（御），五曰六书，六曰九数
    </div>
    <PictureDisplay />
    <History id="Histroy"></History>
    <Footer></Footer>
  </div>
  
  
</template>

<style scoped>
@font-face {
  font-family: longhu;
  src: url(../assets/fonts/HYYongZiLongHuBangW.ttf);;
}
.background {
    background-image: url(../assets/pic/background.jpg);
    background-color: rgb(255, 255, 255);
    background-position: center top;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    background-origin: padding-box;
    background-clip: border-box;
    z-index: -999;
}
.textContainer{
  font-family:'longhu' ;
  margin-top: 100px;
  height: 300px;
  text-align: center;
  font-weight: 500;
  font-size: 68px;
  line-height: 80px;
  letter-spacing: 2px;
  color: #00000000;
  background-image: -webkit-linear-gradient(60deg, #14fd46, #0368ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


</style>

