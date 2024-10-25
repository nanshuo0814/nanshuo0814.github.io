---
title: 前后端项目部署笔记
date: 2024-05-04 14:02:06
cover: https://ypycdn.nanshuo.icu/posts/qhdbs/qianhouduanbushu.jpg
excerpt: 本文介绍了在 Centos 系统上部署前后端项目的三种方法：原始部署、宝塔部署和 Docker 容器部署，并讲解了跨域问题的解决方法。
#permalink: /archives/GcGV7h0g
isOriginal: true
star: true
category:
 - 项目部署
tag: 
 - 宝塔
 - java
 - SpringBoot
 - docker
 - linux
 - vue
 - nginx
 - react
---


# 前后端项目部署笔记(Centos)

本文使用了腾讯云的[轻量级应用服务器](https://console.cloud.tencent.com/)来演示，服务器除了下面的前后端部署项目以外，还可以部署其他项目，如hexo博客等等项目。

前端：Vue、React...

后端：Java、python...(本文是以Java项目部署为主)

## 原始部署

什么都是自己手动装，例如：nginx、tomcat等等，本节使用Xshell工具来操作命令

### 前端

- 安装nginx服务器
  参考文章：
  [Nginx三种安装方式 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/425790769)
  ```bash
  # 查看当前路径
  [root@VM-20-12-centos ~]#  pwd
  /root
  
  # 创建自定义目录来存储安装所需的nginx和各种依赖包等等
  [root@VM-20-12-centos ~]# mkdir services
  
  # 查看详细信息
  [root@VM-20-12-centos ~]# ll
  total 4
  drwxr-xr-x 2 root root 4096 Mar 16 13:35 services
  
  # 进入创建好的目录
  [root@VM-20-12-centos ~]# cd services
  
  # 使用curl下载nginx
  [root@VM-20-12-centos services]# curl -o nginx-1.25.4.tar.gz http://nginx.org/download/nginx-1.25.4.tar.gz
    % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                   Dload  Upload   Total   Spent    Left  Speed
  100 1207k  100 1207k    0     0  34214      0  0:00:36  0:00:36 --:--:-- 16012
  ```

- 解压nginx(若在解压报错，重新再执行一下命令即可)

  ```bash
  # 解压
  [root@VM-20-12-centos services]# tar -zxvf nginx-1.25.4.tar.gz
  [root@VM-20-12-centos services]# ll
  total 1212
  drwxr-xr-x 8  502 games    4096 Feb 15 00:03 nginx-1.25.4
  -rw-r--r-- 1 root root  1236273 Mar 16 13:37 nginx-1.25.4.tar.gz
  
  # 进入nginx-1.25.4目录
  [root@VM-20-12-centos services]# cd nginx-1.25.4
  [root@VM-20-12-centos nginx-1.25.4]# ls
  auto  CHANGES  CHANGES.ru  conf  configure  contrib  html  LICENSE  man  README  src
  ```

- 执行`./configure`命令，检查nginx依赖环境

  **注意：执行了./configure命令后这里原本在自定义nginx目录（nginx-1.25.4)里面的的nginx.conf配置文件不再是系统里的nginx配置文件了，而是在`/usr/local/nginx/conf`这个目录里的nginx.config才是系统环境变量的nginx配置文件，会在下面修改nginx.conf配置文件的步骤里体现出来，请注意。**

  ```bash
  [root@VM-20-12-centos nginx-1.25.4]# ./configure
  Configuration summary
    + using system PCRE library
    + OpenSSL library is not used
    + using system zlib library
  
    nginx path prefix: "/usr/local/nginx"
    nginx binary file: "/usr/local/nginx/sbin/nginx"
    nginx modules path: "/usr/local/nginx/modules"
    nginx configuration prefix: "/usr/local/nginx/conf"
    nginx configuration file: "/usr/local/nginx/conf/nginx.conf"
    nginx pid file: "/usr/local/nginx/logs/nginx.pid"
    nginx error log file: "/usr/local/nginx/logs/error.log"
    nginx http access log file: "/usr/local/nginx/logs/access.log"
    nginx http client request body temporary files: "client_body_temp"
    nginx http proxy temporary files: "proxy_temp"
    nginx http fastcgi temporary files: "fastcgi_temp"
    nginx http uwsgi temporary files: "uwsgi_temp"
    nginx http scgi temporary files: "scgi_temp"
  
  # 若./configure命令报错没有pcre依赖，执行下面的命令即可
  [root@VM-20-12-centos nginx-1.25.4]# yum install pcre pcre-devel -y
  
  # 若./configure命令报错没有openssl依赖，执行下面的目录即可
  [root@VM-20-12-centos nginx-1.25.4]# yum install openssl openssl-devel -y
  ```

