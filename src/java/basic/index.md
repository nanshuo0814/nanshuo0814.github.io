---
article: false
---

# Java基础

::: tip 说明
收集常见且高频热门的 Java 基础相关知识，包括 Java 的特点、JVM、JRE、JDK 三者关系、编译型语言和解释型语言的区别、Java 数据类型、装箱和拆箱、面向对象等。

如果你有任何建议或问题，请随时<a href="/about-author/">**联系站长**</a>
:::


# Java 的特点
1. 平台无关性（跨平台性）：一次编写，处处运行（依靠 JVM 虚拟机，Java 运行的环境）。
2. 面向对象：一切皆对象。
3. 内存管理：垃圾回收机制，自动管理内存的分配与回收。

# JVM、JRE、JDK 三者关系
JVM：Java 虚拟机，Java 程序运行的环境，负责将 Java 字节码（.class 文件）解释或编译为机器码，并执行程序，不同操作系统对应不同的 JVM，它提供内存管理、垃圾回收等功能。

JRE：Java 运行时环境，包含 JVM、Java 核心类库（API），是 Java 程序运行所需的最小环境，但它不包含开发工具（如编译器），如果你只想运行 Java 程序，可只安装 JRE。

JDK：Java 开发工具包，它不仅包括 JRE（即 JVM 和核心类库 API），还包括 Java 开发工具，例如编译器（javac）、调式工具（jdb）以及其他开发工具和文档。

范围：JDK>JRE>JVM

