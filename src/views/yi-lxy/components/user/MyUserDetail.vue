<template>
  <button @click="goBack">后退</button>
  <h4>编号{{ id }}的详情页面</h4>
  <div v-if="id === '1'">
    <p>这是编号1的详细信息。</p>
    <!-- 可以添加更多图片 -->
  </div>
  <div v-else-if="id === '2'">
    <p>这是编号2的详细信息。</p>
    <!-- 可以添加更多详情内容 -->
  </div>
  <div v-else-if="id === '3'">
    <p>这是编号3的详细信息。</p>
    <!-- 可以添加更多详情内容 -->
  </div>
  <div v-else>
    <p>未找到该编号的详细信息。</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  id: String
})
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<style scoped>
button {
  background-color: #409eff;
  color: #fff;
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