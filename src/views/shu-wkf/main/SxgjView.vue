<script setup lang="ts"></script>
<template>
  <div class="writing-tools-section">
    <!-- 毛笔介绍 -->
    <div class="tool-item">
      <el-card style="height: 100%">
        <template #header><h1>毛笔</h1></template>
        <p>
          毛笔种类繁多，按材质可分为羊毫、狼毫、兼毫等。羊毫柔软，吸墨量大，适合书写较为圆润饱满的笔画；狼毫弹性佳，书写线条挺拔有力；兼毫则兼具两者特点。毛笔的型号从大到小，不同型号适用于书写不同大小的字。例如，写榜书常用大号毛笔，而小楷则需小号毛笔。
        </p>

        <img src="@/assets/wkfImgs/sxgj/mb.png" style="width: 100%" />
      </el-card>
    </div>
    <!-- 墨介绍 -->
    <div class="tool-item">
      <el-card style="height: 100%">
        <template #header><h1>墨</h1></template>
        <p>
          墨有墨锭和墨汁之分。墨锭制作工艺复杂，通常以松烟、油烟等为原料，经多道工序制成，墨色浓郁持久。使用墨锭时需在砚台上加水研磨，研磨过程可根据需求控制墨的浓淡。墨汁则使用方便快捷，但在韵味和层次感上可能略逊一筹。墨的品质影响书写的色泽和韵味。
        </p>

        <img src="@/assets/wkfImgs/sxgj/m.png" style="width: 100%" />
      </el-card>
    </div>
    <!-- 纸介绍 -->
    <div class="tool-item">
      <el-card style="height: 100%">
        <template #header><h1>纸</h1></template>
        <p>
          宣纸是书法常用纸张，具有质地绵韧、纹理美观、吸水性强等特点，能使笔墨更好地渗透晕染，呈现出丰富的墨韵变化。麻纸则相对粗糙，古朴厚重，另有皮纸等多种类型。不同纸张的特性决定了书写时的心境和效果呈现。
        </p>

        <img src="@/assets/wkfImgs/sxgj/z.png" style="width: 100%" />
      </el-card>
    </div>
    <!-- 砚介绍 -->
    <div class="tool-item">
      <el-card style="height: 100%">
        <template #header><h1>砚</h1></template>
        <p>
          砚台有端砚、歙砚、洮砚、澄泥砚等著名种类。端砚石质细腻温润，发墨如油；歙砚纹理丰富，贮墨不涸；洮砚色泽碧绿，质地坚密；澄泥砚制作工艺独特。砚台主要用于研磨墨锭，其质地和功能特点对书写时墨的表现有重要影响。
        </p>

        <img src="@/assets/wkfImgs/sxgj/y.png" style="width: 100%" />
      </el-card>
    </div>

    <!-- 古今对比部分 -->
    <div class="comparison-section">
      <el-card style="height: 100%">
        <template #header><h1>古今对比</h1></template>
        <p>
          古代书写工具如毛笔、墨锭、宣纸、砚台等，制作工艺精湛，使用讲究，注重书写的韵味和艺术表现力。例如，毛笔的选材和制作需经过多道精细工序，墨锭的研磨也需耐心细致，才能调出合适的墨色。而现代书写工具，如中性笔、圆珠笔、打印纸等，具有使用便捷、书写速度快等优点。
        </p>
        <p>
          现代书写工具的出现对书写体验和书法艺术发展产生了多方面的影响。一方面，它让书写更加普及和高效，方便人们日常记录和信息传播；另一方面，在书法艺术领域，虽然传统书写工具依然占据重要地位，但现代工具也为一些新的艺术形式和创作手法提供了可能，比如利用数字技术进行书法创作和展示等。
        </p>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.writing-tools-section {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}

.tool-item {
  margin: 30px;
  width: 45%;
}
.tool-item:hover {
  transform: scale(1.05);
  transition: transform 0.5s;
  cursor: pointer;
}
.comparison-section {
  margin-top: 30px;
}
</style>
