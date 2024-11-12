<script setup lang="ts">
import { ref } from 'vue'
const imgs = ref<string[]>([
  '@/assets/wkfImgs/image1.png',
  '@/assets/wkfImgs/image2.png',
  '@/assets/wkfImgs/image3.png',
  '@/assets/wkfImgs/image4.png'
])
</script>
<template>
  <div class="block text-center">
    <el-carousel height="500px" type="card" :interval="3000">
      <el-carousel-item>
        <img src="@/assets/wkfImgs/image1.png" alt="图片" style="width: 100%; height: 500px" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/wkfImgs/image2.png" alt="图片" style="width: 100%; height: 500px" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/wkfImgs/image3.png" alt="图片" style="width: 100%; height: 500px" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/wkfImgs/image4.png" alt="图片" style="width: 100%; height: 500px" />
      </el-carousel-item>
    </el-carousel>

    <div style="display: flex">
      <el-card style="max-width: 50%">
        <template #header><h1>书</h1></template>
        <p>
          <span class="highlight">六艺之“书”</span>
          ，乃华夏文化传承的关键脉络。它远超普通书写，将文字构造、书写规则与书法艺术精妙融合。从古老甲骨文到规整楷书，其演变承载历史变迁，借由字符传递思想智慧，在岁月长河中熠熠生辉，是深入领略古代文化精髓的
          <span class="highlight">必经之门</span>
          。
        </p>
      </el-card>
      <el-card style="max-width: 50%">
        <p>
          书写规则确保了文字在交流传播中的准确性与规范性，从笔画顺序到字体结构布局，都有严格要求。
        </p>
        <p>
          而书法艺术则是“书”的
          <span class="highlight">灵魂升华</span>
          ，通过笔墨的浓淡干湿、线条的曲直粗细、结构的疏密虚实，展现出独特的美感与意境。古代“书”追求意境神韵与文化内涵的表达，是文人墨客修身养性、抒情表意的重要方式，如今虽书写方式
          <span class="highlight">多元</span>
          ，但古代“书”所蕴含的深厚文化底蕴与艺术精神仍具有
          <span class="highlight">不可替代</span>
          的价值。
        </p>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.highlight {
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
}
</style>
