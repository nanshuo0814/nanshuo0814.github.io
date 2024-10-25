---
title: SpringBoot项目依赖
date: 2024-05-04 14:02:06
cover: https://ypycdn.nanshuo.icu/posts/springboot/springboot.webp
excerpt: 本文主要介绍了一些 Spring Boot 项目常用的依赖，包括数据库相关依赖、MyBatis 相关依赖、Druid 连接池数据源驱动、Spring Boot 相关依赖、Web 依赖、Thymeleaf 依赖、单元测试 JUnit 依赖、热部署依赖、AOP 依赖、邮箱第三方依赖、Redis 依赖、Redisson 分布式锁、application 配置文件、security 安全框架、Spring Boot 缓存、common-pool2、WebSocket、Spring Data JPA、常用第三方工具依赖、定时任务等。
#permalink: /archives/McMKxFf1
isOriginal: true
category:
 - SpringBoot
tag: 
 - java
 - SpringBoot
---

>SpringBoot项目常用的pom.xml依赖
总结关于一些springboot项目常用到的依赖坐标，基于maven项目

## pom.xml

pom.xml是Maven项目的核心配置文件，其中包含了项目的依赖、插件、构建配置等重要信息。下面是一个pom.xml的示例：

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>myproject</artifactId>
    <version>1.0.0</version>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>2.5.3</version>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.26</version>
        </dependency>
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>2.2.0</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>2.5.3</version>
            </plugin>
        </plugins>
    </build>

</project>
```

其中，project是根元素，modelVersion指定POM模型的版本号，groupId指定项目的包名，artifactId指定项目的名称，version指定项目的版本号。dependencies指定项目的依赖，可以添加多个dependency元素，每个dependency指定一个依赖项的groupId、artifactId和version。build指定项目的构建配置，其中plugins指定构建过程中使用的插件，可以添加多个plugin元素，每个plugin指定一个插件的groupId、artifactId和version。

在这个示例中，项目依赖了Spring Boot、MySQL和MyBatis，并且构建过程中使用了Spring Boot插件。如果有其他需要添加的依赖或插件，可以在pom.xml文件中进行配置。

总结：

pom.xml是Maven项目的核心配置文件，其中包含了项目的依赖、插件、构建配置等重要信息。在pom.xml中添加依赖和插件可以简化项目的构建和管理。需要注意配置文件的格式、元素名称、元素属性等规范。

[//]: # (数据库相关依赖)

## mysql驱动

mysql-connector-java是用于Java连接MySQL数据库的驱动程序。它提供了一个标准的Java数据库连接（JDBC）API，可以很方便地使用Java语言与MySQL数据库进行交互。

在Maven项目中，可以添加如下依赖：

```xml
<!--    mysql驱动依赖-->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.29</version>
</dependency>
```

在Gradle项目中，可以添加如下依赖：

```xml
implementation 'mysql:mysql-connector-java:{版本号}'
```

使用mysql-connector-java依赖时，需要先在MySQL数据库中创建相应的数据库和表。在Java代码中，需要使用JDBC API来连接MySQL数据库，并执行相应的操作。

需要注意的是，mysql-connector-java依赖的版本与MySQL数据库的版本要匹配，否则可能会出现连接失败等问题。

配置mysql依赖时，不写版本号<version>xx.xx.xx</version>的话，就会引入mysql依赖的默认版本
SpringBoot2.1.x之前默认使用的是mysql 5.x版本
SpringBoot2.1.x以后默认使用的是mysql8版本
在配置数据源的时候，就有差异

总结：

mysql-connector-java是用于Java连接MySQL数据库的驱动程序，提供了一个标准的Java数据库连接（JDBC）API。使用mysql-connector-java依赖需要先在MySQL数据库中创建相应的数据库和表，在Java代码中使用JDBC API连接并执行相应的操作。注意版本的匹配。



[//]: # (mybatis依赖)

## mybatis

mybatis-spring-boot-starter是一个Spring Boot官方提供的MyBatis集成工具，它整合了Spring Boot和MyBatis，可以方便地使用MyBatis的所有功能。

使用mybatis-spring-boot-starter可以省去配置MyBatis相关的许多繁琐的步骤，例如配置数据源、SqlSessionFactory等，从而让MyBatis开发变得更加简单和高效。

在Maven项目中，使用mybatis-spring-boot-starter可以添加如下依赖：

```xml
<!--    mybatis依赖-->
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>1.3.2</version>
</dependency>
```

在Gradle项目中，可以添加如下依赖：

```xml
implementation 'org.mybatis.spring.boot:mybatis-spring-boot-starter:{版本号}'
```

使用mybatis-spring-boot-starter依赖后，会自动集成MyBatis和Spring Boot，同时会自动配置数据源、SqlSessionFactory等，并且会自动扫描Mapper接口和映射文件，不需要手动配置。

需要注意的是，在使用mybatis-spring-boot-starter时，需要在配置文件中配置MyBatis的相关配置，例如：

```yaml
mybatis.type-aliases-package=com.example.demo.entity # 实体类所在包
mybatis.mapper-locations=classpath:mapper/**/*.xml # 映射文件路径
```

总结：

mybatis-spring-boot-starter是一个Spring Boot官方提供的MyBatis集成工具，整合了Spring Boot和MyBatis，可以方便地使用MyBatis的所有功能。使用mybatis-spring-boot-starter可以省去配置MyBatis相关的许多繁琐的步骤，使得开发变得更加简单和高效。需要注意在配置文件中配置MyBatis的相关配置。



[//]: # (mybatis-plus)

## mybatis-plus

mybatis-plus是一款基于MyBatis的增强工具，可以简化MyBatis的使用和开发。它提供了一系列的增强功能，如自动生成主键、分页查询、条件构造器等，可以大幅提高开发效率和代码质量。

使用mybatis-plus依赖可以更加方便地使用这些增强功能，mybatis-plus提供了与Spring Boot的集成依赖mybatis-plus-boot-starter。

在Maven项目中，可以添加如下依赖：

```xml
<!-- MyBatis-Plus 的依赖 -->
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.4.2</version>
</dependency>
```

在Gradle项目中，可以添加如下依赖：

```xml
implementation 'com.baomidou:mybatis-plus-boot-starter:{版本号}'
```

需要注意的是，使用mybatis-plus需要配置mapper扫描路径，如下：

```xml
mybatis-plus.mapper-locations=classpath*:mapper/**/*.xml
```

此外，需要在数据源配置中添加MyBatis配置，如下：

```yaml
mybatis.type-aliases-package=com.example.demo.entity # 实体类所在包
mybatis.configuration.map-underscore-to-camel-case=true # 开启驼峰命名转换
```

总结：

mybatis-plus是一款基于MyBatis的增强工具，可以简化MyBatis的使用和开发，提供了一系列的增强功能。使用该工具需要添加mybatis-plus-boot-starter依赖，并在配置文件中添加mapper扫描路径和MyBatis配置。mybatis-plus与Spring Boot集成，可以更加方便地使用。



[//]: # (druid连接池数据源驱动)

## Druid数据库连接池

druid-spring-boot-starter是Spring Boot集成Druid数据库连接池的依赖，可以简化Druid的使用和配置。

Druid是阿里巴巴开源的一个高效、可靠的数据库连接池，具有监控、日志功能，可以有效地提高数据库连接的使用效率和安全性。

使用druid-spring-boot-starter依赖可以更加方便地集成Druid到Spring Boot项目中，开发者只需要在配置文件中添加Druid的相关配置，即可自动创建DataSource对象，并启用Druid的监控和日志功能。

在Maven项目中，可以添加如下依赖：

```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid-spring-boot-starter</artifactId>
    <version>1.1.23</version>
