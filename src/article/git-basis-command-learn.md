---
title: Git工具常用命令
date: 2024-05-04 14:02:05
cover: https://ypycdn.nanshuo.icu/posts/git_learn/ggit.webp
excerpt: 本文介绍了 Git 工具的常用命令，包括安装、初始化、添加文件、提交、查看历史记录、版本穿梭、分支操作、远程仓库操作和 SSH 免密登录等。
#permalink: /archives/leVoPANr
isOriginal: true
category:
 - git
tag: 
 - git
 - 前端
 - 后端
---



# 安装Git
点击<a href="https://git-scm.com/" target="_blank">https://git-scm.com/</a>进入Git官网,进行下安装Git

# Git常用命令

<font color="red">注意</font>：Linux命令可以通用到Git命令里,最好先去学一点Linux基础知识的相关命令再来学习git，效果会更好哦

| 命令名称                              | 作用           |                             说明                             |
 | :------------------------------------ | :------------- | :----------------------------------------------------------: |
| git config --global user.name 用户名 | 设置用户签名   | 签名的作用是区分不同操作者的身份,用户的签名在每一个版本的提交信息中都能够看到,以此确定本次提交是谁做的。<font color="red">Git首次安装必须设置一下签名，否则无法提交代码。</font> |
| git config --global user.email 邮箱   | 设置用户邮箱   | 这里的用户邮箱和上面的用户签名可以随便写，最好是真实的用户名和邮箱，方便以后提交代码时，可以定位到是谁提交的。 |
| git init                              | 初始化本地仓库 | 在想要的文件夹内初始化本地仓库，使用鼠标右键打开Git bush命令，输入该git init命令即可创建一个空的本地仓库。 |
| git status                            | 查看本地库状态 | 可以查看仓库的当前的状态，有无修改过的痕迹，根据仓库的状态会在运行窗口呈现出不同的状态 |
| git add 文件名                        | 添加到暂存区   |            将本地的文件等内容，添加到暂存区的命令            |
| git commit -m "日志信息" 文件名       | 提交到本地库   |                  将暂存区的文件提交到本地库                  |
| git refolg                            | 查看历史记录   |                     查看历史提交版本信息                     |
| git reset --hard 版本号               | 版本穿梭       |        跳转到指定的版本，每一个历史版本都有一个版本号        |

## 分支的操作

| 命令名称            | 作用                           |
| :------------------ | :----------------------------- |
| git branch 分支名   | 创建分支                       |
| git branch -v       | 查看分支                       |
| git checkout 分支名 | 切换分支                       |
| git merge 分支名    | 把指定的分支合并到当前的分支上 |

# Github的Git命令

进入Github官网：<a href="https://github.com/" target="_blank">https://github.com/</a>

## 远程仓库操作

| 命令名称                         | 作用                                                       |
| :------------------------------- | :--------------------------------------------------------- |
| git remove -v                    | 查看所有远程仓库的别名                                     |
| git remove add 别名 远程仓库地址 | 起别名                                                     |
| git push 别名 分支               | 推送本地分支上的内容到远程仓库                             |
| git clone 远程地址               | 将远程仓库的内容克隆到本地                                 |
| git pull 远程库地址别名 远程分支 | 将远程仓库对于分支最新内容拉下来后与当前的本地分支直接合并 |

## SSH免密登录

需要创建一个公钥

命令为：ssh -keygen -t rsa -C "填自己的邮箱地址"，输入了该命令，接着连续敲三次回车键即可生成公钥。公钥在.ssh文件里，最后在Github上创建SSH Keys，把公钥的代码填进去保存即可。