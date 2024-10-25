---
title: IDEA好用插件
date: 2024-05-04 14:02:05
cover: https://ypycdn.nanshuo.icu/posts/idea_chajian/jjava.gif
excerpt: 本文介绍了一些IDEA常用且好用的插件，包括外观主题、代码优化、快速开发和第三方工具等方面。这些插件可以提高开发效率，如自动生成代码、格式化JSON、翻译英文、测试请求等。同时，文章还提供了插件的名称、功能说明和下载方式，方便读者根据自己的需求进行选择和使用。
#permalink: /archives/CSLqKj1X
star: true
isOriginal: true
category:
 - IDEA
tag: 
 - java
 - IDEA插件
---

>IEDA常用且好用的插件
友情提示：合理的使用插件能节省时间和提高工作效率,但下载过多的插件会影响IDEA的性能,所以要选择性的下载使用对自己有用的插件,这样能事半功倍哦
插件分类：IDEA外观、代码优化、快速开发、第三方工具
下载方式：直接在IDEA设置里找到插件选项，在里面填写插件名称下载即可，十分的简单，也可以离线下载（去插件的官网）
温馨提示：以下插件并不完善，若同学有更好用的插件也可以分享出来哦，让我的这个插件收集的更加完整，谢谢你们啦


# 准备工作

由于下载在IDEA下载插件需要联网，所以要保证网络的连通，这样才能顺利的搜索下载

正常情况下，可以连到网，若连不到，可用下面的解决方法尝试一下，或许对你有帮助哦

无法联网的情况

![image-20230203213153157](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203213153157.png)

自动代理输入URL：`https://plugins.jetbrains.com/` 或者 `http://127.0.0.1:1080`

![image-20230203213450008](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203213450008.png)
重启后的界面

![image-20230203214332634](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203214332634.png)

# IDEA外观

## 背景图片

由于IDEA有自带的背景功能（在设置里面），所以可以不用插件就已经都用了，可以自己自定义图片、图片透明度等操作，可以按照自己的喜爱进行调配。可在文件-设置-外观-背景图像里设置

![image-20230203210708811](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203210708811.png)

## 主题颜色

- 名称：Dark Purple Theme
- 说明：顾名思义为紫色夜晚的主题，注意IDEA版本要在2019.1以上才行哦

![image-20230203210917830](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203210917830.png)

## 文件图标

- 名称：Atom Material Icons
- 说明：给各个包/类/文件....换上一个漂亮的图标，颜色多样

![image-20230203214453478](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203214453478.png)

## 中文插件

- 名称：Chinese (Simplified) Language Pack /中文语言包
- 说明：中文语言包将为您的 IntelliJ IDEA, AppCode, CLion, DataGrip, GoLand, PyCharm, PhpStorm, RubyMine, 和WebStorm 带来完全中文化的界面。

![image-20230203214526475](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203214526475.png)

## 小结

![image-20230203205036989](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203205036989.png)

# 代码优化

## 阿里代码规范

- 名称：Alibaba Java Coding Guidelines
- 说明：这个是阿里巴巴的代码规范插件，是阿里的一套代码规范，利于自己养成良好的写代码的习惯

![image-20230203215522984](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203215522984.png)

## 代码优化检查

- 名称：SonarLint
- 说明：SonarLint是一个免费的IDE扩展，可以在您编写代码时查找和修复错误、漏洞和代码!像一个拼写检查器一样，SonarLint突出显示问题，并提供快速修复或清晰的补救指导，帮助您在提交代码之前清理代码。SonarLint支持几种流行和经典的语言，可以帮助各种经验和技能水平的开发人员编写高效、安全的代码。

![image-20230203220051418](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203220051418.png)

## 彩虹括号

- 名称：Rainbow Brackets
- 说明：Rainbow Brackets(彩虹括号)是一款Intellij IDEA插件, 可以将 (圆括号) [方括号] {花括号} <尖括号> 用不同颜色标记出来, 方便使用者快速识别代码层次, 提高开发效率!

![image-20230203225238089](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203225238089.png)

# 快速开发

## Lombok插件

- 名称：Lombok
- 说明：我们在开发过程中，通常都会定义大量的JavaBean，然后通过IDE去生成其属性的构造器、getter、setter、equals、hashcode、toString方法，这样会生成许多不想看见的代码，并且浪费不少时间，lombok插件可以为我们省去这些时间，用起来非常方便。记得要在pom文件中引入该依赖哦！！！

![image-20230203215030819](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203215030819.png)

## AI代码助手

- 名称：Tabnine AI Code Completion-JS Java Python TS Rust Go PHP & More
- 说明：Tabnine是一个AI代码助手，让你成为一个更好的开发人员。Tabnine将在所有最流行的编码语言和ide中通过实时代码完成来提高您的开发速度。无论你称之为智能感知、智能编码、自动补全、AI辅助代码补全、AI驱动代码补全、AI副驾驶、AI代码片段、代码建议、代码预测、代码提示或内容辅助，使用Tabnine都可以极大地影响你的编码速度，显著减少你的编码时间。

