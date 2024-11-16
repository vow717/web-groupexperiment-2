<template>
  <div class="layout-aside-container">
    <!-- 左侧边栏列表 -->
    <ul class="menu">
      <li class="menu-item">
        <router-link to="/yi-lxy/home/rights">骑术文化</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/yi-lxy/home/goods">骑术发展史</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/yi-lxy/home/users">马中"赤兔"</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/yi-lxy/home/orders">骑术要求</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
// 确保 body 或其他父容器的高度足够
body, html {
  height: 100%;
  margin: 0;
}
 
.layout-aside-container {
  width: 250px;
  height: 100vh; // 使用视口高度，确保侧边栏占据整个屏幕高度
  border-right: 1px solid #eaeaea;
  background-image: url('../../assets/骑马女孩.png'); // 确保路径正确
  background-size: cover; // 使背景图片覆盖整个容器
  background-position: center; // 背景图片居中
  background-repeat: no-repeat; // 防止背景图片重复
}
 

.menu {
  list-style-type: none;
  padding: 0;
  .menu-item {
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover {
      background-color: #efefef;
      cursor: pointer;
    }
    a {
      display: block;
      color: black;
      padding-left: 30px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
/* 设置路由高亮效果 */
.router-link-active {
  background-color: #efefef;
  box-sizing: border-box;
  position: relative;
  /* 伪元素实现路由高亮效果 */
  &::before {
    content: ' ';
    display: block;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #42b983;
  }
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
