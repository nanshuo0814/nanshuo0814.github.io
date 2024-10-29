<template>
  <!-- 准备一个容器用来存放音乐播放器 -->
  <div id="aplayer-global"></div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
// import APlayer from "APlayer";
import "APlayer/dist/APlayer.min.css";

// 通过props接收从父组件传递过来的音频数据
const props = defineProps({
  audioData: {
    type: Array,
    required: true
  }
});

// 播放器配置信息
const info = ref({
  fixed: true, // 开启吸底模式
  listFolded: true, // 折叠歌曲列表
  lrcType: 3,
  autoplay: false, // 开启自动播放
  preload: "auto", // 自动预加载歌曲
  loop: "all", // 播放循环模式、all全部循环 one单曲循环 none只播放一次
  order: "random", //  播放模式，list列表播放, random随机播放
});

// 初始化播放器函数
const initAudio = async () => {
  if (typeof window !== 'undefined') {
    const {default: APlayer} = await import("APlayer"); // 动态导入 APlayer
    // https://aplayer.js.org/#/zh-Hans/
    // 创建一个音乐播放器实例，并挂载到DOM上，同时进行相关配置
    const ap = new APlayer({
      container: document.getElementById("aplayer-global"),
      audio: props.audioData, // 使用从父组件接收的音频数据
      ...info.value, // 其他配置信息
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