- make编译

  ```bash
  [root@VM-20-12-centos nginx-1.25.4]# make
  ```

- make install安装

  ```bash
  [root@VM-20-12-centos nginx-1.25.4]# make install
  ```

- 配置环境变量

  ```bash
  # 执行nginx命令，发现没有找到
  [root@VM-20-12-centos nginx-1.25.4]# nginx
  -bash: nginx: command not found
  
  # 配置nginx环境变量，在文件最末尾添加 export PATH=$PATH:/usr/local/nginx/sbin	
  [root@VM-20-12-centos nginx-1.25.4]# vim /etc/profile
  
  # 使文件生效
  [root@VM-20-12-centos nginx-1.25.4]# source /etc/profile
  
  # 若无提示-bash: nginx: command not found，则是成功了
  [root@VM-20-12-centos nginx-1.25.4]# nginx
  
  # 查看启动情况
  [root@VM-20-12-centos nginx-1.25.4]# netstat -ntlp
  Active Internet connections (only servers)
  Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
  tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      16914/nginx: master 
  tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1368/sshd           
  tcp        0      0 127.0.0.1:25            0.0.0.0:*               LISTEN      1274/master         
  tcp6       0      0 :::22                   :::*                    LISTEN      1368/sshd           
  tcp6       0      0 ::1:25                  :::*                    LISTEN      1274/master   
  ```

- 修改nginx配置文件

  ```bash
  root@VM-20-12-centos nginx-1.25.4]# ls
  auto  CHANGES  CHANGES.ru  conf  configure  contrib  html  LICENSE  Makefile  man  objs  README  src
  
  # 进入conf文件夹
  [root@VM-20-12-centos nginx-1.25.4]# cd conf
  [root@VM-20-12-centos conf]# ls
  fastcgi.conf  fastcgi_params  koi-utf  koi-win  mime.types  nginx.conf  scgi_params  uwsgi_params  win-utf
  
  # 复制一份做备份，以防万一错误了
  [root@VM-20-12-centos conf]# cp nginx.conf nginx.default.conf
  [root@VM-20-12-centos conf]# ls
  fastcgi.conf  fastcgi_params  koi-utf  koi-win  mime.types  nginx.conf  nginx.default.conf  scgi_params  uwsgi_params  win-utf
  ```

- 上传前端打包好的dist目录文件，上传dist.zip压缩包，借助Xshell工具，采用拖拉式上传文件，然后解压

  ```bash
  [root@VM-20-12-centos services]# unzip dist.zip -d user-center-front
  [root@VM-20-12-centos services]# ls
  dist.zip  nginx-1.25.4  nginx-1.25.4.tar.gz  user-center-front
  
  # 进入user-center-front目录
  [root@VM-20-12-centos services]# cd user-center-front
  [root@VM-20-12-centos user-center-front]# ls
  dist
  [root@VM-20-12-centos user-center-front]# cd dist
  
  # 移动目录里的所有文件到user-center-front目录下
  [root@VM-20-12-centos dist]# mv * ../
  [root@VM-20-12-centos dist]# ls
  [root@VM-20-12-centos dist]# cd ..
  [root@VM-20-12-centos user-center-front]# ls
  136.069af28b.async.js   879.e191b1b2.chunk.css  logo.svg                                 p__user__Login.85cf78bb.chunk.css
  140.22b5ebff.async.js   918.78b8e706.async.js   p__404.515fbfb7.async.js                 p__user__Register.07f535bb.async.js
  140.c0ba8f89.chunk.css  999.902e4e45.async.js   p__404.572eeed8.chunk.css                p__user__Register.2a0f384e.chunk.css
  311.200c6b91.async.js   admin                   p__Admin.32924d7c.chunk.css              p__Welcome.3252fbdb.chunk.css
  311.8ba55b63.chunk.css  asset-manifest.json     p__Admin.d79862a3.async.js               p__Welcome.cd1c54c3.async.js
  351.f0120de0.async.js   CNAME                   p__Admin__UserManage.7047b882.async.js   t__plugin-layout__Layout.3e1acf28.async.js
  422.5a4c1d7d.chunk.css  dist                    p__Admin__UserManage.88e77c3c.chunk.css  t__plugin-layout__Layout.d102414b.chunk.css
  422.d293a730.async.js   favicon.ico             pro_icon.svg                             umi.5bdce202.css
  799.95f72dad.async.js   icons                   p__TableList.62b1300e.chunk.css          umi.ed0aa1e2.js
  835.1402ea8d.async.js   index.html              p__TableList.f36b6296.async.js           user
  879.4105a862.async.js   list                    p__user__Login.1333c200.async.js         welcome
  
  # 删除dist目录
  [root@VM-20-12-centos user-center-front]# rm -rf dist
  ```



