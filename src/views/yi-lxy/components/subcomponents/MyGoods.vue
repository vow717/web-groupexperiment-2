<template>
  <div class="equestrian-history-page">
    <header class="page-header">
      <h1>中国骑术的辉煌历程</h1>
    </header>

    <main class="page-content">
      <section class="introduction">
        <h2>骑术文化的传承</h2>
        <p>骑术，作为人类文明的重要组成部分，在中国历史长河中扮演着独特角色。它不仅是战争和交通的工具，更是文化传承的载体。</p>
      </section>

      <section class="timeline">
        <h2>骑术的演变轨迹</h2>
        <ul>
          <li>
            <div class="timeline-content">
              <img src="../../assets/史前骑术.png" alt="史前骑术" class="history-image" @click="toggleFlip">
              <div class="additional-content">
                <h3>史前时期</h3>
                <p>史前时期，人类便开始与马匹建立联系，甘肃的岩画见证了这一历史时刻。这些岩画不仅描绘了人类与马匹的互动，还展示了早期人类对马匹的崇敬和依赖。在甘肃的肃北县、嘉峪关市等地，岩画中的马匹形象生动，有的被描绘成奔跑的姿态，有的则是被人类驾驭的场景。这些图像为我们提供了宝贵的视觉证据，表明在那个时代，马匹不仅是人类狩猎和战争的伙伴，也是日常生活和精神文化的重要组成部分。通过对这些岩画的解读，我们可以窥见史前人类与马匹之间复杂而深厚的联系。</p>
                <h4>史前骑术的特点</h4>
                <p>史前骑术以实用为主，主要用于狩猎和战争。在那个时代，骑术的发展与人类的生活方式紧密相关。狩猎时，骑马可以提高追逐的速度和效率，使猎人能够更有效地捕获猎物。在战争中，骑兵的运用则能够迅速改变战场的局势，提供机动性和冲击力。</p>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <img src="../../assets/春秋战国骑术.png" alt="春秋战国骑术" class="history-image" @click="toggleFlip">
              <div class="additional-content">
                <h3>春秋战国</h3>
                <p>骑兵的正规化：春秋战国时期，各国开始正式组建骑兵部队，并将其纳入国家军队的正规编制。这些骑兵部队通常由精英战士组成，他们经过专门的训练，以适应战场上的快速移动和冲击。
