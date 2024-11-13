<template>
    <div class="container">
        <h1>发展历史</h1>
        <!-- 简介内容 -->
        <section class="introduction" v-for="item in jian" :key="item.title">
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
        </section>
        <!-- 特色部分 -->
        <section class="features">
            <div class="feature" :class="index === 2 ? '' : 'bor'" v-for="(item, index) in arr" :key="item.title">
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// 简介内容
const jian = ref([
    { title: '乐的起源', content: '乐在中国古代文化中有着深厚的渊源。早在原始社会时期，人们在劳动过程中便产生了节奏韵律，如敲击石器等简单行为，这可视为乐的萌芽。这些原始的节奏表达伴随着人们的生活，如祭祀、庆祝狩猎成功等活动，逐渐形成了早期简单的音乐形式。' },
    { title: '先秦时期乐的发展', content: '先秦时期，乐得到了极大的发展。周公制礼作乐，乐成为了礼仪制度的重要组成部分。此时，乐与礼相互交融，不同的礼仪场合有相应的音乐形式。例如，祭祀天地祖先有庄重肃穆的雅乐，宫廷宴会则有舒缓优美的燕乐。在乐器方面，钟、鼓、磬等乐器广泛使用，并且出现了如《韶》《武》等著名的乐舞，孔子闻《韶》，曾赞其“尽善尽美”。' },
    { title: '秦汉至隋唐乐的演变', content: '秦汉时期，国家统一，乐在继承先秦传统的基础上进一步发展。乐府机构的设立，广泛采集民间歌谣，使得乐更加贴近民众生活。至隋唐时期，随着经济繁荣和文化交流，乐达到了一个高峰。宫廷乐舞规模宏大，如著名的《霓裳羽衣曲》。同时，乐器种类更加丰富，琵琶、二胡等从西域传入并逐渐融入本土音乐，中外音乐文化在此时期深度融合。' },
    { title: '宋元明清乐的丰富与传承', content: '宋元时期，市民文化兴起，说唱音乐、戏曲音乐等新的音乐形式蓬勃发展。宋词的繁荣与音乐密切相关，大量的词牌有其独特的音乐曲调。明清时期，戏曲音乐成为乐的重要代表，如昆曲、京剧等。这些戏曲不仅在唱腔上各具特色，在表演形式上也将音乐、舞蹈、文学等多种艺术形式完美结合，成为中国传统文化的瑰宝。同时，民间的器乐演奏也不断发展，形成了各具地方特色的音乐流派。' }
])

const arr = ref([
    { title: '乐在文化中的地位', content: '乐在中国传统六艺中占据重要地位，它不仅仅是一种艺术形式，更是一种文化传承和道德教化的工具。通过乐，可以陶冶人的情操，培养人的品德。在儒家思想中，乐与礼相辅相成，礼规范人的行为，乐则调节人的情感，使人达到一种和谐的状态。' },
    { title: '乐与社会生活的联系', content: '乐贯穿于中国古代社会的各个层面。在宫廷，它是彰显皇家威严和礼仪的重要元素；在民间，它是人们娱乐、庆祝节日、婚丧嫁娶等活动不可或缺的部分。不同地区有不同风格的音乐，如北方音乐豪放爽朗，南方音乐婉转悠扬，这些音乐反映了当地的风土人情和人们的生活状态。' },
    { title: '乐的教育意义', content: '在中国古代教育体系中，乐教是重要的一环。从孩童时期开始，人们就通过学习音乐来培养审美能力、节奏感和协作精神。在学校教育中，乐与其他五艺共同培养全面发展的人才。学习乐器、演唱歌曲、学习乐舞等活动，锻炼了人的身心，促进了文化知识的传承和民族精神的凝聚。' }
])
</script>

<style scoped>
.container {
    position: relative; /* 使子元素绝对定位相对于这个容器 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
}

.container::before {
    content: ''; /* 伪元素需要有内容 */
    position: absolute; /* 绝对定位 */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../../../assets/lqg//video/33.jpg'); /* 背景图片路径 */
    background-size: cover; /* 背景图片覆盖整个容器 */
    background-position: center; /* 背景图片居中显示 */
    opacity: 0.5; /* 设置透明度，范围为0（完全透明）到1（完全不透明） */
    z-index: 1; /* 确保伪元素在底层 */
}

.container > * {
    position: relative; /* 确保内容在伪元素之上 */
    z-index: 2; /* 内容在伪元素之上 */
}


p {
    line-height: 20px;
    color: rgb(8, 8, 8); /* 设置段落字体颜色为白色 */
}

h1, h2, h3 {
    color: rgb(2, 2, 2); /* 设置标题字体颜色为白色 */
    margin-bottom: 10px;
}

.bor {
    border-right: 1px solid rgb(255, 255, 255); /* 使边框颜色为白色 */
}

.introduction {
    padding: 2rem; /* 根据内容调整内边距 */
}

.features {
    display: flex;
    justify-content: space-around; /* 特色项目平均分布在容器中 */
    flex-flow: row wrap; /* 响应式布局：允许元素根据需要换行 */
    padding: 2rem;
}

.feature {
    flex: 1; /* 特色项占据等量空间 */
    min-width: 200px; /* 最小宽度保证内容的展现 */
    margin: 1rem; /* 根据需要添加外边距 */
}
</style>
