---
title: 设计模式-创建型模式（5种）
date: 2024-05-17 17:40:51
cover: https://ypycdn.nanshuo.icu/posts/shejimoshi/cjxmsfm.png
excerpt: 本文介绍了原型模式、工厂模式、抽象工厂模式、建造者模式和单例模式这五种创建型设计模式。每种模式都有其适用场景、优缺点和代码实现示例，帮助读者更好地理解和应用这些模式。
#permalink: /archives/hr8gqTEH
isOriginal: true
category:
 - 设计模式
tag: 
 - 创建型模式
 - 原型模式
 - 工厂模式
 - 抽象工厂模式
 - 建造者模式
 - 单例模式
---

**记忆口诀**：创原工抽建单（**创员工抽检单**）
解释：创（创建型模式）原（原型模式）工（工厂模式）抽（抽象工厂模式）建（建造者模式）单（单例模式）、

# 原型模式

原型模式（Prototype）是一种创建型设计模式，其核心思想是**通过复制已有对象来创建新对象**，而**不是通过实例化类来创建**。

## 使用场景

原型模式**适用于**那些创建过程**开销较大、对象相似度较高**的情况。在原型模式中，通过**克隆（复制）**已有对象来生成新的对象，而不是从头开始创建。
在使用原型模式时，通常需要有一个原型对象作为基础，然后通过复制这个原型对象来创建新的对象。这个原型对象可以是已有的一个实例，也可以是一个构建好的模板。当需要创建新对象时，只需对原型对象进行克隆，即可得到一个新的对象，然后再根据需要调整新对象的属性。

## 模式优缺点

原型模式的优点包括：

1. 减少了对象的创建开销，特别是当对象的创建过程比较复杂或耗时时，使用原型模式可以节省时间和资源。
2. 可以动态地添加或删除对象的属性，因为克隆操作并不依赖于类的结构。
3. 可以更灵活地生成对象，因为可以根据需要克隆不同的原型对象。

然而，原型模式也存在一些缺点，例如：

1. 需要对对象进行深度复制，否则可能会出现引用问题。
2. 如果对象的构造过程中包含了一些不支持复制的资源或状态，那么使用原型模式可能会导致意料之外的结果。

## 代码实现（Java）

在下面的示例中，**ConcretePrototype** 类实现了 **Prototype** 接口，其中包含一个 **clone()** 方法用于克隆对象。在客户端代码中，首先创建一个原型对象，然后通过调用 **clone()** 方法来克隆该对象。最后，修改克隆对象的属性，以验证对象的独立性。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/yuanxingmoshi.svg)

```java
// 定义一个原型接口
interface Prototype {
    Prototype clone();
}

// 具体原型类
class ConcretePrototype implements Prototype {
    private int id;
    private String name;

    public ConcretePrototype(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // 实现克隆方法
    @Override
    public Prototype clone() {
        return new ConcretePrototype(id, name); // 这里是浅拷贝，如果需要深拷贝，需要自行实现
    }

    // 获取原型对象的信息
    public String getInfo() {
        return "ConcretePrototype [id=" + id + ", name=" + name + "]";
    }
}

// 客户端测试
public class Client {
    public static void main(String[] args) {
        // 创建原型对象
        ConcretePrototype prototype = new ConcretePrototype(1, "Prototype 1");
        System.out.println("Original Object: " + prototype.getInfo());

        // 克隆原型对象
        ConcretePrototype clonedPrototype = (ConcretePrototype) prototype.clone();
        System.out.println("Cloned Object: " + clonedPrototype.getInfo());

        // 修改克隆对象的属性
        clonedPrototype.name = "Prototype 1 Cloned";
        System.out.println("Modified Cloned Object: " + clonedPrototype.getInfo());
    }
}
```

输出结果：
Original Object: ConcretePrototype [id=1, name=Prototype 1]
Cloned Object: ConcretePrototype [id=1, name=Prototype 1]
Modified Cloned Object: ConcretePrototype [id=1, name=Prototype 1 Cloned]

## 更多参考资料