战术多样化：骑兵在春秋战国时期的战术运用更加多样化。除了传统的冲锋和追击外，骑兵还用于侦察、伏击、侧翼包抄等战术，大大提高了军事行动的灵活性和效率。
装备和训练：为了适应骑兵的需要，战国时期的骑兵装备得到了改进，如马鞍、马镫的发明和使用，使骑兵在马上更加稳定，便于战斗。同时，骑兵的训练也更加系统化，包括骑术、射箭、使用长矛等方面的技能。</p>
                <h4>春秋战国骑术的发展</h4>
                <p>这一时期，骑术逐渐成为军队中的重要组成部分，它的兴起改变了传统的步兵主导的战争模式，为军事战术带来了革命性的变革。随着骑兵在战场上的作用日益凸显，各国纷纷投入资源加强骑兵建设，从而推动了军事技术和战术理论的快速发展。这不仅加速了军事力量的重组和军事思想的更新，也为后来的军事家提供了更多的战术选择和战略思考，为军事历史的发展开启了新的篇章。</p>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <img src="../../assets/唐宋骑术.png" alt="唐宋骑术" class="history-image" @click="toggleFlip">
              <div class="additional-content">
                <h3>唐宋时期</h3>
                <p>唐宋时期，骑术发展成为一项重要的体育活动，宫廷中盛行马球等马上运动。这些活动不仅锻炼了参与者的骑射技能和身体协调性，而且成为了一种社交和娱乐方式，深受皇室贵族和文武官员的喜爱。马球作为一种高雅的马上运动，不仅要求参与者具备高超的骑术，还需要精准的击球技巧和团队合作精神。此外，宫廷中还会举行各种马上比武和射猎活动，这些活动不仅提高了士兵的战斗技能，也促进了骑术和马术的进一步发展。同时，这些体育活动的流行也带动了相关产业的发展，如马匹饲养、马具制作等，对当时的经济和文化产生了深远的影响。</p>
                <h4>唐宋时期的骑术文化</h4>
                <p>骑术在唐宋时期达到了一个文化的高峰，与艺术和文学紧密相连。在这一时期，骑马不仅是军事训练和体育竞技的重要内容，还成为了文人墨客挥洒笔墨、抒发情感的对象。许多诗人如杜甫、白居易等，在他们的诗作中描绘了马上英姿和战马雄风，将骑术与英雄气概、边塞风情相结合，创作出了许多传世佳作。</p>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-content">
              <img src="../../assets/现代骑术.png" alt="现代马术" class="history-image" @click="toggleFlip">
              <div class="additional-content">
                <h3>现代马术</h3>
                <p>现代马术在中国蓬勃发展，不仅是一项竞技运动，也是人们休闲娱乐的选择。随着社会经济的快速发展和人民生活水平的不断提高，马术运动逐渐走进了大众的视野。如今，中国的马术俱乐部如雨后春笋般涌现，为广大的马术爱好者提供了专业的训练场地和设施。马术运动不再局限于专业运动员，越来越多的普通人也开始参与到这项运动中来，体验与马匹互动的乐趣。</p>
                <h4>现代马术的普及</h4>
                <p>现代马术越来越受到普通民众的喜爱，成为一项普及的体育活动。这种趋势不仅体现在城市中的马术俱乐部数量激增，还表现在各种马术培训班和体验活动的广泛开展。人们对于马术的兴趣不再仅仅局限于观看比赛，更渴望亲身体验骑马的乐趣和挑战。</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>

    <footer class="page-footer">
      <p>&copy; 2024 中国骑术发展史. 版权所有。</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'EquestrianHistoryPage',
  methods: {
    toggleFlip(event) {
      // 切换图片的翻转状态
      event.target.classList.toggle('flipped');
    }
  }
};
</script>
<style scoped>
/* 图片翻转时的样式 */
@keyframes flip {
  0% {
    transform: perspective(2000px) rotateY(0deg);
  }
  100% {
    transform: perspective(2000px) rotateY(180deg);
  }
}

.flipped {
  animation: flip 0.5s forwards; /* 动画持续0.5秒，并在结束时保持状态 */
}
.equestrian-history-page {
  max-width: 1280px;
  margin: 0 auto;
  background-color: #f5f5f5;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.page-header {
  background-color: #6a5acd;
  color: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 8px 8px 0 0;
}

.page-content {
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 0 0 8px 8px;
}

.introduction, .timeline {
  margin-bottom: 40px;
}

.timeline ul {
  list-style: none;
  padding: 0;
}

.timeline li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 40px;
}

.timeline li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 20px;
  height: 20px;
  background-color: #6a5acd;
  border-radius: 50%;
}

.timeline h3 {
  margin-bottom: 10px;
}

.history-image {
  max-width: 30%; /* 调整图片大小为30% */
  height: auto;
  margin-bottom: 15px;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 添加过渡效果 */
  cursor: pointer;
  /* 初始化时没有阴影 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
/* 鼠标悬停时的效果 */
.history-image:hover {
  transform: scale(1.1); /* 放大图片 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* 增加阴影 */
}

.page-footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
}

h1 {
  font-family: 'Arial Black', sans-serif;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.timeline-content {
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
}

.timeline-content .additional-content {
  flex: 1;
}

.timeline-content img {
  flex: 0 0 auto;
  margin-right: 20px;
}

.timeline-content h4 {
  margin-bottom: 10px;
}
</style>