- 修改nginx.conf配置文件

  响应了上面**执行`./configure`命令，检查nginx依赖环境**步骤的nginx.conf文件的位置问题

  ```bash
  [root@VM-20-12-centos user-center-front]# cd ../
  [root@VM-20-12-centos services]# ls
  dist.zip  nginx-1.25.4  nginx-1.25.4.tar.gz  user-center-front
  [root@VM-20-12-centos services]# cd nginx-1.25.4/conf
  [root@VM-20-12-centos conf]# ls
  fastcgi.conf  fastcgi_params  koi-utf  koi-win  mime.types  nginx.conf  nginx.default.conf  scgi_params  uwsgi_params  win-utf
  
  # vim命令修改location里的root，把html改为前端项目的目录user-center-front，根据自己实际的目录填写即可
  [root@VM-20-12-centos conf]# vim nginx.conf
  location / {
  #	root   html;
  	root   /root/services/user-center-front;
  	index  index.html index.htm;
  }
  
  # 在执行下面命令之前打开浏览器输入IP地址即可访问到nginx欢迎页面
  # 重新加载配置文件，无需重新启动nginx，重新加载后还是无法展示前端项目的页面，原因上面有说
  [root@VM-20-12-centos conf]# nginx -s reload
  ```

  修改前端项目里的nginx.conf重新加载nginx还是无法访问前端项目的页面的问题

  - 此时有两种解决方案（nginx系统环境配置文件路径/usr/local/nginx/conf）

    - 直接在真正的系统nginx配置nginx.conf里修改配置即可

    - 直接拷贝复制刚刚配置好的nginx.conf到系统nginx真正的环境变量nginx.conf里面去

  ```bash
  # 这里采用第二种方案
  [root@VM-20-12-centos conf]# cp nginx.conf /usr/local/nginx/conf
  
  # 再次重新加载配置文件即可，这时就成功了，访问IP就会出现403 Forbidden nginx/1.25.4页面
  [root@VM-20-12-centos conf]# nginx -s reload
  ```

  解决上面403 Forbidden nginx/1.25.4问题

  ```bash
  # 这里可以看到nobody用户执行了nginx: worker process（nginx工作目录），这里需要修改这个权限即可
  [root@VM-20-12-centos conf]# ps -ef | grep 'nginx'
  root      1932  2479  0 15:19 pts/0    00:00:00 grep --color=auto nginx
  root     16914     1  0 14:12 ?        00:00:00 nginx: master process nginx
  nobody   31298 16914  0 15:06 ?        00:00:00 nginx: worker process
  
  # 编辑nginx配置文件，在第一行添加 “user root;”命令即可
  [root@VM-20-12-centos conf]# vim nginx.conf
  
  # 最后重新加载即可
  [root@VM-20-12-centos conf]# nginx -s reload
  
  # 查看进程nginx
  [root@VM-20-12-centos conf]# ps -ef | grep 'nginx'
  root      3048 16914  0 15:24 ?        00:00:00 nginx: worker process
  root      3523  2479  0 15:26 pts/0    00:00:00 grep --color=auto nginx
  root     16914     1  0 14:12 ?        00:00:00 nginx: master process nginx
  ```

### 后端

- 安装JDK8

  ```bash
  # 使用了yum下载安装jdk则就不需要配置环境变量了，yum帮你做了
  [root@VM-20-12-centos conf]# yum install -y java-1.8.0-openjdk* 
  [root@VM-20-12-centos conf]# java -version
  openjdk version "1.8.0_402"
  OpenJDK Runtime Environment (build 1.8.0_402-b06)
  OpenJDK 64-Bit Server VM (build 25.402-b06, mixed mode)
  ```

