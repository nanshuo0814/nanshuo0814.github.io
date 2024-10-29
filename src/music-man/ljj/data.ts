import {ref} from 'vue';
import {APlayerMusic} from "../APlayerMusic";

// 定义要传递给音乐播放器组件的音频数据
export const data = ref<APlayerMusic[]>([
    {
        name: "7千3百多天",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/7%E5%8D%833%E7%99%BE%E5%A4%9A%E5%A4%A9.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "Love U U",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/Love%20U%20U.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "rgb(61, 162, 230)"
    },
    {
        name: "不流泪的机场",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/hjt%20-%20%E4%B8%8D%E6%B5%81%E6%B3%AA%E7%9A%84%E6%9C%BA%E5%9C%BA.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "不能说的秘密(Live)",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/hjt%20-%20%E4%B8%8D%E8%83%BD%E8%AF%B4%E7%9A%84%E7%A7%98%E5%AF%86(Live).mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "不为谁而作的歌",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/hjt%20-%20%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E4%B8%8D%E4%B8%BA%E8%B0%81%E8%80%8C%E4%BD%9C%E7%9A%84%E6%AD%8C.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "恨幸福来过",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%81%A8%E5%B9%B8%E7%A6%8F%E6%9D%A5%E8%BF%87.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "想见你想见你想见你",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%83%B3%E8%A7%81%E4%BD%A0%E6%83%B3%E8%A7%81%E4%BD%A0%E6%83%B3%E8%A7%81%E4%BD%A0.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "慢慢喜欢你",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%85%A2%E6%85%A2%E5%96%9C%E6%AC%A2%E4%BD%A0.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "Always Online",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20Always%20Online.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "一千年以后",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E4%B8%80%E5%8D%83%E5%B9%B4%E4%BB%A5%E5%90%8E.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "一时的选择",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E4%B8%80%E6%97%B6%E7%9A%84%E9%80%89%E6%8B%A9.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "不潮不用花钱",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E4%B8%8D%E6%BD%AE%E4%B8%8D%E7%94%A8%E8%8A%B1%E9%92%B1.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "交换余生",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E4%BA%A4%E6%8D%A2%E4%BD%99%E7%94%9F.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "修炼爱情",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E4%BF%AE%E7%82%BC%E7%88%B1%E6%83%85.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "关键词",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%85%B3%E9%94%AE%E8%AF%8D.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "她说",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%A5%B9%E8%AF%B4.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "孤独娱乐",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%AD%A4%E7%8B%AC%E5%A8%B1%E4%B9%90.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "学不会",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%AD%A6%E4%B8%8D%E4%BC%9A.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "将故事写成我们",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%B0%86%E6%95%85%E4%BA%8B%E5%86%99%E6%88%90%E6%88%91%E4%BB%AC.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "崇拜 (Live)",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%B4%87%E6%8B%9C%20(Live).mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "当你",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%BD%93%E4%BD%A0.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "心墙",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%BF%83%E5%A2%99.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "愿与愁",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%84%BF%E4%B8%8E%E6%84%81.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "我们的爱（Live）",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%88%91%E4%BB%AC%E7%9A%84%E7%88%B1%20(2018%E6%A2%A6%E6%83%B3%E7%9A%84%E5%A3%B0%E9%9F%B3%E7%AC%AC%E4%BA%8C%E5%AD%A3%E7%AC%AC11%E6%9C%9F%E7%8E%B0%E5%9C%BA).mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "我怀念的（Live）",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%88%91%E6%80%80%E5%BF%B5%E7%9A%84%20(Live).mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "我还想她",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "新地球",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%96%B0%E5%9C%B0%E7%90%83.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "江南",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%B1%9F%E5%8D%97.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "浪漫血液",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E6%B5%AA%E6%BC%AB%E8%A1%80%E6%B6%B2.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "爱笑的眼睛",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E7%88%B1%E7%AC%91%E7%9A%84%E7%9C%BC%E7%9D%9B.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "爱要怎么说出口 (Live)",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E7%88%B1%E8%A6%81%E6%80%8E%E4%B9%88%E8%AF%B4%E5%87%BA%E5%8F%A3%20(Live).mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "美人鱼",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E7%BE%8E%E4%BA%BA%E9%B1%BC.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "翅膀",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E7%BF%85%E8%86%80.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "莎士比亚的天份",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E8%8E%8E%E5%A3%AB%E6%AF%94%E4%BA%9A%E7%9A%84%E5%A4%A9%E4%BB%BD.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "裂缝中的阳光",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E8%A3%82%E7%BC%9D%E4%B8%AD%E7%9A%84%E9%98%B3%E5%85%89.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "裹着心的光",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E8%A3%B9%E7%9D%80%E5%BF%83%E7%9A%84%E5%85%89.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "记得",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E8%AE%B0%E5%BE%97.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "谢幕",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E8%B0%A2%E5%B9%95.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "起风了",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E8%B5%B7%E9%A3%8E%E4%BA%86.ogg",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "超越无限",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E8%B6%85%E8%B6%8A%E6%97%A0%E9%99%90.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "距离",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E8%B7%9D%E7%A6%BB.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "输了你赢了世界又如何 (Live)",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E8%BE%93%E4%BA%86%E4%BD%A0%E8%B5%A2%E4%BA%86%E4%B8%96%E7%95%8C%E5%8F%88%E5%A6%82%E4%BD%95%20(Live).mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "达尔文",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E8%BE%BE%E5%B0%94%E6%96%87.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "进阶",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E8%BF%9B%E9%98%B6.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "醉赤壁",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E9%86%89%E8%B5%A4%E5%A3%81.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "黑夜问白天",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E9%BB%91%E5%A4%9C%E9%97%AE%E7%99%BD%E5%A4%A9.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "一定会",
        artist: "林俊杰",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%E3%80%81%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E4%B8%80%E5%AE%9A%E4%BC%9A.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "只对你有感觉",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%E3%80%81%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E5%8F%AA%E5%AF%B9%E4%BD%A0%E6%9C%89%E6%84%9F%E8%A7%89.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "因你而在",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%E3%80%81%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E5%9B%A0%E4%BD%A0%E8%80%8C%E5%9C%A8.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "手心的蔷薇",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%E3%80%81%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E6%89%8B%E5%BF%83%E7%9A%84%E8%94%B7%E8%96%87.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "知足(Live).",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%E3%80%81%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E7%9F%A5%E8%B6%B3(Live).mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "雪落下的声音(Live)",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%E3%80%81%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E9%9B%AA%E8%90%BD%E4%B8%8B%E7%9A%84%E5%A3%B0%E9%9F%B3(Live).mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "黑暗骑士",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%E3%80%81%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E9%BB%91%E6%9A%97%E9%AA%91%E5%A3%AB%20(feat.%20%E4%BA%94%E6%9C%88%E5%A4%A9).mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "Stay With You (英文版)",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%E3%80%81%E5%AD%99%E7%87%95%E5%A7%BF%20-%20Stay%20With%20You%20(%E8%8B%B1%E6%96%87%E7%89%88).mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "亲爱的陌生人(林俊杰“JJ20”世界巡回演唱会现场)",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%E3%80%81%E8%94%A1%E5%AE%A5%E7%BB%AE%20-%20%E4%BA%B2%E7%88%B1%E7%9A%84%E9%99%8C%E7%94%9F%E4%BA%BA%20(%E6%9E%97%E4%BF%8A%E6%9D%B0%E2%80%9CJJ20%E2%80%9D%E4%B8%96%E7%95%8C%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8E%B0%E5%9C%BA).mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "发现爱",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%E3%80%81%E9%87%91%E8%8E%8E%20-%20%E5%8F%91%E7%8E%B0%E7%88%B1.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "期待爱",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E6%9E%97%E4%BF%8A%E6%9D%B0%E3%80%81%E9%87%91%E8%8E%8E%20-%20%E6%9C%9F%E5%BE%85%E7%88%B1.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "爱不会绝迹",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E7%88%B1%E4%B8%8D%E4%BC%9A%E7%BB%9D%E8%BF%B9.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "那女孩对我说",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E9%82%A3%E5%A5%B3%E5%AD%A9%E5%AF%B9%E6%88%91%E8%AF%B4.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "被风吹过的夏天",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E9%87%91%E8%8E%8E%E3%80%81%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E8%A2%AB%E9%A3%8E%E5%90%B9%E8%BF%87%E7%9A%84%E5%A4%8F%E5%A4%A9.mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "领悟(Live).",
        artist: "林俊杰",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/ljj/%E9%A2%86%E6%82%9F(Live).mp3",
        cover: "/assets/music-man/ljj.png",
        lrc: "",
        theme: "#baf"
    },
]);