<template>
  <div class="login-container">
    <h1 class="login-title">铁骑如飞战鼓擂  将士英勇斩敌威</h1>
    <!-- Logo区域 -->
    <div class="logo-box">
      <img class="logo" src="../assets/御之logo.png" alt="御字Logo" />
    </div>
    <div class="login-box">
      <!-- 头像区域 -->
    
      <!-- 表单区域 -->
      <div class="form-login">
        <!-- 登录名称 -->
        <div class="form-group">
          <label for="username"><span style="color:black;">登录名称：</span></label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="请输入登录名称"
            autocomplete="off"
            v-model.trim="username"
          />
        </div>
        <!-- 登录密码 -->
        <div class="form-group">
          <label for="password"><span style="color:black;">登录密码：</span></label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="请输入登录密码"
            v-model.trim="password"
          />
        </div>
        <!-- 登录按钮 -->
      <div class="form-group">
        <button type="button" class="btn" @click="onLogin">登录</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref  } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const username = ref('')
const password = ref('')
const onLogin = () => {
  if (username.value === 'admin' && password.value === '123456') {
    router.push('/yi-lxy/home')
    return localStorage.setItem('token', 'Bearer xxx')
  } else {
    alert('用户名或密码输入错误')
    localStorage.removeItem('token')
  }
}
</script>

<style lang="less" scoped>
.login-container {
  // 设置背景图片
  background-image: url('../assets/骑马.jpg'); // 假设您的骑马图片名为 horse_background.jpg 并放在 assets 文件夹下
  background-size: cover; // 让背景图片覆盖整个容器
  background-position: center; // 将背景图片居中显示
  background-repeat: no-repeat; // 防止背景图片重复
  height: 100vh; // 将容器高度设置为视口高度的100%
  width: 100%; // 将容器宽度设置为100%
  position: relative; // 确保子元素能够正确定位
  
  .login-title {
    font-size: 2.5rem; // 设置字体大小
    color:brown; // 设置字体颜色（可以根据背景图片调整）
    text-align: center; // 居中对齐
    padding: 130px; // 添加顶部外边距以与容器顶部保持一定距离
    margin-bottom: 1rem; // 添加底部外边距以与登录框保持一定距离
    font-weight: bold; // 设置字体加粗
  }

  .login-box {
    width: 400px;
    height: 250px;
    background-color:rgba(255, 255, 0, 0.247); // 可以设置半透明背景以便更好地看到背景图片
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); // 稍微调整阴影以增强立体感
    
    .form-login {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 1.5rem !important;
      
      .form-group {
        padding-top: 20px;
        
        .btn {
          background-color: deepskyblue;
          color: #fff;
          border: none; // 移除按钮边框
          padding: 0.75rem 1.5rem; // 调整按钮内边距
          cursor: pointer; // 添加鼠标悬停效果
        }
      }
    }
  }// Logo样式
  .logo-box {
    position: absolute;
    top: 20px; // 根据需要调整位置
    left: 20px; // 根据需要调整位置
    
    .logo {
      width: 100px; // 根据logo图片的实际大小调整
      height: auto; // 保持图片的比例
    }
  }
}

.form-control {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc; // 添加输入框边框
  border-radius: 3px; // 添加输入框圆角
}

.avatar-box {
  position: absolute;
  width: 100%;
  top: -65px;
  left: 0;
  
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef5a;
    background-color: #ffffff46;
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