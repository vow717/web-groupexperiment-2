<template>
  <div class="all">
    <headdder></headdder>

    <RouterView></RouterView>
    
    <br>
    <Footer></Footer>
   
  </div><!-- all -->

</template>

<script setup>

import { register } from 'swiper/element/bundle';
register();
import headdder from './components/header.vue'
import Footer from './components/footer.vue'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
</script>




<style scoped>

div.all{
  position:relative;
  min-height:100vh ;
  min-width: 100vh;
  background-color: #fff;
  font-size:16px;
}
</style>
