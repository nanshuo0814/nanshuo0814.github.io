---
title: Java项目常用工具类
date: 2024-05-04 14:02:05
cover: https://ypycdn.nanshuo.icu/posts/java_utils/java.jpeg
excerpt: 本文介绍了 Java 中的随机数验证码生成、邮箱验证码发送、静态资源映射、Date 序列化和反序列化、正则表达式验证等工具类的实现。这些工具类提供了常用的功能，可在 Java 项目中方便地使用。
#permalink: /archives/ysIrg56u
isOriginal: true
category:
 - java
tag: 
 - java
---


## 随机数验证码
十分简单的生成随机数验证码（4-6位），只包括数字和字母（大小写），原理很简单，定义两个String类型的字符串，一个是包括字母数字，另一个是空字符串，然后利用Random工具类再结合循环遍历添加指定多少个字符来生成随机验证码

```java
public class VerifyCodeTool {

    /**
     * 生成发送验证码
     * @return
     */
    public static String createVerifyCode(int n) {
        String code = "";
        String data = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        //随机数生成验证码
        Random r = new Random();
        //遍历循环
        for (int i = 0; i < n; i++) {
            int index = r.nextInt(data.length());
            code += data.charAt(index);
        }
        return code;
    }
}
```

## 邮箱验证码

```java
public class MailUtils {
    // 发送邮件验证码
    public static void sendTestMail(String email, String code) throws MessagingException {
        // 1.创建Properties 类用于记录邮箱的一些属性
        Properties pros = new Properties();
        // 1.1 表示SMTP发送邮件，必须进行身份验证
        pros.put("mail.smtp.auth", "true");
        // 1.2 此处填写SMTP服务器
        pros.put("mail.smtp.host", "smtp.qq.com");
        // 1.3 端口号，QQ邮箱端口587
        pros.put("mail.smtp.port", "587");
        // 1.4 此处填写，写信人的账号
        pros.put("mail.user", "");
        // 1.5 此处填写16位SMTP口令
        pros.put("mail.password", "");

        // 2.构建授权信息，用于进行SMTP进行身份验证
        Authenticator authenticator = new Authenticator() {
            @Override
            protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
                // 2.1 用户名
                String userName = pros.getProperty("mail.user");
                // 2.2 16位STMP口令
                String password = pros.getProperty("mail.password");
                return new javax.mail.PasswordAuthentication(userName, password);
            }
        };

        // 3.使用环境属性和授权信息，创建邮件会话
        Session mailSession = Session.getInstance(pros, authenticator);
        // 4.创建邮件消息对象
        MimeMessage message = new MimeMessage(mailSession);
        // 4.1 设置发件人
        InternetAddress from = new InternetAddress(pros.getProperty("mail.user"));
        message.setFrom(from);
        // 4.2 设置收件人
        InternetAddress to = new InternetAddress(email);
        message.setRecipient(Message.RecipientType.TO, to);
        // 4.3 设置邮件标题
        message.setSubject("");
        // 4.4 设置邮件的正文
        message.setContent("", "text/html;charset=UTF-8");
        // 5.最后，发送邮件
        Transport.send(message);
    }

    // 获取六位随机验证码
    public static String getCode() {
        // 由于数字 1 、 0 和字母 O 、l 有时分不清楚，所以，没有数字 1 、 0
        String[] beforeShuffle = {"2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",
                "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a",
                "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
                "w", "x", "y", "z"};
        // 将数组转换成集合
        List<String> list = Arrays.asList(beforeShuffle);
        // 打乱集合顺序，以达到随机的效果
        Collections.shuffle(list);
        // 创建StringBuilder，不是线程安全的
        StringBuilder sb = new StringBuilder();
        // 将集合转变成StringBuilder字符串
        for (String s : list) {
            sb.append(s);
        }
        // 返回sb字符串中第10~17位的5位验证码，这个区间其实随便设的
        return sb.substring(10, 16);
    }
}
```

## 静态资源映射

配置springboot项目Tomcat服务器访问静态资源(html/css/js/...)