</dependency>
```

在Gradle项目中，可以添加如下依赖：

```xml
implementation 'com.alibaba:druid-spring-boot-starter:{版本号}'
```

需要注意的是，使用druid-spring-boot-starter依赖时，需要在配置文件中添加Druid的相关配置，如下：

```yaml
spring.datasource.url=jdbc:mysql://localhost:3306/test
spring.datasource.username=root
spring.datasource.password=123456
spring.datasource.driver-class-name=com.mysql.jdbc.Driver

  # Druid configuration
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
spring.datasource.druid.initial-size=5
spring.datasource.druid.min-idle=5
spring.datasource.druid.max-active=20
# ...
```

其中，spring.datasource.type=com.alibaba.druid.pool.DruidDataSource 表示使用Druid数据源，spring.datasource.druid.xxx 表示Druid的相关配置。

总结：

druid-spring-boot-starter是Spring Boot集成Druid数据库连接池的依赖，可以简化Druid的使用和配置。使用该依赖需要在配置文件中添加Druid的相关配置，开发者可以根据自己的需求进行配置。Druid具有监控、日志等功能，可以有效提高数据库连接的使用效率和安全性。



[//]: # (springboot相关依赖)

<font color="#00c4b6" size="5">springboot相关依赖</font>

[//]: # (父依赖)

## 父依赖

spring-boot-starter-parent是Spring Boot提供的一个“父项目”依赖，它包含了一些默认的配置和依赖管理，可以帮助开发者更快速地搭建和管理基于Spring Boot的项目。

使用spring-boot-starter-parent依赖时，可以继承该依赖并在pom.xml文件中指定自己的项目信息和依赖，而无需手动配置Spring Boot的版本号和其他一些常用的依赖。

在Maven项目中，可以添加如下依赖：

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>{版本号}</version>
    <relativePath/>
</parent>
```

在Gradle项目中，可以添加如下依赖：

```xml
plugins {
        id 'org.springframework.boot' version '{版本号}'
        }

        dependencies {
        implementation 'org.springframework.boot:spring-boot-starter'
        }
```

需要注意的是，spring-boot-starter-parent并不包含所有的依赖，它只包含了一些常用的依赖管理和默认配置，如Java版本、编码方式、资源过滤等。在实际开发中，开发者还需要根据自己的需求手动添加其他的依赖。

总结：

spring-boot-starter-parent是Spring Boot提供的一个“父项目”依赖，包含了一些默认的配置和依赖管理，可以帮助开发者更快速地搭建和管理基于Spring Boot的项目。在使用该依赖时，需要继承该依赖并在pom.xml文件中指定自己的项目信息和依赖。需要注意的是，该依赖并不包含所有的依赖，需要根据实际需求手动添加其他依赖。



