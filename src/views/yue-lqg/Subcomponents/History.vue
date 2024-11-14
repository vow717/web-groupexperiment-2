<template>
  <div id="app">
    <header>
      <h1>历史之“乐”</h1>
    </header>
    <main>
      <section class="history-gallery">
        <div v-for="(history, index) in paginatedhistorys" :key="'history-' + index" class="history-item">
          <div class="history-image" @click="navigateToDetail(history.id)">
            <img :src="history.image" :alt="history.name">
          </div>
          <div class="history-info">
            <h2>{{ history.name }}</h2>
            <p>{{ history.description }}</p>
          </div>
        </div>
      </section>
      <div class="pagination">
        <button @click="currentPage -= 1" :disabled="currentPage <= 1">上一页</button>
        <span style="margin-top: 10px;">第 {{ currentPage }} 页</span>
        <button @click="currentPage += 1" :disabled="currentPage >= totalPages">下一页</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToDetail = (id) => {
  router.push({ name: 'historyDetail', params: { id } }); // 使用路由名称和必要的参数进行跳转
};

const historys = ref([
  {
    id: 1,
    name: '周朝：乐之完备体系',
    description: '周朝时期，六艺教育体系成熟，“乐”地位重要。包含六代乐舞，如《云门大卷》《咸池》等用于不同祭祀。且设专门官吏掌管音乐及教育，大学以礼乐教育为核心。',
    image: 'src/assets/lqg/history/h1.jpg'
  },
  {
    id: 2,
    name: '春秋战国：思想争鸣与地域特色',
    description: '此时期百家争鸣，儒家推崇“乐”可陶冶性情，墨家“非乐”。各诸侯国因地域文化差异，音乐表现形式与风格不同，如楚国《九歌》。',
    image: 'src/assets/lqg/history/h2.jpg'
  },
  {
    id: 3,
    name: '秦汉：乐府与雅俗融合',
    description: '汉朝设乐府机构，收集整理创作民间音乐。秦汉时雅乐用于宫廷重大活动，俗乐在民间流传，二者融合使音乐形式更丰富。',
    image: 'src/assets/lqg/history/h3.jpg'
  },
  {
    id: 4,
    name: '魏晋南北朝：民族融合与理论发展',
    description: '民族交流频繁，少数民族音乐与中原音乐融合，胡笳、羌笛等传入中原。同时音乐理论发展，如嵇康《声无哀乐论》提出音乐本质是“和”。',
    image: 'src/assets/lqg/history/h4.jpg'
  },
  {
    id: 5,
    name: '隋唐：宫廷与民间音乐繁荣',
    description: '隋唐是文化鼎盛时期，宫廷音乐繁荣，设教坊、梨园等机构。宫廷有歌舞、器乐演奏等形式，如《霓裳羽衣曲》。民间音乐兴起，有说唱、戏曲等形式。',
    image: 'src/assets/lqg/history/h5.jpg'
  },
  {
    id: 6,
    name: '宋元：戏曲音乐成熟与理论深化',
    description: '宋代后戏曲音乐成熟，元代元杂剧鼎盛。宋元时期音乐理论也有进展，如沈括《梦溪笔谈》对音乐声学等研究，《唱论》论述声乐演唱理论。',
    image: 'src/assets/lqg/history/h6.jpg'
  },
  {
    id: 7,
    name: '明清：民间与戏曲音乐发展',
    description: '明清民间音乐多样化发展，如江南丝竹乐、广东粤曲等。戏曲音乐进一步发展，京剧形成，昆曲、越剧等也迅速发展。',
    image: 'src/assets/lqg/history/h7.jpg'
  },
]);

const pageSize = ref(6);
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(historys.value.length / pageSize.value));

const paginatedhistorys = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return historys.value.slice(start, end);
});
</script>
<style scoped>
body, #app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

header {
  color: #000000;
  padding: 20px 0;
  text-align: center;
}

header h1 {
  margin: 0;
  font-size: 2.4em;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.history-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 1200px;
}

.history-item {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.history-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.history-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.history-info {
  padding: 15px;
}

.history-info h2 {
  margin: 0;
  margin-bottom: 10px;
  font-size: 24px;
  color: #005792;
}

.history-info p {
  font-size: 16px;
  color: #555;
}

.pagination {
  display: flex;
  gap: 10px;
  margin: 30px 0;
}

.pagination button {
  padding: 10px 15px;
  font-size: 16px;
  background-color: #005792;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination button:disabled {
  background-color: #aaa;
}

.pagination button:hover:not(:disabled) {
  background-color: #003d5b;
}
</style>