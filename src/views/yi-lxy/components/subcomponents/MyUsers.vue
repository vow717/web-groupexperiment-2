<template>
  <div id="app">
    <header>
      <h1>马中“赤兔”</h1>
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
  //router.push({ name: 'historyDetail', params: { id } }); // 使用路由名称和必要的参数进行跳转
};

const historys = ref([
  {
    id: 1,
    name: '赤兔马',
    description: '中国历史名马，本名赤菟，大红身躯，凶猛如虎。赤兔马是马中的皇者，非超凡之人不可驭，为吕布之坐骑。所谓“人中吕布，马中赤兔”，赤兔马可日行千里，夜走八百，渡水登山如履平地。赤兔马 中国历史名马，本名赤菟，大红身躯，凶猛如虎。赤兔马是马中的皇者，非超凡之人不可驭，为吕布之坐骑。所谓“人中吕布，马中赤兔”，赤兔马可日行千里，夜走八百，渡水登山如履平地。',
    image: 'src/views/yi-lxy/assets/赤兔.png'
  },
  {
    id: 2,
    name: '的卢马',
    description: '中国历史上前十名马之一，三国时期刘备的坐骑，其额上有白色斑点，奔跑的速度飞快，在三国历史中最显眼的一处便是背负刘备跳过阔数丈的檀溪，摆脱了后面的追兵，救了刘备一命，这一跳奠定了其三国名马的地位',
    image: 'src/views/yi-lxy/assets/的卢.jpg'
  },
  {
    id: 3,
    name: '绝影马',
    description: '曹操的坐骑，中国十大最强大的马匹之一。在讨伐张绣之战中，曹操被骗中贾诩的计谋，仓皇逃走，全靠着绝影逃了出来。',
    image: 'src/views/yi-lxy/assets/绝影.jpg'
  },
  {
    id: 4,
    name: '乌骓马',
    description: '中国历史名马，楚霸王项羽的坐骑，多年来南征北战，功勋无数，在项羽时期号称天下第一骏马。乌骓全身黝黑，像黑缎子一样，油光放亮，唯有四个马蹄子部位白得赛雪。',
    image: 'src/views/yi-lxy/assets/乌骓.jpg'
  },
  {
    id: 5,
    name: '黄骠马',
    description: '中国历史名马黄骠马的含义是“黄马带白点”。此马的白点多位于肚子和两肋处，最主要的是马头上有白毛，形状圆如满月，所以别名“西凉玉顶干草黄”。黄骠马即使喂饱了草料，肋条也显露在外，所以另有别名“透骨龙”。',
    image: 'src/views/yi-lxy/assets/绝影.jpg'
  },
  {
    id: 6,
    name: '照夜玉狮子',
    description: '照夜玉狮子通体上下，一色雪白，没有半根杂色，浑身雪白，传说能日行千里，产于西域，是马中的极品。此马生下时犹如雄狮般暴烈，但长大后会被赶出马群，变得温顺。',
    image: 'src/views/yi-lxy/assets/照夜玉狮子.jpg'
  },
  {
    id: 7,
    name: '爪黄飞电',
    description: '爪黄飞电是曹操的爱驹之一，其气质高贵非凡，傲气不可一世。这匹马通体雪白，四个蹄子呈黄色，因此得名“爪黄飞电”。',
    image: 'src/views/yi-lxy/assets/爪黄飞电.jpg'
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