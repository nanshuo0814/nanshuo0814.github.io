import {defineUserConfig} from "vuepress";
import {getDirname, path} from "vuepress/utils";

import theme from "./theme.js";
import { readmorePlugin } from 'vuepress-plugin-readmore-popular-next';

const __dirname = getDirname(import.meta.url);


export default defineUserConfig({
    base: "/",
    dest: "./dist",
    lang: "zh-CN",
    title: "烁烁南光",
    description: "记录生活、学习和工作的点点滴滴，与君共勉！",

    theme,
    
    plugins: [
        // 引流插件
        readmorePlugin({
            // 已申请的博客 ID
            blogId: '28519-4839232997594-788',
            // 已申请的微信公众号名称
            name: '烁烁南光',
            // 已申请的微信公众号回复关键词
            keyword: '验证码',
            // 已申请的微信公众号二维码图片
            qrcode: 'https://www.nanshuo.icu/wxgzh.jpg',
            // 文章内容的 JS 选择器，若使用的不是官方默认主题，则需要根据第三方的主题来设置
            selector: 'div.theme-hope-content',
            // 自定义的 JS 资源链接，可用于 CDN 加速
            libUrl: 'https://qiniu.techgrow.cn/readmore/dist/readmore.js',
            // 自定义的 CSS 资源链接，可用于适配不同风格的博客
            cssUrl: 'https://qiniu.techgrow.cn/readmore/dist/vuepress2.css',
            // 文章排除添加引流工具的 URL 规则，支持使用路径、通配符、正则表达式的匹配规则
            excludes: { strExp: [], regExp: [] },
            // 是否反转 URL 排除规则的配置，即只有符合排除规则的文章才会添加引流工具
            reverse: false,
            // 文章内容的预览高度(例如 300)，设置值为 auto 则表示预览高度自适应
            height: 'auto',
            // 是否添加微信公众号引流工具到移动端页面
            allowMobile: true,
            // 文章解锁后凭证的有效天数
            expires: 3,
            // 定时校验凭证有效性的时间间隔（秒）
            interval: 60,
            // 等待 DOM 节点加载完成的时间（毫秒），如果部分页面的引流功能无法生效，可适当增大此参数的值
            waitDomMills: 1000,
            // 每篇文章随机添加引流工具的概率，范围在 0.1 ~ 1.0 之间，代表 10% ~ 100%，其中 1.0 表示所有文章默认都添加引流工具
            random: 1.0
        })
    ],
    markdown: {
        headers: {
            // 用到哪一级就提取哪一级
            level: [1, 2, 3, 4, 5, 6],
        },
    },

    alias: {
        "@theme-hope/modules/blog/components/BlogHero": path.resolve(
            __dirname,
            "./components/BlogHero.vue",
        ),
        "@MusicMan": path.resolve(__dirname, "components/MusicMan.vue"),
        "@IP": path.resolve(__dirname, "components/IP.vue"),
        "@TxMap": path.resolve(__dirname, "components/TxMap.vue"),
    },

    // 和 PWA 一起启用
    // shouldPrefetch: false,
    head: [
        // 添加百度统计
        [
            "script",
            {},
            `var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?6021282106b89ed4b0d108a7cfb12f15";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
            })();`, 
        ],
        [
            "script",
            {},
            `!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"3KgyrLJcRxjEXjLO",ck:"3KgyrLJcRxjEXjLO",autoTrack:true,hashMode:true});`,
        ],
    ],
});
