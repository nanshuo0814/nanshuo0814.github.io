---
title: Docker学习
date: 2024-05-04 14:02:05
cover: https://ypycdn.nanshuo.icu/posts/docker_learn/Docker.jpeg
excerpt: 本文介绍了 Docker 容器的相关知识，包括 Docker 的安装、基础命令、容器数据卷等内容。通过本文的学习，读者可以了解 Docker 的基本概念和操作方法，掌握 Docker 容器的创建、启动、停止、删除等命令，以及 Docker 数据卷的使用方法。
#permalink: /archives/B13CNN2S
isOriginal: true
category:
 - docker
tag: 
 - docker
 - 服务器
 - 虚拟机
---


## Docker容器的认识
- Docker是基于Go语言实现的云开源项目。
- Docker的主要目标是“Build，Ship and Run Any App，Anywhere”，也就是通过对应应用组件的封装、分发、部署、运行等生命周期的管理，使用户的APP（可以是一个web应用或数据库应用等等）及其运行环境能够做到“一次镜像，处处运行”。
- Linux容器技术的出现就解决了这样的一个问题，而Docker就是在它的基础上发展过来的。将应用打成镜像，通过镜像成为运行在Docker容器上面的实例，而Docker容器在任何操作系统上都是一致的，这就实现了跨平台、跨服务器。只需要一次配置好环境，换到别的机子上就可以一键部署好，大大简化了操作。
- Docker必须部署在Linux内核的系统上，如果其他系统想要安装Docker就必须安装一个虚拟的Linux环境才行，所以先要学习Linux操作系统，再来学习Docker，这样才能事半功倍哦。

![image-20230125134456202](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230125134456202.png)

# Docker的安装