![image-20230203220728372](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203220728372.png)

## 测试工具

- 名称：JUnitGenerator V2.0
- 说明：这个插件通过右键单击“Generate…”生成JUnit测试。菜单，同时专注于Java类。单元测试输出代码可以使用提供的速度模板进行定制，以基于原始类格式化代码。下载成功后可在设置里的其他设置里查看到JUnit Generator选项，可以自定义测试模板等操作，若想把测试类放在springboot项目的test目录下，可以设置Output Path该选项为${SOURCEPATH}/../../test/java/${PACKAGE}/${FILENAME}即可

![image-20230203221324553](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203221324553.png)

![image-20230203221916098](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203221916098.png)

## 快速生成set方法

- 名称：GenerateAllSetter
- 说明：一键调用一个对象的所有的set方法

![image-20230203222224532](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203222224532.png)

## MybatisX

- 名称：MybatisX
- 说明：可以实现mapper和xml可以来回跳转，mybatis.xml,mapper.xml提示mapper和xml支持自动提示,当配置连接到数据库时,也可以使用该插件自动生成代码的功能(MybatisX-Generator),直接点击数据库表，鼠标右键就会出现该功能（MybatisX-Generator），配置好相关的属性即可，它的作用是生成表对应的entity(实体类)、mapper(接口层)、service(业务逻辑层)、serviceImpl(实现类)、xml(接口映射），自动生成，实现快速开发

![image-20230203222603875](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203222603875.png)

## 代码生成器

- 名称：EasyCode
- 说明：基于IntelliJ IDEA开发的代码生成插件，支持自定义任意模板（Java，html，js，xml）。只要是与数据库相关的代码都可以通过自定义模板来生成。支持数据库类型与java类型映射关系配置。支持同时生成生成多张表的代码。每张表有独立的配置信息。完全的个性化定义，规则由你设置。

![image-20230203224942033](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203224942033.png)

## Json格式化

- 名称：Gsonformat
- 说明：将json文件格式化变得更加美观好看清晰

![image-20230203230738936](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203230738936.png)

## 生成注释文档

- 名称：Easy Javadoc
- 说明：能帮助开发者快速生成类、方法、属性等中文注释、文档，快捷键是ctrl+/

![image-20230203231558818](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203231558818.png)

## 时序图

- 名称：SequenceDiagram
- 说明：使用这个插件，您可以生成简单序列图。通过单击关系图形状来导航代码。从图中删除类。将图表导出为图像(SVG、JPEG、PNG、TIFF)。将图表导出为PlantUML, Mermaid格式文件。在接手老项目时，一上手很难窥到全貌，这时候要是能够把接口的调用关系，整个时序图展示出来，对深入了解项目帮助很大。刚好有这么一款插件SequenceDiagram能够根据方法的调用关系，自动生成执行时序图。

![image-20230203232011175](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203232011175.png)

# 第三方工具

## 翻译

- 名称：Transaction
- 说明：翻译英文插件，支持谷歌，微软，百度，有道等翻译

![image-20230203223154353](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203223154353.png)

## 测试请求

- 名称：RestfulTool
- 说明：类似Postman软件一样，用来测试请求的

![image-20230203223350451](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203223350451.png)

## .ignore

- 名称：.ignore
- 说明：用途是排除不需要提交的文件，例如提交代码到远程仓库时，有些文件是不需要提交的，这是可以用到这个插件

![image-20230203223709996](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203223709996.png)

## 快捷键的学习

- 名称：Key Promoter X
- 说明：提示某些鼠标操作可以通过快捷键的方式进行，记录使用快捷键的次数，提示使用快捷键的方式进行操作，方便开发者更快速的记忆快捷键，通过快捷键来高效工作

![image-20230203224321215](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203224321215.png)

## maven-helper

- 名称：Maven Helper
- 说明：使用Maven必须有一个插件。分析和排除包含当前文件的模块运行/调试maven目标的冲突依赖项操作的简单方法，或在根模块操作上打开当前maven模块路径操作的终端以运行/调试当前测试文件。

![image-20230203224732473](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203224732473.png)

## 防沉迷写代码

- 名称：StopCoding
- 说明：如果你也经常沉迷于写代码,忘了起身休息喝水,那么试试这个插件吧在菜单栏的Tools中,打开StopCoding插件进行设置，设置工作时间和休息时间,并且保存当设置的时间一到,就会有弹框提醒你休息,让你暂时不能操作idea

![image-20230203230138905](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203230138905.png)

## 统计信息

- 名称：Statistic
- 说明：显示项目统计信息。这个插件显示文件按扩展名和大小、行数、LOC等进行排序。用户可以使用“选择时刷新”按钮选择(项目/模块/包/文件)范围。(此插件需要Java 1.8)

![image-20230203232306681](https://ypycdn.nanshuo.icu/posts/idea_chajian/image-20230203232306681.png)