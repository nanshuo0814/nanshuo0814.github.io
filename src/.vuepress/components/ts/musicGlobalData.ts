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
        name: "全局数据展示",
        artist: "撒旦王",
        url: "http://s-gz-8067-ssng.oss.dogecdn.com/music-man/mp3/wlh/%E6%88%91%E4%BB%AC%E7%9A%84%E6%AD%8C.mp3",
        cover: "http://imge.kugou.com/stdmusic/150/20200715/20200715070007812976.jpg",
        lrc: "",
        theme: "rgb(127, 218, 180)"
    },
    {
        name: "女儿情",
        artist: "古筝-付娜",
        url: "https://sharefs.ali.kugou.com/202110281338/150a7c708ed5e20a47e8a9b80cf1200a/G235/M00/0F/05/i4cBAF77vP2AFdNjAChBofqgQnw363.mp3",
        cover: "http://imge.kugou.com/stdmusic/150/20200606/20200606220631519630.jpg",
        lrc: "",
        theme: "rgb(61, 162, 230)"
    },
    {
        name: "故郷の原風景",
        artist: "陶笛-犹豫的泥巴",
        url: "https://sharefs.ali.kugow.com/202110281310/bdb53444846cecd8d45a64e2aab3b6ca/G228/M0A/1B/13/xJQEAF9kx46AZ3IaAEjEvnEtWQw706.mp3",
        cover: "http://imge.kugou.com/stdmusic/150/20200812/20200812134914113741.jpg",
        lrc: "",
        theme: "#baf"
    }
]);