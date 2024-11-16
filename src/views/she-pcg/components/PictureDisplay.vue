<template>
    <div class="slider" @mouseover="stopAutoPlay" @mouseleave="setAutoPlay">
      <div class="slider-list">
        <div :class="['slider-item', setItemClass(index)]" v-for="(item, index) of list" :key="index">
          <img :src="item">
        </div>
        <i @click="prev" class="arrow arrow-left"></i>
        <i @click="next" class="arrow arrow-right"></i>
      </div>
      <div class="dots">
        <span v-for="(item, index) of list" :key="index"
              :style="setDotActiveStyl(index)" @mouseover="currentIndex = index"></span>
      </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  import swipe1 from '../assets/pic/1.jpg'
  import swipe2 from '../assets/pic/2.jpg'
  import swipe3 from '../assets/pic/3.png'
  import swipe4 from '../assets/pic/4.jpg'
  
  export default {
    data() {
      return {
        list: [swipe1, swipe2, swipe3, swipe4],
        timer: null,
        currentIndex: 0,
      };
    },
    computed: {
      listLength() {
        return this.list.length - 1;
      },
    },
    methods: {
      // 判断当前图片的状态，再动态的分别添加样式
      setItemClass(i) {
        const prev = this.currentIndex === 0 ? this.listLength : this.currentIndex - 1;
        const next = this.currentIndex === this.listLength ? 0 : this.currentIndex + 1;
        switch (i) {
          case this.currentIndex:
            return 'active';
          case prev:
            return 'prev';
          case next:
            return 'next';
          default:
            return '';
        }
      },
      prev() {
        this.currentIndex === 0 ? (this.currentIndex = this.listLength) : this.currentIndex--;
      },
      next() {
        this.currentIndex === this.listLength ? (this.currentIndex = 0) : this.currentIndex++;
      },
      // 定时器，自动轮播
      setAutoPlay() {
        this.timer = setInterval(() => {
          this.next();
        }, 2500)
      },
      /**
       * @desc 鼠标移入，停止自动轮播
       */
      stopAutoPlay() {
        clearInterval(this.timer);
      },
      /**
       * @desc 小圆点轮播导航
       */
      setDotActiveStyl(i) {
        if (i == this.currentIndex) {
          return { backgroundColor: '#D33A31' };
        }
      },
    },
    mounted() {
      this.setAutoPlay()
    }
  };
  </script>
  
  <style>
  body{
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .slider{
    width: 1150px;
    height: 460px;
    user-select: none;
    margin: 0 auto;
  }
  .slider-list{
    position: relative;
    margin-top: 20px;
    height: 100%;
    transform-style: preserve-3d;
  }
  .slider-item{
    position: absolute;
    margin: 0 50%;
    width: 746px;
    height: 100%;
    transform: translate3d(-50%, 0, -300px) scale(.8);
    transition: all .6s ease-in-out;
    border-radius: 8px;
    overflow: hidden;
  }
  .slider-item img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .slider-item.prev{
    margin: 0;
    transform: translate3d(0, 0, -200px) scale(.7);
    transform-origin: left;
  }
  .slider-item.next{
    margin: 0 100%;
    transform: translate3d(-100%, 0, -100px) scale(.7);
    transform-origin: right;
  }
  .slider-item.active{
    transform: translate3d(-50%, 0, 0) scale(1);
  }
  .slider-item::after{
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .7;
    transition: all .6s;
  }
  .slider-item.active::after{
    opacity: 0;
  }
  .arrow{
    position: absolute;
    top: 50%;
    display: block;
    width: 30px;
    cursor: pointer;
    transform: translate3d(0, -50%, 0);
  }
  .arrow.arrow-right{
    right: -50px;
  }
  .arrow.arrow-left{
    left: -50px;
  }
  .dots{
    text-align: center;
  }
  .dots span{
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 10px 5px;
    cursor: pointer;
  }
  </style>
  