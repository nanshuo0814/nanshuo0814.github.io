---
title: Linux操作系统学习
date: 2024-05-04 14:02:06
cover: https://ypycdn.nanshuo.icu/posts/linux_learn/linux.jpg
excerpt: 本文为基于Windows 10/11系统的Linux学习指南，主要介绍了CentOS和Ubuntu两个Linux发行版的学习。文中详细描述了在Windows系统中通过VMware安装CentOS虚拟机、使用Final Shell进行远程连接、配置WSL(Ubuntu)环境的步骤。同时，还介绍了Linux基础命令，包括文件操作、权限管理、用户管理、进程监控、网络操作等，并提供了相关命令的语法和使用示例。此外，还涉及了环境变量配置、文件上传下载、压缩解压工具的使用等实用操作。本文旨在为Linux初学者提供一个全面的学习路径和操作指南。
#permalink: /archives/GJIQNhT1
isOriginal: true
category:
 - linux
tag: 
 - linux
---


>基于win10/win11电脑的Linux的相关学习
Linux操作系统有很多个发行版本，本文章主要是基于CentOS发行版的Linux操作系统来进行Linux的学习外加上Ubuntu发行版的Linux操作系统进行辅助学习。目前CentOS发行版在国内是比较流行的，Ubuntu发行版在国外比较流行。
本文的学习基于[黑马程序员Linux快速入门到精通](https://www.bilibili.com/video/BV1n84y1i7td?p=1&vd_source=73d15d6a3c5824665c87aa3c4b34c7c2)，文章内容只记录了基础的Linux知识笔记(前四章)，并没有记录实战(第五章)的Linux学习笔记，目前该课程未更新完，只更新到了第五章



# VMware软件安装

说明：VMware是一个收费软件,它有一个试用的版本(1个月),若在正式使用时,请购买正版哦。下面提供有官网下载的和百度网盘(提供了激活密钥，目前还是可以使用的）下载。

注意：仅供学习用，不可商用哦！！！


点击[这里](https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html)进入VMware官网下载

![image-20230108145803851](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108145803851.png)

按照里面有说明文档和激活密钥进行操作就行了，win7，win10和win11都有！！！

链接：https://pan.baidu.com/s/1JInJ2LLD-zHCkGrL1xqgiA
提取码：0814

下载和傻瓜式安装完成后要检查电脑是否存在有虚拟网卡VMware1和VMware8，有就证明安装成功且在电脑上配置成功。下面有两种方式查看电脑是否有虚拟网卡。推荐使用方式二更加方便快捷哦。

- 方式一

以win11为例,打开设置,选择网络和Internet,找到相关设置里的更多网络适配器选项,点击打开就行了,在里面可以查看是否有虚拟网卡。其他win版本可能会跟win11有一些差别，都是大同小异。



![image-20230108151522520](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108151522520.png)




- 方式二

如果上面的方式一没有找到所在的位置，可以使用命令行的方式更加方便快捷，具体操作为：同时按住电脑的win+r键在左下角会打开一个运行小窗口，在里面输入代码ncpa.cpl,最后按回车确定就会弹出方式一的页面了，推荐使用该方法，不管是在window哪个操作系统版本都适用（win7，win10，win11）。



![image-20230108152053706](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108152053706.png)






# CentOS的下载安装

为了方便找到该文件，最好下载完成放在自己指定的位置，后面还要使用它。


点击[这里](https://vault.centos.org/7.6.1810/isos/x86_64/)去CentOS官网下载哦



![image-20230108160556300](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108160556300.png)


链接：https://pan.baidu.com/s/1hmtNoDOeIxruehDeyI1Sdg
提取码：0814


# Linux的部署

打开软件VMware软件，点击创建新的虚拟机安装下面图片就行操作哦！！！



![image-20230108161628463](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108161628463.png)

![image-20230108162341154](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108162341154.png)

![image-20230108162536849](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108162536849.png)

![image-20230108162728593](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108162728593.png)

![image-20230108162917593](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108162917593.png)

![image-20230108163506808](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108163506808.png)

![image-20230108164239536](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108164239536.png)

![image-20230108164555177](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108164555177.png)

![image-20230108164740120](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108164740120.png)



# Final Shell软件安装

下载这个Final Shell目的是进行远程连接Linux，首先要去官网下载第三方软件Final Shell，才能进行远程连接，原理是用到SSH获取IP地址进行远程连接哦！！！


使用第三方软件FinalShell来远程连接到Linux操作系统，并且可以通过Final Shell来操作Linux系统。

解释一下为什么不用VMware软件来操作Linux系统，原因如下

1.当我们对内容的复制和粘贴时，跨越VMware并不方便

2.当我们要文件上传和下载时，也是一样的不方便

3.还有一些其他的操作也是一样。



点击[这里](http://www.hostbuf.com/t/988.html)进入Final Shell官网下载哦！！！下载傻瓜式安装就好了，注意安装这个软件时，在中途要按照一个依赖Winpcap(同样时傻瓜式按照，默认就好)，点击确定就行了，它会自己帮你按照好，这样就完成啦！！！按照好后会自动打开Final Shell官网和Final Shell软件哦！！!



![image-20230108171104762](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108171104762.png)




![image-20230108171937894](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108171937894.png)







用到两个第三方软件（VMware和Final Shell）


打开VMware软件，记得要把Linux系统进行开机哦，在Linux系统的主界面里鼠标点击右键，选择Open Terminal，就是打开Linux系统的终端，输入命令ifconfig，回车就可以获取到IP地址啦！！！



![image-20230108173127368](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108173127368.png)

![image-20230108173325824](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108173325824.png)

![image-20230108173531157](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108173531157.png)


打开Final Shell软件，建立SSH连接，用到刚刚获取的IP地址。看图操作！



![image-20230108185549911](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108185549911.png)

![image-20230108185814512](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108185814512.png)

![image-20230108190007443](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108190007443.png)

![image-20230108190309650](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108190309650.png)



# 配置WSL(Ubuntu)环境



提出问题：我们前面都已经完完整整的部署好了CentOS的Linux环境，为什么还要使用WSL来配置另一个Ubuntu的Linux环境呢？

回答问题：因为使用WSL来配置部署Linux系统是以十分轻量化的，它操作起来十分简单，轻量，好用，省内存，还很方便，不需要下载什么第三方软件，win10和win11都自带了WSL哦，直接去开启就可以了，并且WSL还深受广大开发人员的喜爱，所以WSL是值得我们学习的。但我们主要还是先要学会传统的方式，再一步步过渡到使用WSL方式来减轻不必要的工作量，总的来说，相比使用传统的方式获取Linux系统，十分繁琐，要安装完整的虚拟机，比如要下载VMware软件来配置一个Linux环境。

OK，废话不多说，现在我们开始操作。

- 方式一

在电脑设置里面，点击应用，找到可选功能点击，在可选功能里找到更多Windows功能点击，弹出一个小窗口，在里面找到“适用于Linux的Windows子系统”和“虚拟机平台”，把它们两个勾选，最后点击确定，它要重启才行，重启一下就行啦！


![image-20230108193240027](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108193240027.png)

![image-20230108193811986](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108193811986.png)

- 方式二

这个方式通用win10和win11，按住键盘win+r键输入命令control,点击确定进入控制面板，

![image-20230108194543119](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108194543119.png)

![image-20230108194716115](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108194716115.png)

![image-20230108194837473](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108194837473.png)

![image-20230108195001178](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108195001178.png)



打开电脑自带的微软商城Microsoft Store，在里面搜索Ubuntu软件进行获取安装，安装好了直接点击打开即可，根据提示输入相关的信息完成部署。


![image-20230108200557195](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108200557195.png)

![image-20230108201947452](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108201947452.png)


由于Ubuntu自带的运行窗口不太好用，建议使用win11自带的Windows终端窗口来代替Ubuntu自己的运行窗口，在任务栏里找到Windows图标右键它就能找到了，非常的简单，若是win10系统的话，则需要自己在去刚刚的微软商城Microsoft Store那里搜索Windows Terminal软件进行下载哦，由于上面演示了这么下载Ubuntu，这里就不演示这个了，这个下载跟Ubuntu一样，傻瓜式下载安装即可。然后打开刚刚提到的Windows终端窗口，进入设置界面，把默认配置文件改为Ubuntu，最后重启一下Windows终端窗口即可。



![image-20230108203614014](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108203614014.png)

![image-20230108204133849](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108204133849.png)

![image-20230108204308064](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108204308064.png)

虚拟机快照

可以理解为存档，备份或者是版本1.0/2.0等等(我是这么理解的)，回到指定的某一个状态哦，不过这个是十分耗内存的哦。我们为什么要学习这个快照呢，因为由于我们可能会在操作Linux系统时会不小心误删了什么重要的文件之类的等等，我们就可以利用这个快照回到还没删除这个重要文件的版本。

注意：这个快照是需要自己手动保存某个时间点进行快照存档的哦(最好是在Linux系统环境关机的情况下进行快照，这样效率会高一点哦)，不然会没有存档，也就回不去了，就要重装Linux系统了，这样会很麻烦。

那我们该如何进行快照呢？下面就是具体的操作，在CentOS软件里操作(这个软件不能关掉的，让它在后台最小化运行就行了)



![image-20230108210001644](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108210001644.png)

![image-20230108210211487](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108210211487.png)

![image-20230108211022604](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230108211022604.png)

阶段总结

学习到这里，第一阶段的学习就结束啦，上面是我了解基本的Linux系统的相关概念，并随之安装部署了Linux操作系统环境在Windows电脑上，学习了两种方法(CentOS和Ubuntu)安装Linux操作系统环境，第一种是传统的方式来安装Linux系统，就是在电脑上安装了一款第三方软件VMware创建了一个虚拟机环境，然后再去CentOS官网里下载安装包，最后就是再VMware软件里创建新的虚拟机，在这个虚拟机环境中添加CentOS的安装包路径来配置部署好Linux系统环境，里面有一些细节的地方要注意的，然后考虑到VMware软件里面复制粘贴和对文件下载和上传等问题跨越VMware不方便，又下载了Final Shell这个第三方软件来代替VMware软件的输入命令窗口，以后就可以在Final Shell软件里写命令代码就行了，但要注意的是VMware软件不能关闭，可以最小化再后台运行，不然的话Final Shell软件将无法使用，他这个Final Shell辅组软件的原理是使用SSH远程连接Linux操作系统来执行相关的命令行代码，总之安装的步骤和软件相对较多，但能够学习到一些重要的知识和额外的一点知识，能够更进一步地了解该Linux环境，十分有用，虽然这种方式不是最优，最简，最方便的方式，但对我来说它是不可或缺的；第二种方式相对来说比较简单，它是使用win10/win11电脑自带的WSL来安装另一个同样是Linux系统环境的Ubuntu软件，这个软件是在微软商城Microsoft Store里下载安装的,安装十分简单，傻瓜式安装，下载完成打开后可能会出现错误窗口闪退的问题，自己也找到了解决方案，锻炼自己的解决问题的能力也是很重要的，特别是解决成功一个bug或者一件事情的那种feel真的不一样，感觉特有成就感😂，这样学习才有动力嘛，才不会这么的枯燥无趣 。

# Linux基础命令
Linux目录结构说明



Linux没有盘符这个概念,只有一个跟目录“/”,所有文件都在它之下。当要查找某个文件或者文件夹的路径时，是以“/”跟目录开头的，不同于Windows系统那样有几个盘符，例如："D:\text\text.txt"(D盘下有一个text目录，text目录里有一个text.txt文件）,若再Linux系统里，则表示为：“/text/text.txt”。这就是两个不同操作系统的区别。



Linux命令基础格式


Linux有一个通用的格式（不管是什么命令，用于什么用途都可以）

command [-option] [parameter]

- command：命令本身

- -option：[可选，非必填] 命令的一些选项，可以通过选项控制命令的行为细节

- parameter：[可选，非必填] 命令的参数，多数用于命令的指向目标等

示例：

ls -l/home/test，ls是命令本身，-l是选项，/home/test是参数

命令意思：一列表的形式，显示/home/test目录的所有内容

cp -r test1 test2，cp是命令本身，-r是选项，test1和test2是参数

命令意思：复制文件夹test1成为test2



## ls命令


语法：ls [-a -l -h] [Linux路径]

说明：-a，-l，-h是可选选项，Linux路径是可选参数

标注：这些命令可以灵活变通运用哦！！！


若不使用可选的选项和参数，直接使用ls命令本身，表示以平铺的形式，列出当前工作目录(默认是用户的HOME目录,后面会通过cd来变换工作目录,工作目录不是固定的，注意Home目录不是根目录)下的内容，列出目录。

![image-20230109132233646](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109132233646.png)

![image-20230109132848388](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109132848388.png)

![image-20230109134307304](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109134307304.png)

![image-20230109134504230](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109134504230.png)



- -a: 表示all的意思，即列出全部文件（包含隐藏文件/文件夹），什么是隐藏文件/文件夹？只要是以"."点开头的文件名就是，会自动隐藏的，所以只有通过-a命令才能将它们显示出来，而ls命令（不加任何参数）不能显示出来。

- -l: 表示以列表（竖向排列）的形式来展示内容，并展示更多的信息。

- -h:表示以易于阅读的形式，列出文件的大小，单位：K，M，G等等，并且-h选项必须要搭配-l一起使用。

其中”-a“和”-l“可以组合使用，写法有很多，例如：“ls -a -l”，”ls -la“，”ls -la“等等都表示一样的作用(以列表的形式展示隐藏文件/文件夹）。


![image-20230109141510870](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109141510870.png)

![image-20230109142522018](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109142522018.png)

![image-20230109143118093](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109143118093.png)


## cd命令


当Linux终端命令行打开的时候，会默认以用户的HOME目录作为当前的工作目录

我们可以通过cd（Change Directory）命令来改变当前的工作目录

语法：cd [Linux路径]

- cd命令无需选项，只有参数选择，表示要切到哪个目录下

- cd命令行直接执行，若无写Linux路径该选项，默认会把工作目录改为用户的HOME目录哦！！！



![image-20230109144619667](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109144619667.png)


## pwd命令

查看当前的工作目录，pwd（Print Work Directory）无参数无选项，可直接使用就行



![image-20230109145159625](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109145159625.png)


### 相对路径和绝对路径

毋庸置疑，绝对路径是以根目录“/”为起点的，相对路径是以当前的目录为起点的，路径无需以“/”开头。


![image-20230109150412937](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109150412937.png)



### 特殊路径符



- “."：表示当前目录，比如：cd./Desktop 表示切换到当前目录下的Desktop目录内，和cd Desktop效果一致。

- ”.."：表示上一级目录，比如：cd.. 即可切换到上一级目录，cd../..切换到上二级的目录

- “~”：表示HOME目录，比如：cd~ 即可切换到HOME目录或cd~/Desktop，切换到HOME目录里的Desktop目录


![image-20230109173618627](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109173618627.png)



## mkdir命令



通过mkdir(Make Directory)命令可以创建新的目录(文件夹)

语法：mkdir [-p] Linux路径

- Linux路径：即要创建的文件夹路径，可以写绝对路径，也可以写相对路径。

- -p：可选，表示自动创建不存在的父目录，适用于创建连续多层级的目录。



![image-20230109175333722](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109175333722.png)

![image-20230109191501303](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109191501303.png)



## touch命令

可以通过touch命令来创建文件

语法：touch Linux路径(相对路径和绝对路径都行)



![](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109191712569.png)



## cat命令

cat命令是用来查看文件的内容，我先手动在yuan.txt文件里加入了”hello world“,使用cat命令来查看。

语法：cat Linux路径

Linux路径里可以写相对路径，绝对路径和特殊路径都行，cat命令里有一个参数且是必须要写的。


![image-20230109193033733](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109193033733.png)

![image-20230109194145099](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109194145099.png)


## more命令



more命令同样是可以查看文件的内容，但和cat命令不同的是，cat是直接将全部内容显示出来的，而more比较人性化，如果内容比较多的话它可以将内容进行一页页展示出来，会分页的。

语法：more Linux路径

同cat命令一样只有一个参数且是必须的。

案例：Linux系统内置有一个文件，路径为：/etc/services，可以使用more命令来查看，more /etc/services

提醒：在查看的过程中可以通过空格来进行翻页，通过q退出查看。


![image-20230109195607848](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109195607848.png)



## cp命令


cp(copy)命令是可以用来复制文件/文件夹

语法：cp [-r] 参数1 参数2

- -r：可选，用于复制文件夹使用，用于递归

- 参数1：必选，写Linux路径，表示复制的文件/文件夹

- 参数2：必选，写Linux路径，表示要复制到的地方


![image-20230109201202531](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109201202531.png)



## mv命令



mv(move)命令是移动文件/文件夹

语法：mv 参数1 参数2

- 参数1：Linux路径，表示要移动的文件/文件夹

- 参数2：Linux路径，表示要移动去的地方，且可以把移动的文件/文件夹进行改名(在同级目录下），若移动到的地方无该名字的文件/文件夹，则会自动创建。


![image-20230109204306831](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109204306831.png)


## rm命令



rm（remove）命令为删除文件/文件夹

语法：rm [-r -f] 参数1 参数2......参数N

- -r：用于删除文件夹

- -f：表示强制删除，不会有提示是否确定删除的选项（普通用户删除内容不会弹出信息，只有root管理员删除内容才会有提示信息，所以一般的用户用不到-f选项。
- 参数1 参数2.......参数N：表示要删除的文件/文件夹路径，按照空格隔开，可以删除很多个，若删除的参数不存在会提示用户，但不会影响其他存在的文件/文件夹的删除。

如何切换为管理员用户root呢？

- 可以输入su -root 命令输入登录密码（就是登录Linux系统的用户密码）

- 输入exit命令，退回普通用户模式。



![image-20230109210415780](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109210415780.png)

![image-20230109220624346](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109220624346.png)





### 扩展



符号*表示通配符

慎用通配符*，若操作不当可能会造成极大的损失！！！

rm命令支持通配符，即匹配任何内容（包含空）

- test*，表示匹配任何以test开头的内容

- *test，表示匹配任何以test结尾的内容

- `*test*`：表示匹配任何包含test的内容


## grep命令



grep命令可以从文件中通过关键字过滤文件行。

语法：grep [-n] 关键字 文件路径

- -n：可选，表示结果中显示匹配的行的行号。
- 关键字：必选，表示过滤的关键字，若带有空格或者特殊符号，建议使用“ ”把它们包裹起来
- 文件路径：必选，表示过滤文件内容的文件路径，可作为内容输入窗口(可以跟后面学到的管道符”|“搭配使用)



![image-20230109222335685](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109222335685.png)


### 管道符

含义：将管道符”|“左边的命令结果作为右边命令的输入。


![image-20230109225348825](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109225348825.png)



## wc命令



wc命令是统计文件行数、单词数量等

语法：wc [-c -n -l -w] 文件路径

- -c：可选，统计bytes数量
- -m：可选，统计字符数量
- -l：可选，统计行数
- -w：可选，统计单词数量
- 文件路径：必选，被统计的文件，可作为内容输入端口(可以跟前面学到的管道符”|“搭配使用)



![image-20230109224113383](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109224113383.png)



## which命令

在前面学习了许多命令，其实它们的本体是一个个的二进制可执行程序。

和Windows系统中的.exe文件时同一个意思。

而which命令的作用是查看其他一系列命令的可执行程序文件存放在哪里

语法：which 想要查询的命令



![image-20230109230320300](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109230320300.png)



## find命令



在Linux系统中，通过find命令去搜索指定的文件。

语法1：find 起始路径 -name ”被查找的文件名“。

- -name：按文件名字查询

语法2：find 起始路径 -size +|-n[KMG]

- -size：按文件大小查询
- +、-：表示大于和小于
- KMG：表示单位大小，k小写字母表示kb，M表示MB，G表示GB。
- 示例①查找小于10kb的文件：find / -size -10k；
- 示例②查找大于100MB的文件：find /  -size +100M；
- 示例③查找大于1GB的文件：find / -size +1G

为了能够有更好的展示效果，切换到root管理员权限（上面已经学习到了如何切换root权限，su - root命令）进行搜索更加清晰明了。



![image-20230109231456313](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109231456313.png)

![image-20230109231652568](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109231652568.png)

![image-20230109233007460](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109233007460.png)



## echo命令

echo命令作用是在命令行内输入指定的内容（若输入的内容有空格等特殊字符最好使用双引号“ ”把它们括起来）。

echo命令可以结合反引号(`)来使用。具体看图片操作。


![image-20230109233545776](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109233545776.png)

![image-20230109234019709](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109234019709.png)



### 重定向符

重定向符：>和>>。

- `>`：将左侧的命令结果覆盖写入到右侧指定的文件中去。

- `>>`：将左侧命令的结果，追加写入到指定的文件中去。

  ![image-20230109235340238](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230109235340238.png)

## tail命令



tail命令可以查看文章尾部的内容，跟踪文章的最新更改

语法：tail [-f -num] Linux路径

- Linux路径：表式被跟踪的文件路径
- -f：表示持续跟踪
- -num：表示查看尾部多少行，不填默认10行



![image-20230110000717776](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110000717776.png)

![image-20230110001748382](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110001748382.png)

![image-20230110001952632](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110001952632.png)


## vi/vim命令


vi/vim命令是用来编辑文件的。

语法：vi/vim 文件路径

- vim：兼容全部vi功能，一般都是使用vim命令。
- 如果文件路径不存在，那么vim命令会用于编辑新的文件



![image-20230110122308860](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110122308860.png)

![image-20230110125541698](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110125541698.png)

![image-20230110125656460](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110125656460.png)

![image-20230110125835365](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110125835365.png)

![image-20230110125937126](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110125937126.png)

![image-20230110123915316](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110123915316.png)

![image-20230110124204540](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110124204540.png)

![image-20230110124443401](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110124443401.png)

![image-20230110124907140](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110124907140.png)

## su和exit命令



su（Switch User）命令用于账户切换的系统命令，

语法 su [-] [用户名]

- -：可选，表示在切换用户后加载环境变量，建立带上
- 用户名：可选，表示要切换的用户，默认是root管理员用户
- 切换用户后，可以通过exit命令退回上一个用户，也可以使用Ctrl+d来退回。
- 普通用户：无需密码直接切换，root转普通用户。root管理员用户权限最大。
- root用户：需要密码才能切换到，普通用户转root。




![image-20230110132827157](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110132827157.png)



## sudo命令



当我们得知root管理员用户的登录密码时，可以通过su命令来登录root用户来获取最大的权限管理。但不建立长期使用root用户，避免带来系统损坏，可以使用sudo命令来为普通用户来授权，临时使用root管理员用户身份执行。

语法：sudo 其他命令

- 在其他命令之前带上sudo命令即为这一条命令赋予临时的管理员用户root，进行用户授权登录
- 但是不是所有的用户都可以使用sudo命令来临时获取root权限，需要为普通用户配置sudo认证才行

如何为普通用户配置sudo认证呢？

- 先要用su命令登录到root用户，再使用命令visudo，它会自动打开vi编辑器（路径为：/etc/sudoers）
- 然后在文件最后添加代码：`user ALL=(ALL)  NOPASSWD：ALL`，其中user是你想要配置sudo认证的用户名，NOPASSWD：ALL意思是不用使用密码进行操作
- 最后通过wq命令保存（上面vi/vim命令里有学）
- 切换回普通用户user，命令前加上sudo命令均与root运行


![image-20230110143005321](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110143005321.png)

![image-20230110143249712](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110143249712.png)

![image-20230110143708538](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110143708538.png)


## 用户和用户组命令



用户组管理（需在root用户权限下执行命令）

- 创建用户组
  - groupadd 用户组名
- 删除用户组
  - groupdel 用户组名

- 创建用户
  - useradd [-g -d] 用户名
    - -g：可选，指定用户的组，不指定会创建同名组并自动加入，若同名的组已经存在，则必选使用选项-g
    - -d：可选，指定用户的HOME路径，不指定则，HOME目录默认在：/home/用户名
- 删除用户
  - userdel [-r] 用户名
    - -r：可选，删除用户的HOME目录，不加-r，在删除用户时，HOME将被保存
- 查看用户所属的组
  - id [用户名]
    - 用户名：可选，填写要查看的用户名，若不填，则查看自身
- 修改用户所属的组
  - usermod -aG 用户组 用户名，将指定用户加入指定用户组



![image-20230110155115215](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110155115215.png)


### getent命令

语法:getent passwd/group

- passed:	查看有哪些用户信息,展示的内容为:	用户名:密码(X):用户ID:组ID:描述信息(无用):HOME目录:执行终端(默认bash)
- group:   查看有哪些组,且展示相关信息为:    组名称:组认证(显示为x):组ID


![image-20230110155447122](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110155447122.png)

![image-20230110155854479](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110155854479.png)

![image-20230110155955940](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110155955940.png)



## 查看权限控制信息


通过ls-l可以以列表的形式查看内容，并显示权限细节

![image-20230110161646799](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110161646799.png)

- 序号1：表示文件/文件夹的的权限控制信息
- 序号2：表示文件/文件夹所属用户
- 序号3：表示文件/文件夹所属用户组

![image-20230110162056631](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110162056631.png)

举例：drwxr-xr-x，表示：（其中rwx意思分别为可读，可写，可执行，小横杠-表示无该权限）

- 这是一个文件夹首字母为d，后面每三个字母字符为一组权限
- 紧接着的rwx是所属用户权限，可读可写可执行
- 再后r-x是所属用户组的权限，有可读，可执行权限，无可写权限
- 最后三个r-x是其他用户权限，有可读，可执行权限，无可写权限

![image-20230110162620011](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110162620011.png)



## chmod命令


chmod命令用来修改文件/文件夹的权限信息的

注意：只有文件/文件夹的用户或者root用户才可以修改

语法：chmod [-r] 权限 文件/文件夹

- -r：操作文件夹时必选，对文件夹的全部内容应用同样的权限修改操作
- 权限：里面填写"u=写要修改的权限（rwx）,g=权限（rwl），o=权限（rwl)"
  - u：用户本身
  - g：用户所属用户组
  - o：其他用户
- 文件/文件夹：填写要修改的文件/文件夹的权限

示例：

chmod u=rwx,g=rx,o=x hello.txt，意思是将hello.txt文件权限修改为用户自己（u）的权限rwx，该用户组（g）使用该文件的权限为rx，其他用户使用该文件的权限为x


![image-20230110171244327](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110171244327.png)



### 权限的数字序号


权限用3位数字来代表，第一位数字表示用户权限，第二位表示用户权限组，第三位表示其他用户权限

数字代表的功能如下（r=4，w=2，x=1），可以通过这个推出来其他的权限

- 0：无任何权限，即---
- 1：仅有x权限，即--x
- 2：仅有w权限，即-w-
- 3：有w和x权限，即-wx
- 4：仅有r权限，即r--
- 5：有r和x权限，即r-x
- 6：有r和w权限，即rw-
- 7：有全部权限，即rwx

示例：chmod 751表示chmod rwx


![image-20230110175242428](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110175242428.png)



## chown命令



chown命令可以修改文件/文件夹的所属用户和用户组

普通用户无法修改所属为其他用户或组，所以此命令只适用于root用户执行

语法：chown [-R] [用户] [:] [用户组] 文件和文件夹

- -R：同chmod，对文件夹内全部内容应用相同规则
- 用户：修改所属用户
- 用户组：修改所属用户组
- “:”：用于分隔用户和用户组，若只修改用户组，”:“左边的用户可以省略不写，只写右边的用户组就行



![image-20230110191453826](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110191453826.png)



# Linux实用操作

## 各类快捷键小技巧

### ctrl+c


作用：ctrl+c强制停止，使用了这个快捷键会在终端里显示^c这个符号

场景：Linux的某些程序的运行，如果想要强制停止它们，就可以使用，如：tail命令；又或者命令输入错误等情况，使用快捷键，退出当前的输入，重新输入。

![image-20230110192513623](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110192513623.png)


### ctrl+d



ctrl+d退出或登出，或者退出某些特定程序的专属页面，但它不能用于退出vi/vim命令的编辑。

![image-20230110192920182](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110192920182.png)



### 历史搜索

- **history**

  history命令，查看历史输入过的命令

![image-20230110205232230](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110205232230.png)

- ！
  ！命令前缀，自动执行上一次匹配前缀的命令

![image-20230110205659060](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110205659060.png)

- ctrl+r
  - ctrl+r输入内容匹配历史命令
  - 如果搜到的内容是你所需要的直接按回车键执行
  - 如果搜到的内容不全是你需要的，可以按键盘左右键，可以得到这个命令且可以进行修改，再执行

![image-20230110210501427](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110210501427.png)

### 光标移动

- ctrl+a，跳到命令开头
- ctrl+e，跳到命令结尾
- ctrl+键盘左键，向左跳一个单词
- ctrl+键盘右键，向右跳一个单词

### 清屏

- ctrl+l，可以清除终端内容
- clear命令，可以清除终端内容

## 安装程序命令

列举出了CentOS和Ubuntu两个Linux系统环境的安装命令

yum是CentOS的安装程序命令


yum：RPM包软件管理器，用于自动化按照配置Linux软件，并可以自动解决依赖问题

语法：yum [-y] [install | remove | search] 软件名称

- -y：自动确认，无需手动确定按照或者卸载过程
- install：按照
- remove：卸载
- search：搜索

权限：yum命令需要管理员root权限哦，使用su命令切换到root，或使用临时root权限，命令为sudo，执行这些命令都需要联网才行

例子：使用yum命令安装wget程序，看图操作



![image-20230110212910901](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110212910901.png)

![image-20230110213114768](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110213114768.png)

![image-20230110213515465](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110213515465.png)

apt是Ubuntu的安装程序命令

同CentOS的安装程序yum命令一样的语法，就是换了个命令，其他的都不变



![image-20230110215146362](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110215146362.png)

![image-20230110215505735](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110215505735.png)



## systemctl命令

Linux系统很多软件（内置或者第三方）均支持systemctl命令控制：启动、停止、开机自启，能被systemctl管理的软件，一般称之为服务

语法：systemctl start | stop | status | enable | disable 服务器

- start：启动
- stop：关闭
- status：查看状态
- enable：开启开机自启
- disable：关闭开机自启

系统内置的服务比较多，例如：

- NetWorkManager，主网络服务
- network，副网络服务
- firewalld，防火墙服务
- sshd，ssh服务（Final Shell远程登录Linux就是使用的这个服务

除了内置的服务外，部分第三方软件安装也可以以systemctl进行控制

- yum install -y ntp ，安装ntp软件（时间同步的软件）

  可以通过ntp服务名，配合systemctl进行控制

- yum install -y httpd，安装httpd服务软件

  可以通过httpd服务名，配合systemctl进行控制



![image-20230110222001133](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230110222001133.png)


### 软连接ln命令


在Linux系统中创建软连接,可以将文件/文件夹链接到其他位置,类似widows系统中的快捷方式

语法：ln -s 参数1 参数2

- -s：创建软连接
- 参数1：被链接的文件/文件夹
- 参数2：要链接去的目的地
- 最好使用绝对路径



![image-20230111123656535](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111123656535.png)

![image-20230111131838652](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111131838652.png)



## 日期和时区

### date命令



通过date命令可以在命令行中查看系统的时间

语法：date [-d] [+格式化字符串]

- -d：按照给定的字符串显示信息，一般用于日期计算，且-d还可以和格式化字符串一起使用哦
  - year年
  - mouth月
  - day日
  - hour时间
  - Minute分钟
  - second秒
  - 例子：date -d “+1 day” +%Y%m%d ，含义是显示后一天的日期，以此类推
- 格式化字符串：通过给定的字符串标记，来控制显示的日期格式
  - %Y：年
  - %y：年份的后两位数字（00-99）
  - %M：月份（01-12）
  - %d：日（01-31）
  - %H：小时（00-23）
  - %M：分钟（00-59）
  - %S：秒（00-60）
  - %s：自1970-01-01 00:00:00 UTC 到现在的秒数



![image-20230111135014701](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111135014701.png)

![image-20230111135815866](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111135815866.png)



### ntp程序



可以通过ntp程序来自动校准系统时间

直接使用学过的yum/apt（CentOS和Ubuntu）命令安装就行，例：CentOS系统下为：yum -y install ntp，

设置开机自启：使用学过的命令systemctl，systemctl start ntpd和systemctl enable ntpd，当ntpd启动后会定期帮助我们联网校准标准系统的时间，也可以手动校准（需要root权限），使用命令：ntpdate -u ntp.aliyun.com，该命令的含义是通过阿里云提供的服务网址配合ntpdate（安装ntp后会附带这个命令）命令自动校准。



![image-20230111141314312](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111141314312.png)


## IP地址和主机名

### IP地址



每一台联网的电脑都会有一个IP地址，用来和其他计算机就行通信

IP地址有V4和V6两个版本，其中V4是常用，V6很少用到

IPV4版本的地址格式是：a.b.c.d，其中abcd表示是数字0-255的数字，如：192.168.88.101,这是一个标准的ip地址

上面学习到了使用SSH远程连接Linux系统时要用到Linux系统的ip地址，使用ifconfig命令来查看Linux系统的ip地址（ip地址会变的），如果无法使用ifconfig命令可以通过yum命令下载安装net-tools程序解决，命令为yum -y install net-tools。

特殊的ip地址

- 127.0.0.1：该ip地址是本机的意思
- 0.0.0.0：可以用来指代本机，可以在端口绑定中用来确定绑定关系，在一些ip地址限制中，表示所有ip地址的意思，如放行规则设置为0.0.0.0，表示允许任意ip访问


![image-20230111142529345](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111142529345.png)


### 主机名



没一台电脑除了对外联络地址（ip地址外），还可以有一个名字，称为主机名

无论是Windows/Linux系统，都可以给系统设置主机名

使用hostname命令查看主机名

使用hostnamectl set-hostname 主机名，此命令可以修改主机名，修改时要使用root权限

查看已修改的主机名，需要重启/重新登录Final Shell才可以看到



![image-20230111144318644](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111144318644.png)

![image-20230111144535440](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111144535440.png)



### 域名解析



由于IP地址（一串数字）实在是难以记忆，就出现了域名解析这个概念，例如打开百度网址（百度IP为`14.215.177.39`），没有人会通过ip地址来访问吧，都是通过百度的域名`www.baidu.com`来访问百度网址，这个网址就是域名，域名解析的原理是通过域名来映射ip地址进行访问。我们可以试试直接使用百度的IP地址去访问百度也是可以的，直接在网址上输入百度ip搜索即可。

示例：访问`www.baidu.com`的流程是怎么样的？

电脑会现在本机里查看是否有记录该网址，Windows系统则查看"C:\Windows\System32\drivers\etc\hosts"这个文件，Linux系统查看"/etc/hosts"，若查看没有，则会联网去公开的DNS服务器（如114.114.114.114，8.8.8.8等）访问，DNS服务器的原理是可以通过域名来解析到对应的ip地址，最后在进行访问，所以我们就只需要记住百度的域名（比记百度的ip地址简单）就行了，若都没有查找到（就是在DNS服务器里并没有记录到该域名，或者说压根就没有该域名网址）则查找网址失败404状态码。

- C:\Windows\System32\drivers\etc\hosts：这个文件是可以自行修改的，配置自己需要的IP地址和域名解析即可，Linux系统里的这个文件也是一样，例如，配置Linux系统远程连接的使用到的SSH的IP地址，我们可以把这个IP地址的域名解析为自己Linux系统的主机名（我的Linux系统的主机名是centos，IP是192.168.132.134），即把"192.168.132.134 centos"这段代码加入hosts文件最后一行保存即可，记得要使用管理员的方式进行配置，不然不行（原因是没有权限）。

![image-20230111145612324](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111145612324.png)


注意：下面配置的Linux的IP地址会变化的，过了一段时间或者重启时会变化的，再次使用该IP或者域名会连接不到，所以这是临时的域名和IP，接下来会学习到如何固定连接Linux系统的IP地址和域名，这样子过了一段时间断开连接了，再次访问时就不会访问不到了。

![image-20230111152427690](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111152427690.png)

![image-20230111152919855](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111152919855.png)

![image-20230111153107936](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111153107936.png)

![image-20230111153545588](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111153545588.png)

![image-20230111153252699](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111153252699.png)

![image-20230111153738783](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111153738783.png)

![image-20230111153850724](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111153850724.png)



### 固定IP



提出问题：为什么需要固定IP地址呢？

- 当前我们的虚拟机的Linux操作系统，其IP地址是通过DHCP服务获取的。

- DHCP：动态获取IP地址，即每次重启设备后会获取一次，可能会导致IP地址频繁的变更
- 办公电脑IP地址变化无所谓，但是我们要远程连接到Linux系统，如果IP地址经常更换变化，我们就要频繁的修改配置变化，会很麻烦
- 在我们刚刚配置好的Linux系统的IP和域名为Linux系统的主机名的映射，如果频繁更换了IP地址，则也需要频繁修改配置好的映射关系

解决方案：在VMware Workstation软件中配置固定的IP地址

- 在VMware Workstation（或Fusion）中配置IP地址网关和网段（IP地址的范围）

  - 首先要把Linux系统关机，在主页面点击`编辑`选项，再选择`虚拟网络编辑器`选项，需要先在页面右下角开启管理员root模式才可以修改，然后在该页面内选中`VMnet8`选项，把下面的子网IP改为192.168.xxx.0，其中xxx可以自己自定义，子网掩码改为255.255.255.0（有些默认是这个的），再同一页面点击选项`NAT设置`选项，再新的页面把网关IP改为192.168.xxx.2，点击确定，退回之前的`虚拟网络编辑器`页面点击确定即可



![image-20230111162134011](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111162134011.png)

![image-20230111162558284](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111162558284.png)

![image-20230111162658526](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111162658526.png)

- 在Linux系统中手动修改配置文件，固定IP地址，这里可以选择使用Final Shell软件修改（这个要确保Linux系统时开机状态的），也可以直接选择Vmware软件修改也行，下面是使用VMware软件进行修改的

  - 上面的步骤做完后，将Linux系统进行开机，开机后在Linux系统桌面点击右键，选择Open Terminal选项进入终端，输入命令vim /etc/sysconfig/network-scripts/ifcfg-ens33，vim命令操作之前已经学过了，不再讲了，点击确定进入编辑ens33文件，然后找到BOOTPROTO="dhcp"，大概是文件内容的第4行，把它修改为BOOTPROTO="static"，然后在最后添加代码IPADDR="196.168.xxx.xxx"，第一个xxx：我上面是改为了88，根据自己改的修改，第二个xxx：自定义一个数字（0-254之间），以后这个就是固定的ILinux系统的P地址了，接着在其后面一行再添加一行代码：NETMASK="255.255.255.0"，在后一行再添加代码：GATEWAY="192.168.xxx.2"，xxx跟上面一样，我填的是88，最后在后一行再添加一行代码：DNS1="192.168.xxx.2"，这个xxx跟上面一样的意思，然后wq保存退出，这样就修改成功了



    ![image-20230111165953625](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111165953625.png)

- 修改完成后，重启网卡，先把网卡停止，命令为：systemctl stop network，再通过systemctl start network，开启网卡，或者直接使用systemctl restart network命令这样就修改成功了，最后通过ip a/ifconfig命令查看是否修改成功就行了



    ![image-20230111175022271](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111175022271.png)



- 上面的步骤都做完后，再去配置Linux系统的IP地址域名就行了，这样IP地址不会更换了，配置的文件是Windows系统下的文件，路径为C:\Windows\System32\drivers\etc\hosts，记得要保存，最后修改Final Shell软件SSH连接的IP地址为域名（其实不用写域名也可以的哦，直接写IP地址也行，只不过学了域名嘛，就用一下域名）就行啦！！！双击打开验证是否可以连接到就ok啦。


![image-20230111175617173](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111175617173.png)

![image-20230111175947906](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111175947906.png)

![image-20230111180213927](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111180213927.png)



## 网络请求和下载

### ping命令


ping命令检查网络服务器是否可连通状态

语法：ping [-c num] ip/主机名

- -c num：可选的，num检查的次数，若不加此选项，则无限次检查
- ip/主机名：必选，被检查的ip/主机名的地址，若IP地址不存在，报Unreachable不可达信号



![image-20230111190010160](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111190010160.png)



### wget命令


wget是非交互式的文件下载器，可以在命令行内下载网络文件

语法：wget [-b] url

- -b：可选，后台下载，会将日志写入当前的工作目录的wget-log文件
- url：下载链接

注意：即使是终止了下载，它也会在生成文件保存在当前目录下，只是这个文件并不完整，打开不了等问题



![image-20230111192644538](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111192644538.png)



### curl命令


curl命令可以发送http网络请求，可用于：下载文件和获取信息等

语法：curl [-O] url

- -O：用于下载文件，当url是下载链接时，可以使用此选项保存文件
- url：要发起请求的网络地址

例子：向cip.cc发起网络请求，它会返回你主机的公网IP地址



![image-20230111193949530](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111193949530.png)



## 端口


计算机程序之间的通讯，通过IP只能锁定计算机，但无法确定具体的程序，因此出现了端口的概念，通过端口可以找到计算机里的具体某个程序，确保了程序之间的通讯

Linux系统可以支持65535个端口，这6万个端口分为3类

- 1~1023：公认端口，通常用于一些系统内置或知名程序的预留使用，如SSH服务远程连接Linux系统的22端口，HTTPS服务的443端口，非特殊需要不要占用这个范围内的端口
- 1024~49151：注册端口，通常可以随便使用，用于松散的绑定一些程序/服务
- 49152~65535：动态端口，通常不会固定绑定程序，而是当程序对外进行网络连接时，用于临时使用

![image-20230111194733958](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111194733958.png)


### nmap命令

可以通过nmap命令来查看端口占用情况，先要在Linux环境中安装该程序，使用yum/apt -y nmap

语法：nmap 被查看的IP地址



![image-20230111200045767](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111200045767.png)

![image-20230111200353189](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111200353189.png)



### netstat命令



netstat命令可以查看指定的端口的占用情况，先使用命令yum/apt 安装哦，yum -y install net-tools

语法：netstat -anp | grep 端口号，其中grep命令已经学过了，过滤命令”|“为管道符也学过了



![image-20230111201152549](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111201152549.png)

![image-20230111201546136](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111201546136.png)



## 进程

程序运行在操作系统中，是被操作系统所管理的，为管理运行的程序，每一个程序在运行的时候，便被操作系统注册为系统中的一个进程，并为每一个进程都分配一个独有的id，称为进程id（进程号）。

### ps命令



ps命令用来查看Linux系统中的进程信息，这个命令可以灵活使用管道符"|"和grep等命令来一起运用使用的。

语法：ps [-e -f]

- -e：显示全部的进程
- -f：以完全格式化的形式展示全部信息
- 常用的命令是ps -ef，列出全部进程的全部信息

列表菜单的名称

- UID：进程所属的用户ID
- PID：进程的进程号
- PPID：进程的父ID
- C：此进程CPU占有率（百分比）
- STIME：进程的启动时间
- TTY：启动此进程终端序号，如显示？，表示非终端启动
- TIME：进程占用的CPU时间
- CMD：进程对应的名称或启动连接或启动命令


![image-20230111202709982](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111202709982.png)

![image-20230111202809936](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111202809936.png)

![image-20230111203243897](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111203243897.png)



### kill命令



kill命令可以关闭进程

语法：kill [-9] 进程ID

- -9：表示强制关闭进程，不使用此选项会向进程发送信号要求其关闭，但是是否关闭要看进程自身的处理机制


![image-20230111204318295](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111204318295.png)



## 主机状态监控

### top命令

top命令可以查看系统资源的占用情况，通过top命令查看CPU、内存使用情况，类似于Windows系统的任务管理器，默认5秒刷新一次，

下面的选项太多，就不一一操作图片展示了，自己多动手操作就完了！！！

语法：top [-p -d -c -n -b -i -u]

- -p：只显示某个进程的信息
- -d：设置刷新时间，默认是5秒
- -c：显示产生进程的完整命令
- -n：指定刷新次数，刷新完会退出，例如：top -n 3
- -b：以非交互非全屏模式运行，以批次的方式执行top，一般配合-n指定刷新次数来统计信息，将输出重定向到指定文件，比如top -b -n 3 > /tmp/top.tmp
- -i：不显示任何闲置（idle）或无用（zombie）的进程
- -u：查找特定用户启动的进程
- 按键盘q键退出
- ctrl+c快捷键也可以退出


![image-20230111205105157](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111205105157.png)

![image-20230111205234798](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111205234798.png)

![image-20230111205838130](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111205838130.png)

![image-20230111205746603](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111205746603.png)

![image-20230111211034432](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111211034432.png)


### df命令

使用df命令，可以查看硬盘的使用情况

语法：df [-h]

- -h：以更加人性化的单位显示



![image-20230111211359368](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111211359368.png)


### iostat命令

使用iostat命令查看CPU、磁盘的相关信息

语法：iostat [-x] [num1] [num2]

- -x：显示更多信息
- num1：数字，刷新间隔
- num2：数字，刷新几次



![image-20230111212210166](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111212210166.png)

![image-20230111212117359](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111212117359.png)

![image-20230111212338456](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111212338456.png)



### sar命令

使用sar命令查看网络相关的统计（sar命令十分的复杂，这里仅简单用于统计网络）

语法：sar -n DEV num1 num2

- -n：查看网络，DEV表示查看网络接口
- num1：刷新间隔（不填就表示查看1次结束）
- num2：查看次数（不填则查看无数次）



![image-20230111212849895](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111212849895.png)

![image-20230111212940020](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111212940020.png)


## 环境变量

### env命令

使用env命令可以查看当前系统中记录的环境变量，会以键值对的形式展示出来，例如：USER=user，表示当前的操作用户为user。

其中env命令查到的信息里有PATH的键值对，它的值



![image-20230111213450113](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111213450113.png)

![image-20230111214124045](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111214124045.png)

![image-20230111214158740](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111214158740.png)



### $符号

$符号在Linux系统中用于取“变量”的值

语法：$环境变量名

例子：echo$PATH


![image-20230111214958189](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111214958189.png)



### export命令



Linux环境变量可以用户自行设置，其中分为：

- 临时设置：语法：export 变量名=变量值
- 永久生效：
  - 针对当前用户生效，配置在当前用户的：~/.bashrc文件中
  - 针对所有用户生效，配置在系统的：/etc/profile文件中
  - 并通过语法：source 配置文件，进行立刻生效，后重新启动Final Shell生效



![image-20230111215836226](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111215836226.png)

![image-20230111221705862](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111221705862.png)



## 文件上传下载


使用Final Shell软件工具，在Final Shell软件的主界面下有个视图窗体，提供了Linux文件系统视图，可以直接使用简单粗暴的方式来上传和下载

- 下载：在视图中找到想要下载的文件，鼠标右键点击，选择下载选项，可直接下载，它会下载到桌面fsdownload目录(没有该目录会创建)里

- 上传：在Windows系统中找到想要上传的文件，直接使用鼠标按住左键把它拖进去Final Shell软件视图中去，或者跟下载一样,点击上传，Final Shell会自动同步到Linux虚拟机中



![image-20230111224452480](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230111224452480.png)



### rz、sz命令



rz，sz命令分别是上传和下载的命令，使用rz、sz命令需要通过yum命令先安装lrzsz程序，命令为yum -y install lrzsz，安装依赖程序

- rz命令，语法：rz
- sz命令，语法：sz 要下载的文件，文件会自动下载到Windows系统桌面的fsdownload文件夹中



![image-20230112172806816](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230112172806816.png)



## 压缩解压



压缩格式

- zip格式：Linux、Windows、MasOS系统常用
- 7zip格式：Windows系统系统常用
- rar格式：Windows系统常用
- tar格式：Linux、MasOS系统常用
- gzip格式：Linux、MasOS系统常用

在Windows系统中常用的软件如：winrar、bandizip等软件，都支持各类常见的压缩格式，Linux系统主要要学习的压缩格式为tar、gzip、zip三种压缩方式，完成文件的压缩和解压操作，压缩和解压的时候遇到同名的文件，会将同名文件覆盖，取名要谨慎！！！


### tar命令



Linux系统常用的两种压缩格式，后缀分别是：

- .tar，称之为tarball，归档文件，即简单的将文件组装到一个.tar的文件内，并没有太多的文件体积的减少，仅仅是简单的封装
- .gz，即使用gzip压缩算法将文件压缩到一个文件内，可以极大的减少压缩后的体积

以上两种格式，使用tar命令均可以进行压缩和解压缩的操作

语法：tar [-c -v -x -f -z -C] 参数1 参数2...参数N

- -c：创建压缩文件，用于压缩模式
- -v：显示压缩、解压过程，用于查看进度
- -x：解压模式
- -f：要创建的文件，或要解压的文件，-f选项必须在所有选项中位置处于最后一个
- -z：gzip模式，不使用-z就是普通的tarball格式，若要使用该选项，一般放在选项的第一个
- -C：选择解压的目的地，用于解压模式

tar压缩的常用的一些组合：

- tar -cvf test.tar 1.txt 2.txt 3.txt

  将1.txt 2.txt 3.txt压缩到test.tar文件内

- tar -zcvf test.tar.gz 1.txt 2.txt 3.txt

  将1.txt 2.txt 3.txt 压缩到test.tar.gz文件内，使用gzip模式

tar解压的常用的一些组合：

- tar -xvf test.tar

  解压test.tat文件，将文件解压到当前的目录下

- tar -xvf test.tar -C /home/user

  解压test.tar文件，将文件解压到指定目录下（/home/user）

- tar -zxvf test.tar.gz -C /home/user

  以Gzip模式解压test.tar.gz，将文件解压到指定目录（/home/user）



![image-20230112211914499](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230112211914499.png)

![image-20230112212936169](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230112212936169.png)

![image-20230112213313652](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230112213313652.png)



### zip/unzip命令



zip命令也可以压缩文件，将文件压缩为zip压缩包

语法：zip [-r] 参数1 参数2...参数N

- -r：被压缩的文件包含文件夹时，需要使用-r选项，和rm、cp等命令的-r选项的效果一样

示例：

- zip test.zip a.txt b.txt c.txt

  将a.txt、b.txt和c.txt文件压缩到test.zip文件内

- zip -r test.zip a.txt b.txt test

  将a.txt、b.txt文件和test文件夹压缩到test.zip文件内

unzip命令也可以用来解压.zip文件

语法：unzip 参数 [-d]

- -d：指定要解压去的地方，同tar的-r选项，功能一样
- 参数：被解压的.zip压缩包文件

示例：

- unzip test.zip

  将test.zip文件解压到当前的目录

- unzip test.zip -d /home/test

  将test.zip文件解压到指定的目录下（/home/test)


![image-20230112214852460](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230112214852460.png)

![image-20230112220233597](https://ypycdn.nanshuo.icu/posts/linux_learn/image-20230112220233597.png)