[//]: # (springboot核心启动器)

## spring-boot-starter

spring-boot-starter是Spring Boot提供的一个基础依赖，包含了Spring框架和常用的第三方库等组件，可以帮助开发者快速构建基于Spring的应用程序。

添加spring-boot-starter依赖可以避免繁琐的依赖管理，因为该依赖已经封装了常用的依赖配置，可以自动引入相关的jar包。

在Maven项目中，可以添加如下依赖：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
</dependency>
```

在Gradle项目中，可以添加如下依赖：

```xml
implementation 'org.springframework.boot:spring-boot-starter'
```

使用spring-boot-starter依赖，可以轻松地使用Spring Boot提供的各种功能和组件，例如：自动配置、日志、数据库访问、Web开发、安全框架等。开发者只需要编写业务逻辑代码，即可快速搭建一个基于Spring Boot的应用程序。

需要注意的是，spring-boot-starter并不是一个完整的依赖，它只是一个聚合依赖，包含了多个子依赖。具体使用时，需要根据实际需求选择相应的子依赖。例如，如果需要使用Web开发功能，可以添加spring-boot-starter-web依赖；如果需要使用数据库访问功能，可以添加spring-boot-starter-data-jpa或spring-boot-starter-jdbc等依赖。

总结：

spring-boot-starter是Spring Boot提供的一个基础依赖，包含了Spring框架和常用的第三方库等组件，可以帮助开发者快速构建基于Spring的应用程序。开发者可以根据实际需求选择相应的子依赖，例如：spring-boot-starter-web、spring-boot-starter-data-jpa等。使用spring-boot-starter可以避免繁琐的依赖管理，提高开发效率。



[//]: # (Web依赖)

## Web依赖

spring-boot-starter-web是Spring Boot提供的一个Web应用程序开发的依赖，包含了Spring MVC、Tomcat、Jackson等常用的Web框架和组件，可以帮助开发者更方便地进行Web应用程序开发。

在Spring Boot中，可以通过添加spring-boot-starter-web依赖来使用Spring MVC和Tomcat等Web组件：

用于web开发场景，包含了 RESTful 和 Spring MVC，并且默认使用了内置的Tomcat服务器。
支持注解：@RestController、@RequestMapping、@ResponseBody

在Maven项目中，可以添加如下依赖：

```
<!--    springWeb依赖-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

在Gradle项目中，可以添加如下依赖：

```
implementation 'org.springframework.boot:spring-boot-starter-web'
```

使用Spring Boot和Spring MVC进行Web开发时，可以像使用普通的Spring MVC一样编写控制器和视图等组件。例如，下面是一个简单的Spring MVC控制器示例：

```java
@Controller
public class HelloController {

    @GetMapping("/hello")
    public String hello(Model model) {
        model.addAttribute("message", "Hello, Spring Boot!");
        return "hello";
    }

}
```

以上控制器使用@GetMapping注解映射了/hello路径，并在其中使用了Spring MVC的Model类来传递数据到视图中。在返回值中指定了视图名称hello，Spring Boot会自动查找名为hello的Thymeleaf模板文件。

需要注意的是，在使用Spring Boot进行Web开发时，还需要在Spring Boot应用程序的配置文件application.properties或application.yml中配置Web服务器的相关属性，如下所示：

```
server.port=8080
server.servlet.context-path=/
```

以上配置中，指定了Web服务器的端口号和上下文路径。

总结：

spring-boot-starter-web是Spring Boot提供的一个Web应用程序开发的依赖，包含了Spring MVC、Tomcat、Jackson等常用的Web框架和组件。在使用Spring Boot和Spring MVC进行Web开发时，可以像使用普通的Spring MVC一样编写控制器和视图等组件，同时还需要在配置文件中配置Web服务器的相关属性。



[//]: # (Thymeleaf依赖)

## Thymeleaf依赖

spring-boot-starter-thymeleaf是Spring Boot提供的一个基于Thymeleaf模板引擎的依赖，可以帮助开发者更方便地进行Web开发。Thymeleaf是一个Java模板引擎，通过标签和属性来定义模板，可以方便地在模板中使用动态数据、表达式和条件判断等。

thymeleaf是一个很强大的视图解析工具,SpringBoot支持的thymeleaf页面模板技术
默认存放模板页面的路径在src/main/resources/templates 或者 src/main/view/templates,默认的页面文件后缀是.html

在Spring Boot中，可以通过添加spring-boot-starter-thymeleaf依赖来使用Thymeleaf模板引擎：

在Maven项目中，可以添加如下依赖：

```xml
<!-- thymeleaf -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

在Gradle项目中，可以添加如下依赖：

```xml
implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
```

使用Spring Boot和Thymeleaf进行Web开发时，可以像使用普通HTML一样编写模板，并在其中使用Thymeleaf标签和属性来定义动态数据和表达式。例如，下面是一个包含了Thymeleaf标签和属性的模板示例：

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Thymeleaf Example</title>
</head>
<body>
<h1 th:text="${title}"></h1>
<p th:if="${showMessage}">Hello, Thymeleaf!</p>
<ul>
    <li th:each="item : ${items}" th:text="${item}"></li>
</ul>
</body>
</html>
```

以上模板中，使用了Thymeleaf的th:text、th:if和th:each属性来定义动态数据、条件判断和循环等操作。

需要注意的是，在使用Thymeleaf进行Web开发时，还需要在Spring Boot应用程序的配置文件application.properties或application.yml中配置模板引擎的相关属性，如下所示：

```yaml
spring.thymeleaf.prefix=classpath:/templates/
spring.thymeleaf.suffix=.html
spring.thymeleaf.cache=false
```

以上配置中，指定了模板文件的位置和后缀、是否开启模板缓存等属性。

总结：

spring-boot-starter-thymeleaf是Spring Boot提供的一个基于Thymeleaf模板引擎的依赖，可以帮助开发者更方便地进行Web开发。使用Thymeleaf进行Web开发时，可以像使用普通HTML一样编写模板，并在其中使用Thymeleaf标签和属性来定义动态数据和表达式，同时还需要在配置文件中配置模板引擎的相关属性。


[//]: # (JUnit依赖)

## 单元测试JUnit依赖

spring-boot-starter-test是Spring Boot提供的测试依赖，包含了许多在开发和测试中常用的测试框架和工具，如JUnit、Hamcrest、Mockito等，可以帮助开发者更方便地进行单元测试、集成测试和功能测试等。

在Spring Boot中，可以通过添加spring-boot-starter-test依赖来使用测试框架和工具：

在Maven项目中，可以添加如下依赖：

```xml
<!--    单元测试-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

在Gradle项目中，可以添加如下依赖：

```
testImplementation 'org.springframework.boot:spring-boot-starter-test'
```

在添加完依赖后，就可以使用JUnit、Hamcrest、Mockito等测试框架进行单元测试和集成测试了。Spring Boot还提供了一些方便的测试注解和工具类，如@SpringBootTest、@RunWith和TestRestTemplate等，可以帮助开发者更方便地进行功能测试。

需要注意的是，在进行完整的集成测试时，可能需要启动完整的Spring Boot应用程序。在这种情况下，需要使用@SpringBootTest注解，并指定使用的Spring Boot启动类，如下所示：

```java
@SpringBootTest(classes = MyApplication.class)
@RunWith(SpringRunner.class)
public class MyIntegrationTest {

    @Autowired
    private MyService myService;

    // 在这里编写集成测试代码...

}
```

以上代码中，使用@SpringBootTest注解指定了使用MyApplication作为Spring Boot启动类，在进行集成测试时会启动完整的应用程序。使用@RunWith注解指定了使用SpringRunner作为测试运行器，以便进行Spring集成测试。

总结：

spring-boot-starter-test是Spring Boot提供的测试依赖，包含了许多常用的测试框架和工具。在使用时，可以使用JUnit、Hamcrest、Mockito等测试框架进行单元测试和集成测试，并使用@SpringBootTest、@RunWith和TestRestTemplate等测试注解和工具类进行功能测试。



[//]: # (热部署)

## springboot热部署

spring-boot-devtools是Spring Boot提供的一个开发工具包，可以帮助开发者在开发过程中自动重启应用程序、禁用模板缓存、提供LiveReload等功能，提高开发效率。该工具包主要依赖于两个模块：spring-boot-devtools和spring-boot-autoconfigure。

在Spring Boot中，可以通过添加spring-boot-devtools依赖来使用开发工具包：

在Maven项目中，可以添加如下依赖：

```xml
<!--    springboot热部署-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
    <optional>true</optional>
</dependency>
```

在Gradle项目中，可以添加如下依赖：

```xml
runtimeOnly 'org.springframework.boot:spring-boot-devtools'
```

添加完依赖后，在IDEA或Eclipse中启用devtools需要进行相应的配置。

在IDEA中，可以在Preferences -> Build, Execution, Deployment -> Compiler中勾选Build project automatically选项。此外，还需要在Registry中勾选compiler.automake.allow.when.app.running选项。

在Eclipse中，可以在Preferences -> Workspace中勾选Build automatically选项。

需要注意的是，在生产环境中可以将spring-boot-devtools依赖移除，以避免自动重启和禁用模板缓存等功能对性能造成影响。

总结：

spring-boot-devtools是Spring Boot提供的一个开发工具包，可以提高开发效率。该工具包主要依赖于两个模块：spring-boot-devtools和spring-boot-autoconfigure。在使用时需要进行相应的配置，并在生产环境中移除依赖，以避免影响性能。

修改java代码后，不用重启项目就能直接最新测试，省略了不断修改代码不断重启项目的麻烦



[//]: # (aop依赖)

## aop依赖

AOP（面向切面编程）是一种编程思想，可以将应用程序业务逻辑和横切关注点（如日志、安全、事务等）分离开来，提高代码的可维护性和复用性。Spring Boot提供了一个简单易用的AOP框架，可以通过添加相应的依赖来使用。

在Spring Boot中，可以通过添加spring-boot-starter-aop依赖来使用AOP框架：

在Maven项目中，可以添加如下依赖：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

在Gradle项目中，可以添加如下依赖：

```
implementation 'org.springframework.boot:spring-boot-starter-aop'
```

使用AOP框架的一个常见场景是对方法进行拦截并添加额外的逻辑，如打印日志、记录性能指标等。以下是一个使用AOP框架的例子：

定义一个切面类：

```java
@Aspect
@Component
public class LoggingAspect {

    private static final Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

    @Before("execution(* com.example.myservice..*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        logger.info("调用方法：" + joinPoint.getSignature().getName());
    }

}
```

在上面的例子中，定义了一个切面类LoggingAspect，并使用@Before注解定义了一个切入点，该切入点会拦截com.example.myservice包中的所有方法，并在方法执行前打印日志。

需要注意的是，使用AOP时需要配合表达式语言（如AspectJ）来定义切入点，可以在execution()语句中使用通配符(*)来匹配相应的方法。

在Spring Boot应用程序中启用AOP功能需要在配置类上添加@EnableAspectJAutoProxy注解：

```java
@SpringBootApplication
@EnableAspectJAutoProxy
public class MyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }

}
```

以上配置将开启AOP功能并允许Spring自动代理切面，以便在方法执行时进行拦截。

总结：

Spring Boot提供了一个简单易用的AOP框架，可以通过添加spring-boot-starter-aop依赖来使用。使用AOP框架可以将应用程序业务逻辑和横切关注点分离开来，提高代码的可维护性和复用性。在Spring Boot应用程序中启用AOP功能需要在配置类上添加@EnableAspectJAutoProxy注解。



[//]: # (邮箱第三方依赖)

## 邮箱依赖

要用到邮箱登录时使用到该依赖,结合邮箱工具类使用,在Java项目常用工具类的MarkDown文章中有

```java
<!-- https://mvnrepository.com/artifact/javax.mail/mail -->
<dependency>
	<groupId>javax.mail</groupId>
	<artifactId>mail</artifactId>
	<version>1.4.7</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.apache.commons/commons-email -->
<dependency>
	<groupId>org.apache.commons</groupId>
	<artifactId>commons-email</artifactId>
	<version>1.4</version>
</dependency>
```

[//]: # (redis依赖)

## springboot集成redis

spring-boot-starter-data-redis是Spring Boot中的一个Redis相关的依赖，它是基于Spring Data Redis实现的，提供了与Redis交互的各种功能和工具。

在使用spring-boot-starter-data-redis时，只需要在Maven或Gradle中添加相应的依赖即可，例如：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

该依赖提供了以下功能：

1. RedisTemplate：一个通用的Redis操作类，可以执行Redis常见的操作（如SET、GET等），支持多种数据格式（如String、List、Set、ZSet、Hash等）。
2. RedisRepository：一个Redis的数据访问接口，支持CRUD操作，类似于JPA中的Repository。
3. RedisCacheManager：一个Spring Cache的缓存管理器，可以将数据存储在Redis中，提高访问效率。
4. RedisMessageListenerContainer：一个Redis消息监听容器，可以监听Redis中的消息，实现发布-订阅模式。
5. RedisConnectionFactory：一个Redis连接工厂，用于创建Redis连接。它可以自动集成Spring Boot中的连接池（如JedisPool、LettuceConnectionPool等）。

在进行Redis开发时，我们只需要注入相应的RedisTemplate或RedisRepository即可使用Redis的各种功能。

总结：

spring-boot-starter-data-redis是Spring Boot中的一个Redis相关的依赖，它提供了与Redis交互的各种功能和工具，包括RedisTemplate、RedisRepository、RedisCacheManager、RedisMessageListenerContainer等。在进行Redis开发时，只需要注入相应的组件即可使用Redis的各种功能。

Redis是一个高速缓存数据库，是一种key-value（键值对）形式的存储系统，非关系型数据库。
Redis的数据 是放在内存里的，所以读写会很快，Redis才能实现持久化（两种实现方式）
redis的用处
1.用作缓存，优点（1.可以减轻数据库压力 2.可以提高查询效率）
2.点赞数，访问量
3.鉴权，cookie和session
登陆成功后，将对应的可以和value放到redis里，下次如果再进来，先访问redis，如果说key存在，说明登陆过，鉴权通过了，如果key不存在，说明鉴权失败，去重新登陆。

## redisson分布式锁

Redisson是基于Redis实现的分布式Java对象和服务框架，提供了分布式锁、分布式集合、分布式对象等功能，是一个很好的分布式应用开发工具。在使用Redisson时，可以通过添加Maven或Gradle依赖来集成到Spring Boot项目中。

例如，在Maven项目中，可以添加如下依赖：

```
<!-- redisson分布式锁 -->
<dependency>
    <groupId>org.redisson</groupId>
    <artifactId>redisson-spring-boot-starter</artifactId>
    <version>3.16.6</version>
</dependency>
```

在Gradle项目中，可以添加如下依赖：

```
implementation 'org.redisson:redisson-spring-boot-starter:3.14.1'
```

通过添加这个依赖，我们可以很容易地使用Redisson提供的分布式锁、分布式集合等功能，例如：

```
// 获取分布式锁
RLock lock = redissonClient.getLock("myLock");
lock.lock();

try {
    // 执行业务逻辑
} finally {
    lock.unlock();
}

// 获取分布式集合
RSet<String> set = redissonClient.getSet("mySet");
set.add("value1");
set.add("value2");
```

需要注意的是，在使用Redisson时，需要配置相应的Redis连接信息，例如Redis的host、port等，可以通过在配置文件（如application.yml或application.properties）中添加如下配置来实现：

```
spring:
  redis:
    host: localhost
    port: 6379
```

总结：

Redisson是基于Redis实现的分布式Java对象和服务框架，提供了分布式锁、分布式集合等功能，可以通过添加Maven或Gradle依赖来集成到Spring Boot项目中。在使用Redisson时，需要配置相应的Redis连接信息。



[//]: # (application配置文件)

## application.properties

application.properties是Spring Boot中的一个配置文件，用于存储应用程序的配置信息，包括服务器端口、数据库连接、日志级别等。它采用key=value的格式，比YAML文件更易学习，但也比较冗长。

application.properties文件通常存放在src/main/resources目录下。它的主要作用是为应用程序提供默认的配置信息，开发人员可以在其中指定应用程序所需的任何配置。在Spring Boot应用程序中，我们可以使用@ConfigurationProperties注解将配置文件的属性映射为Java对象的属性，从而更方便地进行读取和操作。

总结：

application.properties是Spring Boot中的一个配置文件，用于存储应用程序的配置信息，采用key=value的格式，便于开发人员进行配置。它可以在Spring Boot应用程序中使用@ConfigurationProperties注解映射成Java对象，方便读取和操作。配置文件的作用是为应用程序提供默认的配置信息，使得应用程序在启动时可以使用这些配置信息。

```yaml
spring.datasource.url = jdbc:mysql://localhost:3306/数据库名称?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=GMT%2B8
spring.datasource.username = root
spring.datasource.password = root
spring.datasource.driverClassName = com.mysql.cj.jdbc.Driver
server.port=8080 #项目启动后的端口号，springboot自带tomcat容器
```

## application.yml

application.yml是Spring Boot中的一个配置文件，用于存储应用程序的配置信息，包括服务器端口、数据库连接、日志级别等。它采用YAML语法，比传统的.properties文件更易读、易写。

application.yml文件通常存放在src/main/resources目录下。它的主要作用是为应用程序提供默认的配置信息，开发人员可以在其中指定应用程序所需的任何配置。在Spring Boot应用程序中，我们可以使用@ConfigurationProperties注解将配置文件的属性映射为Java对象的属性，从而更方便地进行读取和操作。

总结：

application.yml是Spring Boot中的一个配置文件，用于存储应用程序的配置信息，采用YAML语法，便于开发人员进行配置。它可以在Spring Boot应用程序中使用@ConfigurationProperties注解映射成Java对象，方便读取和操作。配置文件的作用是为应用程序提供默认的配置信息，使得应用程序在启动时可以使用这些配置信息。

```yaml
server:
  port: 8080
spring:
  application:
    name: 项目名称
  datasource:
    druid:
      driver-class-name: com.mysql.cj.jdbc.Driver
      url: jdbc:mysql://localhost:3306/数据库名称?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=GMT%2B8
      username: root
      password: root
```

[//]: # (security)

## security安全框架

Spring Boot提供了一个名为spring-boot-starter-security的依赖，它可以轻松地将安全性集成到Spring Boot应用程序中。它提供了身份验证和授权功能，支持多种身份验证机制，例如基于表单的身份验证、基于HTTP Basic和Digest的身份验证以及OAuth2和OpenID Connect等。它还提供了许多安全功能，例如HTTPS支持、CSRF保护、Session管理、安全事件监听器等。

以下是spring-boot-starter-security依赖的主要组件：

1. Spring Security：Spring Security是一个基于Spring框架的安全框架，提供了身份验证和授权功能。
2. Spring Boot Security Starter：Spring Boot的安全启动器，提供了自动配置和默认配置，使得使用Spring Security的安全功能更加简单。
3. Security Filter Chain：Spring Security的过滤器链，用于处理HTTP请求并提供身份验证和授权功能。
4. Authentication Providers：身份验证提供者，用于验证用户的身份。
5. Authorization Providers：授权提供者，用于授权用户访问资源。

使用spring-boot-starter-security依赖可以轻松地将安全性集成到Spring Boot应用程序中，并且可以选择使用多种身份验证机制和安全功能，提高应用程序的安全性和可靠性。

以下是一个基于spring-boot-starter-security的例子：

1. 添加依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

1. 配置安全性

在application.properties文件中配置用户凭证和访问权限，例如：

```yaml
spring.security.user.name=admin
spring.security.user.password=admin123
spring.security.user.roles=admin
```

这表示只有用户"admin"能够访问应用程序，并且他具有"admin"角色。

1. 在代码中使用安全性

在需要保护的方法上添加@Secured注解，例如：

```java
@RestController
public class MyController {
    
    @GetMapping("/hello")
    @Secured("ROLE_ADMIN")
    public String sayHello() {
        return "Hello, World!";
    }
    
}
```

这表示只有具有"ROLE_ADMIN"角色的用户才能调用该方法。

总结：

spring-boot-starter-security为Spring Boot提供了安全性支持，可以轻松地将安全性集成到Spring Boot应用程序中，并提供了多种身份验证机制和安全功能，例如HTTPS支持、CSRF保护、Session管理等。使用该依赖可以提高应用程序的安全性和可靠性。



[//]: # (springboot缓存)

## springboot缓存

Spring Boot提供了spring-boot-starter-cache依赖，可用于简化缓存配置。它基于Spring框架的Cache抽象，支持多个缓存提供者，例如EhCache、Redis、Guava等。这个Starter提供了自动配置，使得在你创建并注入一个CacheManager的时候，Spring Boot可以自动配置它。这个Starter还提供了几种流行的缓存依赖，你可以选择使用它们。

主要组件：

- spring-context：Spring框架的核心容器
- spring-context-support：支持Spring框架的扩展功能
- spring-beans：Spring框架的Bean容器
- spring-aop：Spring框架的AOP实现
- spring-expression：Spring框架的表达式语言
- spring-cache：Spring框架对Cache的抽象
- cache-api：对统一缓存API的封装

以下是一个基于spring-boot-starter-cache的例子：

1. 添加依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
```

1. 配置缓存

在application.properties文件中配置缓存提供者，以EhCache为例：

```
spring.cache.type=ehcache
```

1. 在类中使用缓存

在需要实现缓存的方法上添加@Cacheable注解：

```java
@Service
public class MyService {

    @Cacheable("myCache")
    public String getMyData(String key) {
        // 这里实现获取数据的逻辑
        return result;
    }

}
```

此时，getMyData方法将被自动缓存，下次调用同样的方法并使用相同的参数将不会触发实际的方法调用，而是直接从缓存中获取结果。如果需要刷新缓存，可以使用@CacheEvict注解。例如：

```java
@Service
public class MyService {

    @Cacheable("myCache")
    public String getMyData(String key) {
        // 这里实现获取数据的逻辑
        return result;
    }

    @CacheEvict("myCache")
    public void clearCache(String key) {
        // 这里为空，只是用于清空缓存
    }

}
```

在调用clearCache方法时，将清空myCache缓存中的所有内容。

总结：

spring-boot-starter-cache为Spring Boot提供了缓存功能的支持，可以简化我们对缓存的配置和使用。缓存提供者可以轻松切换，缓存的使用也非常简单，只需要在需要缓存的方法上添加@Cacheable注解即可。当然，如果需要清空缓存，也可以使用@CacheEvict注解来实现。



[//]: # (common-pool2)

## common-pool2

`common-pool2`是一个通用的对象池组件，提供了复用和管理对象的功能，可以帮助我们优化对象的创建和销毁，从而提高应用程序的性能。

要在项目中使用`common-pool2`依赖，可以在pom.xml文件中添加以下依赖关系：

```xml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-pool2</artifactId>
    <version>2.9.0</version>
</dependency>
```

添加该依赖后，我们就可以在应用程序中使用对象池功能了。例如，以下代码片段演示了如何使用`common-pool2`来管理数据库连接：

```java
import org.apache.commons.pool2.impl.GenericObjectPool;
import org.apache.commons.pool2.impl.GenericObjectPoolConfig;
import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionPool {
    private GenericObjectPool<Connection> pool;

    public ConnectionPool(String url, String user, String password) throws Exception {
        Class.forName("com.mysql.jdbc.Driver");
        ConnectionFactory factory = new DriverManagerConnectionFactory(url, user, password);
        GenericObjectPoolConfig config = new GenericObjectPoolConfig();
        pool = new GenericObjectPool<>(factory, config);
    }

    public Connection getConnection() throws Exception {
        return pool.borrowObject();
    }

    public void releaseConnection(Connection conn) throws Exception {
        pool.returnObject(conn);
    }
}
```

在这个示例中，我们通过`GenericObjectPool`类来创建一个对象池，它包含了一些可配置的属性，例如最大空闲对象数、最大活动对象数等等。我们可以将连接工厂类`DriverManagerConnectionFactory`设置为对象池中的实例工厂。最后，我们通过`borrowObject()`方法来获取对象，并通过`returnObject()`方法将对象放回池中。

在应用程序中，可以通过以下方式使用连接池中的数据库连接：

```java
ConnectionPool pool = new ConnectionPool("jdbc:mysql://localhost/mydb", "root", "password");
Connection conn = pool.getConnection();
// execute queries with connection
pool.releaseConnection(conn);
```

在这个示例中，我们首先创建一个连接池并设置在应用程序中共享。然后，我们通过`getConnection()`方法从连接池中获取数据库连接，使用完后通过`releaseConnection()`方法将连接放回池中。

使用`common-pool2`可以很好地管理资源，例如数据库连接、线程等等。它可以帮助我们降低对象创建和销毁的开销，提高应用程序的性能。



[//]: # (websocket)

## websocket

`spring-boot-starter-websocket`是一个Spring Boot的起步依赖，它将Spring WebSocket模块与一个嵌入式的Tomcat WebSocket支持结合在一起。此外，它还包括了其他支持WebSocket开发的相关工具和依赖关系，例如`spring-websocket`, `spring-messaging`等等。

要在项目中使用`spring-boot-starter-websocket`依赖，可以在pom.xml文件中添加以下依赖关系：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-websocket</artifactId>
</dependency>
```

添加该依赖后，Spring Boot应用程序就可以使用WebSocket来实现双向通信了。你可以通过@Controller注释的类来处理WebSocket请求。例如，以下代码片段演示了如何创建一个简单的WebSocket处理程序：

```java
@Controller
public class WebSocketController {
    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greet(String message) throws Exception {
        return new Greeting("Hello, " + message + "!");
    }
}
```

在这个示例中，当客户端发送一个WebSocket请求到`/hello`时，`greet`方法将被调用。然后，处理程序会将响应发送回客户端，并将其广播到所有已经订阅了`/topic/greetings`的客户端。

在浏览器端，你可以使用JavaScript来创建WebSocket连接并与WebSocket处理程序进行通信。以下是一个使用jQuery的例子：

```javascript
var socket = new WebSocket('ws://localhost:8080/hello');
socket.onmessage = function(event) {
    var greeting = JSON.parse(event.data);
    console.log(greeting.content);
};
socket.send('world');
```

此会将一个包含字符串"world"的WebSocket消息发送到服务器，并打印从处理程序返回的响应。



[//]: # (spring-data-jpa)

## spring-data-jpa

Spring Data JPA是Spring Framework的一个子项目，用于简化使用JPA进行数据库访问的开发工作。通过Spring Data JPA，我们可以减少大量的样板代码，提高开发效率。要使用Spring Data JPA，需要将其依赖添加到项目中。以下是使用Spring Data JPA的Maven依赖：

```
<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-jpa</artifactId>
    <version>2.5.4</version>
</dependency>
```

使用Spring Data JPA的示例代码如下：

- 定义一个数据实体类：

```
import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    // getter 和 setter 方法
}
```

- 定义一个Repository接口：

```
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
```

在这个示例中，我们使用了@Entity和@Table注解来定义一个数据实体类User。在定义Repository时，我们继承了JpaRepository接口，并使用泛型指定了实体类类型和主键类型。在Repository中，我们定义了一个findByUsername()方法，用于根据username字段查询User实体。这里的方法名是根据方法名规则自动生成的，即findBy + 属性名。

- 在Service中使用Repository：

```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User save(User user) {
        return userRepository.save(user);
    }
}
```

在这个示例中，我们使用了@Autowired注解将UserRepository注入到UserService中。在UserService中，我们定义了一个findByUsername()方法和一个save()方法，根据需要调用UserRepository中的方法。由于我们使用了Spring Data JPA，因此可以很方便地使用这些方法对数据库进行访问。

<font color="#00c4b6" size="5">常用第三方工具依赖</font>

[//]: #  "hutool"

## hutool依赖

Hutool是一个小而全的Java工具类库，通过静态方法封装，降低相关API的学习成本，提高工作效率，使Java拥有函数式语言般的优雅，让Java语言也可以“甜甜的”。Hutool的目标是使用一个工具方法代替一段复杂代码，从而最大限度的避免“复制粘贴”代码的问题，彻底改变我们写代码的方式。Hutool是项目中“util”包友好的替代，它节省了开发人员对项目中公用类和公用工具方法的封装时间，使开发专注于业务，同时可以最大限度的避免封装不完善带来的bug。一个Java基础工具类，对文件、流、加密解密、转码、正则、线程、XML等JDK方法进行封装，组成各种Util工具类，同时提供以下组件：也可以根据需求对每个模块单独引入，也可以通过引入`hutool-all`方式引入所有模块。

```java
<!--hutool-->
<dependency>
	<groupId>cn.hutool</groupId>
    <artifactId>hutool-all</artifactId>
    <version>5.7.17</version>
</dependency>
```

| 模块               | 介绍                                                         |
| :----------------- | :----------------------------------------------------------- |
| hutool-aop         | JDK动态代理封装，提供非IOC下的切面支持                       |
| hutool-bloomFilter | 布隆过滤，提供一些Hash算法的布隆过滤                         |
| hutool-cache       | 简单缓存实现                                                 |
| hutool-core        | 核心，包括Bean操作、日期、各种Util等                         |
| hutool-cron        | 定时任务模块，提供类Crontab表达式的定时任务                  |
| hutool-crypto      | 加密解密模块，提供对称、非对称和摘要算法封装                 |
| hutool-db          | JDBC封装后的数据操作，基于ActiveRecord思想                   |
| hutool-dfa         | 基于DFA模型的多关键字查找                                    |
| hutool-extra       | 扩展模块，对第三方封装（模板引擎、邮件、Servlet、二维码、Emoji、FTP、分词等） |
| hutool-http        | 基于HttpUrlConnection的Http客户端封装                        |
| hutool-log         | 自动识别日志实现的日志门面                                   |
| hutool-script      | 脚本执行封装，例如Javascript                                 |
| hutool-setting     | 功能更强大的Setting配置文件和Properties封装                  |
| hutool-system      | 系统参数调用封装（JVM信息等）                                |
| hutool-json        | JSON实现                                                     |
| hutool-captcha     | 图片验证码实现                                               |
| hutool-poi         | 针对POI中Excel和Word的封装                                   |
| hutool-socket      | 基于Java的NIO和AIO的Socket封装                               |
| hutool-jwt         | JSON Web Token (JWT)封装实现                                 |

Hutool的一些使用示例代码如下：

- 使用StrUtil工具类进行字符串操作：

```
import cn.hutool.core.util.StrUtil;

String str = "  hello, world  ";
System.out.println(StrUtil.trim(str)); // 输出"hello, world"
System.out.println(StrUtil.upperFirst(str)); // 输出"  Hello, world  "
```

- 使用DateUtil工具类进行日期处理：

```
import cn.hutool.core.date.DateUtil;

Date now = new Date();
Date tomorrow = DateUtil.offsetDay(now, 1);
System.out.println(now); // 输出当前时间
System.out.println(tomorrow); // 输出明天的这个时间
```

- 使用FileUtil工具类进行文件操作：

```
import cn.hutool.core.io.FileUtil;

File file = new File("/path/to/file.txt");
String content = "hello, world";
FileUtil.writeUtf8String(content, file);
```

在这些示例中，我们使用了Hutool提供的工具类进行字符串操作、日期处理和文件操作。由于这些工具类提供了许多常用的方法，因此我们可以通过使用这些工具类减少编写样板代码的工作量。

[//]: # (commons-lang3依赖)

## commons-lang3依赖

commons-lang3是一个Java语言的通用工具库，提供了许多常用的工具类和方法，例如字符串操作、数组处理、日期处理等等。要使用commons-lang3，需要将其依赖添加到项目中。以下是使用commons-lang3的Maven依赖：

```java
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.12.0</version>
</dependency>
```

commons-lang3的一些使用示例代码如下：

- 使用StringUtils工具类进行字符串操作：

```java
import org.apache.commons.lang3.StringUtils;

String str = "  hello, world  ";
System.out.println(StringUtils.trim(str)); // 输出"hello, world"
System.out.println(StringUtils.upperCase(str)); // 输出"  HELLO, WORLD  "
```

- 使用ArrayUtils工具类进行数组处理：

```java
import org.apache.commons.lang3.ArrayUtils;

int[] array = {1, 2, 3};
int[] newArray = ArrayUtils.add(array, 4);
System.out.println(Arrays.toString(newArray)); // 输出"[1, 2, 3, 4]"
```

- 使用DateUtils工具类进行日期处理：

```java
import org.apache.commons.lang3.time.DateUtils;

Date now = new Date();
Date tomorrow = DateUtils.addDays(now, 1);
System.out.println(now); // 输出当前时间
System.out.println(tomorrow); // 输出明天的这个时间
```

在这些示例中，我们使用了StringUtils、ArrayUtils和DateUtils等commons-lang3提供的工具类进行字符串操作、数组处理和日期处理。由于这些工具类提供了许多常用的方法，因此我们可以通过使用这些工具类减少编写样板代码的工作量。



[//]: # (Lombok依赖)

## Lombok依赖

lombok最优秀的就是注解了，一个注解就干掉了很多代码
常用的注解:①@Data:直接可以省略了Get、Set方法;②@Slf4j:不需要单独引入日志依赖和配置日志，直接log.info()打印日志

Lombok是一个Java库，它通过注解方式简化了Java代码的编写。Lombok通过自动生成getter、setter、构造函数等代码来减少样板代码，提高开发效率。要使用Lombok，需要将其依赖添加到项目中。以下是使用Lombok的Maven依赖：

```java
<!--    lombok 依赖 -->
<dependency>
	<groupId>org.projectlombok</groupId>
	<artifactId>lombok</artifactId>
	<optional>true</optional>
</dependency>
```

Lombok的一些注解用法如下：

- @Getter / @Setter：自动生成Getter / Setter方法。
- @ToString：自动生成toString()方法。
- @EqualsAndHashCode：自动生成equals()和hashCode()方法。
- @AllArgsConstructor / @NoArgsConstructor：自动生成带参 / 无参构造方法。
- @Data：代替@Getter / @Setter, @ToString, @EqualsAndHashCode和有参构造方法，其实就是个组合注解。

使用Lombok的示例代码如下：

```java
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Long id;
    private String username;
    private String password;
}