[原型模式 | 菜鸟教程](https://www.runoob.com/design-pattern/prototype-pattern.html)

# 工厂模式

工厂模式（Factory Pattern）是一种创建型设计模式，其核心思想是**定义一个用于创建对象的接口**，但由**子类决定**要**实例化**的类是哪一个。工厂模式让一个类的实例化**延迟到其子类**。

工厂模式主要包含以下几种形式：

1. **简单工厂模式（Simple Factory Pattern）**：简单工厂模式是工厂模式的一种简单形式，在简单工厂模式中，创建对象的逻辑被封装在一个工厂类中，客户端通过工厂类来创建对象，而不是直接通过构造函数来创建。简单工厂模式通常包含一个工厂类和多个产品类。
2. **工厂方法模式（Factory Method Pattern）**：工厂方法模式定义了一个创建对象的接口，但将实际的创建工作延迟到子类中。每个子类都可以实例化具体的对象，从而实现了对象的创建的多态性。
3. **抽象工厂模式（Abstract Factory Pattern）**：抽象工厂模式提供了一种创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。通过使用工厂接口和具体的工厂实现类，客户端可以创建一系列相关的对象。

## 使用场景

工厂模式是一种非常常用的设计模式，特别适用于需要**动态创建对象**、**对象创建的过程复杂**或者**对象的使用与创建耦合度较高的情况。**

## 模式优缺点

工厂模式的优点包括：

- 将对象的创建和使用分离，使系统更加灵活，易于维护和扩展。
- 隐藏了对象的创建细节，使客户端代码更加简洁，降低了耦合性。
- 可以轻松地扩展和修改工厂类，以满足不同的需求。

然而，工厂模式也存在一些缺点，例如：

- 增加了系统的复杂度，引入了额外的类和接口。
- 当类的创建逻辑比较复杂时，可能需要创建大量的工厂类和接口，使得代码结构变得复杂。

## 代码实现（Java）

在下面的示例中，有一个产品接口 **Product** 和两个具体产品类 **ConcreteProductA** 和 **ConcreteProductB**。工厂接口 **Factory** 定义了一个创建产品的方法 **createProduct()**。具体工厂类 **ConcreteFactoryA** 和 **ConcreteFactoryB** 分别实现了工厂接口，并在其方法中创建了具体的产品对象。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/gongchangmoshi.svg)

```java
// 定义产品接口
interface Product {
    void operation();
}

// 具体产品类 A
class ConcreteProductA implements Product {
    @Override
    public void operation() {
        System.out.println("ConcreteProductA operation");
    }
}

// 具体产品类 B
class ConcreteProductB implements Product {
    @Override
    public void operation() {
        System.out.println("ConcreteProductB operation");
    }
}

// 工厂接口
interface Factory {
    Product createProduct();
}

// 具体工厂类 A
class ConcreteFactoryA implements Factory {
    @Override
    public Product createProduct() {
        return new ConcreteProductA();
    }
}

// 具体工厂类 B
class ConcreteFactoryB implements Factory {
    @Override
    public Product createProduct() {
        return new ConcreteProductB();
    }
}

// 客户端代码
public class Client {
    public static void main(String[] args) {
        // 使用具体工厂 A 创建产品 A
        Factory factoryA = new ConcreteFactoryA();
        Product productA = factoryA.createProduct();
        productA.operation();

        // 使用具体工厂 B 创建产品 B
        Factory factoryB = new ConcreteFactoryB();
        Product productB = factoryB.createProduct();
        productB.operation();
    }
}
```

输出结果：
ConcreteProductA operation
ConcreteProductB operation

## 更多参考资料