- 安装maven(下载会很慢，建议使用Xshell直接将下载好的压缩包拖拽上传)，这一步可以不用做，你也可以直接在本地打好jar包上传即可

  ```bash
  [root@VM-20-12-centos services]# curl -o apache-maven-3.9.6-bin.tar.gz  https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.tar.gz
  [root@VM-20-12-centos services]# ls
  apache-maven-3.9.6-bin.tar.gz  dist.zip  nginx-1.25.4  nginx-1.25.4.tar.gz  user-center-front
  
  # 解压压缩包
  [root@VM-20-12-centos services]# tar -zvxf apache-maven-3.9.6-bin.tar.gz
  ```

  配置maven环境变量

  ```bash
  [root@VM-20-12-centos services]# cd apache-maven-3.9.6
  [root@VM-20-12-centos apache-maven-3.9.6]# ls
  bin  boot  conf  lib  LICENSE  NOTICE  README.txt
  [root@VM-20-12-centos apache-maven-3.9.6]# cd bin
  
  # maven的bin目录
  [root@VM-20-12-centos bin]# pwd
  /root/services/apache-maven-3.9.6/bin
  
  # 配置maven环境变量，在文件的最后一行的nginx后面加上“:/root/services/apache-maven-3.9.6/bin”
  [root@VM-20-12-centos bin]# vim /etc/profile
  export PATH=$PATH:/usr/local/nginx/sbin:/root/services/apache-maven-3.9.6/bin
  
  # 重新加载文件生效
  [root@VM-20-12-centos bin]# source /etc/profile
  ```

- 拉取代码（可以使用git、或者直接本地打包成压缩包使用Xshell上传即可）

  ```bash
  # 本地上传，上传到了services目录下
  [root@VM-20-12-centos services]# ls
  apache-maven-3.9.6  apache-maven-3.9.6-bin.tar.gz  dist.zip  nginx-1.25.4  nginx-1.25.4.tar.gz  user-center-front  user-center.zip
  
  # 解压
  [root@VM-20-12-centos services]# unzip user-center.zip -d user-center
  [root@VM-20-12-centos user-center]# ls
  Dockerfile  pom.xml  README.md  sql  src  target  user-center-0.0.1-SNAPSHOT.jar
  ```

- 运行Java -jar（其中”--spring.profiles.active=prod“这个就是使用的环境配置文件，若你的项目的配置文件(例如：application.yml)里配置了，所以若是配置文件里设置了可以省略不写）

  ```bash
  server:
    profiles:
      active: prod # 这个其实就是指定使用什么配置文件
  ```

  ```bash
  [root@VM-20-12-centos user-center]# java -jar ./user-center-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod
  Error: Unable to access jarfile .user-center-0.0.1-SNAPSHOT.jar
  
  # 若上面报错则执行下面命令即可，就是开启权限和可执行
  [root@VM-20-12-centos user-center]# chmod a+x user-center-0.0.1-SNAPSHOT.jar
  [root@VM-20-12-centos user-center]# java -jar ./user-center-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod
  
  # 使Java在后台运行
  [root@VM-20-12-centos user-center]# nohup java -jar ./user-center-0.0.1-SNAPSHOT.jar &
  [1] 20577
  [root@VM-20-12-centos user-center]# nohup: ignoring input and appending output to ‘nohup.out’
  
  # 查看任务
  [root@VM-20-12-centos user-center]# jobs
  [1]+  Running                 nohup java -jar ./user-center-0.0.1-SNAPSHOT.jar &
  
  # 查看启动情况
  [root@VM-20-12-centos user-center]# netstat -ntlp
  Active Internet connections (only servers)
  Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
  tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      3048/nginx: worker  
  tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1368/sshd           
  tcp        0      0 127.0.0.1:25            0.0.0.0:*               LISTEN      1274/master         
  tcp6       0      0 :::8080                 :::*                    LISTEN      20577/java          
  tcp6       0      0 :::22                   :::*                    LISTEN      1368/sshd           
  tcp6       0      0 ::1:25                  :::*                    LISTEN      1274/master  
  
  # 查看Java已运行的程序
  [root@VM-20-12-centos user-center]# jps
  20577 user-center-0.0.1-SNAPSHOT.jar
  21366 Jps
  ```


## 宝塔部署(推荐)

