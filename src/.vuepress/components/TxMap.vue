<template>
    <div>
        <div id="welcome-info" v-html="welcomeMessage" style="margin-top: 10px;margin-bottom: 10px;"></div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const welcomeMessage = ref('');

onMounted(() => {
    fetchIpLocation();
});
const ipInfo = ref(null);
function fetchIpLocation() {
    const script = document.createElement('script');
    // URL中的 callback 参数值为 handleIpLocationResponse
    const url = 'https://apis.map.qq.com/ws/location/v1/ip?key=U5WBZ-ITCK3-26I3G-YMZ6G-3WVSH-RWFD6&output=jsonp&callback=handleIpLocationResponse';
    // 添加回调函数
    window.handleIpLocationResponse = function (res) {
        // console.log('Response:', JSON.stringify(res)); // 处理响应
        // 此处可以调用其他函数进行后续处理
        ipInfo.value = res;
        lat.value = res.result.location.lat;
        lng.value = res.result.location.lng;
        // welcomeMessage.value = `欢迎来到 ${res.result.ad_info.city}，您是第 ${res.result.city_code} 位访客，您当前 IP 地址是 ${res.result.ip}`;
        showWelcome();
    };
    // 设置脚本源
    script.src = url;
    script.async = true;
    // 将脚本添加到文档中
    document.body.appendChild(script);
    // 可选：当脚本加载错误处理
    script.onerror = function () {
        console.error("加载失败地理位置错误");
        delete window.handleIpLocationResponse; // 清理回调
    };
}
const lng = ref(null);
const lat = ref(null);
function getDistance(e1, n1, e2, n2) {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
        e *= PI / 180
        n *= PI / 180
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }

    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
}
function showWelcome() {
    let dist = getDistance(111.469350, 22.029624, lng.value, lat.value); //这里换成自己的经纬度
    let pos = ipInfo.value.result.ad_info.nation;
    let ip;
    let posdesc;
    //根据国家、省份、城市信息自定义欢迎语
    switch (ipInfo.value.result.ad_info.nation) {
        case "日本":
            posdesc = "よろしく，一起去看樱花吗";
            break;
        case "美国":
            posdesc = "Let us live in peace!";
            break;
        case "英国":
            posdesc = "想同你一起夜乘伦敦眼";
            break;
        case "俄罗斯":
            posdesc = "干了这瓶伏特加！";
            break;
        case "法国":
            posdesc = "C'est La Vie";
            break;
        case "德国":
            posdesc = "Die Zeit verging im Fluge.";
            break;
        case "澳大利亚":
            posdesc = "一起去大堡礁吧！";
            break;
        case "加拿大":
            posdesc = "拾起一片枫叶赠予你";
            break;
        case "中国":
            pos = ipInfo.value.result.ad_info.province + ipInfo.value.result.ad_info.city + ipInfo.value.result.ad_info.district;
            ip = ipInfo.value.result.ip;
            switch (ipInfo.value.result.ad_info.province) {
                case "北京市":
                    posdesc = "北——京——欢迎你~~~";
                    break;
                case "天津市":
                    posdesc = "讲段相声吧。";
                    break;
                case "河北省":
                    posdesc = "山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";
                    break;
                case "山西省":
                    posdesc = "展开坐具长三尺，已占山河五百余。";
                    break;
                case "内蒙古自治区":
                    posdesc = "天苍苍，野茫茫，风吹草低见牛羊。";
                    break;
                case "辽宁省":
                    posdesc = "我想吃烤鸡架！";
                    break;
                case "吉林省":
                    posdesc = "状元阁就是东北烧烤之王。";
                    break;
                case "黑龙江省":
                    posdesc = "很喜欢哈尔滨大剧院。";
                    break;
                case "上海市":
                    posdesc = "众所周知，中国只有两个城市。";
                    break;
                case "江苏省":
                    switch (ipInfo.value.result.ad_info.city) {
                        case "南京市":
                            posdesc = "这是我挺想去的城市啦。";
                            break;
                        case "苏州市":
                            posdesc = "上有天堂，下有苏杭。";
                            break;
                        default:
                            posdesc = "散装是必须要散装的。";
                            break;
                    }
                    break;
                case "浙江省":
                    posdesc = "东风渐绿西湖柳，雁已还人未南归。";
                    break;
                case "河南省":
                    switch (ipInfo.value.result.ad_info.city) {
                        case "郑州市":
                            posdesc = "豫州之域，天地之中。";
                            break;
                        case "南阳市":
                            posdesc = "臣本布衣，躬耕于南阳。此南阳非彼南阳！";
                            break;
                        case "驻马店市":
                            posdesc = "峰峰有奇石，石石挟仙气。嵖岈山的花很美哦！";
                            break;
                        case "开封市":
                            posdesc = "刚正不阿包青天。";
                            break;
                        case "洛阳市":
                            posdesc = "洛阳牡丹甲天下。";
                            break;
                        default:
                            posdesc = "可否带我品尝河南烩面啦？";
                            break;
                    }
                    break;
                case "安徽省":
                    posdesc = "蚌埠住了，芜湖起飞。";
                    break;
                case "福建省":
                    posdesc = "井邑白云间，岩城远带山。";
                    break;
                case "江西省":
                    posdesc = "落霞与孤鹜齐飞，秋水共长天一色。";
                    break;
                case "山东省":
                    posdesc = "遥望齐州九点烟，一泓海水杯中泻。";
                    break;
                case "湖北省":
                    posdesc = "来碗热干面！";
                    break;
                case "湖南省":
                    posdesc = "74751，长沙斯塔克。";
                    break;
                case "广东省":
                    switch (ipInfo.value.result.ad_info.city) {
                        case "阳春市":
                            posdesc = "欢迎来到美丽的羊村（阳春），这里是站长的故乡，今天的消费本站长买单，老板先来两斤福建人。";
                            break;
                        default:
                            posdesc = "老板给小友来两斤福建人。";
                            break;
                    }
                    break;
                case "广西壮族自治区":
                    posdesc = "桂林山水甲天下。";
                    break;
                case "海南省":
                    posdesc = "朝观日出逐白浪，夕看云起收霞光。";
                    break;
                case "四川省":
                    posdesc = "康康川妹子。";
                    break;
                case "贵州省":
                    posdesc = "茅台，学生，再塞200。";
                    break;
                case "云南省":
                    posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天。";
                    break;
                case "西藏自治区":
                    posdesc = "躺在茫茫草原上，仰望蓝天。";
                    break;
                case "陕西省":
                    posdesc = "来份臊子面加馍。";
                    break;
                case "甘肃省":
                    posdesc = "羌笛何须怨杨柳，春风不度玉门关。";
                    break;
                case "青海省":
                    posdesc = "牛肉干和老酸奶都好好吃。";
                    break;
                case "宁夏回族自治区":
                    posdesc = "大漠孤烟直，长河落日圆。";
                    break;
                case "新疆维吾尔自治区":
                    posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风。";
                    break;
                case "台湾省":
                    posdesc = "我在这头，大陆在那头。";
                    break;
                case "香港特别行政区":
                    posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉。";
                    break;
                case "澳门特别行政区":
                    posdesc = "性感荷官，在线发牌。";
                    break;
                default:
                    posdesc = "带我去你的城市逛逛吧！";
                    break;
            }
            break;
        default:
            posdesc = "带我去你的国家逛逛吧。";
            break;
    }

    //根据本地时间切换欢迎语
    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) timeChange = `<span style="color: green;">上午好，一日之计在于晨！</span>`;
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = `<span style="color: green;">中午好，该摸鱼吃午饭了。</span>`;
    else if (date.getHours() >= 13 && date.getHours() < 15) timeChange = `<span style="color: green;">下午好，懒懒地睡个午觉吧！</span>`;
    else if (date.getHours() >= 15 && date.getHours() < 16) timeChange = `<span style="color: green;">三点几啦，一起饮茶呀！</span>`;
    else if (date.getHours() >= 16 && date.getHours() < 19) timeChange = `<span style="color: green;">夕阳无限好，只是近黄昏！</span>`;
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = `<span style="color: green;">晚上好，夜生活嗨起来！</span>`;
    else timeChange = "夜深了，早点休息，少熬夜。";

    try {
        //自定义文本和需要放的位置
        welcomeMessage.value =
            `<div style="text-align: left;">欢迎来自 <span style="color:orange">${pos}</span> 的小友，${timeChange}世界上最遥远的距离莫过于你距离站长的距离鸭，你当前距离站长约 <span style="color:red">${dist}</span> 公里哦，你当前的 IP 地址为：<span style="color:blue">${ip}</span>，${posdesc}</div>`;
    } catch (err) {
        console.log("解析地理位置错误啦🙄🙄🙄")
    }
}

</script>