[工厂模式 | 菜鸟教程](https://www.runoob.com/design-pattern/factory-pattern.html)

# 抽象工厂模式

抽象工厂模式（Abstract Factory Pattern）是一种创建型设计模式，它提供了一种封装一组具有共同主题的单个工厂的方式，而**无需指定其具体类**。它是工厂方法模式的扩展，用于创建一组相关或依赖的对象。
抽象工厂模式包含以下几个关键角色：

1. **抽象工厂（Abstract Factory）**：声明了一组创建抽象产品对象的方法，每个方法对应一个具体产品对象的创建方法。
2. **具体工厂（Concrete Factory）**：实现了抽象工厂接口，负责创建一组具体的产品对象。
3. **抽象产品（Abstract Product）**：声明了产品的接口，描述了产品的通用行为。
4. **具体产品（Concrete Product）**：实现了抽象产品接口，是工厂创建的具体产品对象。

抽象工厂模式通过引入抽象层，使得客户端可以使用抽象接口来创建一组相关的产品对象，而无需关心具体的产品实现细节，从而实现了客户端与具体产品类的解耦。

## 使用场景

抽象工厂模式适用于需要创建**一组相关或依赖的产品对象**、产品族需要**跨平台支持**、系统需要**支持产品的扩展**和**产品变化频繁**的场景。

## 模式优缺点

优点包括：

- **将对象的创建和使用分离**：抽象工厂模式将对象的创建过程与使用过程分离，客户端代码只需要关心抽象工厂接口和抽象产品接口，而不需要关心具体的产品对象的创建过程，从而使系统更加灵活，易于维护和扩展。
- **隐藏了对象的创建细节**：抽象工厂模式隐藏了具体产品对象的创建细节，使客户端代码更加简洁，降低了代码的耦合性，提高了代码的可读性和可维护性。
- **支持产品族**：抽象工厂模式支持创建一组相关或依赖的产品对象，能够保证产品族内的产品对象之间的一致性，从而提高了系统的稳定性和可靠性。

缺点包括：

- **增加了系统的复杂度**：抽象工厂模式引入了额外的抽象层，增加了系统的复杂度，可能会导致类的数量增加，增加了系统的维护成本。
- **扩展困难**：如果需要增加新的产品等级结构（即新增产品族），可能需要修改抽象工厂接口及其所有的子类，这会导致代码的修改范围增大，扩展困难。

## 代码实现（Java）

在这个示例中，有两个产品族（ProductA 和 ProductB），每个产品族包含两个产品（A1、A2 和 B1、B2）。抽象工厂 **AbstractFactory** 定义了创建产品族的接口，具体工厂 **ConcreteFactory1** 和 **ConcreteFactory2** 实现了 **AbstractFactory** 接口，并分别创建了产品族 1 和 2。客户端代码根据需要选择具体的工厂来创建产品，从而创建出产品族的产品。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/chouxianggongchangmoshi.svg)

```java
// 抽象产品接口
interface ProductA {
    void operationA();
}

// 具体产品 A1
class ConcreteProductA1 implements ProductA {
    @Override
    public void operationA() {
        System.out.println("ConcreteProductA1 operationA");
    }
}

// 具体产品 A2
class ConcreteProductA2 implements ProductA {
    @Override
    public void operationA() {
        System.out.println("ConcreteProductA2 operationA");
    }
}

// 抽象产品接口
interface ProductB {
    void operationB();
}

// 具体产品 B1
class ConcreteProductB1 implements ProductB {
    @Override
    public void operationB() {
        System.out.println("ConcreteProductB1 operationB");
    }
}

// 具体产品 B2
class ConcreteProductB2 implements ProductB {
    @Override
    public void operationB() {
        System.out.println("ConcreteProductB2 operationB");
    }
}

// 抽象工厂接口
interface AbstractFactory {
    ProductA createProductA();
    ProductB createProductB();
}

// 具体工厂 1
class ConcreteFactory1 implements AbstractFactory {
    @Override
    public ProductA createProductA() {
        return new ConcreteProductA1();
    }

    @Override
    public ProductB createProductB() {
        return new ConcreteProductB1();
    }
}

// 具体工厂 2
class ConcreteFactory2 implements AbstractFactory {
    @Override
    public ProductA createProductA() {
        return new ConcreteProductA2();
    }

    @Override
    public ProductB createProductB() {
        return new ConcreteProductB2();
    }
}

// 客户端代码
public class Client {
    public static void main(String[] args) {
        // 使用具体工厂 1 创建产品族 1
        AbstractFactory factory1 = new ConcreteFactory1();
        ProductA productA1 = factory1.createProductA();
        ProductB productB1 = factory1.createProductB();
        productA1.operationA();
        productB1.operationB();

        // 使用具体工厂 2 创建产品族 2
        AbstractFactory factory2 = new ConcreteFactory2();
        ProductA productA2 = factory2.createProductA();
        ProductB productB2 = factory2.createProductB();
        productA2.operationA();
        productB2.operationB();
    }
}
```

