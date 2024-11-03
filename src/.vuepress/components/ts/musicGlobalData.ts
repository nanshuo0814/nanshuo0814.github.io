import {ref} from 'vue';

export interface APlayerMusic {
    name: string;
    artist: string;
    url: string;
    cover: string;
    lrc: string;
    theme: string;
}

// 定义要传递给音乐播放器组件的音频数据
export const data = ref<APlayerMusic[]>([
    {
        name: "我们的歌",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E6%88%91%E4%BB%AC%E7%9A%84%E6%AD%8C.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/lrc/%E6%88%91%E4%BB%AC%E7%9A%84%E6%AD%8C_-_%E7%8E%8B%E5%8A%9B%E5%AE%8F_www.eev3.com.lrc",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "唯一",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E7%8E%8B%E5%8A%9B%E5%AE%8F%E3%80%81%E5%BC%A0%E9%9D%93%E9%A2%96%20-%20%E5%94%AF%E4%B8%80.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/lrc/%E5%94%AF%E4%B8%80_-_%E7%8E%8B%E5%8A%9B%E5%AE%8F_www.eev3.com.lrc",
        theme: "#baf"
    },
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
        name: "就是现在",
        artist: "王力宏",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/%E5%B0%B1%E6%98%AF%E7%8E%B0%E5%9C%A8.mp3",
        cover: "/assets/music-man/wlh.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/wlh/lrc/%E5%B0%B1%E6%98%AF%E7%8E%B0%E5%9C%A8_-_%E7%8E%8B%E5%8A%9B%E5%AE%8F_www.eev3.com.lrc",
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
        name: "二十二",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E4%BA%8C%E5%8D%81%E4%BA%8C.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/tz/lrc/%E4%BA%8C%E5%8D%81%E4%BA%8C_-_%E9%99%B6%E5%96%86_www.eev3.com.lrc",
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
        name: "蝴蝶",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E8%9D%B4%E8%9D%B6.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "https://djycdn.nanshuo.icu/music-man/mp3/tz/lrc/%E8%9D%B4%E8%9D%B6_-_%E9%99%B6%E5%96%86_www.eev3.com.lrc",
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
        name: "天天",
        artist: "陶喆",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/tz/%E9%99%B6%E5%96%86%20-%20%E5%A4%A9%E5%A4%A9.mp3",
        cover: "/assets/music-man/tz.png",
        lrc: "",
        theme: "rgb(127, 218, 180)"
    },
]);