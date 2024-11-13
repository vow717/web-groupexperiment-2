<template>
  <div class="all">

    <headdder></headdder>
    <swiper></swiper>
   
 

  </div><!-- all -->

</template>

<script setup>

import { register } from 'swiper/element/bundle';
register();
import headdder from './components/header.vue'
import swiper from './components/swiper.vue'
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
</style>
