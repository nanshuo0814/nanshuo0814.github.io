<template>
  <!-- 准备一个容器用来存放音乐播放器 -->
  <div id="app">
    <div id="aplayer-man"></div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import "APlayer/dist/APlayer.min.css";

// 通过 props 接收从父组件传递过来的音频数据
const props = defineProps({
  audioData: {
    type: Array,
    required: true,
  },
});

// 播放器配置信息
const info = ref({
  fixed: false,        // 是否吸底模式
  listFolded: false,   // 折叠歌曲列表
  lrcType: 3,
  autoplay: false,     // 自动播放
  preload: "auto",     // 自动预加载
  loop: "all",         // 播放循环模式
  order: "list",       // 播放顺序
});

// 初始化播放器函数
// https://aplayer.js.org/#/zh-Hans/
const initAudio = async () => {
  // 仅在客户端环境加载 APlayer
  if (typeof window !== 'undefined') {
    const {default: APlayer} = await import("APlayer"); // 动态导入 APlayer
    new APlayer({
      container: document.getElementById("aplayer-man"),
      audio: props.audioData, // 使用从父组件接收的音频数据
      ...info.value,          // 其他配置信息
    });
  }
};

// 在组件挂载时调用初始化函数
onMounted(() => {
  initAudio();
});
</script>

<style scoped>
</style>