User user = new User();
user.setId(1L);
user.setUsername("admin");
user.setPassword("123456");

System.out.println(user.toString());
```

在这个示例中，我们使用了@Data、@AllArgsConstructor和@NoArgsConstructor注解来简化User类的定义。由于@Data已经包含了@Getter、@Setter、@ToString和@EqualsAndHashCode，因此我们只需要使用@Data注解即可。此外，由于我们使用了@AllArgsConstructor注解，因此可以在创建User对象时使用带参构造方法。最后，我们使用了自动生成的toString()方法来输出User对象的信息。



[//]: # (Fastjson依赖)

## Fastjson依赖

Fastjson是一个用于Java语言的高性能JSON处理库，支持各种数据格式的转换，同时也提供了多种解析、序列化的方式。要使用Fastjson，需要将其依赖添加到项目中。以下是使用Fastjson的Maven依赖：

```java
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.76</version>
</dependency>
```

使用Fastjson将Java对象序列化为JSON字符串的示例代码如下：

```java
import com.alibaba.fastjson.JSON;

User user = new User();
user.setId(1);
user.setUsername("admin");
user.setPassword("123456");

String json = JSON.toJSONString(user);
```

在这个示例中，我们使用了JSON类的toJSONString()方法将User对象序列化为JSON字符串。

使用Fastjson将JSON字符串反序列化为Java对象的示例代码如下：

```java
import com.alibaba.fastjson.JSON;

