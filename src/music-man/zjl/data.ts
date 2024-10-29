import {ref} from 'vue';
import { APlayerMusic} from "../APlayerMusic";

// 定义要传递给音乐播放器组件的音频数据
export const data = ref<APlayerMusic[]>([
    {
        name: "一路向北",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E4%B8%80%E8%B7%AF%E5%90%91%E5%8C%97.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "七里香",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E4%B8%83%E9%87%8C%E9%A6%99.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "rgb(61, 162, 230)"
    },
    {
        name: "不爱我就拉倒",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E4%B8%8D%E7%88%B1%E6%88%91%E5%B0%B1%E6%8B%89%E5%80%92.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "不能说的秘密",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E4%B8%8D%E8%83%BD%E8%AF%B4%E7%9A%84%E7%A7%98%E5%AF%86.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "不该",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E4%B8%8D%E8%AF%A5.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "你听得到",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E4%BD%A0%E5%90%AC%E5%BE%97%E5%88%B0.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "你好吗",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E4%BD%A0%E5%A5%BD%E5%90%97.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "倒影",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%80%92%E5%BD%B1.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "借口",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%80%9F%E5%8F%A3.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "兰亭序",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%85%B0%E4%BA%AD%E5%BA%8F.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "双截棍",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%8F%8C%E6%88%AA%E6%A3%8D.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "反方向的钟",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%8F%8D%E6%96%B9%E5%90%91%E7%9A%84%E9%92%9F.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "发如雪",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%8F%91%E5%A6%82%E9%9B%AA.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "听妈妈的话",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%90%AC%E5%A6%88%E5%A6%88%E7%9A%84%E8%AF%9D.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "听爸爸的话",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%90%AC%E7%88%B8%E7%88%B8%E7%9A%84%E8%AF%9D.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "听见下雨的声音",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%90%AC%E8%A7%81%E4%B8%8B%E9%9B%A8%E7%9A%84%E5%A3%B0%E9%9F%B3.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "告白气球",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "园游会",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%9B%AD%E6%B8%B8%E4%BC%9A.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "外婆",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%A4%96%E5%A9%86.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "夜曲",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%A4%9C%E6%9B%B2.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "大笨钟",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%A4%A7%E7%AC%A8%E9%92%9F.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "天涯过客",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%A4%A9%E6%B6%AF%E8%BF%87%E5%AE%A2.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "安静",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%AE%89%E9%9D%99.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "将军",
        artist: "周杰伦",
        url: "https://djycdn.nanshuo.icu/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%B0%86%E5%86%9B.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "开不了口",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%BC%80%E4%B8%8D%E4%BA%86%E5%8F%A3.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "我不配",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%88%91%E4%B8%8D%E9%85%8D.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "我是如此相信",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%88%91%E6%98%AF%E5%A6%82%E6%AD%A4%E7%9B%B8%E4%BF%A1.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "我落泪情绪零碎",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%88%91%E8%90%BD%E6%B3%AA%E6%83%85%E7%BB%AA%E9%9B%B6%E7%A2%8E.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "手写的从前",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%89%8B%E5%86%99%E7%9A%84%E4%BB%8E%E5%89%8D%E4%BC%98%E9%85%B8%E4%B9%B3%E4%B8%BA%E7%88%B1%E5%91%8A%E7%99%BD%E5%B9%BF%E5%91%8A%E6%9B%B2.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "手语",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%89%8B%E8%AF%AD.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "搁浅",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%90%81%E6%B5%85.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "断了的弦",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%96%AD%E4%BA%86%E7%9A%84%E5%BC%A6.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "时光机",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%97%B6%E5%85%89%E6%9C%BA.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "明明就",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%98%8E%E6%98%8E%E5%B0%B1.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "星晴",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%98%9F%E6%99%B4.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "晴天",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%99%B4%E5%A4%A9.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "暗号",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%9A%97%E5%8F%B7.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "最长的电影",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%9C%80%E9%95%BF%E7%9A%84%E7%94%B5%E5%BD%B1.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "枫",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%9E%AB.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "梯田",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%A2%AF%E7%94%B0.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "烟花易冷",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%83%9F%E8%8A%B1%E6%98%93%E5%86%B7.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "爱在西元前",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%88%B1%E5%9C%A8%E8%A5%BF%E5%85%83%E5%89%8D.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "爱情废柴",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%88%B1%E6%83%85%E5%BA%9F%E6%9F%B4.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "爷爷泡的茶",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%88%B7%E7%88%B7%E6%B3%A1%E7%9A%84%E8%8C%B6.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "牛仔很忙",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%89%9B%E4%BB%94%E5%BE%88%E5%BF%99.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "甜甜的",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%94%9C%E7%94%9C%E7%9A%84.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "白色风车",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%99%BD%E8%89%B2%E9%A3%8E%E8%BD%A6.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "稻香",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%A8%BB%E9%A6%99.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "等你下课 (with 杨瑞代)",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%20(with%20%E6%9D%A8%E7%91%9E%E4%BB%A3).mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "简单爱",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%AE%80%E5%8D%95%E7%88%B1.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "算什么男人",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%AE%97%E4%BB%80%E4%B9%88%E7%94%B7%E4%BA%BA.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "粉色海洋",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%B2%89%E8%89%B2%E6%B5%B7%E6%B4%8B.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "红尘客栈",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%BA%A2%E5%B0%98%E5%AE%A2%E6%A0%88.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "红颜如霜",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E7%BA%A2%E9%A2%9C%E5%A6%82%E9%9C%9C.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "花海",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%8A%B1%E6%B5%B7.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "菊花台",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%8F%8A%E8%8A%B1%E5%8F%B0.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "蒲公英的约定",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%92%B2%E5%85%AC%E8%8B%B1%E7%9A%84%E7%BA%A6%E5%AE%9A.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "说了再见",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%AF%B4%E4%BA%86%E5%86%8D%E8%A7%81.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "说好不哭 (with 五月天阿信).",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%AF%B4%E5%A5%BD%E4%B8%8D%E5%93%AD%20(with%20%E4%BA%94%E6%9C%88%E5%A4%A9%E9%98%BF%E4%BF%A1).mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "说好的幸福呢",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%AF%B4%E5%A5%BD%E7%9A%84%E5%B9%B8%E7%A6%8F%E5%91%A2.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "轨迹",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%BD%A8%E8%BF%B9.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "还在流浪",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%BF%98%E5%9C%A8%E6%B5%81%E6%B5%AA.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "迷迭香",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%BF%B7%E8%BF%AD%E9%A6%99.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "退后",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E9%80%80%E5%90%8E.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "错过的烟火",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E9%94%99%E8%BF%87%E7%9A%84%E7%83%9F%E7%81%AB.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "飘移",
        artist: "周杰伦",
        url: "",
        cover: "/assets/music-man/zjl.png",
        lrc: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E9%A3%98%E7%A7%BB.mp3",
        theme: "#baf"
    },
    {
        name: "麦芽糖",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E9%BA%A6%E8%8A%BD%E7%B3%96.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "黑色毛衣",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E9%BB%91%E8%89%B2%E6%AF%9B%E8%A1%A3.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "龙卷风",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E9%BE%99%E5%8D%B7%E9%A3%8E.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "我要夏天",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%E3%80%81%E6%9D%A8%E7%91%9E%E4%BB%A3%20-%20%E6%88%91%E8%A6%81%E5%A4%8F%E5%A4%A9.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "最伟大的作品",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%E3%80%81%E6%9D%A8%E7%91%9E%E4%BB%A3%20-%20%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E4%BD%9C%E5%93%81.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "爱的飞行日记",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%E3%80%81%E6%9D%A8%E7%91%9E%E4%BB%A3%20-%20%E7%88%B1%E7%9A%84%E9%A3%9E%E8%A1%8C%E6%97%A5%E8%AE%B0.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "珊瑚海",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%E3%80%81%E6%9D%A8%E7%91%9E%E4%BB%A3%20-%20%E7%8F%8A%E7%91%9A%E6%B5%B7.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "夜的第七章",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%E3%80%81%E6%BD%98%E5%84%BF%20-%20%E5%A4%9C%E7%9A%84%E7%AC%AC%E4%B8%83%E7%AB%A0.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "彩虹",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%BE%AE%E5%8D%9A%E5%8F%B0%20-%20%E5%BD%A9%E8%99%B9%20(%E7%94%B5%E5%8F%B0%E7%89%88).mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    },
    {
        name: "屋顶",
        artist: "周杰伦",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/zjl/%E6%B8%A9%E5%B2%9A%E3%80%81%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%B1%8B%E9%A1%B6.mp3",
        cover: "/assets/music-man/zjl.png",
        lrc: "",
        theme: "#baf"
    }
]);