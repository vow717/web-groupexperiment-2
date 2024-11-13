<template>
<br>
<div class="container">
    <div class="row g-0">
        <div class="col-md-12 " v-for="p in people">
            <div class="card">
            <img class="card-img-top element animate__animated" src="https://ik.imagekit.io/hushimg/NoteImgs/%E7%A5%96%E5%86%B2%E4%B9%8B.jpeg?updatedAt=1731490223019"  alt="">
            <div class="card-body animate__animated">
                <div class="card-title">{{ p.name }} <i class="bi bi-chat-dots"></i></div>
                <div class="card-text"> {{ p.detail}}</div>
            </div>
            </div>
        </div>
    </div>
</div>
<br>

</template>

<script setup>
import { onMounted, reactive } from 'vue';


const people = reactive([
    {name:'秦九韶',detail:'秦九韶是北宋时期的数学家，他的《九章算术》注解是对原书内容的扩充和详细说明，注重数学方法的推理和求解，特别是在代数解法的阐述上具有重要意义。秦九韶不仅注重数学问题的解决，还提出了一些实际应用的模型，这些内容对于后世的数学研究起到了推动作用。'},
    {name:'祖冲之',detail:'祖冲之是南北朝时期的著名数学家、天文学家。他是世界上最早计算出圆周率精确值的人之一，圆周率的精确值为3.1415926，误差非常小，是当时全世界数学界的巨大成就。祖冲之的工作不仅对中国数学发展产生深远影响，也影响了世界数学史。他还在数论、天文学等多个领域做出了卓越的贡献。'},
    {name:'李治',detail:'李治是唐代的数学家和天文学家，他的《测圆海镜》是古代中国圆周率研究的经典之一。李治对圆周率的计算做出了贡献，尤其是改进了圆的面积计算方法。李治还涉及了许多其他领域的数学研究，如天文观测、天体运动等，他的贡献对中国古代科学尤其是天文数学的发展产生了重要影响。'},
    {name:'刘徽',detail:'刘徽是三国时期魏国的数学家，他的数学成就不仅限于《海岛算经》，他还对许多数学问题进行了深入研究，尤其是在几何学和代数学方面。书中涉及了很多实用的计算问题，例如比例、分数计算、面积和体积计算等，具有较强的实际应用性质。刘徽最著名的贡献之一是他对《九章算术》的注解，他提出了很多创新性的数学方法，如“割圆术”（类似于现代的积分法），用于解决圆周和圆面积等几何问题。此外，刘徽也提出了“密度法”和“孪生法”，为后世的数学发展奠定了基础。'},
    {name:'朱世杰',detail:'朱世杰是南宋时期著名的数学家，他的《算学启蒙》主要是面向初学者的数学教材，意在普及数学知识和解题技巧。朱世杰提出了一些新的数学思想，如“均值法”和“推演法”，对于古代中国数学教育的发展起到了积极作用。更重要的是，他在方程解法的系统性和算法的简化方面有显著贡献，体现了中国古代数学思维的独特性。'}
])

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
div.card{
    height: 300px;
    display: flex;
    flex-direction: row;
}
div.card img{
    border-radius: 50%;
    max-width:300px;
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

div.card div.card-body{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.animate__animated{
    opacity: 0;
}
.visible{
    opacity: 1;
}
</style>