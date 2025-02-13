import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  {
    text: "主页",
    icon: "home",
    link: "/",
  },
  {
    text: "资源导航",
    icon: "dice",
    link: "/resource-nav/",
  },
  {
    text: "Java八股文",
    icon: "mug-saucer",
    link: "/java/",
  },
  {
    text: "音乐点播",
    icon: "music",
    link: "/music-man/",
  },
  {
    text: "网站分析",
    icon: "television",
    link: "/analyse/",
  },
  {
    text: "博客首页",
    icon: "blog",
    link: "/blog",
  },
  // {
  //   text: "生活专栏",
  //   icon: "life",
  //   link: "/life/",
  // },
  // {
  //   text: "指南",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "ai/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "backend/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
]);
