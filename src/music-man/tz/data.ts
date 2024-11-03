import {ref} from 'vue';
import { APlayerMusic} from "../APlayerMusic";

// 定义要传递给音乐播放器组件的音频数据
export const data = ref<APlayerMusic[]>([
    {
        name: "二十二",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E4%BA%8C%E5%8D%81%E4%BA%8C.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/tz/lrc/%E4%BA%8C%E5%8D%81%E4%BA%8C_-_%E9%99%B6%E5%96%86_www.eev3.com.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "Melody",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/Melody.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/tz/lrc/Melody_-_%E9%99%B6%E5%96%86_www.eev3.com.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "今天你要嫁给我",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E4%BB%8A%E5%A4%A9%E4%BD%A0%E8%A6%81%E5%AB%81%E7%BB%99%E6%88%91.mp4",
        cover: "/assets/music-man/tz.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/tz/lrc/%E4%BB%8A%E5%A4%A9%E4%BD%A0%E8%A6%81%E5%AB%81%E7%BB%99%E6%88%91_-_%E9%99%B6%E5%96%86&%E8%94%A1%E4%BE%9D%E6%9E%97_www.eev3.com.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "找自己",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E6%89%BE%E8%87%AA%E5%B7%B1.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/tz/lrc/%E6%89%BE%E8%87%AA%E5%B7%B1_-_%E9%99%B6%E5%96%86_www.eev3.com.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "普通朋友",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E6%99%AE%E9%80%9A%E6%9C%8B%E5%8F%8B.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/tz/lrc/%E6%99%AE%E9%80%9A%E6%9C%8B%E5%8F%8B_-_%E9%99%B6%E5%96%86_www.eev3.com.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "蝴蝶",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E8%9D%B4%E8%9D%B6.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/tz/lrc/%E8%9D%B4%E8%9D%B6_-_%E9%99%B6%E5%96%86_www.eev3.com.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "天天",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E9%99%B6%E5%96%86%20-%20%E5%A4%A9%E5%A4%A9.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "飞机场的10.30",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E9%A3%9E%E6%9C%BA%E5%9C%BA%E7%9A%8410.30.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/tz/lrc/%E9%A3%9E%E6%9C%BA%E5%9C%BA%E7%9A%8410.30_-_%E9%99%B6%E5%96%86_www.eev3.com.lrc",
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