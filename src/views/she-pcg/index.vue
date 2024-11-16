<script setup lang="ts">
import {ref , onMounted} from 'vue';
import { RouterView } from 'vue-router';
import HomeBar from "./components/Bar.vue";
import PictureDisplay from "./components/PictureDisplay.vue";
import History from './components/History.vue';

</script>

<template>
  <div id="Home" class="background">
    <HomeBar/>
    <div class="textContainer">
      养国子以道，乃教之六艺<br>一曰五礼，二曰六乐，三曰五射<br>四曰五驭（御），五曰六书，六曰九数
    </div>
    <PictureDisplay />
    
  </div>
  <Map id="Map"/>
  <History id="Histroy"/>
  <Sense id="Sense"/>
  <Food id="Food"/>
  <Festival id="Festival"/>
</template>

<style scoped>
@font-face {
  font-family: longhu;
  src: url(./assets/fonts/HYYongZiLongHuBangW.ttf);;
}
.background {
    background-image: url(./assets/pic/background.jpg);
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
  /* text-shadow: 0 0 50px rgb(201, 201, 201);	 */
  background-image: -webkit-linear-gradient(60deg, #31f44e, #2387c6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>

<!-- 
1.地理位置：介绍该地方的地理位置、范围、位置关系等，让人对该地有一个大致的印象。
2.历史文化：介绍该地方的历史文化，比如该地的历史渊源、人文地理等方面的特色。
3.自然环境：介绍该地方的自然环境，包括地形地貌、气候、生态环境等方面的特点，让人对该地自然风貌有了解。
4.名胜古迹：介绍该地方的具体名胜古迹，包括该地方著名景点、名胜和风景等方面的特点，让人对该地方的文化背景和旅游资源有了解。
5.饮食特色：介绍该地方的特色美食，包括独具特色的传统小吃、特色饮食等方面的特点，让人对该地方的文化和生活方式有了解。
6.社会风俗：介绍该地方的社会风俗，包括当地传统节日和庆典等方面的特点，让人对该地方的民俗文化有了解。
 -->