点击[这里](https://www.docker.com/)进入Docker的官网，或者点击[这里](https://hub.docker.com/)进入Docker hub(安装docker镜像的仓库)，在CentOS7上安装Docker，参考Docker官网的[官方文档](https://docs.docker.com/)操作
## 前提条件
在Linux操作系统上安装Docker，使用CentOS7发行版的Linux系统，目前CentOS7放行版中的内核支持Docker，若Docker想要运行CentOS7(64-bit)上,要求系统为64位、Linux内核版本为3.8以上，最好参考官方帮助文档，十分详细。
- 查看CentOS7的内核命令
  ![image-20230124131357160](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230124131357160.png)
- Docker三要素：
  - 镜像（image）：docker镜像就好比是一个模块，可以通过这个模块来创建容器服务，tomcat镜像===>run===>tomcat01容器（提供服务器），提供这个镜像可以创建多个容器（最终服务运行或者项目运行就是在容器中的）。
  - 容器（container）：Docker利用容器技术，独立运行一个或者一个组的应用，通过镜像来创建的。启动、停止、删除、基本命令！目前就可以把这个容器理解为就是一个简易的Lunux系统。
  - 仓库（repository）：仓库就是存放镜像的地方，仓库分为公有和私有仓库，如：Docker Hub（国外的），阿里云（国内的），可以通过配置阿里云国内的镜像加速器进行提速。



## yum安装gcc
使用Linux命令yum安装gcc程序,以管理员的身份安装
- yum -y install gcc
- yum -y install gcc-c++

![image-20230124140823614](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230124140823614.png)



## 安装所需要的软件包

命令：yum install -y yum-utils

![image-20230124141913966](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230124141913966.png)

## 设置镜像仓库

推荐使用阿里云国内仓库，不建议使用国外官网仓库。

命令： `yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo`

![image-20230124144840673](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230124144840673.png)

## 更新软件包索引

命令：yum makecache fast

![image-20230124145200370](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230124145200370.png)

## 安装Docker引擎

命令：yum -y install docker-ce docker-ce-cli containerd.io

![image-20230124150029890](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230124150029890.png)

## 检查docker安装

### 查看版本

命令：docker version

![image-20230124150430804](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230124150430804.png)

### 启动服务

命令：systemctl start docker

### 查看状态

命令：systemctl status docker

![image-20230124151149601](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230124151149601.png)

### hello-world

命令：docker run hello-world

![image-20230124151348254](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230124151348254.png)

## 阿里云镜像加速

点击[这里](https://www.aliyun.com/)进入阿里云官网注册账号，找到容器镜像服务，创建个人实例，根据文档命令进行操作配置即可，最后通过命令systemctl status docker查看docker状态，再次执行docker run hello-world命令，若无报错，命令行输出Hello from Docker！即为成功配置成功。

![image-20230124153602022](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230124153602022.png)

![image-20230124153719972](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230124153719972.png)

## Docker比VM快？

|            |       Docker容器        |        虚拟机（VM）         |
| :--------: | :---------------------: | :-------------------------: |
|  操作系统  |     与宿主机共享OS      |   宿主机OS上运行虚拟机OS    |
|  存储大小  | 镜像小，便于存储与运输  |   镜像庞大（vmdk、vdi等）   |
|  运行性能  |  几乎无额外的性能损失   | 操作系统额外的CPU、内存消耗 |
|   移植性   | 轻便、灵活、适用于Linux | 笨重，与虚拟化技术耦合度高  |
| 硬件亲和性 |     面向软件开发者      |       面向硬件运维者        |
|  部署速度  |       快速、秒级        |        较慢、10s以上        |

## 卸载docker

| 命令                                              |           含义           |
| ------------------------------------------------- | :----------------------: |
| systemctl stop docker                             |    停止docker服务命令    |
| yum remove dockers-ce docker-ce-cli containerd.io | 卸载docker客户端程序命令 |
| rm -rf /var/lib/docker                            |    删除docker目录目录    |
| rm -rf /var/lib/containerd                        |    删除containerd目录    |

# Docker基础命令

具体的命令参考Docker官方文档，点击[这里](https://docs.docker.com/engine/reference/run/)进入....  下面是常用的命令简略笔记

## 帮助启动类命令

| 命令                     |                            含义                            |
| ------------------------ | :--------------------------------------------------------: |
| systemctl start docker   |                       启动docker服务                       |
| systemctl stop docker    |                       停止docker服务                       |
| systemctl status docker  |                       查看docke状态                        |
| systemctl enable docker  |                       开机自启docker                       |
| docker info              |                       查看docker信息                       |
| docker [具体命令] --help | docker帮助文档，“具体命令”是可选参数，若不指定，则显示全部 |

## 镜像命令

| 命令                              | 含义                         | 参数/说明                                                    |
| --------------------------------- | ---------------------------- | ------------------------------------------------------------ |
| docker images [-a,-q]             | 列出本机主机上的镜像,参数    | -a：列出本地所有镜像（含历史）；-q：只列出镜像的ID           |
| docker search [--limit x]镜像名称 | 查找镜像                     | --limit：只列出N个镜像，默认是25个 ； x：列出的镜像个数      |
| docker pull 镜像名字[:TAG]        | 下载镜像                     | [:TAG]：版本号，若不填写该参数，则下载最新的版本，例如：docker pull redis:6.0.8，下载redis的6.0.8版本 |
| docker system df [OPTIONS]        | 查看镜像/容器/数据卷所占空间 | [OPTIONS]：-v：显示空间使用的详细信息                        |
| docker rmi -f 镜像名字/ID         | 删除镜像                     | -f：可选参数，强制删除  ；docker rmi -f $(docker images -qa)：该命令是强制删除全部镜像操作，谨慎操作 |

## 容器命令

说明：我们有了镜像才可以创建容器，linux，下载一个centos镜像来测试学习，相当于在Vmware虚拟机CentOS7里再下载一个容器centos镜像

命令：docker pull centos

| 命令                        | 说明                                                         |
| --------------------------- | ------------------------------------------------------------ |
| docker run [可选参数] IMAGE | 启动容器，--name：给容器起别名，用来区分容器；-d：后台方式运行；-it：使用交互式运行，进入容器查看内容；-P：指定容器的端口；-p：随机指定端口；IMAGE：必须的参数，如： docker run -it centos /bin/bash，其中IMAGE就是/bin/bash |
| docker ps [可选参数]        | 列出当前正在运行的容器，-a：列出当前正在运行的容器+历史运行过的容器；-n=？：显示最近创建的容器；-q：显示容器的编号 |
| exit/ctrl+p+q               | 停止退出容器/不停止容器直接退出，exit：是一个命令；ctrl+p+q：是一个快捷键 |
| docker rm [-f] 容器ID       | 删除容器，-f：强制删除                                       |
| docker start 容器ID         | 启动容器                                                     |
| docker stop 容器ID          | 停止容器                                                     |
| docker restart 容器ID       | 重启容器                                                     |
| docker kill 容器ID          | 强制停止当前容器                                             |

## commit命令

命令：docker commit -m="描述信息" -a=“作者” 容器ID 要创建的目标镜像名:[标签名]

例子：docker commit -m="mysql8.0版本" -a="guangzai" fcbfa3e8efc5 yuan/mysql:8.0

## 常用其他命令

| 命令                                           | 说明                                                         |
| ---------------------------------------------- | ------------------------------------------------------------ |
| docker logs [OPTIONS] 容器ID                   | 查看日志，参数：-tf：显示日志；--tail number：要显示多少条日志 |
| docker top 容器ID                              | 查看进程                                                     |
| docker inspect 容器ID                          | 查看镜像的元数据                                             |
| docker exec -it 容器ID [/bin/bash]             | 进入当前正在运行的容器，进入容器后开启一个新的终端，可以在里面操作 |
| docker attach 容器ID                           | 进入容器正在运行的终端，不会启动新的进程                     |
| docker cp 容器ID:容器内的路径 目的地的主机路径 | 从容器内拷贝文件到主机上                                     |

## 小结

![image-20230125203935676](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230125203935676.png)

## 案例练习

### 部署Nginx

- 搜索：docker search nginx，也可以在Docker hub官网上搜索

  ```Shell
  [root@centos ~]# docker search nginx
  NAME                                              DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
  nginx                                             Official build of Nginx.                        17982     [OK]       
  linuxserver/nginx                                 An Nginx container, brought to you by LinuxS…   183                  
  bitnami/nginx                                     Bitnami nginx Docker Image                      150                  [OK]
  ubuntu/nginx                                      Nginx, a high-performance reverse proxy & we…   75                   
  privatebin/nginx-fpm-alpine                       PrivateBin running on an Nginx, php-fpm & Al…   73                   [OK]
  bitnami/nginx-ingress-controller                  Bitnami Docker Image for NGINX Ingress Contr…   23                   [OK]
  rancher/nginx-ingress-controller                                                                  11                   
  kasmweb/nginx                                     An Nginx image based off nginx:alpine and in…   4                    
  ibmcom/nginx-ingress-controller                   Docker Image for IBM Cloud Private-CE (Commu…   4                    
  bitnami/nginx-ldap-auth-daemon                                                                    3                    
  bitnami/nginx-exporter                                                                            3                    
  circleci/nginx                                    This image is for internal use                  2                    
  rancher/nginx                                                                                     2                    
  rancher/nginx-ingress-controller-defaultbackend                                                   2                    
  vmware/nginx                                                                                      2                    
  rapidfort/nginx                                   RapidFort optimized, hardened image for NGINX   2                    
  vmware/nginx-photon                                                                               1                    
  bitnami/nginx-intel                                                                               1                    
  ibmcom/nginx-ppc64le                              Docker image for nginx-ppc64le                  0                    
  ibmcom/nginx-ingress-controller-ppc64le           Docker Image for IBM Cloud Private-CE (Commu…   0                    
  rapidfort/nginx-official                          RapidFort optimized, hardened image for NGIN…   0                    
  rapidfort/nginx-ib                                RapidFort optimized, hardened image for NGIN…   0                    
  rancher/nginx-ssl                                                                                 0                    
  rancher/nginx-conf                                                                                0                    
  continuumio/nginx-ingress-ws                                                                      0 
  ```

- 下载：docker pull nginx，拉取镜像

  ```shell
  [root@centos ~]# docker pull nginx
  Using default tag: latest
  latest: Pulling from library/nginx
  Digest: sha256:0d17b565c37bcbd895e9d92315a05c1c3c9a29f762b011a10c54a66cd53c9b31
  Status: Image is up to date for nginx:latest
  docker.io/library/nginx:latest
  ```

- 查看：docker images，查看容器镜像是否下载成功

  ```shell
  [root@centos ~]# docker images
  REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
  nginx        latest    605c77e624dd   13 months ago   141MB
  ```

- 运行：docker run -d --name nginx01 -p 7788:80 nginx

  ```Shell
  [root@centos ~]# docker run -d --name nginx01 -p 7788:80 nginx
  8c8ce0a9b6dda25fe0f14826a9a20030dd9fe9f2db5ee81b431e622ce1c23353
  ```

- 查看：docker ps，查看正在运行的容器镜像

  ```shell
  [root@centos ~]# docker ps
  CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS              PORTS                                   NAMES
  59bfb10dc565   nginx     "/docker-entrypoint.…"   About a minute ago   Up About a minute   0.0.0.0:7788->80/tcp, :::7788->80/tcp   nginx01
  ```

- 测试：curl localhost:7788，在本机终端测试访问

  ```Shell
  [root@centos ~]# curl localhost:7788
  <!DOCTYPE html>
  <html>
  <head>
  <title>Welcome to nginx!</title>
  <style>
  html { color-scheme: light dark; }
  body { width: 35em; margin: 0 auto;
  font-family: Tahoma, Verdana, Arial, sans-serif; }
  </style>
  </head>
  <body>
  <h1>Welcome to nginx!</h1>
  <p>If you see this page, the nginx web server is successfully installed and
  working. Further configuration is required.</p>
  
  <p>For online documentation and support please refer to
  <a href="http://nginx.org/">nginx.org</a>.<br/>
  Commercial support is available at
  <a href="http://nginx.com/">nginx.com</a>.</p>
  
  <p><em>Thank you for using nginx.</em></p>
  </body>
  </html>
  ```

- 进入：docker exec -it nginx01 /bin/bash，进入nginx容器，查看文件等操作

  ```shell
  [root@centos ~]# docker exec -it nginx01 /bin/bash
  root@59bfb10dc565:/# ls 
  bin  boot  dev  docker-entrypoint.d  docker-entrypoint.sh  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
  root@59bfb10dc565:/# 
  ```

- 访问：自己linux的IP:7788，在浏览器访问nginx页面，如我自己的：192.168.88.88:7788

  ```shell
  # 下面就是访问成功后的页面展示文字,nginx的欢迎界面
  
  Welcome to nginx!
  
  If you see this page, the nginx web server is successfully installed and working. Further configuration is required.
  
  For online documentation and support please refer to nginx.org.
  Commercial support is available at nginx.com.
  
  Thank you for using nginx.
  ```

- 停止：docker stop nginx容器ID

  ```shell
  [root@centos ~]# docker stop 8c8ce0a9b6dd
  8c8ce0a9b6dd
  ```

### 部署Tomcat

- 搜索Tomcat

  ```Shell
  [root@centos ~]# docker search tomcat
  NAME                                  DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
  tomcat                                Apache Tomcat is an open source implementati…   3471      [OK]       
  tomee                                 Apache TomEE is an all-Apache Java EE certif…   101       [OK]       
  bitnami/tomcat                        Bitnami Tomcat Docker Image                     47                   [OK]
  arm32v7/tomcat                        Apache Tomcat is an open source implementati…   12                   
  arm64v8/tomcat                        Apache Tomcat is an open source implementati…   8                    
  rightctrl/tomcat                      CentOS , Oracle Java, tomcat application ssl…   7                    [OK]
  amd64/tomcat                          Apache Tomcat is an open source implementati…   6                    
  eclipse/rdf4j-workbench               Dockerfile for Eclipse RDF4J Server and Work…   6                    
  jelastic/tomcat                       An image of the Tomcat Java application serv…   4                    
  oobsri/tomcat8                        Testing CI Jobs with different names.           2                    
  cfje/tomcat-resource                  Tomcat Concourse Resource                       2                    
  chenyufeng/tomcat-centos              tomcat基于centos6的镜像                              1                    [OK]
  appsvc/tomcat                                                                         1                    
  ppc64le/tomcat                        Apache Tomcat is an open source implementati…   1                    
  eclipse/alpine_jdk8                   Based on Alpine 3.3. JDK 1.8, Maven 3.3.9, T…   1                    [OK]
  semoss/docker-tomcat                  Tomcat, Java, Maven, and Git on top of debian   0                    [OK]
  tomcatengineering/pg_backup_rotated   Clone of martianrock/pg_backup_rotated but w…   0                    
  softwareplant/tomcat                  Tomcat images for jira-cloud testing            0                    [OK]
  tomcat2111/papercut-mf                PaperCut MF Application Server                  0                    
  tomcat0823/auto1                                                                      0                    
  secoresearch/tomcat-varnish           Tomcat and Varnish 5.0                          0                    [OK]
  s390x/tomcat                          Apache Tomcat is an open source implementati…   0                    
  misolims/miso-base                    MySQL 5.7 Database and Tomcat 8 Server neede…   0                    
  eclipse/hadoop-dev                    Ubuntu 14.04, Maven 3.3.9, JDK8, Tomcat 8       0                    [OK]
  wnprcehr/tomcat                                                                       0     
  ```

- 下载Tomcat10.0版本

  ```Shell
  [root@centos ~]# docker pull tomcat:10.0
  10.0: Pulling from library/tomcat
  0e29546d541c: Pull complete 
  9b829c73b52b: Pull complete 
  cb5b7ae36172: Pull complete 
  6494e4811622: Pull complete 
  668f6fcc5fa5: Pull complete 
  dc120c3e0290: Pull complete 
  8f7c0eebb7b1: Pull complete 
  77b694f83996: Pull complete 
  0f611256ec3a: Pull complete 
  4f25def12f23: Pull complete 
  Digest: sha256:9dee185c3b161cdfede1f5e35e8b56ebc9de88ed3a79526939701f3537a52324
  Status: Downloaded newer image for tomcat:10.0
  docker.io/library/tomcat:10.0
  ```

- 查看Tomcat容器是否下载完成

  ```Shell
  [root@centos ~]# docker images
  REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
  nginx        latest    605c77e624dd   13 months ago   141MB
  tomcat       10.0      fb5657adc892   13 months ago   680MB
  ```

- 运行Tomcat服务

  注意：若是较高版本的tomcat会报404未找到的错误！！！这是正常的现象，不是自己的操作问题哦！！！可以查看下面的解决方案

  ```Shell
  [root@centos ~]# docker run -d -p 2333:8080 --name tomcat10 tomcat:10.0
  020c977bbcc3324f3b87d7c84231918cafe2d2085cd5b28ae7c501c065a40b7c
  ```

- 解决Tomcat无法访问的问题

  ```Shell
  # 访问Tomcat时会报404的错误
  HTTP状态 404 - 未找到
  
  类型 状态报告
  
  描述 源服务器未能找到目标资源的表示或者是不愿公开一个已经存在的资源表示。
  Apache Tomcat/10.0.14
  
  # 停止tomcat服务
  [root@centos ~]# docker stop 020c977bbcc3
  020c977bbcc3
  
  # 进入Tomcat容器中修改webapp文件,就是因为该文件为空或者不存在所导致404错误
  # 并且tomcat里新增了一个文件webapps.dist
  # 方式一：我们只需要把该文件改名为webapp即可
  # 方式二：我们也可以把webapps.dist文件复制到webapp中也行
  # 两种方式的原理是一致的
  # 进入tomcat容器
  [root@centos ~]# docker exec -it tomcat10 /bin/bash
  root@95606dac2868:/usr/local/tomcat# ls
  BUILDING.txt  CONTRIBUTING.md  LICENSE  NOTICE  README.md  RELEASE-NOTES  RUNNING.txt  bin  conf  lib  logs  native-jni-lib  temp  webapps  webapps.dist  work
  root@95606dac2868:/usr/local/tomcat# ls -l
  total 132
  -rw-r--r--. 1 root root 18994 Dec  2  2021 BUILDING.txt
  -rw-r--r--. 1 root root  6210 Dec  2  2021 CONTRIBUTING.md
  -rw-r--r--. 1 root root 60269 Dec  2  2021 LICENSE
  -rw-r--r--. 1 root root  2333 Dec  2  2021 NOTICE
  -rw-r--r--. 1 root root  3378 Dec  2  2021 README.md
  -rw-r--r--. 1 root root  6905 Dec  2  2021 RELEASE-NOTES
  -rw-r--r--. 1 root root 16517 Dec  2  2021 RUNNING.txt
  drwxr-xr-x. 2 root root  4096 Dec 22  2021 bin
  drwxr-xr-x. 1 root root    22 Jan 27 09:21 conf
  drwxr-xr-x. 2 root root  4096 Dec 22  2021 lib
  drwxrwxrwx. 1 root root    80 Jan 27 09:21 logs
  drwxr-xr-x. 2 root root   159 Dec 22  2021 native-jni-lib
  drwxrwxrwx. 2 root root    30 Dec 22  2021 temp
  drwxr-xr-x. 2 root root     6 Dec 22  2021 webapps
  drwxr-xr-x. 7 root root    81 Dec  2  2021 webapps.dist
  drwxrwxrwx. 2 root root     6 Dec  2  2021 work
  root@95606dac2868:/usr/local/tomcat# cd webapps.dist
  root@95606dac2868:/usr/local/tomcat/webapps.dist# ls
  ROOT  docs  examples  host-manager  manager
  root@95606dac2868:/usr/local/tomcat/webapps.dist# cd ..
  root@95606dac2868:/usr/local/tomcat# cd webapps
  root@95606dac2868:/usr/local/tomcat/webapps# ls
  root@95606dac2868:/usr/local/tomcat/webapps# cd ..
  # 使用Linux操作系统的cp命令对webapps.dist进行拷贝到webapps中去
  root@95606dac2868:/usr/local/tomcat# cp -r webapps.dist/* webapps
  root@95606dac2868:/usr/local/tomcat# cd webapps
  root@95606dac2868:/usr/local/tomcat/webapps# ls
  ROOT  docs  examples  host-manager  manager
  
  # 最后重新刷新一下tomcat网页，就可以看到tomcat首页了
  ```

# 容器数据卷

## 概念

卷就是目录或文件，存在一个或者多个容器中，由docker挂载到容器，但不属于联合文件系统，因此能够绕过Union File System提供一些用于持续存储或共享数据的特性。

卷的目的就是数据的持久化，完全独立于容器的生命周期，因此Docker不会在删除容器时删除其挂载的容器卷。

## 命令

docker run -it --privileged=true -v/宿主机绝对路径目录:/容器内目录 镜像名

## 作用

将运用与运行的环境打包成镜像，run后形成容器实例运行，但是我们对数据的要求希望是持久化的

docker容器产生的数据，如果不备份，那么当容器实例删除后，容器内的数据自然也就没有了

为了能够保存数据载docker中我们使用卷

## 特点

- 数据卷可在容器之间共享或重用数据
- 卷中的更该可以直接实时生效
- 数据卷中的更改不会包含在镜像的更新中
- 数据卷的生命周期一直持续到没有容器使用它为止

## 案例(mysql镜像)

- 搜索MySQL镜像

  ```shell
  [root@centos ~]# docker search mysql
  NAME                            DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
  mysql                           MySQL is a widely used, open-source relation…   13730     [OK]       
  mariadb                         MariaDB Server is a high performing open sou…   5240      [OK]       
  phpmyadmin                      phpMyAdmin - A web interface for MySQL and M…   726       [OK]       
  percona                         Percona Server is a fork of the MySQL relati…   599       [OK]       
  databack/mysql-backup           Back up mysql databases to... anywhere!         80                   
  bitnami/mysql                   Bitnami MySQL Docker Image                      80                   [OK]
  linuxserver/mysql-workbench                                                     48                   
  ubuntu/mysql                    MySQL open source fast, stable, multi-thread…   41                   
  linuxserver/mysql               A Mysql container, brought to you by LinuxSe…   38                   
  circleci/mysql                  MySQL is a widely used, open-source relation…   28                   
  google/mysql                    MySQL server for Google Compute Engine          22                   [OK]
  rapidfort/mysql                 RapidFort optimized, hardened image for MySQL   14                   
  bitnami/mysqld-exporter                                                         4                    
  ibmcom/mysql-s390x              Docker image for mysql-s390x                    2                    
  vitess/mysqlctld                vitess/mysqlctld                                1                    [OK]
  newrelic/mysql-plugin           New Relic Plugin for monitoring MySQL databa…   1                    [OK]
  hashicorp/mysql-portworx-demo                                                   0                    
  rapidfort/mysql-official        RapidFort optimized, hardened image for MySQ…   0                    
  mirantis/mysql                                                                  0                    
  docksal/mysql                   MySQL service images for Docksal - https://d…   0                    
  rapidfort/mysql8-ib             RapidFort optimized, hardened image for MySQ…   0                    
  cimg/mysql                                                                      0                    
  eclipse/mysql                   Mysql 5.7, curl, rsync                          0                    [OK]
  drud/mysql                                                                      0                    
  silintl/mysql-backup-restore    Simple docker image to perform mysql backups…   0                    [OK]
  ```

- 下载mysql镜像(这里我下载的是8.0版本)

  ```shell
  [root@centos ~]# docker pull mysql:8.0
  8.0: Pulling from library/mysql
  72a69066d2fe: Pull complete 
  93619dbc5b36: Pull complete 
  99da31dd6142: Pull complete 
  626033c43d70: Pull complete 
  37d5d7efb64e: Pull complete 
  ac563158d721: Pull complete 
  d2ba16033dad: Pull complete 
  688ba7d5c01a: Pull complete 
  00e060b6d11d: Pull complete 
  1c04857f594f: Pull complete 
  4d7cfa90e6ea: Pull complete 
  e0431212d27d: Pull complete 
  Digest: sha256:e9027fe4d91c0153429607251656806cc784e914937271037f7738bd5b8e7709
  Status: Downloaded newer image for mysql:8.0
  docker.io/library/mysql:8.0
  ```

- 查看下载的MySQL镜像

  ```shell
  [root@centos ~]# docker images
  REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
  nginx        latest    605c77e624dd   13 months ago   141MB
  tomcat       10.0      fb5657adc892   13 months ago   680MB
  mysql        8.0       3218b38490ce   13 months ago   516MB
  ```

- 运行MySQL，设置相关的配置，挂载数据卷，环境配置等，进入MySQL容器添加数据，注意，当插入的数据有中文时，会乱码，原因是该MySQL的字符集不是UTF-8，需要设置成UTF-8即可，通过命令`show variables like 'character%';`进行查看，然后切换到卷的conf目录，添加文件my.cnf，文件里填写配置好字符集utf8即可，具体操作看下面。。。

  ```bash
  # -d：后台运行
  # -p：端口映射
  # -v：卷挂载
  # -e：环境配置
  # --name：容器别名
  [root@centos ~]# docker run -d -p 3333:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root --name mysql8.0 mysql:8.0
  24568c28a9d18237f7177647a3d8828dd4956cfe482683d955e703aa1bd4dee2
  [root@centos ~]# docker ps
  CONTAINER ID   IMAGE       COMMAND                  CREATED          STATUS          PORTS                                                  NAMES
  24568c28a9d1   mysql:8.0   "docker-entrypoint.s…"   29 seconds ago   Up 28 seconds   33060/tcp, 0.0.0.0:3333->3306/tcp, :::3333->3306/tcp   mysql8.0
  [root@centos ~]# docker exec -it 24568c28a9d1 /bin/bash
  root@24568c28a9d1:/# mysql -uroot -p
  Enter password: 
  Welcome to the MySQL monitor.  Commands end with ; or \g.
  Your MySQL connection id is 8
  Server version: 8.0.27 MySQL Community Server - GPL
  
  Copyright (c) 2000, 2021, Oracle and/or its affiliates.
  
  Oracle is a registered trademark of Oracle Corporation and/or its
  affiliates. Other names may be trademarks of their respective
  owners.
  
  Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
  mysql> show databases
      -> ;
  +--------------------+
  | Database           |
  +--------------------+
  | information_schema |
  | mysql              |
  | performance_schema |
  | sys                |
  +--------------------+
  4 rows in set (0.02 sec)
  mysql> create database db01;
  Query OK, 1 row affected (0.02 sec)
  mysql> use db01;
  Database changed
  mysql> create table t1(id int,name varchar(20));
  Query OK, 0 rows affected (0.06 sec)
  mysql> insert into t1 value(1,'guangzai');
  Query OK, 1 row affected (0.02 sec)
  
  mysql> select * from t1
      -> ;
  +------+----------+
  | id   | name     |
  +------+----------+
  |    1 | guangzai |
  +------+----------+
  1 row in set (0.00 sec)
  mysql> show variables like 'character%';
  +--------------------------+--------------------------------+
  | Variable_name            | Value                          |
  +--------------------------+--------------------------------+
  | character_set_client     | latin1                         |
  | character_set_connection | latin1                         |
  | character_set_database   | utf8mb4                        |
  | character_set_filesystem | binary                         |
  | character_set_results    | latin1                         |
  | character_set_server     | utf8mb4                        |
  | character_set_system     | utf8mb3                        |
  | character_sets_dir       | /usr/share/mysql-8.0/charsets/ |
  +--------------------------+--------------------------------+
  8 rows in set (0.00 sec)
  
  # 在SQLyog里手动添加了一条数据：id：7，name：光仔
  mysql> select *from t1;
  +------+----------+
  | id   | name     |
  +------+----------+
  |    1 | guangzai |
  |    7 | ??       |
  +------+----------+
  2 rows in set (0.00 sec)
  
  # 退出MySQL容器，执行如下命令，新增文件，填写相应内容配置
  [root@centos ~]# cd /home/mysql/conf
  [root@centos conf]# ls
  [root@centos conf]# vim my.cnf
  [root@centos conf]# cat my.cnf
  [client]
  default_character_set=utf8
  [mysqld]
  collation_server = utf8_general_ci
  character_set_server = utf8
  
  # 重启MySQL容器服务，重新执行即可
  [root@centos conf]# docker restart mysql8.0
  mysql8.0
  [root@centos conf]# docker ps
  CONTAINER ID   IMAGE       COMMAND                  CREATED          STATUS          PORTS                                                  NAMES
  3f0159bda066   mysql:8.0   "docker-entrypoint.s…"   34 minutes ago   Up 44 seconds   33060/tcp, 0.0.0.0:3333->3306/tcp, :::3333->3306/tcp   mysql8.0
  [root@centos conf]# docker exec -it 3f0159bda066 /bin/bash
  root@3f0159bda066:/# mysql -uroot -p
  Enter password: 
  Welcome to the MySQL monitor.  Commands end with ; or \g.
  Your MySQL connection id is 8
  Server version: 8.0.27 MySQL Community Server - GPL
  
  Copyright (c) 2000, 2021, Oracle and/or its affiliates.
  
  Oracle is a registered trademark of Oracle Corporation and/or its
  affiliates. Other names may be trademarks of their respective
  owners.
  
  Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
  
  mysql> use db01
  Reading table information for completion of table and column names
  You can turn off this feature to get a quicker startup with -A
  
  Database changed
  
  # 这个就是修改字符集后的中文显示不乱码
  mysql> SHOW VARIABLES LIKE 'character%';
  +--------------------------+--------------------------------+
  | Variable_name            | Value                          |
  +--------------------------+--------------------------------+
  | character_set_client     | utf8mb3                        |
  | character_set_connection | utf8mb3                        |
  | character_set_database   | utf8mb4                        |
  | character_set_filesystem | binary                         |
  | character_set_results    | utf8mb3                        |
  | character_set_server     | utf8mb3                        |
  | character_set_system     | utf8mb3                        |
  | character_sets_dir       | /usr/share/mysql-8.0/charsets/ |
  +--------------------------+--------------------------------+
  8 rows in set (0.00 sec)
  
  # 重新查询数据
  mysql> select * from t1;
  +------+----------+
  | id   | name     |
  +------+----------+
  |    1 | guangzai |
  |    7 | 光仔     |
  +------+----------+
  2 rows in set (0.01 sec)
  ```

- 打开第三方可视化视图软件MySQL软件(SQLyog、Navicat)进行连接MySQL，建立新的连接，其中连接的SQL主机地址可通过`ifconfig`命令进行查看，如果MySQL的版本是5.7以上的，会报一个2058的错误，原因是MySQL的密码加密方式变了，由于我们下载的是MySQL8.0的版本，所以我们只需要在mysql容器中执行`ALTER USER ‘root’@’%’ IDENTIFIED WITH mysql_native_password BY 'password';`(注意分号要加上)改代码即可，其中password 是你自己设置的root密码，之后就可以在MySQL图形化界面进行操作MySQL数据即可，如下图所示

  ![image-20230127195134175](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230127195134175.png)

  ![image-20230127192022972](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230127192022972.png)

  ```bash
  mysql> ALTER USER root@'%' IDENTIFIED WITH mysql_native_password BY 'root';
  Query OK, 0 rows affected (0.01 sec)
  ```

  ![image-20230127194121304](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230127194121304.png)

  ![image-20230127194235053](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230127194235053.png)

  ![image-20230127193129843](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230127193129843.png)

  ![image-20230127193503360](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230127193503360.png)

- 删除MySQL8.0容器，但它并没有把数据删除掉，仍然保留在卷中，相当于是一个备份吧，防止误操作

  ```shell
  [root@centos ~]# docker ps
  CONTAINER ID   IMAGE       COMMAND                  CREATED          STATUS          PORTS                                                  NAMES
  24568c28a9d1   mysql:8.0   "docker-entrypoint.s…"   43 minutes ago   Up 43 minutes   33060/tcp, 0.0.0.0:3333->3306/tcp, :::3333->3306/tcp   mysql8.0
  [root@centos ~]# docker stop 24568c28a9d1
  24568c28a9d1
  [root@centos ~]# docker rm -f 24568c28a9d1
  24568c28a9d1
  [root@centos ~]# docker ps
  CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
  [root@centos ~]# docker ps -a
  CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
  [root@centos ~]# cd /home
  [root@centos home]# ls
  mysql  user
  [root@centos home]# cd mysql
  [root@centos mysql]# ll
  总用量 4
  drwxr-xr-x. 2 root    root    6 1月  27 18:02 conf
  drwxr-xr-x. 7 polkitd root 4096 1月  27 19:56 data
  [root@centos mysql]# cd data
  [root@centos data]# ll
  总用量 185760
  -rw-r-----. 1 polkitd input       56 1月  27 19:12 auto.cnf
  -rw-r-----. 1 polkitd input  3116921 1月  27 19:12 binlog.000001
  -rw-r-----. 1 polkitd input     1439 1月  27 19:56 binlog.000002
  -rw-r-----. 1 polkitd input       32 1月  27 19:12 binlog.index
  -rw-------. 1 polkitd input     1680 1月  27 19:12 ca-key.pem
  -rw-r--r--. 1 polkitd input     1112 1月  27 19:12 ca.pem
  -rw-r--r--. 1 polkitd input     1112 1月  27 19:12 client-cert.pem
  -rw-------. 1 polkitd input     1680 1月  27 19:12 client-key.pem
  drwxr-x---. 2 polkitd input       20 1月  27 19:16 db01
  -rw-r-----. 1 polkitd input   196608 1月  27 19:42 #ib_16384_0.dblwr
  -rw-r-----. 1 polkitd input  8585216 1月  27 19:12 #ib_16384_1.dblwr
  -rw-r-----. 1 polkitd input     3883 1月  27 19:56 ib_buffer_pool
  -rw-r-----. 1 polkitd input 12582912 1月  27 19:56 ibdata1
  -rw-r-----. 1 polkitd input 50331648 1月  27 19:42 ib_logfile0
  -rw-r-----. 1 polkitd input 50331648 1月  27 19:12 ib_logfile1
  drwxr-x---. 2 polkitd input        6 1月  27 19:56 #innodb_temp
  drwxr-x---. 2 polkitd input      143 1月  27 19:12 mysql
  -rw-r-----. 1 polkitd input 31457280 1月  27 19:40 mysql.ibd
  drwxr-x---. 2 polkitd input     8192 1月  27 19:12 performance_schema
  -rw-------. 1 polkitd input     1676 1月  27 19:12 private_key.pem
  -rw-r--r--. 1 polkitd input      452 1月  27 19:12 public_key.pem
  -rw-r--r--. 1 polkitd input     1112 1月  27 19:12 server-cert.pem
  -rw-------. 1 polkitd input     1680 1月  27 19:12 server-key.pem
  drwxr-x---. 2 polkitd input       28 1月  27 19:12 sys
  -rw-r-----. 1 polkitd input 16777216 1月  27 19:40 undo_001
  -rw-r-----. 1 polkitd input 16777216 1月  27 19:42 undo_002
  ```

## 匿名和具名挂载

所有的docker容器内的卷，没有指定目录的情况下都是在`/var/lib/docker/volumes/xxxx/_data`，我们通过具名挂载可以方便的找到我们的一个卷，大多数情况下都是使用具名挂载

如何确定是匿名和具名挂载

```shell
-v 容器内路径 # 匿名挂载
-v 卷名:容器内路径 # 具名挂载
-v /宿主机路径::容器内路径 # 指定路径挂载
```

## 扩展

```shell
# 通过 -v 容器内路径:ro/rw 可以改变读写权限
ro readonly # 只读
rw readwrite # 可读可写
# 一旦设定了容器的权限，容器就对我们挂载出来的内容就有限定了！
docker run -d -p --name nginx01 -v juming-nginx:/etc/nginx:ro nginx
docker run -d -p --name nginx02 -v juming-nginx:/etc/nginx:rw nginx
# ro 只要看到ro就说明这个路径只能通过宿主机来操作，容器内部是无法操作的
```

# Dockerfile

## 初识Dockerfile

Dockerfile就是用来构建docker镜像的构建文件！命令脚本！

通过这个脚本可以生成镜像，镜像是一层一层的，脚本是一个一个的命令(大写)，每个命令都是一层！

在/home目录下创建一个docker-test-volume目录用来测试学习Dockerfile，命令为`mkdir docker-test-volume`

```shell
# 创建一个Dockerfile文件，名字可以随机，建议是Dockerfile
[root@centos ~]# cd /home
[root@centos home]# mkdir docker-test-volume
[root@centos home]# ls
docker-test-volume  mysql  user
[root@centos home]# pwd
/home
[root@centos home]# cd docker-test-volume
[root@centos docker-test-volume]# pwd
/home/docker-test-volume
[root@centos docker-test-volume]# vim dockerfile
[root@centos docker-test-volume]# cat dockerfile
FROM centos
VOLUME ["volume01","volume02"]
CMD echo "----end----"
CMD /bin/bash

# 使用docker build命令创建一个容器，名字为guangzai/centos
[root@centos docker-test-volume]# docker build -f /home/docker-test-volume/dockerfile -t guangzai/centos:1.0 .
Sending build context to Docker daemon  2.048kB
Step 1/4 : FROM centos
 ---> 5d0da3dc9764
Step 2/4 : VOLUME ["volume01","volume02"]
 ---> Running in 616203511a15
Removing intermediate container 616203511a15
 ---> 60d1321edada
Step 3/4 : CMD echo "----end----"
 ---> Running in 933a382004e2
Removing intermediate container 933a382004e2
 ---> 5a432450e96a
Step 4/4 : CMD /bin/bash
 ---> Running in 9082225927bd
Removing intermediate container 9082225927bd
 ---> 66847e0f972b
Successfully built 66847e0f972b
Successfully tagged guangzai/centos:1.0

# 查看自己创建的镜像容器
[root@centos docker-test-volume]# docker images
REPOSITORY        TAG       IMAGE ID       CREATED          SIZE
guangzai/centos   1.0       66847e0f972b   19 seconds ago   231MB
nginx             latest    605c77e624dd   13 months ago    141MB
tomcat            10.0      fb5657adc892   13 months ago    680MB
mysql             8.0       3218b38490ce   13 months ago    516MB
centos            latest    5d0da3dc9764   16 months ago    231MB
[root@centos docker-test-volume]# docker run -it 66847e0f972b /bin/bash
[root@1510e5c72d07 /]# ls -l
total 0
lrwxrwxrwx.   1 root root   7 Nov  3  2020 bin -> usr/bin
drwxr-xr-x.   5 root root 360 Jan 27 13:34 dev
drwxr-xr-x.   1 root root  66 Jan 27 13:34 etc
drwxr-xr-x.   2 root root   6 Nov  3  2020 home
lrwxrwxrwx.   1 root root   7 Nov  3  2020 lib -> usr/lib
lrwxrwxrwx.   1 root root   9 Nov  3  2020 lib64 -> usr/lib64
drwx------.   2 root root   6 Sep 15  2021 lost+found
drwxr-xr-x.   2 root root   6 Nov  3  2020 media
drwxr-xr-x.   2 root root   6 Nov  3  2020 mnt
drwxr-xr-x.   2 root root   6 Nov  3  2020 opt
dr-xr-xr-x. 191 root root   0 Jan 27 13:34 proc
dr-xr-x---.   2 root root 162 Sep 15  2021 root
drwxr-xr-x.  11 root root 163 Sep 15  2021 run
lrwxrwxrwx.   1 root root   8 Nov  3  2020 sbin -> usr/sbin
drwxr-xr-x.   2 root root   6 Nov  3  2020 srv
dr-xr-xr-x.  13 root root   0 Jan 27 03:34 sys
drwxrwxrwt.   7 root root 171 Sep 15  2021 tmp
drwxr-xr-x.  12 root root 144 Sep 15  2021 usr
drwxr-xr-x.  20 root root 262 Sep 15  2021 var
drwxr-xr-x.   2 root root   6 Jan 27 13:34 volume01 # 这个是生成镜像时自动挂载的，数据卷目录
drwxr-xr-x.   2 root root   6 Jan 27 13:34 volume02 # 这个是生成镜像时自动挂载的，数据卷目录

# 进入数据卷volume01里，新增一个test.txt文件，目的是验证数据卷的内容是否跟容器外绑定的目录（挂载）内容相同
[root@8bd6ba269d7c /]# cd volume01
[root@8bd6ba269d7c volume01]# touch test.txt
[root@8bd6ba269d7c volume01]# ls
test.txt

# 新开一个窗口
[root@centos ~]# docker ps
CONTAINER ID   IMAGE          COMMAND       CREATED              STATUS              PORTS     NAMES
8bd6ba269d7c   66847e0f972b   "/bin/bash"   About a minute ago   Up About a minute             guangzai007
# docker inspect,查看镜像的元数据，以下的元数据只显示了部分有用的数据，省略了其他无关的数据，以实际为准
[root@centos ~]# docker inspect 8bd6ba269d7c
        "Mounts": [
            {
                "Type": "volume",
                "Name": "4087cb2e81c0501be0914130c955cd5427f6287e891a75b4ce7b5ff037569848",
                "Source": "/var/lib/docker/volumes/4087cb2e81c0501be0914130c955cd5427f6287e891a75b4ce7b5ff037569848/_data",
                "Destination": "volume02",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            },
            {
                "Type": "volume",
                "Name": "77a768c4c81a998a68f34b68f8fa71bf2ad5e633f86f5fb2caebf093b4ca12fa",
                "Source": "/var/lib/docker/volumes/77a768c4c81a998a68f34b68f8fa71bf2ad5e633f86f5fb2caebf093b4ca12fa/_data",
                "Destination": "volume01",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ]
# cd进入volume01的Source路径，证明容器挂载和数据卷的内容一致
[root@centos home]# cd /var/lib/docker/volumes/77a768c4c81a998a68f34b68f8fa71bf2ad5e633f86f5fb2caebf093b4ca12fa/_data
[root@centos _data]# ls -l
总用量 0
-rw-r--r--. 1 root root 0 1月  27 21:57 test.txt
[root@centos _data]# ls
test.txt
```

## Dockerfile介绍

dockerfile是用来构建docker的镜像文件！命令参数脚本！（FROM、ADD、LABLE、CMD...)

构建步骤

- 编写一个dockerfile文件
- docker build 构建一个镜像
- docker run 运行镜像
- dockr push 发布镜像（Docker hub、阿里云镜像仓库）

## Dockerfile构建过程

基础知识

- 每个命令(指令)都必须是大写字母
- 执行顺序是从上到下
- 用`#` 表示注释
- 每一个指令都会创建并提交一个镜像层，如下图所示

![image-20230128140209857](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230128140209857.png)

- dockerfile是面向开发的，以后要发布项目，做镜像，就需要编写dockerfile文件，这十分重要！！！
- DockerFile：构建文件，定义一切的步骤，源代码
- DockerImages：通过DockerFile生成的镜像，最终发布和运行产品项目

## Dockerfile指令

```shell
FROM 		#基础镜像，一切从这里开始构建，99%的镜像都是从FROM scratch开始的
MAINTAINER 	# 镜像的作者，姓名+邮箱
RUN 		# 镜像构建时需要执行的命令
WORKDIR 	# 镜像的工作目录
VOLUME 		# 挂载的目录
EXPOSE 		# 保留端口配置
CMD 		# 指定这个容器启动时要运行的命令，只有最后一个会生效，可被替代
ENTRYPOINT 	# 指定这个容器启动时要运行的命令，可以追加命令
ONBUILD 	# 当构建一个被继承Dockerfile这个时候就会运行该指令，触发指令
COPY 		# 类似ADD，将我们文件拷贝到镜像中
ENV 		# 构建的时候设置环境变量
```



![image-20230128140803240](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230128140803240.png)

![image-20230128135603566](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230128135603566.png)

## 发布自己的镜像

可以发布到Docker hub或者阿里云镜像仓库,下面是发布到Docker hub上的

1. 在Docker hub上注册自己的账号,点击[这里](https://hub.docker.com/)进入注册

2. 确定这个账号可以登录

3. 在我们服务器上提交自己的镜像

4. 登录Docker hub,命令为`docker login`,账号密码登录

   ```Shell
   [root@centos tomcat]# docker login --help
   
   Usage:  docker login [OPTIONS] [SERVER]
   
   Log in to a Docker registry.
   If no server is specified, the default is defined by the daemon.
   
   Options:
     -p, --password string   Password
         --password-stdin    Take the password from stdin
     -u, --username string   Username
   ```

5. 将镜像推送到Docker hub上,命令为docker push

## 小结

![image-20230128161413209](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230128161413209.png)

# Docker网络

容器间的互联和通信以及端口映射，容器IP变动的时候可以通过服务名直接网络通信而不受到影响

![image-20230129162729333](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230129162729333.png)

## 理解Docker0

我们每启动一个docker容器，docker就会给docker容器分配一个IP地址，只需要安装docker，就会有一个网卡docker0，桥接模式，使用的技术是evth-pair技术！所有的容器在不指定网络的情况下，都是由docker0路由的，docker会给我们的容器分配一个默认的可用IP地址

查看网卡命令：ip addr，ifconfig

```shell
[root@centos home]# ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:9f:4f:7b brd ff:ff:ff:ff:ff:ff
    inet 192.168.88.88/24 brd 192.168.88.255 scope global noprefixroute ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::d9b7:d68b:dc07:19f7/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
3: virbr0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
    link/ether 52:54:00:dc:dd:dd brd ff:ff:ff:ff:ff:ff
    inet 192.168.122.1/24 brd 192.168.122.255 scope global virbr0
       valid_lft forever preferred_lft forever
4: virbr0-nic: <BROADCAST,MULTICAST> mtu 1500 qdisc pfifo_fast master virbr0 state DOWN group default qlen 1000
    link/ether 52:54:00:dc:dd:dd brd ff:ff:ff:ff:ff:ff
5: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
    link/ether 02:42:79:91:7a:f6 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:79ff:fe91:7af6/64 scope link 
       valid_lft forever preferred_lft forever
       
[root@centos ~]# ifconfig
docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255
        ether 02:42:39:ff:d4:ff  txqueuelen 0  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

ens33: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.88.88  netmask 255.255.255.0  broadcast 192.168.88.255
        inet6 fe80::d9b7:d68b:dc07:19f7  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:9f:4f:7b  txqueuelen 1000  (Ethernet)
        RX packets 2210  bytes 273980 (267.5 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 4694  bytes 1225200 (1.1 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 32  bytes 2592 (2.5 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 32  bytes 2592 (2.5 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

virbr0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        inet 192.168.122.1  netmask 255.255.255.0  broadcast 192.168.122.255
        ether 52:54:00:dc:dd:dd  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

## 常用命令

使用docker network ls命令，可查看docker网络模式命令,默认的3个网络模式（bridge、host、none），可通过docker network --help，来查询常用的命令，如：docker network + create、connect、disconnect、inspect、ls、prune、rm等命令。。。

![image-20230129163123933](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230129163123933.png)

```shell
[root@centos ~]# docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
a7788fd4cdc3   bridge    bridge    local
f0894f2f8dcf   host      host      local
f9a2338d6bcd   none      null      local

[root@centos ~]# docker network --help

Usage:  docker network COMMAND

Manage networks

Commands:
  connect     Connect a container to a network
  create      Create a network
  disconnect  Disconnect a container from a network
  inspect     Display detailed information on one or more networks
  ls          List networks
  prune       Remove all unused networks
  rm          Remove one or more networks

Run 'docker network COMMAND --help' for more information on a command.

# 创建my_network
[root@centos ~]# docker network create my_network
afa40579de3dd13698a8d1460f0689a689466017372b4a6be711924f197dac4b

# 查看网络命令ls
[root@centos ~]# docker network ls
NETWORK ID     NAME         DRIVER    SCOPE
a7788fd4cdc3   bridge       bridge    local
f0894f2f8dcf   host         host      local
afa40579de3d   my_network   bridge    local # 新增的docker网络
f9a2338d6bcd   none         null      local

# 删除my_network
[root@centos ~]# docker network rm my_network
my_network

# 查看网络ls
[root@centos ~]# docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
a7788fd4cdc3   bridge    bridge    local
f0894f2f8dcf   host      host      local
f9a2338d6bcd   none      null      local

# 查看网络源数据
[root@centos ~]# docker network inspect host
[
    {
        "Name": "host",
        "Id": "f0894f2f8dcfb768ebed049f119a6ef9e6f314871eff16cde353503e6b644a2e",
        "Created": "2023-01-24T15:01:17.03792129+08:00",
        "Scope": "local",
        "Driver": "host",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": []
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {},
        "Options": {},
        "Labels": {}
    }
]
```

# Docker微服务实战

1、构建springboot项目

使用idea软件直接新建一个springboot项目，配置好自己的环境

![image-20230129195124661](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230129195124661.png)

![image-20230129195344319](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230129195344319.png)

2、编写Dockerfile文件、写一个测试的Controller类、最后通过maven打包成jar包

![image-20230129195903719](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230129195903719.png)

![image-20230129200101650](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230129200101650.png)

3、构建镜像、运行测试

```shell
# 查看上传好的jar包和Dockerfile文件
[root@centos idea]# ll
总用量 17244
-rw-r--r--. 1 root root 17650404 1月  29 19:39 Docker_Demo-0.0.1-SNAPSHOT.jar
-rw-r--r--. 1 root root      122 1月  29 19:39 Dockerfile

# 打包成镜像
[root@centos idea]# docker build -t guangzai666 .
Sending build context to Docker daemon  17.65MB
Step 1/5 : FROM java:8
8: Pulling from library/java
5040bd298390: Pull complete 
fce5728aad85: Pull complete 
76610ec20bf5: Pull complete 
60170fec2151: Pull complete 
e98f73de8f0d: Pull complete 
11f7af24ed9c: Pull complete 
49e2d6393f32: Pull complete 
bb9cdec9c7f3: Pull complete 
Digest: sha256:c1ff613e8ba25833d2e1940da0940c3824f03f802c449f3d1815a66b7f8c0e9d
Status: Downloaded newer image for java:8
 ---> d23bdf5b1b1b
Step 2/5 : COPY *.jar /app.jar
 ---> de16befa9598
Step 3/5 : CMD ["--server.port=8080"]
 ---> Running in b19d40d6fce2
Removing intermediate container b19d40d6fce2
 ---> df574d9e8e1d
Step 4/5 : EXPOSE 8080
 ---> Running in 2dd647f640fa
Removing intermediate container 2dd647f640fa
 ---> 7ec63a260c54
Step 5/5 : ENTRYPOINT ["java","-jar","/app.jar"]
 ---> Running in 8ea242f10c55
Removing intermediate container 8ea242f10c55
 ---> 2e6b760ba8a4
Successfully built 2e6b760ba8a4
Successfully tagged guangzai666:latest

# 查看镜像
[root@centos idea]# docker images
REPOSITORY        TAG       IMAGE ID       CREATED          SIZE
guangzai666       latest    2e6b760ba8a4   15 minutes ago   661MB

# 运行镜像
[root@centos idea]# docker run -d -p6666:8080 --name guangzai-springboot-web guangzai666
e4bb004eb9d44cf9e7e1d25392615ae4e7ac35802504d5d5e667d78a44a96417
[root@centos idea]# docker ps
CONTAINER ID   IMAGE         COMMAND                  CREATED         STATUS         PORTS                                       NAMES
e4bb004eb9d4   guangzai666   "java -jar /app.jar …"   6 seconds ago   Up 4 seconds   0.0.0.0:6666->8080/tcp, :::6666->8080/tcp   guangzai-springboot-web

# 访问本地的localhost：6666端口下的helloDocker地址，终端显示HelloDocker，即为成功！！！
[root@centos idea]# curl localhost:6666
{"timestamp":"2023-01-29T12:05:07.729+00:00","status":404,"error":"Not Found","path":"/"}
[root@centos idea]# curl localhost:6666/helloDocker
HelloDocker

```

# Docker-compose

## compose的初识

docker-compose是Docker官方开源的项目,负责对Docker容器集群的快速编排。

docker建议我们每一个容器中只运行一个服务,因为Docker容器本身占用资源极少,所以最好是将每个服务单独的分割开来,但是这样我们又面临一个问题?

如果我们需要同时部署好多个服务,难道要每个服务单独写一个dockerfile然后在构建镜像,构建容器,这样很费时费力,所以Docker官方提供了docker-compose多服务部署工具.

例如要实现一个Web微服务项目,除了Web容器本身,往往还需要加上后端的数据库MySQL服务容器,redis服务器,注册中心Eureka,甚至还包括负载均衡容器等等...

Compose允许用户通过一个单独的docker-compose.yml模板文件(ＹＡＭＬ格式)来定义一组相关联的容器为一个项目(project)。

可以很容易地用一个配置文件定义一个多容器的应用，然后使用一条指令安装这个应用的所有依赖，完成构建。docker-compose解决了容器与容器之间如何管理编排的问题。

## compose安装

进入docker官网按照文档进行安装，检查是否安装成功，docker-compose --version，出现版本号即为安装成功！！！

![image-20230131143530555](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230131143530555.png)

```shell
[root@centos test]# curl -L https://get.daocloud.io/docker/compose/releases/download/v2.14.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   425  100   425    0     0    423      0  0:00:01  0:00:01 --:--:--   423
100 42.8M  100 42.8M    0     0  10.1M      0  0:00:04  0:00:04 --:--:-- 14.1M
[root@centos test]# chmod +x /usr/local/bin/docker-compose
[root@centos test]# docker-compose --version
Docker Compose version v2.14.0
```

## compose核心

一个文件：docker-compose.yml

两个要素

- 服务（service）：一个个应用容器实例，比如订单微服务 、库存微服务、mysql容器、nginx容器、redis容器
- 工程（project）：由一组关联的应用容器组成的一个完整业务单元，在docker-compose.yml文件中定义

## compose常用命令

- docker-compose -h：查看帮助
- docker-compose up：启动所有docker-compose服务
- docker-compose up -d：启动所有docker-compose服务并在后台运行
- docker-compose down：停止并删除容器、网络、卷、镜像
- docker-compose exec yml里面的服务器id：进入容器实例内部docker-compose exec docker-compose.yml文件中写的服务id /bin/bash
- docker-compose ps：展示当前docker-compose编排过的运行过的所有容器
- docker-compose top：展示当前docker-compose编排过的容器进程
- docker-compose  logs yml里面的服务id：查看容器输出日志
- docker-compose config：检查配置
- docker-compose config -q：检查配置，有问题才输出
- docker-compose restart：重启服务
- docker-compose start：启动服务
- docker-compose stop：停止服务

##  compose使用

步骤

- 编写dockerfile定义各个微服务应用并构建出对应的镜像文件
- 使用docker-compose.yml定义一个完整的业务单元，安排好整体应用中的各个容器服务
- 最后执行docker-compose up命令来启动并运行整个应用程序，完成一键部署上线

# Docker可视化工具

## Portainer图形化工具

Docker轻量级可视化工具Portainer，它提供了docker图形化界面，用于方便地管理Docker环境，包括单机和集群环境。

点击[这里](https://www.portainer.io)进入Portainer官网

## Portainer安装

```shell
[root@centos ~]# docker pull portainer/portainer
Using default tag: latest
latest: Pulling from portainer/portainer
94cfa856b2b1: Pull complete 
49d59ee0881a: Pull complete 
a2300fd28637: Pull complete 
Digest: sha256:fb45b43738646048a0a0cc74fcee2865b69efde857e710126084ee5de9be0f3f
Status: Downloaded newer image for portainer/portainer:latest
docker.io/portainer/portainer:latest
```

## Portainer运行

```shell
[root@centos test]# docker run -d -p 8000:8000 -p 9000:9000 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
48d77b151b1fabb7eba632d8166971369761b486a521368436f83b3a79714e62
[root@centos test]# docker images
REPOSITORY            TAG       IMAGE ID       CREATED         SIZE
portainer/portainer   latest    580c0e4e98b0   22 months ago   79.1MB
[root@centos test]# docker ps
CONTAINER ID   IMAGE                 COMMAND        CREATED          STATUS          PORTS                                                                                  NAMES
48d77b151b1f   portainer/portainer   "/portainer"   16 seconds ago   Up 14 seconds   0.0.0.0:8000->8000/tcp, :::8000->8000/tcp, 0.0.0.0:9000->9000/tcp, :::9000->9000/tcp   portainer
```

```Shell
# 该命令可查看Docker详细信息,对应下面的图形化界面的数据
[root@centos test]# docker system df
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          1         1         79.09MB   0B (0%)
Containers      1         1         0B        0B
Local Volumes   7         1         131.9kB   0B (0%)
Build Cache     0         0         0B        0B
```

## Portainer登录

首次登录需要设置admin用户和密码

![image-20230131195953986](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230131195953986.png)

![image-20230131200129573](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230131200129573.png)

![image-20230131201532149](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230131201532149.png)

![image-20230131201625635](https://ypycdn.nanshuo.icu/posts/docker_learn/image-20230131201625635.png)