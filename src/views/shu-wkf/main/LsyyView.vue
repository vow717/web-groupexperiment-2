<script setup lang="ts"></script>
<template>
  <div class="history-section">
    <!-- 时间轴容器 -->
    <el-timeline>
      <!-- 甲骨文节点 -->
      <el-timeline-item :timestamp="'公元前 1600 - 公元前 1046 年'" placement="top">
        <div>
          <h1>甲骨文出现</h1>
          <p>
            主要刻写在龟甲和兽骨上，用于占卜记事。文字象形程度高，笔画瘦硬方直，具有古朴神秘的特点。代表作品有《殷墟甲骨刻辞》。
          </p>
          <img src="@/assets/wkfImgs/lsyy/jgw.png" alt="甲骨文图片" class="timeline-img" />
        </div>
      </el-timeline-item>
      <!-- 篆书节点 -->
      <el-timeline-item :timestamp="'秦朝'" placement="top">
        <div>
          <h1>篆书兴起</h1>
          <p>
            笔画规整，粗细均匀，结构对称，具有端庄典雅的风格。秦朝统一文字采用篆书，促进了文化交流与国家统一。代表作品有《峄山碑》。
          </p>
          <img src="@/assets/wkfImgs/lsyy/zs.png" alt="篆书图片" class="timeline-img" />
        </div>
      </el-timeline-item>
      <!-- 隶书节点 -->
      <el-timeline-item :timestamp="'汉朝'" placement="top">
        <div>
          <h1>隶书变革</h1>
          <p>
            简化了篆书的笔画，变圆为方，化弧为直，书写更加简便快捷。在汉代广泛应用于官方文书和碑刻。代表作品有《曹全碑》。
          </p>
          <img src="@/assets/wkfImgs/lsyy/ls.png" alt="隶书图片" class="timeline-img" />
        </div>
      </el-timeline-item>
      <!-- 楷书节点 -->
      <el-timeline-item :timestamp="'唐朝'" placement="top">
        <div>
          <h1>楷书成熟</h1>
          <p>
            笔画规整，结构严谨，具有很高的规范性和艺术性。唐朝楷书名家辈出，如欧阳询、颜真卿、柳公权等。代表作品有颜真卿的《颜勤礼碑》。
          </p>
          <img src="@/assets/wkfImgs/lsyy/ks.png" alt="楷书图片" class="timeline-img" />
        </div>
      </el-timeline-item>
      <!-- 行书节点 -->
      <el-timeline-item :timestamp="'魏晋南北朝'" placement="top">
        <div>
          <h1>行书演变</h1>
          <p>
            介于楷书与草书之间，兼具实用性与艺术性，书写流畅自然，如行云流水。代表作品有王羲之的《兰亭序》。
          </p>
          <img src="@/assets/wkfImgs/lsyy/xs.png" alt="行书图片" class="timeline-img" />
        </div>
      </el-timeline-item>
      <!-- 草书节点 -->
      <el-timeline-item :timestamp="'唐朝'" placement="top">
        <div>
          <h1>草书兴起</h1>
          <p>
            笔画连绵，书写速度快，极具艺术表现力和情感张力。张旭、怀素是草书大家。代表作品有怀素的《自叙帖》。
          </p>
          <img src="@/assets/wkfImgs/lsyy/cs.png" alt="草书图片" class="timeline-img" />
        </div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped>
p {
  font-size: 30px;
}
.history-section {
  padding: 20px;
}

.timeline-img {
  width: 500px;
  height: 450px;
  margin-top: 10px;
  display: block;
  border-radius: 5px;
}
</style>
