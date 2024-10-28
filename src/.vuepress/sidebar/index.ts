import {sidebar} from "vuepress-theme-hope";
import {resourceNav} from "./resource-nav";
import {article} from "./article.js";
import {musicMan} from "./music-man.js";

export default sidebar({
    // 资源导航
    "/resource-nav/": resourceNav,
    // 博客文章
    "/article/": article,
    // music
    "/music-man/": musicMan,
});
