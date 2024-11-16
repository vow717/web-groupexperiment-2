<template>
  <div class="equestrian-culture">
    <header>
      <h1>骑术要求探索</h1> <!-- 修改了标题以匹配内容 -->
      <nav>
        <ul>
          <li><a href="#" @click.prevent="selectSection('skills')"><strong style="color: yellow;">技巧</strong></a></li>
          <li><a href="#" @click.prevent="selectSection('equipment')"><strong style="color: yellow;">装备</strong></a></li>
          <li><a href="#" @click.prevent="selectSection('competitions')"><strong style="color: yellow;">比赛</strong></a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      
      <section v-if="selectedSection === 'skills'" class="section skills-section">
        <h2>技巧</h2>
        <img src="../../assets/跨栏.jpg" alt="骑术技巧" class="section-image"> <!-- 添加图片 -->
        <p style="color: black;">骑术技巧包括上马、下马、控制速度、转向、跳跃等。熟练的骑手能够通过微妙的身体语言和马匹建立深厚的联系，实现高度的协同。</p>
        <p style="color: black;">除了基本技巧外，骑手还需要掌握平衡感、节奏感以及与马匹的默契配合，这些都是在长时间的训练和实践中逐渐培养出来的。</p>
        <!-- 更多技巧内容 -->
      </section>
      
      <section v-if="selectedSection === 'equipment'" class="section equipment-section">
        <h2>装备</h2>
        <img src="../../assets/装备.jpg" alt="骑术装备" class="section-image"> <!-- 添加图片 -->
        <p style="color: black;">骑术装备包括马鞍、马镫、马鞭、头盔、护具等。这些装备不仅有助于骑手更好地控制马匹，还能保护骑手和马匹的安全。</p>
        <p style="color: black;">选择合适的装备对于骑手来说至关重要，它不仅能提高骑行的舒适度，还能在关键时刻保护骑手免受伤害。</p>
        <!-- 更多装备内容 -->
      </section>
      
      <section v-if="selectedSection === 'competitions'" class="section competitions-section">
        <h2>比赛</h2>
        <img src="../../assets/比赛.jpg" alt="骑术比赛" class="section-image"> <!-- 添加图片 -->
        <p style="color: black;">骑术比赛包括盛装舞步、障碍赛、越野赛等多种类型。这些比赛不仅考验骑手的技术和策略，还展示了马匹的力量和美感。</p>
        <p style="color: black;">在比赛中，骑手需要充分发挥自己的技能，与马匹紧密配合，以最短的时间完成赛道或展现出最优美的动作。</p>
        <!-- 更多比赛内容 -->
      </section>
    
    </main>
    
    <footer>
      <p>© 2024 骑术要求探索. 版权归Long所有.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedSection = ref('skills') // 修改默认显示部分为技巧

const selectSection = (section) => {
  selectedSection.value = section
}
</script>

<style scoped>
.equestrian-culture {
  font-family: Arial, sans-serif;
  max-width: 1210px;
  margin: 0 auto;
  padding: 20px;
  
  /* 添加径向渐变背景 */
  background: radial-gradient(circle, #ff7e5f, #feb47b, #ffffff); /* 从中心向外，从#ff7e5f渐变到#feb47b，再到#ffffff */
  
  /* 如果需要，确保元素有足够的空间来显示渐变效果 */
  /* 这里的宽度和高度通常是由内容或父元素决定的，但你可以根据需要调整 */
  /* width: 100%; */ /* 如果需要的话，可以设置宽度 */
  /* height: auto; */ /* 高度通常会自动调整以适应内容 */
  /* 或者，如果你想要一个特定的最小高度来显示完整的渐变 */
  /* min-height: 300px; */ /* 例如，设置最小高度为300px */
}

header {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: center; /* 确保内容在header中居中 */
  width: 100%; /* 确保header占据父容器的全部宽度 */
  margin: 0 auto; /* 这对于块级元素居中很有用，但header默认就是块级元素且宽度为100%，所以这里可能不需要 */
  /* 其他样式保持不变 */
}

header h1 {
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0 auto; /* 这将ul水平居中，但前提是ul不是块级元素占满全宽或需要指定一个宽度 */
  display: flex; /* 使用flex布局来更好地控制子元素的对齐和分布 */
  justify-content: center; /* 水平居中flex子元素 */
}

nav ul li {
  display: inline;
  margin: 0 10px; /* 在li之间添加水平间距 */
}

nav ul li a {
  text-decoration: none;
  color: #333;
}

nav ul li a:hover {
  text-decoration: underline;
}

main {
  margin-bottom: 20px;
}

.section {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9; /* 添加背景颜色 */
}

.section h2 {
  color: #333;
}

.section-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 15px; /* 图片居中并添加底部间距 */
}

/* 为每个部分添加独特的颜色或样式（可选） */
.skills-section {
  background-color: #e0f7fa; /* 浅青色背景 */
}

.equipment-section {
  background-color: #ffe0b2; /* 浅黄色背景 */
}

.competitions-section {
  background-color: #f0e68c; /* 浅橙色背景 */
}

footer {
  text-align: center;
  font-size: 0.8em;
  color: #666;
}
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

/* body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
} */

body {
  margin: 0;
  display: flex;
  place-items: center;
  height: 100%;
}
html{
  height: 100%;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

/* #app {
  width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
} */

#app {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  height: 100%;
}
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

</style>