官方网址：https://www.bt.cn/new/download.html，不得不说好用是好用就是下载各种依赖十分慢

```bash
curl https://download.bt.cn/tools/auto_node.sh | bash
```

若没有安装宝塔，使用下面命令

```bash
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```

在宝塔面板里的**软件商店**傻瓜式安装软件即可，可视化界面点击，十分人性化！

### 前端

- 安装nginx

  ![image-20240316173509135](https://ypycdn.nanshuo.icu/posts/qhdbs/image-20240316173509135.png)

  ![image-20240316173647223](https://ypycdn.nanshuo.icu/posts/qhdbs/image-20240316173647223.png)

  **注意：这里的上传dist目录不是将dist目录一个目录上传，而是将目录里面的各个文件全部上传**，**上传完成后通过IP地址访问即可**

  ![image-20240316173820968](https://ypycdn.nanshuo.icu/posts/qhdbs/image-20240316173820968.png)

### 后端

- 安装tomcat

![image-20240316175011246](https://ypycdn.nanshuo.icu/posts/qhdbs/image-20240316175011246.png)

![image-20240316174900484](https://ypycdn.nanshuo.icu/posts/qhdbs/image-20240316174900484.png)

- 添加Java项目，需要注意的是项目jar路径要正确存在，检查端口是否被占用和防火墙是否打开等等问题

  例如：tomcat占用了8080端口，如果项目也是8080端口就会冲突，需要修改端口或者把tomcat关掉

![image-20240316183428295](https://ypycdn.nanshuo.icu/posts/qhdbs/image-20240316183428295.png)

- 安装Mysql，使用Navicat、IDEA连接数据库或者其他连接工具软件，这个很简单，需要注意端口3306防火墙要打开，还有权限

  ![image-20240317005142361](https://ypycdn.nanshuo.icu/posts/qhdbs/image-20240317005142361.png)

  ![image-20240317005024717](https://ypycdn.nanshuo.icu/posts/qhdbs/image-20240317005024717.png)

  ![image-20240317005321794](https://ypycdn.nanshuo.icu/posts/qhdbs/image-20240317005321794.png)

## Docker容器部署

使用docker部署可能会常出现部署超时等等错误，只需要将的仓库地址改为国内地址就行了，例如阿里云等等，可以参考我的**Docker基础学习文章**，里面有如何修改镜像地址哦！

### 安装Docker

参考文章（https://blog.csdn.net/m0_47010003/article/details/127775185）

- 下载关于Docker的依赖环境，在Xshell中输入以下代码安装依赖环境 ，使用yum工具下载

  ```bash
  yum -y install yum-utils device-mapper-persistent-datalvm2
  ```

- 设置一下下载Docker的镜像源

  依赖环境下载完毕以后，设置下载的镜像源，如果不设置，会默认去Docker的官方下载，但是官方的服务器在国外，下载会比较缓慢，设置下载国内的镜像源（镜像就是英文单词image）
  使用国内的阿里云

  ```bash
  yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
  ```

- 安装Docker

  输入下面这个命令是将软件包信息提前在本地缓存一份，用来提高搜索安装软件的速度

  ```bash
  yum makecache fast
  ```

- 提高安装速度以后，安装docker相关的。（docker-ce 社区版 而ee是企业版）

  ```bash
  yum install docker-ce docker-ce-cli containerd.io1
  ```

- 启动，并设置为开机自动启动

  ```bash
  systemctl start docker
  systemctl enable docker
  ```

- 安装Docker管理器

  直接软件商店搜索即可

### 前端

根据Dockerfile文件进行构建，在user-center-front（也就是你自己的自定义前端项目目录下），应该要上传打包好的dist目录和项目的部分需要的文件（例如src、Dockerfile等等），最后执行下面的命令即可

```bash
[root@VM-20-12-centos user-center-front]# docker build -t user-center-front:v0.0.1 .
```

![image-20240316200955002](https://ypycdn.nanshuo.icu/posts/qhdbs/image-20240316200955002.png)

- docker run 启动镜像

  ```bash
  # 控制台输出前台启动
  [root@VM-20-12-centos user-center-front]# docker run user-center-front:v0.0.1
  # 后台运行
  [root@VM-20-12-centos user-center-front]# docker run -p 8080:8080 -d user-center-front:v0.0.1
  9ec62d80cc674c285a715bd43bd47897be16d2fb16033a2cad692b457e6b8be4
  ```

### 后端

同理前端，jar包最好是自己在本地打包好传上来，不然交给docker来打包会很慢

可以添加一条代码到Dockerfile里面：

```bash
FROM maven:3.5-jdk-8-alpine

WORKDIR /app
COPY pom.xml .
COPY src ./src
COPY user-center-0.0.1-SNAPSHOT.jar ./user-center-0.0.1-SNAPSHOT.jar

RUN mvn package -DskipTests

CMD ["java","-jar","/app/target/user-center-0.0.1-SNAPSHOT.jar"]
```

```bash
[root@VM-20-12-centos user-center-backend]# docker build -t user-center-backend:v0.0.1 .
```

![image-20240316195618132](https://ypycdn.nanshuo.icu/posts/qhdbs/image-20240316195618132.png)

![image-20240316195715357](https://ypycdn.nanshuo.icu/posts/qhdbs/image-20240316195715357.png)

- 查看镜像

```bash
# 查看镜像
[root@VM-20-12-centos user-center-front]# docker images
REPOSITORY            TAG       IMAGE ID       CREATED              SIZE
user-center-front     v0.0.1    b2da65799e16   About a minute ago   190MB
user-center-backend   v0.0.1    66b9872abe04   18 minutes ago       211MB
```

- docker run 启动镜像，注意端口的映射，具体自行查看docker run 的命令参数

```bash
# 控制台输出前台启动
[root@VM-20-12-centos user-center-front]# docker run user-center-backend:v0.0.1
# 后台启动
[root@VM-20-12-centos user-center-front]# docker run -p 8080:8080 -d user-center-backend:v0.0.1
9ec62d80cc674c285a715bd43bd47897be16d2fb16033a2cad692b457e6b8be4
```

## 跨域问题

跨域问题是指当一个域（domain）的网页的脚本试图访问另一个域下的资源时，会出现跨域访问的限制。这是由于浏览器的同源策略（Same-Origin Policy）导致的。同源策略是浏览器的一种安全策略，限制了一个域下的文档或脚本与来自其他域的资源进行交互。**同源**是指**协议、域名和端口**都相同。

### 前端解决(nginx)

添加下面的代码到nginx.conf配置里面也就是service里面

```bash
# 跨域配置
location ^~ /api/ {
    proxy_pass http://127.0.0.1:8080/api/;
    add_header 'Access-Control-Allow-Origin' $http_origin;
    add_header 'Access-Control-Allow-Credentials' 'true';
    add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
    add_header Access-Control-Allow-Headers '*';
    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Origin' $http_origin;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'text/plain; charset=utf-8';
        add_header 'Content-Length' 0;
        return 204;
    }
}
```



### 后端解决（四种）

参考文章 [SpringBoot设置Cors跨域的四种方式 ](https://www.jianshu.com/p/b02099a435bd)

#### 返回新的CorsFilter

```java
@Configuration
public class CorsConfig {
    private CorsConfiguration buildConfig() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*");
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.setMaxAge(3600L);
        corsConfiguration.setAllowCredentials(true);
        return corsConfiguration;
    }
 
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", buildConfig());
        return new CorsFilter(source);
    }
}
```

#### 重写WebMvcConfigurer

```java

@Configuration
public class WebMvcConfg implements WebMvcConfigurer {
 
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        //设置允许跨域的路径
        registry.addMapping("/**")
                //设置允许跨域请求的域名
                //当**Credentials为true时，**Origin不能为星号，需为具体的ip地址【如果接口不带cookie,ip无需设成具体ip】
                .allowedOrigins("http://localhost:9527", "http://127.0.0.1:9527", "http://127.0.0.1:8082", "http://127.0.0.1:8083")
                //是否允许证书 不再默认开启
                .allowCredentials(true)
                //设置允许的方法
                .allowedMethods("*")
                //跨域允许时间
                .maxAge(3600);
    }
}
```

#### 使用注解（@CrossOrigin）

```java
@Controller
@RequestMapping("/user")
@CrossOrigin
public class UserController {
 
}
```

#### 手工设置响应头

这种方式，可以自己手工加到，具体的controller，inteceptor，filter等逻辑里。

```java
@RequestMapping("/test")
@ResponseBody
public String test(){
	response.addHeader("Access-Control-Allow-Origin", "http://localhost:8080");
	return "success";
}
```