String json = "{\"id\":1,\"username\":\"admin\",\"password\":\"123456\"}";

User user = JSON.parseObject(json, User.class);
```

在这个示例中，我们使用了JSON类的parseObject()方法将JSON字符串反序列化为User对象。需要注意的是，第二个参数指定了反序列化的目标对象类型。



[//]: # (java图形验证码)

## java图形验证码

easy-captcha 是一个基于Java的验证码库，可以快速生成各种类型的验证码。要使用easy-captcha，需要将其依赖添加到项目中。以下是使用easy-captcha的Maven依赖：

```java
<dependency>
    <groupId>com.github.yingzhuo</groupId>
    <artifactId>easy-captcha</artifactId>
    <version>2.7.2</version>
</dependency>
```

使用easy-captcha生成验证码的示例代码如下：

```java
import com.wf.captcha.utils.CaptchaUtil;

// 生成中文验证码
CaptchaUtil.out(130, 48, 4, response);

// 生成算术验证码
CaptchaUtil.outArithmetic(130, 48, 4, response);

// 生成gif动画验证码
CaptchaUtil.outGif(130, 48, 4, response);
```

在这个示例中，我们使用了CaptchaUtil类的out()、outArithmetic()和outGif()方法分别生成中文验证码、算术验证码和gif动画验证码。

使用easy-captcha验证验证码的示例代码如下：

```java
import javax.servlet.http.HttpServletRequest;
import com.wf.captcha.utils.CaptchaUtil;

