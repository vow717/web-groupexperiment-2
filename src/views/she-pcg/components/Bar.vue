<template>
    <div class="scroll">
      <div class="nav" :class="navBarFixed? 'navBarWrap' : ''" style="display: flex;">
        <img src="../assets/pic/logo.jpg" alt="icon" class="icon-container" />
        <div class="center-content">
          <div class="title">射艺</div>
          <div class="button-row">
            <button class="button">住</button>
            <button class="button" @click="navigateToPage">行</button>
            <button class="button">景</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  
<script setup lang="ts">

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToPage = () => {
  router.push('/people');
}
  import { ref, onMounted } from 'vue';
  
  const navBarFixed = ref(false);
  
  function watchScroll() {
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
  
    navBarFixed.value = scrollTop > 90;
  }
  
  onMounted(() => {
    window.addEventListener('scroll', watchScroll);
  });
  
  function clicked() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  </script>
  
  <style scoped>
  .icon-container {
    border-radius: 50%;
    width: 8%;
    height: 8%;
    margin-right: 10px;
  }
  .title {
    margin-bottom: 10px;
    font-size: 37px;
    font-weight: bold;
  }
  .scroll {
    height: 100px;
  }
  .nav {
    display: flex;
    margin: auto;
    padding: 10px;
    width: 80%;
    border-color: rgba(72, 77, 82, 0.336);
    border-style: solid;
    border-width: 4px;
    border-radius: 20px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0);
    text-align: center;
    backdrop-filter: blur(10px);
  }
  .navBarWrap {
    position: fixed;
    left: 10%;
    top: 0;
    z-index: 998;
  }
  .center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  .buttonContainer {
    text-align: center;
    align-items: center;
  }
  .button {
    text-align: center;
    width: 50px;
    height: 30px;
    border-radius: 10px;
    border-style: solid;
    background-color: #ffffff00;
  }
  .buttonOn {
    border-color: cyan;
  }
  </style>