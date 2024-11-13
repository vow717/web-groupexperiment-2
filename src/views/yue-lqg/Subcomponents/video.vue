<template>
  <div class="Wontainer" ref="videoContainer">
    <video id="floatingVideo" autoplay loop class="sticky-video">
      <source src="../../../assets/lqg/video/1.mp4" type="video/mp4">
      您的浏览器不支持播放此视频。
    </video>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const videoContainer = ref(null);

onMounted(() => {
  if (videoContainer.value instanceof HTMLElement) {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      const video = videoContainer.value.querySelector('video');
      if (entry.isIntersecting) {
        video.classList.remove('small');
      } else {
        video.classList.add('small');
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.01// 减小阈值，使得在视频变为小窗口后更容易触发回调
    });

    observer.observe(videoContainer.value);
  } else {
    console.error('videoContainer的引用不是HTMLElement类型。');
  }
});
</script>

<style scoped>
.Wontainer {
    position: relative;
    overflow: hidden;
}

.Wontainer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../../../assets/lqg/video/22.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: 1;
}

video {
    width: 100%;
    height: 500px;
    outline: none;
    object-fit: contain;
    position: relative;
    z-index: 2;
}

video::-webkit-media-controls {
    display: none;
}

video::-webkit-media-controls-play-button {
    display: none;
}

video::-webkit-media-controls-start-playback-button {
    display: none;
}

video::-moz-focus-inner {
    border: 0;
}

.sticky-video.small {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 300px;
    height: auto;
    z-index: 1000;
}
</style>
