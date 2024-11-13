<template>

  <swiper></swiper>

  <div class="container">
    <div class="row">
      <div class="card" id="top">
        <div class="card-body">
          <h4 class="card-title">数</h4>
          礼乐射御书数 是中国古代儒家学说中“六艺”的组成部分之一，代表了一个理想的君子应当具备的六种基本技能和修养。 <br>
          具体来说，“数”指的是数学或算术，通常指的是数学的基础和应用，尤其在古代，数的含义不仅仅局限于纯粹的算术运算，还包括与天文、历法、风水、占卜等密切相关的知识。<br>
          “数”作为“六艺”之一，强调了数学和逻辑思维在古代文化中的重要性。它不仅仅是关于数字和计算的学问，更是一种与自然、宇宙、哲学及社会生活紧密相连的知识体系。 <br>
          在古代中国文化中，具备“数”的能力，意味着能够理解和应用天理与规律，达到与宇宙和谐共存的理想状态。
        </div>
      </div>
    </div>


    <br>


    <div class="row" v-for="e in elements" :key="e.id">
      <div class="card">
        <img class="card-img-top" src="../imgs/002.jpg">
        <div class="card-body">
          <h4 class="card-title">{{e.title}}</h4>
          <br>
          <p class="card-text">{{e.text}}</p>
          <br>
          <router-link to="story">
            <button class="btn btn-light" v-for="s in e.storys"> {{ s }}</button> 
          </router-link>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
import { provide, reactive } from 'vue';
import swiper from './swiper.vue'
const elements = reactive([
  {id:1,title:'天文与历法',storys:['大一统历法”的编制','黄道带与“紫微星”'],text:'古代的“数”常常用于天文观察、星象预测以及历法的编制。例如，阴阳五行学说、天文星座等都涉及到数理的应用。          古代中国的天文与历法密切相关，数在此中的应用，不仅是对天象的观测，也是中国古代宇宙观的体现。天文观测和历法编制的精准性，往往被看作国家治理和社会秩序的象征。'},
  {id:2,title:'占卜与命理',storys:['《易经》与卦象的数理','五行八字与命理'],text:'在古代占卜和命理学中，“数”有重要作用，尤其是在《易经》以及五行八字等术数体系中，数被用来解释命运、预示未来。在古代中国，占卜和命理学的核心部分正是数。通过数字和符号的变化，古人试图探寻天地之间的奥秘，预测个人与国家的未来。占卜的数学基础往往与《易经》密切相关，《易经》被称为“数的哲学”，它运用阴阳、五行和八卦等数理方法，探索世界的变化规律和人类的命运。'},
  {id:3,title:'算术与几何',storys:['《九章算术》与实用数学','几何学与建筑'],text:'古代的数学包括了算术、几何以及一些与工程、建筑、农业等实践相关的应用，例如测量土地面积、建筑设计等。古代中国的数学发展，特别是在算术和几何领域，也有着许多深刻的文化故事和应用实践。数学不仅仅是计算工具，它涉及了人们对空间、物质和自然现象的理解，甚至涉及到建筑、天文和社会经济的组织。'},
  {id:4,title:'哲学和宇宙观',storys:['道生一，一生二，二生三，三生万物','阴阳五行与宇宙秩序'],text:'在古代的哲学体系中，数常被认为是宇宙的基础原理之一，例如“道生一，一生二，二生三，三生万物”的道家思想中，数与宇宙的生成与变化紧密相关。'}
])
provide('elements',elements);
</script>

<style scoped>
div.card{
  margin:10px;
  display: flex;
  flex-direction: row;
}
div.card img{
  max-width: 15%;
  height: auto;
}



div.card#top{
  text-align: center;
}
</style>