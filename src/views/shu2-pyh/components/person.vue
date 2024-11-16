<template>
    <div class="container-fluid">
        <div class="row g-0">
            <div class="col-md-3 side animate__animated animate__fadeIn">
                <h1>数<i class="bi bi-droplet"></i></h1>
                <hr>
                <h5>“数”是指数学和数术的学问。</h5>
                <h5>它不仅仅是现代意义上的数学计算，还包括了对自然规律的理解和应用，如阴阳五行的生克制化等。</h5>
                <br>
                <h6>“数”在古代六艺中占据了重要的位置</h6>
                <h6>它不仅是数学知识的传授，更是对自然规律和社会秩序理解的一种方式。通过学习“数”，古代的学者和贵族能够更好地理解和掌握他们所处的世界。</h6>
            </div>
            <div class="col-md-9">
                <div class="row g-0" v-for="p in peo" :key="p.name">
                    <div class="card">
                        <img class="card-img-top element animate__animated" src="https://ik.imagekit.io/hushimg/NoteImgs/%E7%A5%96%E5%86%B2%E4%B9%8B.jpeg?updatedAt=1731490223019" alt="">
                        <div class="card-body animate__animated">
                            <div class="card-title">
                                <P5Title :content="p.name" font_color="red" size="large"></P5Title>
                                <i class="bi bi-chat-dots"></i>
                            </div>
                            <div class="card-text">
                                <p5-text size="large">{{ p.detail }}</p5-text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { people } from '../js/data.js';
import { P5Title, P5Text } from 'p5-ui';
import {Timeline} from 'antd'
import 'animate.css';
import 'p5-ui/dist/style.css';

const peo = reactive(people);

onMounted(() => {
    const targets = document.querySelectorAll('.animate__animated.element');
    const cards = document.querySelectorAll('.animate__animated.card-body');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__rotateIn');
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    const observerCard = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    targets.forEach(target => {
        observer.observe(target); // 观察每个目标元素
    });
    cards.forEach(card => {
        observerCard.observe(card);
    });
});
</script>

<style scoped>
div.row {
    margin: 0 0 20px 0;
}
.side {
    padding:20px 0 0 20px;
    background-color: antiquewhite;
}
h5,h6{
    color: #999999;
}
.card-body {
    position: relative;
}

div.card {
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

/* 图片样式 */
div.card img {
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
.animate__animated {
    opacity: 0;
}

.visible {
    opacity: 1;
}

.timeline {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 14px;
    color: #555;
    background-color: #f9f9f9;
    padding: 5px 10px;
    border-radius: 5px;
}

.timeline-date {
    font-weight: bold;
    color: #007bff;
}
</style>