String code = request.getParameter("code");
boolean result = CaptchaUtil.ver(code, request);

if (result) {
    // 验证通过
} else {
    // 验证失败
}
```

在这个示例中，我们使用CaptchaUtil类的ver()方法验证用户输入的验证码是否正确。如果验证通过，将返回true；否则，将返回false。



[//]: # (JWT依赖)

## JWT依赖

JJWT（Java JWT）是一个开源的Java库，用于生成、解析和验证JSON Web Tokens（JWT）。在用户注册或登录后，我们想记录用户的登录状态，或者为用户创建身份认证的凭证。我们不再使用Session认证机制，而使用Json Web Token认证机制。要使用JJWT，需要将其依赖添加到项目中。以下是使用JJWT实现JWT的Maven依赖：

```java
<!--jwt（JSON Web Token 依赖）-->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.1</version>
</dependency>
```

使用JJWT生成JWT的示例代码如下：

```java
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;

String secretKey = "mySecretKey";

String jwt = Jwts.builder()
        .setSubject("user123")
        .setExpiration(new Date(System.currentTimeMillis() + 3600000))
        .signWith(SignatureAlgorithm.HS256, secretKey.getBytes())
        .compact();
```

在这个示例中，我们使用Jwts.builder()方法创建一个JWT生成器，然后设置了一些声明（例如，Subject和Expiration），并使用signWith()方法设置JWT的签名算法和密钥。

使用JJWT验证JWT的示例代码如下：

```java
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

