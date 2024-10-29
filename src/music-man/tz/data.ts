import {ref} from 'vue';
import { APlayerMusic} from "../APlayerMusic";

// 定义要传递给音乐播放器组件的音频数据
export const data = ref<APlayerMusic[]>([
    {
        name: "天天",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E9%99%B6%E5%96%86%20-%20%E5%A4%A9%E5%A4%A9.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "小镇姑娘",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E9%99%B6%E5%96%86%20-%20%E5%B0%8F%E9%95%87%E5%A7%91%E5%A8%98.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "",
        theme: "rgb(61, 162, 230)"
    },
    {
        name: "就是爱你",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E9%99%B6%E5%96%86%20-%20%E5%B0%B1%E6%98%AF%E7%88%B1%E4%BD%A0.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "流沙",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E9%99%B6%E5%96%86%20-%20%E6%B5%81%E6%B2%99.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "爱我还是他",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E9%99%B6%E5%96%86%20-%20%E7%88%B1%E6%88%91%E8%BF%98%E6%98%AF%E4%BB%96.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "",
        theme: "#baf"
    },
]);