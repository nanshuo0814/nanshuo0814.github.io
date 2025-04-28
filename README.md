# Nanshuo Docs Blog

一个基于 VuePress 2.0 和 VuePress Theme Hope 主题的个人博客网站，用于记录生活、学习和工作的点点滴滴。

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![VuePress](https://img.shields.io/badge/VuePress-2.0.0-brightgreen.svg)](https://v2.vuepress.vuejs.org/)
[![Theme Hope](https://img.shields.io/badge/Theme-Hope-green.svg)](https://theme-hope.vuejs.press/)

## 🎯 特性

- 📝 使用 Markdown 语法编写文档
- 🎨 基于 VuePress Theme Hope 主题，提供美观的界面
- 🔍 内置强大的全文搜索功能
- 📱 响应式设计，支持移动端访问
- 🎵 集成 APlayer 音乐播放器
- 🎮 支持 Kotlin Playground 代码演示
- 📊 支持 Markmap 思维导图
- 📰 RSS Feed 支持

## 📦 目录结构

```
nanshuo-docs-blog/
├── src/                # 文档源文件目录
│   ├── .vuepress/     # VuePress 配置目录
│   ├── java/          # Java 相关文档
│   ├── analyse/       # 分析文章
│   ├── music-man/     # 音乐相关内容
│   ├── quick-start/   # 快速入门指南
│   ├── resource-nav/  # 资源导航
│   ├── about-author/  # 关于作者
│   └── article/       # 其他文章
├── dist/              # 构建输出目录
└── package.json       # 项目配置文件
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 安装

```bash
# 克隆项目
git clone [your-repository-url]

# 进入项目目录
cd nanshuo-docs-blog

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发服务器
pnpm docs:dev

# 清除缓存并启动开发服务器
pnpm docs:clean-dev
```

### 构建

```bash
# 构建静态文件
pnpm docs:build
```

## 🔧 配置

主要配置文件位于 `.vuepress` 目录下，包括：

- 站点配置
- 主题配置
- 插件配置
- 样式配置

## 📝 写作

1. 在 `src` 目录下创建或编辑 Markdown 文件
2. 遵循 VuePress 的 Markdown 扩展语法
3. 使用主题提供的组件增强文档功能

## 🤝 贡献

欢迎提交问题和改进建议！

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。 