结果输出：
ConcreteProductA1 operationA
ConcreteProductB1 operationB
ConcreteProductA2 operationA
ConcreteProductB2 operationB

## 更多参考资料

[抽象工厂模式 | 菜鸟教程](https://www.runoob.com/design-pattern/abstract-factory-pattern.html)

# 建造者模式

建造者模式（Builder Pattern）是一种创建型设计模式，它允许你**创建复杂对象的不同部分**，并将它们**组装成最终对象**。通过将对象的构建过程**拆分成多个步骤**，建造者模式可以使你更加灵活地创建对象，并且可以控制对象的构建过程。

建造者模式通常包含以下几个角色：

1. **产品（Product）**：表示最终构建的复杂对象。产品类通常包含多个组成部分，这些组成部分由具体的建造者负责构建。
2. **抽象建造者（Builder）**：定义了构建产品各个部分的抽象方法，具体建造者将实现这些方法来构建产品的具体组成部分。
3. **具体建造者（Concrete Builder）**：实现了抽象建造者接口，负责实际构建产品的具体部分，并提供一个方法返回最终构建的产品。
4. **指挥者（Director）**：负责使用建造者对象构建产品。指挥者根据客户端的要求调用具体建造者的方法来构建产品，并最终返回构建好的产品。

建造者模式的关键在于将一个复杂对象的构建过程和其表示分离开来，使得同样的构建过程可以创建不同的表示。这种分离使得代码更易于维护和扩展，并且可以避免构造方法参数的爆炸性增长。

## 使用场景

造者模式通常在以下情况下使用：

- 当需要创建的对象具有**复杂的内部结构**或者**构建过程比较复杂**时。
- 当希望将**构建过程和表示分离开**来，以便可以更灵活地**控制对象的构建**。
- 当希望通过**相同的构建过程创建不同的表示时**，可以使用不同的具体建造者来构建不同的表示。

通过使用建造者模式，可以使得客户端代码更加简洁、灵活，并且可以降低代码的耦合度。

## 模式优缺点

**优点：**

- 分离构建过程和表示，使得构建过程更加灵活，可以构建不同的表示。
- 可以更好地控制构建过程，隐藏具体构建细节。
- 代码复用性高，可以在不同的构建过程中重复使用相同的建造者。

**缺点：**

- 如果产品的属性较少，建造者模式可能会导致代码冗余。
- 建造者模式增加了系统的类和对象数量。

## 代码实现（Java）

在下面的示例中，产品类 **Product** 包含了多个部件，具体建造者 **ConcreteBuilder** 实现了抽象建造者接口 **Builder** 中定义的构建各个部件的方法，指挥者 **Director** 使用具体建造者来构建产品对象。客户端代码通过指挥者来创建产品对象，并调用产品的展示方法来展示产品的各个部件。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/jianzaozhemoshi.svg)

```java
// 产品类
class Product {
    private String partA;
    private String partB;
    private String partC;

    public void setPartA(String partA) {
        this.partA = partA;
    }

    public void setPartB(String partB) {
        this.partB = partB;
    }

    public void setPartC(String partC) {
        this.partC = partC;
    }

    public void show() {
        System.out.println("Product parts: " + partA + ", " + partB + ", " + partC);
    }
}

// 抽象建造者
interface Builder {
    void buildPartA();
    void buildPartB();
    void buildPartC();
    Product getResult();
}

// 具体建造者
class ConcreteBuilder implements Builder {
    private Product product = new Product();

    @Override
    public void buildPartA() {
        product.setPartA("PartA");
    }

    @Override
    public void buildPartB() {
        product.setPartB("PartB");
    }

    @Override
    public void buildPartC() {
        product.setPartC("PartC");
    }

    @Override
    public Product getResult() {
        return product;
    }
}

// 指挥者
class Director {
    private Builder builder;

    public Director(Builder builder) {
        this.builder = builder;
    }

    public Product construct() {
        builder.buildPartA();
        builder.buildPartB();
        builder.buildPartC();
        return builder.getResult();
    }
}

// 客户端
public class Client {
    public static void main(String[] args) {
        Builder builder = new ConcreteBuilder();
        Director director = new Director(builder);
        Product product = director.construct();
        product.show();
    }
}
```