String jwt = ... // [从请求中获取JWT]
String secretKey = "mySecretKey";

try {
    Claims claims = Jwts.parser()
            .setSigningKey(secretKey.getBytes())
            .parseClaimsJws(jwt)
            .getBody();
    // 验证通过，可以使用claims中的声明
} catch (Exception e) {
    // 验证失败，无法信任该JWT
}
```

在这个示例中，我们使用Jwts.parser()方法创建一个JWT解析器，然后使用setSigningKey()方法设置JWT的密钥，并使用parseClaimsJws()方法解析JWT。如果验证成功，将返回一个Claims对象，其中包含了JWT中的声明。如果验证失败，将抛出JwtException异常。



[//]: # (定时任务)

## 定时任务Quartz

```java
<!-- SpringBoot 整合 Quartz 定时任务 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-quartz</artifactId>
<version>2.3.5.RELEASE</version>
</dependency>
```

<font color="#00c4b6" size="5">辅助类工具依赖</font>

## swagger-ui

Swagger是一个规范且完整的框架，用于生成、描述、调用和可视化 RESTful 风格的 Web 服务。是一个实现了OpenAPI(OpenAPI Specification)规范的工具集。OpenAPI是Linux基金会的一个项目，试图通过定义一种用来描述API格式或API定义的语言，来规范RESTful服务开发过程。
Swagger大大方便了前后端开发人员，用过的人都说好。启动项目后访问：localhost:8080/swagger-ui.html，就能看到生成的文档了，很是简单。
使用SwaggerAPI的步骤
1.添加Swagger依赖
2.添加配置:新建一个config包，写配置类,加入api注解，在controller类上面,每个方法上加入@ApiOperation注解，生成对应api
3.在线测试接口:重启项目打开网页进入访问地址(http://localhost:8080/swagger-ui.html)
常用注解
@Api：修饰整个类，描述Controller的作用
@ApiOperation：描述一个类的一个方法，或者说一个接口
@ApiParam：单个参数描述
@ApiModel：用对象来接收参数
@ApiProperty：用对象接收参数时，描述对象的一个字段
@ApiResponse：HTTP响应其中1个描述
@ApiResponses：HTTP响应整体描述
@ApiIgnore：使用该注解忽略这个API
@ApiError ：发生错误返回的信息
@ApiImplicitParam：一个请求参数
@ApiImplicitParams：多个请求参数

```java
<!--添加swagger的依赖-->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.7.0</version>
</dependency>

