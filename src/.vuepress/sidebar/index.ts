import {sidebar} from "vuepress-theme-hope";
import { resourceNav } from "./resource-nav.js";
import {article} from "./article.js";
import {musicMan} from "./music-man.js";
import { javaBasic } from "./java-basic.js";

export default sidebar({
    // Java八股文
    "/java/": javaBasic,
    // 资源导航
    "/resource-nav/": resourceNav,
    // 博客文章
    "/article/": article,
    // music
    "/music-man/": musicMan,
});
