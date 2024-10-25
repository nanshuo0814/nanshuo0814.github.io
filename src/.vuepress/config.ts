import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

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
  },

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