<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.7.0</version>
</dependency>
```

```java
//表示这个类是一个配置类,会把这个类注入到ioc容器中
@Configuration
//开启swagger2的功能
@EnableSwagger2
public class SwaggerConfig {
 
    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                //这里一定要标注你控制器的位置
                .apis(RequestHandlerSelectors.basePackage("com.qiu.controller"))
                .paths(PathSelectors.any())
                .build();
    }
 
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Thymeleaf测试")
                .description("SpringBoot整合Thymeleaf测试")
                .termsOfServiceUrl("https://angegit.gitee.io/myblog/")
                .contact(new Contact("niechangan","https://angegit.gitee.io/myblog/","1351261434@qq.com"))
                .version("1.0")
                .build();
    }
}
```


## 扫描xml文件

当xml文件不在resource目录下的mapper目录时，可以使用下面的代码添加到pom.xml文件中配置springboot下面扫描到mapper对应的xml文件

```xml
<build>
    <resources>
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.xml</include>
            </includes>
            <filtering>false</filtering>
        </resource>
    </resources>
</build>
```

在application.yml配置文件里添加下面的代码，配置扫描xml文件的路径

```yaml
mybatis-plus:
  mapper-locations: classpath:com/guangzai/edu/mapper/xml/*.xml
```

## 手机短信依赖

Spring Boot提供了许多发送手机短信的依赖，最常用的是阿里云短信SDK和腾讯云短信SDK。你需要根据自己使用的短信服务商选择相应的依赖。

1. 阿里云短信SDK依赖

Maven:

```
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-java-sdk-sms</artifactId>
    <version>1.1.0</version>
</dependency>
<dependency>
   <groupId>com.aliyun</groupId>
   <artifactId>aliyun-java-sdk-core</artifactId>
</dependency>
```

Gradle:

```
implementation 'com.aliyun:aliyun-java-sdk-sms:1.1.0'
```

1. 腾讯云短信SDK依赖

Maven:

```
<dependency>
    <groupId>com.tencentcloudapi</groupId>
    <artifactId>tencentcloud-sdk-java</artifactId>
    <version>3.0.52</version>
</dependency>
```

Gradle:

```
implementation 'com.tencentcloudapi:tencentcloud-sdk-java:3.0.52'
```

注意：使用腾讯云短信SDK需要在代码中配置密钥和签名，具体请参考腾讯云短信SDK的文档。

使用以上依赖后，你需要在代码中配置短信服务的相关信息，例如阿里云短信SDK需要配置Access Key和Access Secret，腾讯云短信SDK需要配置SecretId和SecretKey等。具体可参考对应SDK的文档。之后，你就可以使用相应的API发送手机短信了。

## HttpClient依赖

HttpClient是Apache提供的一个Java开发的HTTP客户端库，用于发送HTTP请求和处理HTTP响应，可通过Maven或Gradle来引入相关依赖。以下是引入HttpClient的示例：

Maven:

```
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>4.5.1</version>
</dependency>
```

Gradle:

```java
implementation 'org.apache.httpcomponents:httpclient:4.5.13'
```

其中，groupId为org.apache.httpcomponents，artifactId为httpclient，version为具体的版本号。

使用以上依赖后，在Java代码中可直接使用HttpClient相关的API发送HTTP请求和处理HTTP响应。例如：

```java
// 创建HttpClient对象
CloseableHttpClient httpClient = HttpClientBuilder.create().build();

// 创建HttpGet请求
HttpGet httpGet = new HttpGet("http://www.baidu.com");

// 发送请求，获取响应
CloseableHttpResponse response = httpClient.execute(httpGet);

// 处理响应
HttpEntity entity = response.getEntity();
String result = EntityUtils.toString(entity);
System.out.println(result);

// 关闭响应和HttpClient
response.close();
httpClient.close();
```

上面的示例通过HttpClient发送了一个HTTP GET请求，并打印了响应结果。其中，HttpGet是请求对象，CloseableHttpResponse是响应对象，HttpEntity是响应主体的封装对象。

## Gson依赖

Gson是Google开发的一个Java库，用于将Java对象与JSON数据进行序列化和反序列化，可通过Maven或 Gradle来引入相关依赖。以下是引入Gson的示例：

Maven:

```java
<!--gson-->
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.8.2</version>
</dependency>
```

Gradle:

```java
implementation 'com.google.code.gson:gson:2.8.2'
```

其中，groupId为com.google.code. gson，artifactId为gson，version为具体的版本号。

使用以上依赖后，在Java代码中可直接使用Gson相关的API进行JSON的序列化和反序列化操作。例如：

```java
// 将Java对象转换为JSON格式字符串
Gson gson = new Gson();
String json = gson.toJson(object);

// 将JSON格式字符串转换为Java对象
Gson gson = new Gson();
Object object = gson.fromJson(json, Object.class);
```

## nacos依赖

Nacos（Naming and Configuration Service）是一个开源的动态服务注册、配置和服务发现平台，用于简化微服务架构中的服务管理和运维工作。

在Java项目中使用Nacos需要引入以下依赖：

```java
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
    <version>2.2.0.RELEASE</version>
</dependency>
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
    <version>2.2.0.RELEASE</version>
</dependency>
```

其中，spring-cloud-starter-alibaba-nacos-config用于Nacos配置中心的集成，spring-cloud-starter-alibaba-nacos-discovery用于Nacos服务注册和发现的集成。

这些依赖都是基于SpringCloud的，因此需要先引入SpringCloud的依赖，如下所示：

```java
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-dependencies</artifactId>
    <version>Hoxton.SR10</version>
    <type>pom</type>
    <scope>import</scope>
</dependency>
```

需要注意的是，Nacos目前支持的SpringCloud版本是Hoxton及之后的版本，因此需要确保引入的SpringCloud版本符合要求。
