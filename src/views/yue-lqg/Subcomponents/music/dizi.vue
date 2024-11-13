<template>
    <div class="bl">
        <img src="@/assets/lqg/culture/c7.jpg">
        <div class="conter">
            <h1 style="font-size: 60px;">笛子艺术</h1>
            <p>笛子，作为中国传统乐器里极具特色的一员，有着源远流长的历史，凭借其清脆悦耳的音色、多样的演奏技巧以及独特的制作工艺而备受瞩目。</p>
        </div>
        <div class="fl">
            <img src="@/assets/lqg/culture/c8.jpg" alt="">
            <img  src="@/assets/lqg/culture/c9.jpg" alt="">
        </div>
        <div class="fr">
            <h3 style="margin-top: 30px;">历史渊源</h3>
            <p><strong>起源传说：</strong>笛子的起源可追溯到远古时期，最初可能是由先民们模仿鸟鸣等自然声音而制作的简单吹奏乐器。其音色悠扬婉转，极具穿透力。</p>
            <p><strong>历史沿革：</strong>从新石器时代的骨笛开始，笛子历经数千年发展。在古代，笛子广泛应用于宫廷音乐、民间乐曲以及戏曲伴奏等，在不同历史时期都留下了众多经典曲目。</p>
            <h3 style="margin-top: 40px;">特色笛子</h3>
            <p><strong>名笛：</strong>中国历史上不乏著名的笛子，如一些古代流传下来的珍贵竹笛等，以其出色的音质和精美的工艺成为乐器中的珍品。</p>
            <p><strong>笛子流派：</strong>笛子艺术发展出了多个流派，像北方的梆笛流派、南方的曲笛流派等，各流派在演奏风格、技巧运用以及曲目偏好等方面各有千秋，传承了丰富多样的音乐特色。</p>
            <h3 style="margin-top: 40px;">制作工艺</h3>
            <p><strong>选材：</strong>笛子的制作选材至关重要，常见的是以竹子为主要材料，如苦竹、紫竹等，不同材质会影响笛子的音色和品质。</p>
            <p><strong>制作过程：</strong>其制作过程包括选竹、切割、钻孔、调音等环节，每一步都需要制作者具备精湛的技艺和丰富的经验，以确保笛子能发出美妙的声音。</p>
            <p><strong>音色调试：</strong>音色调试是笛子制作的关键部分，通过调整吹孔、音孔的位置和大小等因素，来达到理想的音色效果，使其音准准确、音色优美。</p>
            <h3 style="margin-top: 40px;">文化意义</h3>
            <p><strong>非物质文化遗产：</strong>笛子艺术已被列入中国非物质文化遗产名录，是中华民族传统文化的重要组成部分，承载着深厚的历史文化底蕴。</p>
            <p><strong>社会活动：</strong>笛子演奏在各种文化活动中都占有重要地位，无论是在民间的节日庆典、还是在专业的音乐会舞台上，都是常见且深受喜爱的表演形式，也是人们情感表达和文化交流的重要方式。</p>
            <h3 style="margin-top: 40px;">现代发展</h3>
            <p><strong>国际交流：</strong>随着全球文化交流的日益频繁，笛子艺术也逐渐走向世界，受到世界各地音乐爱好者的欣赏和喜爱。</p>
            <p><strong>创新传承：</strong>现代笛子艺术家们在传承传统技艺的同时，也在不断探索笛子演奏的新形式、新风格，比如与现代音乐元素相结合等，使其在现代社会中焕发出新的活力。</p>
        </div>
        <div class="flooter">
            <strong><p>笛子艺术作为中国传统文化的璀璨明珠，承载着丰富的历史文化价值，也是中华民族精神的重要体现。通过持续的传承与创新，笛子艺术必将长久保持其独特魅力，为全世界所共享。</p></strong>
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
