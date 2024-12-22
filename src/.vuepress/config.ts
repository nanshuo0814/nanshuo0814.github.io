import {defineUserConfig} from "vuepress";
import {getDirname, path} from "vuepress/utils";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);


export default defineUserConfig({
    base: "/",
    dest: "./dist",
    lang: "zh-CN",
    title: "烁烁南光",
    description: "记录生活、学习和工作的点点滴滴，与君共勉！",

    theme,

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
