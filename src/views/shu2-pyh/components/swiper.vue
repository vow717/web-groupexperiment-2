<template>
  <div class="container">
  <br>     
  <swiper-container  autoplay-delay="2000" speed="500" loop="true" space-between="25"
        :slides-per-view="3" :pagination="{hideOnClick: true}"
        @swiperprogress="onProgress" @swiperslidechange="onSlideChange">

        <swiper-slide v-for="s in slides">
        <router-link to="book">
         <img :src="s.url" alt="">
        <div class="card text-overlay">
        <div class="card-body">
          <br>
        <h5 class="card-title">{{ s.title }}</h5>
        <h6 class="card-subtitle">作者:{{ s.author }}</h6>
        <p class="card-text">{{s.info}}</p>
        </div> 
        </div>
        </router-link>
        </swiper-slide>
        </swiper-container>
      </div>
 
</template>

<script setup>
import { reactive, ref } from 'vue';

const borderRadius=ref('10px');
const slides = reactive([
  {title:'九章算术',author:'秦九韶',url:'https://ik.imagekit.io/hushimg/NoteImgs/jzss.png?updatedAt=1731487950509',info:'《九章算术》是中国古代最重要的数学经典之一，原作出现在西汉时期，虽然秦九韶的《九章算术》是对其的注解和扩充，但《九章算术》本身并不是他原创的。它是中国古代数学体系的总结，涉及到代数、几何、数论、应用数学等多个领域，深刻影响了中国后世的数学发展。'},
  {title:'海岛算经',author:'刘徽',url:'https://ik.imagekit.io/hushimg/NoteImgs/hdsj.jpeg?updatedAt=1731488528547',info:'《海岛算经》是中国古代的一部数学著作，主要记载了刘徽对古代算术方法的总结和对一些数学问题的解法。书名中的“海岛”二字反映了该书对数学问题的地理和工程应用特性。'},
  {title:'缀术',author:'祖冲之',url:'https://ik.imagekit.io/hushimg/NoteImgs/zs.jpg?updatedAt=1731488498785',info:'《缀术》是祖冲之所著的一部关于数理的经典著作，内容涵盖了数学的多方面，尤其是与天文、力学、机械和几何学相关的问题。祖冲之的《缀术》是一部数学与自然科学结合的著作，体现了当时中国数学的高水平。'},
  {title:'测圆海镜',author:'李治',url:'https://ik.imagekit.io/hushimg/NoteImgs/cyhj.jpeg?updatedAt=1731488453712',info:'《测圆海镜》是唐代数学家李治所著，主要探讨圆的几何性质及圆面积、圆周率等相关内容。李治通过大量的几何推导，提出了一些新的计算方法，对于后世的数学研究具有重要的启发作用。'},
  {title:'算学启蒙',author:'朱世杰',url:'https://ik.imagekit.io/hushimg/NoteImgs/sxqm.jpeg?updatedAt=1731488287730',info:'《算学启蒙》是南宋数学家朱世杰的著作，内容涵盖了方程求解、数论、几何、比例等多个领域。朱世杰在书中系统整理了许多数学方法，尤其是在解方程的技巧上具有重要影响。'}
])


</script>
<style scoped>
swiper-container {
 
  width:100%;
  height: 400px;
  color:white;
}

swiper-slide a{
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 18px;

  border-radius: 10px;
  border:solid 1px gainsboro;
  box-shadow: 2px 1px 3px black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
 
}
swiper-slide img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text-overlay {
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5); /* 半透明背景，可以根据需要调整 */
  color: white;
  text-align: center;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}
.card{
  border:none;
}
swiper-slide a:hover .text-overlay {
  height: 80%; /* 根据需要调整高度 */
}
</style>