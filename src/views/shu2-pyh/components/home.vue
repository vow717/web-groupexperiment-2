<template>

  <swiper></swiper>

  <div class="container">
    <div class="row">
      <div class="card" id="top">
        <div class="card-body">
          <h4 class="card-title"><i class="bi bi-fire"></i>数</h4>
          礼乐射御书数 是中国古代儒家学说中“六艺”的组成部分之一，代表了一个理想的君子应当具备的六种基本技能和修养。 <br>
          具体来说，“数”指的是数学或算术，通常指的是数学的基础和应用，尤其在古代，数的含义不仅仅局限于纯粹的算术运算，还包括与天文、历法、风水、占卜等密切相关的知识。<br>
          “数”作为“六艺”之一，强调了数学和逻辑思维在古代文化中的重要性。它不仅仅是关于数字和计算的学问，更是一种与自然、宇宙、哲学及社会生活紧密相连的知识体系。 <br>
          在古代中国文化中，具备“数”的能力，意味着能够理解和应用天理与规律，达到与宇宙和谐共存的理想状态。
        </div>
      </div>
    </div>
    <br>
    <div class="row" v-for="e in els" :key="e.id">
      <div class="card animate__animated">
        <img class="card-img-top" src="../imgs/1731508535800.gif">
        <div class="card-body">
          <h4 class="card-title"><i class="bi bi-columns-gap"></i>{{e.title}}</h4>
          <br>
          <p class="card-text">{{e.text}}</p>
          <br>
          <router-link to="story">
            <button class="btn btn-light" v-for="s in e.storys"> {{ s.name }}</button> 
          </router-link>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
import {  onMounted, reactive } from 'vue';
import swiper from './swiper.vue';
import {elements} from '../js/data.js';
const els = reactive(elements)


onMounted(()=>{
const targets = document.querySelectorAll('.animate__animated');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeIn'); 
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
});
targets.forEach( target => {
  observer.observe(target);
})

})

</script>

<style scoped>
div.card{
  margin:10px;
  display: flex;
  flex-direction: row;
}
div.card img{
  max-width: 20%;
  border-radius: 10px;
  height: auto;
}
div.card#top{
  text-align: center;
}
.visible{
  opacity: 1;
}
.animate__animated{
  opacity: 0;
}

</style>