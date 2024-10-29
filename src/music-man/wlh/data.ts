import {ref} from 'vue';
import {APlayerMusic} from "../APlayerMusic";

// 定义要传递给音乐播放器组件的音频数据
export const data = ref<APlayerMusic[]>([
    {
        name: "Everything",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/Everything.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/lrc/Everything_-_%E7%8E%8B%E5%8A%9B%E5%AE%8F_www.eev3.com.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "天地龙鳞",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E5%A4%A9%E5%9C%B0%E9%BE%99%E9%B3%9E.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/lrc/%E5%A4%A9%E5%9C%B0%E9%BE%99%E9%B3%9E_-_%E7%8E%8B%E5%8A%9B%E5%AE%8F_www.eev3.com.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "爱错",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E7%88%B1%E9%94%99.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/lrc/%E7%88%B1%E9%94%99-%E7%8E%8B%E5%8A%9B%E5%AE%8F.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "春雨里洗过的太阳",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E6%98%A5%E9%9B%A8%E9%87%8C%E6%B4%97%E8%BF%87%E7%9A%84%E5%A4%AA%E9%98%B3.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/lrc/%E6%98%A5%E9%9B%A8%E9%87%8C%E6%B4%97%E8%BF%87%E7%9A%84%E5%A4%AA%E9%98%B3_-_%E7%8E%8B%E5%8A%9B%E5%AE%8F_www.eev3.com.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "心跳",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E5%BF%83%E8%B7%B3.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/lrc/%E5%BF%83%E8%B7%B3_-_%E7%8E%8B%E5%8A%9B%E5%AE%8F_www.eev3.com.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "脚本",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E8%84%9A%E6%9C%AC.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/lrc/%E8%84%9A%E6%9C%AC_-_%E7%8E%8B%E5%8A%9B%E5%AE%8F_www.eev3.com.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "我们的歌",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E6%88%91%E4%BB%AC%E7%9A%84%E6%AD%8C.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "你不知道的事",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "",
        theme: "rgb(61, 162, 230)"
    },
    {
        name: "Forever Love",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20Forever%20Love.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "依然爱你",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E4%BE%9D%E7%84%B6%E7%88%B1%E4%BD%A0.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "大城小爱",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E5%A4%A7%E5%9F%8E%E5%B0%8F%E7%88%B1.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "改变自己",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E6%94%B9%E5%8F%98%E8%87%AA%E5%B7%B1.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "爱的就是你",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E7%8E%8B%E5%8A%9B%E5%AE%8F%20-%20%E7%88%B1%E7%9A%84%E5%B0%B1%E6%98%AF%E4%BD%A0.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "另一个天堂",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E7%8E%8B%E5%8A%9B%E5%AE%8F%E3%80%81%E5%BC%A0%E9%9D%93%E9%A2%96%20-%20%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%A4%A9%E5%A0%82.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "唯一",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E7%8E%8B%E5%8A%9B%E5%AE%8F%E3%80%81%E5%BC%A0%E9%9D%93%E9%A2%96%20-%20%E5%94%AF%E4%B8%80.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "落叶归根",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E7%8E%8B%E5%8A%9B%E5%AE%8F%E3%80%81%E5%BC%A0%E9%9D%93%E9%A2%96%20-%20%E8%90%BD%E5%8F%B6%E5%BD%92%E6%A0%B9.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "需要人陪",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E7%8E%8B%E5%8A%9B%E5%AE%8F%E3%80%81%E5%BC%A0%E9%9D%93%E9%A2%96%20-%20%E9%9C%80%E8%A6%81%E4%BA%BA%E9%99%AA.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "缘分一道桥",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E7%8E%8B%E5%8A%9B%E5%AE%8F%E3%80%81%E8%B0%AD%E7%BB%B4%E7%BB%B4%20-%20%E7%BC%98%E5%88%86%E4%B8%80%E9%81%93%E6%A1%A5.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "",
        theme: "#baf"
    },
]);