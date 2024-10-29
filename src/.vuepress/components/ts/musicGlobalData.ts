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
]);