![](https://ypycdn.nanshuo.icu/java/basic/image-20240725230247664.webp)

# 编译型语言和解释型语言
Java 既属于编译型语言，也属于解释型语言，是混合型语言（兼具这两种语言各自的优点）。

| 特性         | 编译型语言                                                       | 解释型语言                                                      |
| ------------ | ---------------------------------------------------------------- | --------------------------------------------------------------- |
| **执行方式** | 先编译成机器码后执行                                             | 每次执行时逐行解释并执行                                        |
| **执行效率** | 较高（直接执行机器码）                                           | 较低（逐行解释执行）                                            |
| **错误检测** | 编译时检查，错误可以提前发现                                     | 运行时检查，错误只有在运行时才会发现                            |
| **跨平台性** | 跨平台性较差（依赖于平台的可执行文件）                           | 跨平台性较好（只要有解释器即可）                                |
| **调试过程** | 需要编译后才能执行，调试较为复杂                                 | 逐行执行，调试相对简单                                          |
| **示例语言** | C, C++, Go                                                       | Python, JavaScript, Ruby                                        |
| **实际应用** | 适用于对执行效率要求高的场合，如系统开发、游戏开发、嵌入式编程等 | 适合开发周期较短、需要快速调试的项目，比如 Web 开发、脚本编写等 |


# Java 数据类型
Java 共有 8 种基本数据类型，byte、short、int、long、float、double、char、boolean，可以把它们分为三种类型（整数、浮点、字符、布尔）。

注：数据类型（大小，默认值，范围）

1. 整数类型：byte（1 字节，0，-128 到 127）、short（2 字节，0，-32768 到 32767）、int（4 字节，0，-2³¹ 到 2³¹ - 1）、long（8 字节，0L，-2⁶³ 到 2⁶³ - 1）。
2. 浮点类型：float（4 字节，0.0f，±1.4 × 10⁻⁴⁵ 到 ±3.4 × 10³⁸）、double（8 字节，0.0d，±4.9 × 10⁻³²⁴ 到 ±1.8 × 10³⁰⁸）。
3. 字符类型：char（2 字节），默认值是`'\u0000'`（空字符），范围 0 到 65,535（Unicode 编码范围）。
4. 布尔类型：boolean（1 位 bit），默认值是 false，值只有 true 和 false 两种情况。

| **类型类别** | **数据类型** | **大小** | **默认值** | **取值范围**                    |
| ------------ | ------------ | -------- | ---------- | ------------------------------- |
| **整数类型** | byte         | 1 字节   | 0          | -128 到 127                     |
|              | short        | 2 字节   | 0          | -32,768 到 32,767               |
|              | int          | 4 字节   | 0          | -2³¹ 到 2³¹ - 1                 |
|              | long         | 8 字节   | 0L         | -2⁶³ 到 2⁶³ - 1                 |
| **浮点类型** | float        | 4 字节   | 0.0f       | ±1.4 × 10⁻⁴⁵ 到 ±3.4 × 10³⁸     |
|              | double       | 8 字节   | 0.0d       | ±4.9 × 10⁻³²⁴ 到 ±1.8 × 10³⁰⁸   |
| **字符类型** | char         | 2 字节   | \u0000     | 0 到 65,535（Unicode 编码范围） |
| **布尔类型** | boolean      | 1 位     | false      | true 或 false                   |


除了基本数据类型，Java 还有引用数据类型，例如：类（class）、接口（interface）、数组（array），它们的默认值都是 null，引用数据类型不直接存储数据，而是存储对数据的引用（即内存地址）。

![](https://ypycdn.nanshuo.icu/java/basic/1715930632378-7f03a5ae-3364-41d4-88a8-428997d543dd.png)

# 装箱和拆箱
是指基本数据类型和其对应包装类之间进行转换的过程。

装箱：基本数据类型转为对应的包装类。

拆箱：包装类转为对应的基本数据类型。

1. byte<=>Byte
2. short<=>Short
3. int<=>Integer
4. long<=>Long
5. float<=>Float
6. double<=>Double
7. char<=>Character
8. boolean<=>Boolean

**为什么需要装箱和拆箱？**

主要是因为有一些集合类、泛型和其他 API 的方法只能储存对象类型、只能使用对象类型和只能返回对象类型等情况，不能直接使用基本数据类型，因此需要把基本数据类型转为对象，于是就有这两个概念，将基本数据类型装箱成为对象，例如 `ArrayList<int>`这种写法是错误的，正确写法是 `ArrayList<Integer>`。

**需要注意的性能问题？**

1. 装箱和拆箱会带来一定的性能开销，涉及到对象的创建和垃圾回收等操作，频繁装拆箱可能会影响程序的性能，尤其是在大数据处理时，谨慎使用。
2. 在高性能要求的场景下，避免不必要的装拆箱操作，可以适当的使用其对应基本数据类型来替代。

# Java 面向对象
面向对象（OOP）是一种程序设计范式，以对象作为核心（中心），将现实世界里的事务抽象为对象，对象具有属性（字段）和行为（方法）。

**面向对象的三大特性：封装、继承、多态。**

1. 封装：将对象的属性（数据）和行为（方法）封装在一个类里，对外隐藏内部实现的细节，并限制外部直接访问对象数据，提供公共的接口方法与外部交互， 通过封装，可以提高代码的安全性和可维护性。
2. 继承：允许通过继承现有的类（父类）的属性和方法来创建新的类（子类），来达到代码的复用，子承父业，可在父类的基础上进行扩展功能，也可自行创建子类其特有的属性或方法。
3. 多态：是指同一个方法在不同的对象上有不用的行为（表现），多态可以分为编译时多态（方法重载：同一个类中，方法名相同，但参数不同，参数类型、数量或顺序不同）和运行时多态（方法重写：子类继承父类后，可以重写父类的方法，定义不同的实现）。

**面向对象设计原则有哪些？**

1. 单一职责原则（SRP）： 一个类应该只有一个职责，或者说应该只有一个引起它变化的原因。
2. 开放封闭原则（OCP）：对修改关闭，对扩展开放。
3. 里氏替换原则（LSP）：子类应该可以替换父类并且使得程序的行为不变。
4. 依赖倒置原则（DIP）：高层模块不应该依赖于低层模块，二者都依赖于抽象，抽象不依赖于细节，细节依赖于抽象。
5. 接口隔离原则（ISP）：客户端不应该依赖于它不需要的接口，即接口应该小而专。
6. 迪米特法则（Law of Demeter）：一个对象应该对其他对象有最少的了解。

# 子父类加载顺序，new 子类
在子父类的加载过程中，具体的顺序可以总结为以下几个步骤：

1. 类加载：
    - 父类静态成员、静态代码块：父类加载时，会加载静态成员和执行静态代码块。
    - 子类静态成员、静态代码块：加载子类时，会加载子类的静态成员和执行静态代码块。
2. 对象实例化：
    - 实例变量初始化：为实例变量分配内存并赋予默认值。
    - 实例初始化块：执行类中的实例初始化块（如果有）。
    - 父类构造方法：如果子类没有显式调用父类构造方法，则会自动调用父类的无参构造方法。
    - 子类构造方法：最后执行子类构造方法。
3. 方法加载：
    - 静态方法：当类第一次被访问时，静态方法所在的类会被加载。静态方法仅在类加载时被解析。
    - 实例方法：实例方法在类加载时并不会立即被加载，它们会在首次调用时被加载和解析。

# 深拷贝和浅拷贝
| 特性         | 浅拷贝                                     | 深拷贝                                                       |
| ------------ | ------------------------------------------ | ------------------------------------------------------------ |
| 对象创建     | 创建一个新对象，并复制基本数据类型字段     | 创建一个新对象，复制基本数据类型字段，并递归拷贝引用类型字段 |
| 引用类型字段 | 引用类型字段指向原对象的内存地址，引用共享 | 引用类型字段指向新创建的对象，不共享内存                     |
| 影响         | 修改原对象的引用类型字段，会影响拷贝对象   | 修改原对象的引用类型字段，不会影响拷贝对象                   |
| 使用场景     | 不需要完全独立对象时使用                   | 需要独立、完全复制对象时使用                                 |


**实现深拷贝有哪些方式？**

| **实现方式**                                           | **描述**                                                                                    | **优缺点**                                                                                                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 手动实现深拷贝                                         | 通过手动编写代码来创建新对象并递归复制引用类型字段                                          | - 优点：灵活，完全控制拷贝过程。   - 缺点：代码较多，手动处理较为繁琐，尤其是有多层引用对象时。                                             |
| 使用 clone() 方法                                      | 通过实现 Cloneable 接口并重写 clone() 方法进行深拷贝                                        | - 优点：方便快速，通过继承和接口实现。   - 缺点：只适用于实现 Cloneable 接口的对象，且需要显式调用clone()。需要手动处理引用类型字段的拷贝。 |
| 使用序列化与反序列化                                   | 通过将对象序列化为字节流，然后再反序列化生成新对象来实现深拷贝                              | - 优点：简洁易用，不需要手动处理对象字段。   - 缺点：性能较低，需要将对象写入和读取到流，且对象及其引用类型字段必须实现 Serializable 接口。 |
| 使用 Apache Commons Lang 的 SerializationUtils.clone() | 使用 Apache Commons Lang 库的 SerializationUtils.clone() 方法通过序列化与反序列化实现深拷贝 | - 优点：简洁，直接调用工具类方法，减少代码量。   - 缺点：需要依赖外部库（Apache Commons Lang）。                                            |


# 泛型
在 Java 中，泛型允许你在定义类、接口或方法时不指定具体的数据类型，而是在使用时提供类型参数。这样可以确保在编译时类型的安全，避免类型转换异常等问题。

**泛型表示有哪些方式？**

1. 泛型类

泛型类是指类的类型在定义时未指定，而是在实例化类时才指定。例如，`ArrayList<T>` 就是一个泛型类，T 可以是任何类型。

```java
class Box<T> {
    private T value;

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

public class GenericExample {
    public static void main(String[] args) {
        // 使用泛型类 Box
        Box<Integer> integerBox = new Box<>();
        integerBox.setValue(10);
        System.out.println(integerBox.getValue());  // 10

        Box<String> stringBox = new Box<>();
        stringBox.setValue("Hello");
        System.out.println(stringBox.getValue());  // Hello
    }
}
```

2. 泛型接口

接口也可以使用泛型，在接口定义时指定类型参数，使用时再提供具体的类型。

```java
interface Pair<K, V> {
    K getKey();
    V getValue();
}

class MyPair<K, V> implements Pair<K, V> {
    private K key;
    private V value;

    public MyPair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    @Override
    public K getKey() {
        return key;
    }

    @Override
    public V getValue() {
        return value;
    }
}

public class GenericExample {
    public static void main(String[] args) {
        Pair<Integer, String> pair = new MyPair<>(1, "Hello");
        System.out.println("Key: " + pair.getKey() + ", Value: " + pair.getValue());  // Key: 1, Value: Hello
    }
}
```

3. 泛型方法

泛型不仅可以应用于类和接口，也可以应用于方法。方法的泛型定义方式与类类似，可以在方法声明时指定类型参数。

```java
public class GenericExample {
    // 泛型方法
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.println(element);
        }
    }

    public static void main(String[] args) {
        Integer[] intArray = {1, 2, 3};
        String[] strArray = {"Hello", "World"};

        printArray(intArray);  // 输出 1 2 3
        printArray(strArray);  // 输出 Hello World
    }
}
```

4. 泛型边界

泛型类型参数可以设置边界，指定它必须是某个类型的子类或实现某个接口。通过这种方式，可以限制泛型的使用范围。

```java
// 设定边界，T 必须是 Number 的子类
public class GenericExample {
    public static <T extends Number> void printNumber(T number) {
        System.out.println(number);
    }

    public static void main(String[] args) {
        printNumber(10);  // 输出 10
        printNumber(3.14);  // 输出 3.14
        // printNumber("Hello");  // 编译错误，String 不是 Number 的子类
    }
}
```

5. 泛型通配符

Java 泛型还支持通配符 `?`，它代表某个未知类型。通配符的主要用途是指定方法参数中可接受的类型范围。

```java
// 上界通配符，限制参数类型为 Number 或其子类
public class GenericExample {
    public static void printNumbers(List<? extends Number> numbers) {
        for (Number number : numbers) {
            System.out.println(number);
        }
    }

    public static void main(String[] args) {
        List<Integer> intList = Arrays.asList(1, 2, 3);
        List<Double> doubleList = Arrays.asList(1.1, 2.2, 3.3);

        printNumbers(intList);  // 输出 1 2 3
        printNumbers(doubleList);  // 输出 1.1 2.2 3.3
    }
}
```

**泛型有哪些限制？**

1. 不能使用基本数据类型：泛型不支持基本数据类型（如 int、char、boolean 等），只能使用它们的包装类（如 Integer、Character、Boolean）。
2. 泛型数组：无法创建泛型数组，例如 new T[10] 是不允许的，因为 Java 无法确定数组元素的类型。
3. 类型擦除：Java 泛型使用类型擦除机制，即在编译时会将泛型参数替换成具体的类型或 Object，因此在运行时无法获取泛型的具体类型。

# Java 创建对象的方式有哪些
1. 使用 new 关键字

```java
MyClass obj = new MyClass();
```

2. 使用 newInstance() 方法（反射）

```java
MyClass obj = (Myclass) Class.forName("com.example.MyClass").newInstance();
```

3. 使用Constructor类的newInstance()方法

```java
import java.lang.reflect.Constructor;

class Person {
    String name;

    public Person(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        // 使用反射的方式创建对象
        Class<?> personClass = Class.forName("Person");
        Constructor<?> constructor = personClass.getConstructor(String.class);
        Person person = (Person) constructor.newInstance("Tom");
        System.out.println(person.name);  // 输出：Tom
    }
}
```

4. 使用clone()方法

```java
class Person implements Cloneable {
    String name;

    public Person(String name) {
        this.name = name;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

public class Main {
    public static void main(String[] args) throws CloneNotSupportedException {
        Person person1 = new Person("Tom");
        // 使用 clone() 方法创建对象
        Person person2 = (Person) person1.clone();
        System.out.println(person2.name);  // 输出：Tom
    }
}
```

5. 使用反序列化

```java
import java.io.*;

class Person implements Serializable {
    String name;

    public Person(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        Person person1 = new Person("Tom");

        // 序列化对象
        ByteArrayOutputStream byteStream = new ByteArrayOutputStream();
        ObjectOutputStream out = new ObjectOutputStream(byteStream);
        out.writeObject(person1);

        // 反序列化对象
        ByteArrayInputStream byteInStream = new ByteArrayInputStream(byteStream.toByteArray());
        ObjectInputStream in = new ObjectInputStream(byteInStream);
        Person person2 = (Person) in.readObject();

        System.out.println(person2.name);  // 输出：Tom
    }
}
```

6. 使用工厂方法

```java
abstract class Animal {
    abstract void sound();
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Woof");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Meow");
    }
}

class AnimalFactory {
    public static Animal getAnimal(String type) {
        if (type.equals("dog")) {
            return new Dog();
        } else if (type.equals("cat")) {
            return new Cat();
        }
        return null;
    }
}

public class Main {
    public static void main(String[] args) {
        Animal dog = AnimalFactory.getAnimal("dog");
        dog.sound();  // 输出：Woof

        Animal cat = AnimalFactory.getAnimal("cat");
        cat.sound();  // 输出：Meow
    }
}
```

7. 使用单例模式

```java
class Singleton {
    private static Singleton instance;

    private Singleton() {
        // 私有构造方法，防止外部直接创建实例
    }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}

public class Main {
    public static void main(String[] args) {
        Singleton singleton1 = Singleton.getInstance();
        Singleton singleton2 = Singleton.getInstance();

        System.out.println(singleton1 == singleton2);  // 输出：true，说明是同一个实例
    }
}
```

8. 使用依赖注入框架（Spring）

```java
@Component
class Person {
    private String name;

    public Person(String name) {
        this.name = name;
    }

    public void greet() {
        System.out.println("Hello, " + name);
    }
}

@Configuration
@ComponentScan(basePackages = "com.example")
public class AppConfig {
}

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        Person person = context.getBean(Person.class);
        person.greet();  // 输出：Hello, Tom
    }
}
```

# 反射
反射（Reflection）是 Java 中的一个强大特性，它允许程序在运行时检查类、接口、字段、方法等的属性，并能够动态地操作这些元素。反射机制使得 Java 程序可以在运行时获取类的信息，创建对象，调用方法等，而不需要在编译时知道这些信息。  

**反射能干什么？**

1. 获取类的信息（类型、构造方法、字段、方法等）
2. 动态创建对象
3. 动态调用对象方法
4. 动态获取和修改对象属性

**如何使用反射呢？**

1. 获取 class 对象
+ 通过类的 class 属性获取：

```java
Class<?> clazz = Person.class;
```

+ 通过 getClass() 方法获取：

```java
Person person = new Person("ydg");
Class<?> clazz = person.getClass();
```

+ 通过 Class.forName() 获取：

```java
Class<?> clazz = Class.forName("Person");
```

2. 获取构造方法（Constructor）

通过反射获取类的构造方法，并可以动态地创建对象。

+ 获取无参构造方法：

```java
Constructor<?> constructor = clazz.getConstructor();
```

+ 获取带参数的构造方法：

```java
Constructor<?> constructor = clazz.getConstructor(String.class, int.class);
```

+ 创建对象：

```java
Person person = (Person) constructor.newInstance("ydg", 24);
```

3. 获取字段（Field）

反射可以获取类的字段（成员变量），并可以动态地读取和修改字段的值。

+ 获取字段：

```java
Field field = clazz.getDeclaredField("name");
```

+ 修改字段的值：

```java
field.setAccessible(true);  // 如果字段是私有的，需要先调用 setAccessible 方法
field.set(person, "ydg");  // 修改 name 字段的值为 "ydg"
```

+ 获取字段的值：

```java
String name = (String) field.get(person);
```

4. 获取方法（Method）

通过反射获取类的方法，并可以调用这些方法。

+ 获取方法：

```java
Method method = clazz.getMethod("greet");
```

+ 调用方法：

```java
method.invoke(person);  // 调用 greet() 方法
```

+ 获取带参数的方法并调用：

```java
Method methodWithParams = clazz.getMethod("greet", String.class);
methodWithParams.invoke(person, "ydg");  // 调用 greet(String name) 方法
```

5. 创建实例

通过反射，可以动态创建一个类的实例，而无需在编译时确定具体的类。

```java
Class<?> clazz = Class.forName("Person");
Constructor<?> constructor = clazz.getConstructor(String.class);
Person person = (Person) constructor.newInstance("ydg");
```

**反射有哪些应用场景？**

1. 加载数据库驱动：MySQL 的 JDBC 连接数据库时使用 class.forName()，例如：

```java
Class.forName("com.mysql.cj.jdbc.Driver");
```

2. 配置文件加载（Spring XML 动态加载管理 Bean）
3. 动态代理（AOP）
4. 注解处理（@Test、@Autowired）
5. 序列化与反序列化（Gson 和 Jackson）
6. 对象复制（深拷贝与浅拷贝）

# 注解
注解本身是一种标记，可以用来给程序的元素（类、方法、字段、参数等）添加附加信息。在 Java 中，注解以 @符号开始，后跟注解名称，通常可以包含一些元素。

注解的基本语法：

```java
@interface AnnotationName {
    // 可以定义一些元素（方法），这些元素可以有默认值，也可以没有
    String value() default "default value";
}
```

**注解可以被分为哪几类？**

1. 标记注解（Marker Annotation）

这种注解不包含任何方法，仅用于标记某个类、方法或字段等。例如 `@Override` 和 `@Entity` 等。

```java
// @Override 是一个标记注解
@Override
public String toString() {
    return "Hello";
}
```

2. 单值注解（Single-Value Annotation）

这种注解包含一个方法（元素），并且通常会通过这个元素来传递一个值。

```java
@interface MyAnnotation {
    String value();
}

// 使用
@MyAnnotation("Hello World")
public class MyClass {}
```

3. 完全注解（Full Annotation）

完全注解可以包含多个元素和属性，用于传递更多的信息。

```java
@interface MyAnnotation {
    String name();
    int age() default 25;
}

// 使用
@MyAnnotation(name = "Tom", age = 30)
public class MyClass {}
```

**如何自定义注解？**

Java 允许用户定义自己的注解，通过 `@interface` 关键字来定义自定义注解。自定义注解可以包含元素，也可以有默认值。

```java
// 定义注解
@interface MyAnnotation {
    String value() default "default";
    int number() default 0;
}

// 使用注解
@MyAnnotation(value = "Hello", number = 100)
public class MyClass {
}
```

**注解的元注解有哪些？**

元注解（Meta-Annotation）是用于描述注解本身的注解。Java 提供了四个元注解：

1. `@Retention`：指定注解的保留策略（即注解在什么情况下可用）。

用于指定注解的保留策略。它有三个值：

+ `RetentionPolicy.SOURCE`：注解只在源代码中保留，编译时丢弃（默认）。
+ `RetentionPolicy.CLASS`：注解在类文件中保留，运行时不可用。
+ `RetentionPolicy.RUNTIME`：注解在类文件中保留，运行时可以通过反射访问。

```java
@Retention(RetentionPolicy.RUNTIME)  // 运行时保留
@interface MyAnnotation {
    String value();
}
```

2. `@Target`：指定注解可以应用到的 Java 元素。

指定注解可以应用的 Java 元素类型。常用的值有：

+ `ElementType.METHOD`：表示注解可以应用于方法。
+ `ElementType.FIELD`：表示注解可以应用于字段。
+ `ElementType.TYPE`：表示注解可以应用于类、接口、枚举类型等。

```java
@Target(ElementType.METHOD)  // 只允许在方法上使用
@interface MyAnnotation {
    String value();
}
```

3. `@Documented`：指示该注解应该出现在 Javadoc 中。

表示该注解应该包含在 Javadoc 文档中。

```java
@Documented
@interface MyAnnotation {
    String value();
}
```

4. `@Inherited`：指示子类可以继承父类的注解。

表示注解可以被子类继承。如果一个类使用了 `@Inherited` 注解，子类会自动继承该注解。

```java
@Inherited
@interface MyAnnotation {
    String value();
}
```

注解的相关应用代码：

```java
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@interface MyAnnotation {
    String value() default "Hello";
}

@MyAnnotation(value = "World")
public class MyClass {}

public class AnnotationTest {
    public static void main(String[] args) throws Exception {
        // 获取类上的注解
        MyAnnotation annotation = MyClass.class.getAnnotation(MyAnnotation.class);
        System.out.println(annotation.value());  // 输出 "World"
    }
}
```

# 异常
![](https://ypycdn.nanshuo.icu/java/basic/1720683900898-1d0ce69d-4b5d-41a6-a5df-022e42f8f4c5.webp)

所有的异常类都继承自 `java.lang.Throwable` 类，`Throwable` 类分为两大类：

+ **Error**：表示 JVM 或系统级别的错误，通常不应该捕获。例如：`OutOfMemoryError`（内存溢出）、`StackOverflowError`（栈溢出）  
+ **Exception**：表示程序级别的异常，可以捕获和处理。

**Exception 异常能被分为几大类？**

1. 受检查（非运行时）异常（Checked Exception）：编译期间就必须处理的异常，强制要求捕获或声明。例如：
+ `IOException`（输入/输出异常）
+ `SQLException`（SQL 异常）
+ `ClassNotFoundException`（类找不到异常）
2. 非受检查（运行时）异常（UnChecked Exception）：在程序运行期间抛出的异常，不强制捕获或声明。例如：
+ `NullPointerException`（空指针异常）
+ `ArrayIndexOutOfBoundsException`（数组索引越界异常）
+ `ArithmeticException`（算术异常）
+ `ClassCastException`（类型转换异常）

**你能说说异常处理的方式有哪些吗？**

Java 提供了 `try-catch-finally` 语句来捕获和处理异常。

1. try-catch 块

`try-catch` 用于捕获异常并处理它，避免程序中断。

```java
try {
    // 可能抛出异常的代码
    int result = 10 / 0;  // 这里会抛出 ArithmeticException
} catch (ArithmeticException e) {
    // 异常处理代码
    System.out.println("发生了算术异常: " + e.getMessage());
}
```

+ `try` 块用于包含可能抛出异常的代码。
+ `catch` 块用于捕获并处理特定类型的异常。
2. 多个 catch 块

你可以在一个 `try` 语句后面使用多个 `catch` 块来捕获不同类型的异常。

```java
try {
    int[] arr = new int[5];
    arr[10] = 20;  // 会抛出 ArrayIndexOutOfBoundsException
} catch (ArithmeticException e) {
    System.out.println("算术异常发生");
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("数组索引越界异常发生");
}
```

3. try-catch-finally 块

`finally` 块用于无论是否发生异常都会执行的代码。通常用于释放资源（如关闭文件、数据库连接等）。

```java
try {
    // 可能抛出异常的代码
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("算术异常发生");
} finally {
    // 无论异常是否发生，这部分代码都会执行
    System.out.println("清理资源");
}
```

4. throws 声明异常

如果一个方法可能抛出受检查异常（如 `IOException`），则必须在方法签名中使用 `throws` 声明该异常。

```java
public void readFile() throws IOException {
    FileReader file = new FileReader("file.txt");  // 可能抛出 FileNotFoundException
    BufferedReader fileInput = new BufferedReader(file);
    throw new IOException("示例异常");
}
```

+ `throws` 声明该方法可能会抛出的异常类型。
5. throw 关键字

`throw` 关键字用于显式抛出一个异常。

```java
public void checkAge(int age) {
    if (age < 18) {
        throw new IllegalArgumentException("年龄不能小于18岁");
    }
}
```

**如何自定义异常？**

Java 允许开发者创建自定义异常类。自定义异常通常是继承自 `Exception` 或 `RuntimeException`。  

# String、StringBuffer 和 StringBuilder
| 特性           | `String`                           | `StringBuffer`                      | `StringBuilder`                        |
| -------------- | ---------------------------------- | ----------------------------------- | -------------------------------------- |
| **可变性**     | 不可变                             | 可变                                | 可变                                   |
| **线程安全性** | 线程安全（不可变性导致）           | 线程安全（方法是同步的）            | 非线程安全（没有同步机制）             |
| **性能**       | 性能较差，尤其是进行大量拼接时     | 比 `String`性能好，适用于多线程环境 | 性能最好，适用于单线程环境             |
| **主要用途**   | 常用于字符串常量，较少修改的字符串 | 用于多线程环境下的字符串拼接        | 用于单线程环境下的字符串拼接           |
| **适用场景**   | 常量、字符串比较、少量拼接         | 多线程环境中的字符串操作            | 高效的字符串拼接操作，单线程环境下使用 |


# == 和 equals
| 特性             | `==`                                                   | `equals()`                              |
| ---------------- | ------------------------------------------------------ | --------------------------------------- |
| **比较内容**     | 比较对象的引用（内存地址），适用于基本数据类型的值比较 | 比较对象的内容，适用于对象的内容比较    |
| **适用场景**     | 比较基本数据类型、判断对象是否为同一实例               | 比较对象的内容是否相等                  |
| **默认实现**     | 默认比较对象引用地址                                   | 默认实现比较引用地址（继承自 `Object`） |
| **是否需要重写** | 不需要重写                                             | 对于自定义类通常需要重写                |
| **线程安全**     | 无                                                     | 无                                      |


# Java8 新特性
1. Lambda 表达式

一种匿名函数，简化代码，允许将函数作为参数传递。 语法：(parameters) -> expression  

```java
// 传统方式
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
for (String name : names) {
    System.out.println(name);
}

// 使用 Lambda 表达式
names.forEach(name -> System.out.println(name));
```

1. Stream API

以声明性的方式处理集合数据，支持通过管道操作（如过滤、映射、排序等）来处理数据，是一个支持函数式编程风格的 API，能够有效地处理大量数据。  

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
names.stream()
     .filter(name -> name.startsWith("A")) // 过滤
     .map(String::toUpperCase) // 映射
     .forEach(System.out::println); // 遍历输出
```

3. 默认方法（Default Method）

允许接口中定义默认方法（使用 `default` 关键字），这样可以在不破坏接口实现的情况下为接口提供实现。  

```java
// 自定义接口
interface MyInterface {
    // 默认方法
    default void greet() {
        System.out.println("Hello from MyInterface!");
    }
}

// 实现自定义接口
class MyClass implements MyInterface {
    // 可以选择重写默认方法
}

// 测试类
public class Test {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.greet();  // 调用默认方法
    }
}
```

4. Optional 类

`Optional` 类是为了避免 `NullPointerException`（空指针异常）而设计的，它是一个容器对象，可以包含一个非空的对象，或者为空。`Optional` 提供了许多方法来检查和操作其中的值，避免了频繁的空值判断。

```java
Optional<String> optionalName = Optional.ofNullable(getName());
optionalName.ifPresent(name -> System.out.println("Name: " + name));
```

5. 新日期和时间 API（java.time 包）

提供全新的日期和时间处理类，解决旧 API 的缺陷。

+ `LocalDate`：表示日期（年、月、日），不包含时间。
+ `LocalTime`：表示时间（时、分、秒），不包含日期。
+ `LocalDateTime`：表示日期和时间。
+ `ZonedDateTime`：表示带时区的日期和时间。

```java
LocalDate date = LocalDate.now();
System.out.println(date);  // 输出当前日期

LocalDateTime dateTime = LocalDateTime.now();
System.out.println(dateTime);  // 输出当前日期和时间

ZonedDateTime zonedDateTime = ZonedDateTime.now();
System.out.println(zonedDateTime);  // 输出带时区的当前日期和时间
```

1. 方法引用（Method References）

方法引用是 Lambda 表达式的简化形式，允许直接引用已有方法，而不需要在 Lambda 表达式中编写完整的方法实现。方法引用更简洁、可读性更高。语法：ClassName::methodName

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
names.forEach(System.out::println);  // 方法引用，等同于 name -> System.out.println(name)
```

7. Collectors 工具类

用于 Stream 的终端操作，将流中的元素汇总为集合或其他形式。

+ `Collectors.toList()`：将流中的元素收集到一个 `List` 中。
+ `Collectors.toSet()`：将流中的元素收集到一个 `Set` 中。
+ `Collectors.joining()`：将流中的元素连接成一个字符串。

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
String result = names.stream().collect(Collectors.joining(", "));
System.out.println(result);  // 输出 "Alice, Bob, Charlie"
```

1. CompletableFuture

提供更强大的异步编程能力，支持流式调用和组合多个异步任务。

```java
CompletableFuture.supplyAsync(() -> "Hello")
                 .thenApply(s -> s + " World")
                 .thenAccept(System.out::println);
```

9. 函数式接口（@FunctionInterface）

用于标记一个接口为函数式接口。函数式接口是只包含一个抽象方法的接口，Lambda 表达式可以实例化该接口。

```java
@FunctionalInterface
interface MyFunctionalInterface {
    void execute();
}
```

10. Stream 中的并行操作

使用 `parallelStream()` 方法可以轻松地并行处理集合中的数据，充分利用多核处理器的能力。  

![](https://ypycdn.nanshuo.icu/java/basic/1716365522454-4b56a07e-9b54-4cbb-9832-26b099fc35cd.png)

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.parallelStream()
                 .mapToInt(Integer::intValue)
                 .sum();
System.out.println(sum);  // 输出 15
```

# BIO、NIO 和 AIO
| 特性                                                 | **BIO**                                                  | **NIO**                                                      | **AIO**                                                      |
| ---------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **全称** | Blocking I/O | Non-blocking I/O | Asynchronous I/O |
| **模式**                                             | 阻塞 I/O                                                 | 非阻塞 I/O                                                   | 异步 I/O                                                     |
| **线程模型**                                         | 每个连接一个线程                                         | 一个线程处理多个连接                                         | 操作系统通知应用程序回调，线程不被阻塞                       |
| **连接数与性能**                                     | 不适合高并发，线程数与连接数成正比                       | 支持高并发，线程数远少于连接数                               | 非常适合高并发，线程数非常少                                 |
| **处理方式**                                         | 阻塞等待数据的到来                                       | 非阻塞，轮询检测数据是否准备好                               | 完全异步，通过回调通知处理完成                               |
| **编程复杂度**                                       | 简单，容易理解                                           | 相对复杂，需要手动管理选择器和通道的状态                     | 编程复杂度较高，需要使用回调机制                             |
| **适用场景**                                         | 连接数少，流量小                                         | 高并发场景，尤其是需要频繁 I/O 操作的场景                    | 高并发、大量 I/O 操作，且对性能有较高要求的场景              |
| **操作系统依赖**                                     | 无依赖                                                   | 无依赖                                                       | 依赖于操作系统对异步 I/O 的支持                              |


