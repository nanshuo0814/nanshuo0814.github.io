import {hopeTheme, PageInfoType} from "vuepress-theme-hope";
import {getDirname, path} from "vuepress/utils";
import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

const __dirname = getDirname(import.meta.url);

export default hopeTheme({
    hostname: "https://nanshuo.icu",
    author: {
        name: "南烁",
        url: "https://nanshuo.icu/article/",
        email: "nanshuo.icu@qq.com"
    },

    iconAssets: "fontawesome-with-brands",

    logo: "/logo.png",

    repo: "nanshuo0814/nanshuo0814.github.io",

    docsDir: "src",
    // 是否显示页面最后更新时间
    lastUpdated: true,
    // 是否显示页面贡献者
    contributors: true,
    // 是否展示编辑此页链接
    editLink: true,
    // 纯净模式
    // pure: true,

    favicon: "/favicon.ico",

    // 导航栏
    navbar,

    // 侧边栏
    sidebar,

    pageInfo: ["Author", "Original", "Category", "Tag", "Word", "ReadingTime"],

    // 页脚
    footer: "<a href=\"https://beian.miit.gov.cn/#/Integrated/index\" target=\"_blank\">「 <img src=\"/icp.png\"  style=\"width:15px;height:15px\"/>粤ICP备2024241400号-1 」</a><a href=\"https://beian.mps.gov.cn/#/query/webSearch\" target=\"_blank\">「 <img src=\"/gonganbei.png\"  style=\"width:15px;height:15px\"/>粤公网安备44060702000428号 」</a>",
    displayFooter: true,

    // 加密配置https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html
    encrypt: {
        config: {
            "/article/chatgpt-register-course.html": ["nanshuo"],
        },
    },

    navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Repo", "Outlook", "Search"],
    },

    // 多语言配置
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },



    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,

    // 全屏
    // fullscreen: true,
    // 暗黑模式切换
    darkmode: "toggle",

    blog: {
        name: "南烁",
        avatar: "https://ypycdn.nanshuo.icu/nanshuo/avatar.png",
        description: "遇事不决就看稳字经",
        intro: "/about-author/",
        timeline: "昨天未更新新内容",
        articlePerPage: 6,
        // sidebarDisplay: "always",
        medias: {
            QQ: "http://wpa.qq.com/msgrd?v=3&uin=3043182542&site=qq&menu=yes",
            Wechat: "/WeChatCode.png",
            Email: "https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=nanshuo.icu@qq.com",
            Gitee: "https://gitee.com/nanshuo0814",
            // Kugou: "1102419453",
            BiliBili: "https://space.bilibili.com/454092986/",
            // AliDrive: "",
            AliPay: "/zhifubao.jpg",
            WechatPay: "/WeChat.png",
            // BaiduDisk: "",
            Rss: "rss.xml",
            WechatMP: "/wxgzh.jpg",
            Douyin: "https://v.douyin.com/Ceiu44Wy/",
            Zhihu: "https://www.zhihu.com/people/nanshuo.icu",
            // GitHub 已经内置了图标
            GitHub: "https://github.com/nanshuo0814",
            // 一个自定义媒体 MediaX (仅作示例)
            // CSDN
            CSDN: {
                // 图标 SVG 字符串
                icon: "https://g.csdnimg.cn/static/logo/favicon32.ico",
                // 链接
                link: "https://blog.csdn.net/Yuan_Master?spm=1000.2115.3001.5343",
            },
            // 语雀
            YuQue: {
                // 图标 SVG 字符串
                icon: "https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*sRUdR543RjcAAAAAAAAAAAAADvuFAQ/original",
                // 链接
                link: "https://www.yuque.com/nanshuo0814",
            },
            // CnBlogs: {
            //     // 图标 SVG 字符串
            //     icon: "https://assets.cnblogs.com/icons/search.svg",
            //     // 链接
            //     link: "https://www.cnblogs.com/nanshuo0814",
            // },
            JueJin: {
                // 图标 SVG 字符串
                icon: "https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/static/favicons/apple-touch-icon.png",
                // 链接
                link: "https://juejin.cn/user/411643820129578",
            },

        },
    },


    // 在这里配置主题提供的插件
    plugins: {
        // 公告https://theme-hope.vuejs.press/zh/guide/feature/notice.html#%E4%BB%8B%E7%BB%8D
        notice: [
            {
                // 匹配所有以此开头的路径
                path: "/",
                fullscreen: true,
                confirm: true,
                // 正则表达式以和所有路由测试匹配
                // match: "",
                title: "欢迎来到本站",
                content: "这是仅仅是一个公告",
                actions: [
                    {
                        text: "确认",
                        // link: "https://theme-hope.vuejs.press/",
                        type: "primary",
                    },
                    {text: "取消"},
                ],
            },
            {
                // 匹配所有以此开头的路径
                path: "/blog",
                // fullscreen: true,
                // confirm: true,
                // 正则表达式以和所有路由测试匹配
                // match: "",
                title: "欢迎来到站长博客",
                content: "这是仅仅是一个公告",
                actions: [
                    {
                        text: "确认",
                        // link: "https://theme-hope.vuejs.press/",
                        type: "primary",
                    },
                    {text: "取消"},
                ],
            },
        ],
        // 手机端复制按钮展示
        copyCode: {
            showInMobile: true,
        },
        // 代码块主题
        // shiki: {
        //     // 你想要使用的主题
        //     themes: {
        //         light: "one-light",
        //         dark: "one-dark-pro",
        //     },
        // },
        blog: true,

        // https://theme-hope.vuejs.press/zh/config/frontmatter/plugins.html#vuepress-plugin-copyright-%E9%80%89%E9%A1%B9
        copyright: {
            author: "南烁(nanshuo.icu)",
            license: "MIT",
            triggerLength: 100,
            maxLength: 700,
            canonical: "https://nanshuo.icu/",
            global: true,
        },

        // https://theme-hope.vuejs.press/zh/config/plugins/feed.html
        feed: {
            json: true,
            atom: true,
            rss: true,
            hostname: "https://www.nanshuo.icu",
            devHostname: "http://localhost:8080"
        },

        // https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-tab.html
        // 添加选项卡和代码选项卡
        markdownTab: true,

        // https://ecosystem.vuejs.press/zh/plugins/seo/sitemap/config.html
        sitemap: {
            hostname: "https://www.nanshuo.icu",
            devServer: true,
            devHostname: "https://localhost:8080"
        },

        // https://ecosystem.vuejs.press/zh/plugins/features/watermark.html
        // 水印
        // watermark: {
        //     enabled: false,
        // },

        // 搜索插件
        // https://theme-hope.vuejs.press/zh/config/plugins/search.html
        // https://ecosystem.vuejs.press/zh/plugins/search/docsearch.html
        // docsearch: {
        //     apiKey: "730db9648ff7698d70824a5cea22d884",
        //     indexName: "nanshuo",
        //     appId: "PEELF8U9A8",
        // },

        // searchPro: {
        //     indexContent: true,
        //     autoSuggestions: false,
        //     queryHistoryCount: 0,
        //     resultHistoryCount: -1
        // },
        search: true,


        // https://theme-hope.vuejs.press/zh/config/plugins/comment.html
        // 必须自行生成并在生产环境中使用自己的评论服务
        // comment: {
        //     provider: "Giscus",
        //     repo: "vuepress-theme-hope/giscus-discussions",
        //     repoId: "R_kgDOG_Pt2A",
        //     category: "Announcements",
        //     categoryId: "DIC_kwDOG_Pt2M4COD69",
        // },

        // https://theme-hope.vuejs.press/zh/config/plugins/others.html#components
        components: {
            components: [
                "ArtPlayer",
                "Badge",
                "BiliBili",
                "CodePen",
                "PDF",
                "Share",
                "SiteInfo",
                "StackBlitz",
                "VPBanner",
                "VPCard",
                "VidStack",
                "XiGua",
                "AudioPlayer",
            ],
        },

        // 此处开启了很多功能用于演示，你应仅保留用到的功能。
        // https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-image.html#options
        markdownImage: {
            // 启用 figure
            figure: true,
            // 启用图片懒加载
            lazyload: true,
            // 启用图片标记
            mark: true,
            // 启用图片大小
            size: true,
        },

        // https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-math.html#options
        // 在你的 Markdown 添加数学支持
        // markdownMath: {
        //   // 启用前安装 katex
        //   type: "katex",
        //   // 或者安装 mathjax-full
        //   type: "mathjax",
        // },

        // https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-hint.html
        markdownHint: {
            // 启用 GFM 警告
            alert: true,
            // 这就是默认选项，所以你可以直接使用此功能
            hint: true,
        },

        // 此处开启了很多功能用于演示，你应仅保留用到的功能。
        // https://theme-hope.vuejs.press/zh/config/plugins/md-enhance.html
        mdEnhance: {
            // 是否启用 Markdown 导入支持。你可以传入一个函数进行路径解析
            include: {
                resolvePath: (file, cwd) => {
                    if (file.startsWith("@"))
                        return path.resolve(
                            __dirname,
                            "../snippets",
                            file.replace("@", "./"),
                        );

                    return path.resolve(cwd, file);
                },
            },
            // 是否启用自定义对齐格式支持
            align: true,
            // https://theme-hope.vuejs.press/zh/guide/markdown/stylize/attrs.html，你可以使用特殊标记为 Markdown 元素添加属性
            attrs: true,
            // 是否启用组件支持
            component: true,
            // 是否启用代码案例支持
            demo: true,
            // 是否启用标记格式支持，使用 == == 进行标记。请注意两边需要有空格
            mark: true,
            // 思维导图
            // markmap: true,
            plantuml: true,
            // 是否启用剧透支持
            spoiler: true,
            // 是否启用脚注格式支持
            footnote: true,

            // Kotlin
            // kotlinPlayground: true,
            // 对行内语法进行样式化以创建代码片段
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            // 下标
            sub: true,
            // 上标
            sup: true,
            // 任务列表
            tasklist: true,
            // {{ count }} 插槽语法
            vPre: true,

            // 在启用之前安装 chart.js
            // chart: true,

            // insert component easily

            // 在启用之前安装 echarts
            // echarts: true,

            // 在启用之前安装 flowchart.ts
            // flowchart: true,

            // gfm requires mathjax-full to provide tex support
            // github类型风格的Markdown
            gfm: true,

            // 在启用之前安装 mermaid
            // mermaid: true,

            // playground: {
            //     presets: ["ts", "vue"],
            // },

            // 在启用之前安装 @vue/repl
            // vuePlayground: true,

            // install sandpack-vue3 before enabling it
            // sandpack: true,
        },

        // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
        // https://theme-hope.vuejs.press/zh/guide/advanced/pwa.html
        // https://ecosystem.vuejs.press/zh/plugins/pwa/pwa/guide.html
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cacheImage: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },

        // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
        // https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/
        // revealjs: {
        //     plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },
    },
}, {custom: true});