```java
@Slf4j
@Configuration
public class WebMvcConfig extends WebMvcConfigurationSupport {
    /**
     * @param registry 注册表
     * @methodName 添加资源处理程序
     * @Description 静态资源映射
     */
    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        log.info("开始进行静态资源映射...");
        /**
     	 * 其中"classpath:"表示目录Resource的路径,一般来说都是映射该目录下的资源
     	 * 例如:以下就是映射到Resource目录下的front目录下的所有资源
     	 * registry.addResourceHandler("/front/**").addResourceLocations("classpath:/front/");
         */
        registry.addResourceHandler("").addResourceLocations("");
        registry.addResourceHandler("").addResourceLocations("");
    }
    
    /**
     * @param converters 转换器
     * @methodName 扩展消息转换器
     * @Description
     */
    @Override
    protected void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
        //创建信息转换对象
        MappingJackson2HttpMessageConverter messageConverter = new MappingJackson2HttpMessageConverter();
        //设置对象转换器,底层使用JackSon将Java对象转为json
        messageConverter.setObjectMapper(new JacksonObjectMapper());
        //将上面的信息转换器追加到mvc框架的转换器集合中
        converters.add(0, messageConverter);
    }
}
```


## Date序列化和反序列化


常用于存储和取出数据库Date字段的时候,进行序列化和反序列化，实现两个不同的对象进行互转

```java
/**
 * 对象映射器:基于jackson将Java对象转为json，或者将json转为Java对象
 * 将JSON解析为Java对象的过程称为 [从JSON反序列化Java对象]
 * 从Java对象生成JSON的过程称为 [序列化Java对象到JSON]
 */
public class JacksonObjectMapper extends ObjectMapper {

    public static final String DEFAULT_DATE_FORMAT = "yyyy-MM-dd";
    public static final String DEFAULT_DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss";
    public static final String DEFAULT_TIME_FORMAT = "HH:mm:ss";

    public JacksonObjectMapper() {
        super();
        //收到未知属性时不报异常
        this.configure(FAIL_ON_UNKNOWN_PROPERTIES, false);

        //反序列化时，属性不存在的兼容处理
        this.getDeserializationConfig().withoutFeatures(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);


        SimpleModule simpleModule = new SimpleModule()
                .addDeserializer(LocalDateTime.class, new LocalDateTimeDeserializer(DateTimeFormatter.ofPattern(DEFAULT_DATE_TIME_FORMAT)))
                .addDeserializer(LocalDate.class, new LocalDateDeserializer(DateTimeFormatter.ofPattern(DEFAULT_DATE_FORMAT)))
                .addDeserializer(LocalTime.class, new LocalTimeDeserializer(DateTimeFormatter.ofPattern(DEFAULT_TIME_FORMAT)))

                .addSerializer(BigInteger.class, ToStringSerializer.instance)
                .addSerializer(Long.class, ToStringSerializer.instance)
                .addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(DateTimeFormatter.ofPattern(DEFAULT_DATE_TIME_FORMAT)))
                .addSerializer(LocalDate.class, new LocalDateSerializer(DateTimeFormatter.ofPattern(DEFAULT_DATE_FORMAT)))
                .addSerializer(LocalTime.class, new LocalTimeSerializer(DateTimeFormatter.ofPattern(DEFAULT_TIME_FORMAT)));
        //注册功能模块 例如，可以添加自定义序列化器和反序列化器
        this.registerModule(simpleModule);
    }
}
```



## 正则表达式



包括手机号、邮箱、密码、验证码的正则表达式验证


```java
public abstract class RegexPatterns {
    /**
     * 手机号正则
     */
    public static final String PHONE_REGEX = "^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\\d{8}$";
    /**
     * 邮箱正则
     */
    public static final String EMAIL_REGEX = "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$";
    /**
     * 密码正则。4~32位的字母、数字、下划线
     */
    public static final String PASSWORD_REGEX = "^\\w{4,32}$";
    /**
     * 验证码正则, 6位数字或字母
     */
    public static final String VERIFY_CODE_REGEX = "^[a-zA-Z\\d]{6}$";

}
```




### 校验正则表达式


对手机号、邮箱、验证码进行校验


```java
public class RegexUtils {
    /**
     * 是否是无效手机格式
     * @param phone 要校验的手机号
     * @return true:符合，false：不符合
     */
    public static boolean isPhoneInvalid(String phone){
        return mismatch(phone, RegexPatterns.PHONE_REGEX);
    }
    /**
     * 是否是无效邮箱格式
     * @param email 要校验的邮箱
     * @return true:符合，false：不符合
     */
    public static boolean isEmailInvalid(String email){
        return mismatch(email, RegexPatterns.EMAIL_REGEX);
    }

    /**
     * 是否是无效验证码格式
     * @param code 要校验的验证码
     * @return true:符合，false：不符合
     */
    public static boolean isCodeInvalid(String code){
        return mismatch(code, RegexPatterns.VERIFY_CODE_REGEX);
    }

    // 校验是否不符合正则格式
    private static boolean mismatch(String str, String regex){
        if (StrUtil.isBlank(str)) {
            return true;
        }
        return !str.matches(regex);
    }
}
```
