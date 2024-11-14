<template>
<br>
<div class="container">
    <div class="row g-0 " v-for="p in peo">
        <div class="col-md-3">
            <div class="card img">
            <img class="card-img-top element animate__animated" src="https://ik.imagekit.io/hushimg/NoteImgs/%E7%A5%96%E5%86%B2%E4%B9%8B.jpeg?updatedAt=1731490223019"  alt="">
            </div>
            </div>

            <div class="col-md-9">
                <div class="card">
            <div class="card-body animate__animated">
                <div class="card-title"><P5Title :content="p.name" font_color="red" size="large"></P5Title><i class="bi bi-chat-dots"></i></div>
                <div class="card-text"> <p5-text size="large">{{ p.detail}}</p5-text></div>
            </div>
        </div>
     </div>
    </div>
</div>
<br>

</template>

<script setup>
import { onMounted, reactive } from 'vue';
import {people} from '../js/data.js';
import {P5Title,P5Text} from 'p5-ui';
import 'animate.css'
import 'p5-ui/dist/style.css'
const peo = reactive(people);

onMounted(()=>{
    const targets = document.querySelectorAll('.animate__animated.element');
    const cards = document.querySelectorAll('.animate__animated.card-body');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__rotateIn'); // 添加从左边弹出的动画类
            entry.target.classList.add('visible'); // 添加可见类
            observer.unobserve(entry.target); // 停止观察
        }
    });
});
const observerCard = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__zoomInRight'); // 添加从左边弹出的动画类
            entry.target.classList.add('visible'); // 添加可见类
            observer.unobserve(entry.target); // 停止观察
        }
    });
});

targets.forEach(target => {
    observer.observe(target); // 观察每个目标元素
});
cards.forEach(card=>{
    observerCard.observe(card);
})
})

</script>
<style scoped>


div.row{
    margin:0 0 20px 0 ;
}
div.card{
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
/* 图片旋转 */
div.card.img{
    border:none;
    background-color: #eeeeee;
    background-image: url('../imgs/cp.png');
    background-position: 39%,50%;
    background-size:800px;
    background-repeat: no-repeat;
    border:none;
}
div.card img{
    border-radius: 50%;
    width: 240px;
    height: 240px;
    transition: transform 0.15s linear; 
}

div.card img:hover {
    animation: spin 0.2s linear infinite; 
}

@keyframes spin {
    0% {
    transform: rotate(0deg); 
    }
    100% {
    transform: rotate(360deg);
    }
}

/* 进入视野再动画 */
.animate__animated{
    opacity: 0;
}
.visible{
    opacity: 1;
}

</style>