<template>
    <div class="bl">
        <img src="@/assets/lqg/culture/c1.jpg">
        <div class="conter">
            <h1 style="font-size: 60px;">古琴艺术</h1>
            <p>古琴，作为中国传统文化的重要载体，拥有超过三千年的历史，以其优雅的音色、深厚的文化内涵和精湛的制作工艺而著称。</p>
        </div>
        <div class="fl">
            <img src="@/assets/lqg/culture/c2.jpg" alt="">
            <img  src="@/assets/lqg/culture/c3.jpg" alt="">
        </div>
       <div class="fr">
            <h3 style="margin-top: 30px;">历史渊源</h3>
            <p><strong>起源传说：</strong>古琴的起源可以追溯到远古时期，最早用于祭祀和宫廷音乐。其音色被认为是天籁之音，具有沟通天地的作用。</p>
            <p><strong>历史沿革：</strong>从先秦时期开始，古琴便成为文人雅士的必备乐器，在唐宋时期达到鼎盛，留下了大量传世名曲。</p>
            <h3 style="margin-top: 40px;">特色古琴</h3>
            <p><strong>名琴：</strong>中国历史上著名的古琴如“九霄环佩”、“大圣遗音”等，以其独特的音色和工艺成为传世之宝。</p>
            <p><strong>古琴流派：</strong>古琴艺术有多个流派，如广陵派、虞山派、浙派等，各具特色，传承了不同的演奏风格和曲目。</p>
            <h3 style="margin-top: 40px;">制作工艺</h3>
            <p><strong>选材：</strong>古琴的制作对材料有严格的要求，通常选用梧桐木和梓木，经过多年自然干燥。</p>
            <p><strong>制作过程：</strong>古琴的制作过程包括设计、取材、雕刻、上漆等，每一步都体现了工匠的精湛技艺。</p>
            <p><strong>音色调试：</strong>音色调试是古琴制作中的关键环节，通过调整琴弦和琴体的共鸣，以达到理想的音乐效果。</p>
            <h3 style="margin-top: 40px;">文化意义</h3>
            <p><strong>非物质文化遗产：</strong>古琴艺术被列入中国非物质文化遗产名录，是中华民族传统文化的重要组成部分。</p>
            <p><strong>社会活动：</strong>古琴演奏不仅是一种音乐表演，更是一种精神文化的体现，常在文人雅集中作为重要的文化交流活动。</p>
            <h3 style="margin-top: 40px;">现代发展</h3>
            <p><strong>国际交流：</strong>随着国际文化交流的加深，古琴艺术逐渐被世界各地的人们所认识和欣赏。</p>
            <p><strong>创新传承：</strong>现代古琴艺术家在传承传统技艺的同时，也在探索古琴音乐的新形式，使其在现代社会焕发新的生命力。</p>
        </div>
        <div class="flooter">
            <strong><p>古琴艺术作为中国传统文化的瑰宝，不仅承载着丰富的历史和文化价值，也是中华民族精神的重要体现。通过不断的传承和创新，古琴艺术将永葆其独特的魅力，为世界所共享。</p></strong>
        </div>
    </div>
    
</template>

<script setup>

</script>
<style scoped>
* {
    font-family: '楷体', 'KaiTi', serif;
}

.fl {
    float: left;
    width: 40%;
    height: auto; /* 修改为auto，以适应图片高度 */
}

.fr {
    float: right;
    width: 55%;
    height: 1000px;
}

.conter {
    width: 100%;
    height: 200px;
    margin-top: 50px;
    text-align: center;
}

h3 {
    font-size: 30px;
    margin-bottom: 20px;
}

p {
    font-size: 20px;
    line-height: 28px;
    margin: 20px 40px;
}

.flooter {
    width: 100%;
    margin-top: 60%;
    padding: 30px;
}

.flooter p {
    line-height: 35px;
    margin: 5px;
}

/* 新增样式，用于调整c1图片的显示 */
.bl img:first-child {
    width: 100%; /* 使图片宽度占满容器 */
    height: 500px; /* 高度自适应 */
}

/* 确保c2图片在左侧，不会覆盖文字 */
.fl img {
    width: auto; /* 宽度自适应 */
    height: auto; /* 高度自适应 */
    max-width: 100%; /* 限制最大宽度 */
    display: block; /* 使图片成为块级元素，避免图片之间有间隙 */
    margin-bottom: 20px; /* 在图片下方添加一些空间 */
}

</style>
