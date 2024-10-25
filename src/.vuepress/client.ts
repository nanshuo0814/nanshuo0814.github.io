import {defineClientConfig} from "vuepress/client";
import {setupTransparentNavbar} from "vuepress-theme-hope/presets/transparentNavbar.js";
import {setupRunningTimeFooter} from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/SnowFall.js";
export default defineClientConfig({
    setup: () => {
        // 下雪
        setupSnowFall(
            {
                count: 15,
                minSize: 10,
                maxSize: 20,
                speed: 1,
                // image: "/ns.png"
            });
        // 透明导航栏
        setupTransparentNavbar({type: "all"});
        // 运行时间
        setupRunningTimeFooter(
            new Date("2024-10-24"),
            {
                "/": "本小破站已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
            },
            true,
        );
    },
});