输出结果：
Product parts: PartA, PartB, PartC

## 更多参考资料

[建造者模式 | 菜鸟教程](https://www.runoob.com/design-pattern/builder-pattern.html)

# 单例模式

单例模式（Singleton Pattern）是一种创建型设计模式，其目的是**确保某个类只有一个实例**，并提供**全局访问点**。这意味着无论何时调用该类的构造函数，它**始终返回相同的实例**。
在单例模式中，有两种常见的实现方式：**懒汉式和饿汉式**。

1. **懒汉式单例**：在第一次被调用时才会创建实例。如果实例不存在，那么会创建一个新的实例并返回。懒汉式单例通常是在多线程环境下使用，因为它是线程安全的。
2. **饿汉式单例**：在类加载时就创建了实例。饿汉式单例的优点是简单易于实现，但是可能会增加启动时间，因为实例是在类加载时就创建的。

单例模式的实现方式还有很多种，如使用**静态变量、双重检查锁、枚举**等。选择哪种方式取决于具体的需求和场景。

## 使用场景

单例模式通常在以下情况下使用：

- 当程序中的某个类只需要一个实例时，例如配置管理器、日志记录器等。
- 当程序中的某个类需要频繁创建和销毁实例时，为了提高性能和节省资源，可以使用单例模式。

## 模式优缺点

单例模式的优点包括：

- **全局唯一性**：确保某个类只有一个实例，全局唯一，可以避免重复创建对象，节省内存和系统资源。
- **延迟实例化**：懒汉式单例在第一次被调用时才会创建实例，避免了在程序启动时就创建实例，节省了系统资源。

单例模式的缺点包括：

- **可能引起性能问题**：在高并发环境下，使用懒汉式单例可能会引起性能问题，因为每次获取实例都需要加锁，影响性能。
- **可能引起内存泄漏**：在某些情况下，单例模式可能会引起内存泄漏，例如单例持有外部资源，并且没有正确释放资源时。

## 代码实现（Java）

![](https://ypycdn.nanshuo.icu/posts/shejimoshi/danlimoshi.svg)

```java
// 创建一个 Singleton 类
public class SingleObject {
 
   //创建 SingleObject 的一个对象
   private static SingleObject instance = new SingleObject();
 
   //让构造函数为 private，这样该类就不会被实例化
   private SingleObject(){}
 
   //获取唯一可用的对象
   public static SingleObject getInstance(){
      return instance;
   }
 
   public void showMessage(){
      System.out.println("Hello World!");
   }
}

// 从 singleton 类获取唯一的对象
public class SingletonPatternDemo {
   public static void main(String[] args) {
 
      //不合法的构造函数
      //编译时错误：构造函数 SingleObject() 是不可见的
      //SingleObject object = new SingleObject();
 
      //获取唯一可用的对象
      SingleObject object = SingleObject.getInstance();
 
      //显示消息
      object.showMessage();
   }
}
```

输出结果：
Hello World!

懒汉式单例

```java
public class LazySingleton {
    private static LazySingleton instance;

    private LazySingleton() {}

    public static synchronized LazySingleton getInstance() {
        if (instance == null) {
            instance = new LazySingleton();
        }
        return instance;
    }
}
```

饿汉式单例

```java
public class EagerSingleton {
    private static final EagerSingleton instance = new EagerSingleton();

    private EagerSingleton() {}

    public static EagerSingleton getInstance() {
        return instance;
    }
}
```

## 更多参考资料

[单例模式 | 菜鸟教程](https://www.runoob.com/design-pattern/singleton-pattern.html)
