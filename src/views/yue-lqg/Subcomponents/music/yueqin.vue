<template>
    <div class="bl">
        <img src="@/assets/lqg/culture/c11.jpg">
        <div class="conter">
            <h1 style="font-size: 60px;">月琴艺术</h1>
            <p>月琴，作为中国传统弹拨乐器中的重要一员，拥有着悠久的历史，以其独特的音色、精美的造型以及丰富的文化内涵而著称。</p>
        </div>
        <div class="fl">
            <img src="@/assets/lqg/culture/c10.jpg" alt="">
            <img  src="@/assets/lqg/culture/c12.jpg" alt="">
        </div>
       <div class="fr">
            <h3 style="margin-top: 30px;">历史渊源</h3>
            <p><strong>起源传说：</strong>月琴的起源说法众多，一说其源于汉代，由阮演变而来，最初常用于宫廷雅乐及民间音乐活动。其音色清脆明亮，富有节奏感。</p>
            <p><strong>历史沿革：</strong>历经多个朝代的发展，月琴在不同时期都展现出独特的魅力。在明清时期，月琴在戏曲伴奏等方面发挥了重要作用，并且随着戏曲的传播而得到更广泛的流传，留下了不少经典的演奏片段。</p>
            <h3 style="margin-top: 40px;">特色月琴</h3>
            <p><strong>名琴：</strong>历史上有一些制作精良的月琴备受赞誉，它们以独特的音色、考究的工艺以及精美的装饰成为乐器中的珍品，可惜部分已难寻踪迹，但相关记载仍能让我们领略到其昔日风采。</p>
            <p><strong>月琴流派：</strong>月琴艺术在发展过程中也形成了不同流派，各流派在演奏技巧、曲目风格、指法运用等方面各具特色，比如有的流派注重旋律的婉转流畅，有的则强调节奏的明快强烈，传承着多样的音乐表现形式。</p>
            <h3 style="margin-top: 40px;">制作工艺</h3>
            <p><strong>选材：</strong>月琴的制作选材较为讲究，通常会选用质地优良的木材，如红木、花梨木等，以保证琴身的共鸣效果和整体品质。琴面多采用桐木等材质，以获得更好的音色。</p>
            <p><strong>制作过程：</strong>其制作过程涵盖了设计、选材、切割、雕刻、装配等多个环节，每一步都需要工匠具备精湛的技艺和丰富的经验。从琴身的造型塑造到琴弦的安装调试，都需精心操作。</p>
            <p><strong>音色调试：</strong>音色调试是月琴制作中关键的一环，通过调整琴弦的张力、琴身的共鸣腔等因素，来达到理想的音色效果，使月琴发出清脆悦耳、音准准确的声音。</p>
            <h3 style="margin-top: 40px;">文化意义</h3>
            <p><strong>非物质文化遗产：</strong>月琴艺术已被列入中国非物质文化遗产名录，是中华民族传统文化的重要组成部分，承载着深厚的历史文化底蕴和民族情感。</p>
            <p><strong>社会活动：</strong>月琴演奏在诸多文化活动中都占有一席之地，无论是在民间的传统节日庆典、戏曲表演现场，还是在一些文化交流活动中，都能听到月琴那独特的声音，它是文化传承与交流的重要媒介。</p>
            <h3 style="margin-top: 40px;">现代发展</h3>
            <p><strong>国际交流：</strong>随着全球文化交流的日益频繁，月琴艺术也逐渐受到世界各地音乐爱好者的关注和喜爱，开始在国际舞台上崭露头角。</p>
            <p><strong>创新传承：</strong>现代月琴艺术家们在传承传统技艺的同时，也在不断探索月琴演奏的新形式、新风格，尝试与现代音乐元素相结合，让月琴艺术在现代社会中焕发出新的活力。</p>
        </div>
        <div class="flooter">
            <strong><p>月琴艺术作为中国传统文化的瑰宝，承载着丰富的历史文化价值，也是中华民族精神的重要体现。</p></strong>
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
