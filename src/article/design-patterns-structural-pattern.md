---
title: 设计模式-结构型模式（7种）
date: 2024-05-17 19:19:55
cover: https://ypycdn.nanshuo.icu/posts/shejimoshi/jgxmsfm.jfif
excerpt: 本文摘要：本文介绍了结构型模式中的享元、桥接、装饰器、适配器、代理、外观和组合模式。每种模式都有其优缺点和适用场景，并通过 Java 代码示例进行了演示。
#permalink: /archives/AHI1Hk2N
isOriginal: true
category:
 - 设计模式
tag: 
 - 结构型模式
 - 享元模式
 - 桥接模式
 - 装饰器模式
 - 适配器模式
 - 代理模式
 - 外观模式
 - 组合模式
---

**记忆口诀**：结享桥装，适代外组（**姐想乔装，试戴崴足**）
解释：结（结构型模式）享（享元模式）桥（桥接模式）装（装饰器模式），适（适配器模式）代（代理模式）外（外观模式）组（组合模式）

# 享元模式

享元模式（Flyweight Pattern）是一种结构型设计模式，旨在**通过共享对象来减少内存消耗和提高性能**，特别**适用于大量细粒度对象的场景**。享元模式的核心思想是**避免创建大量相似的对象，通过共享来节省资源**。

享元模式的主要组成部分包括：

1. **Flyweight（享元接口）**：定义享元对象的接口，通常会声明操作方法。这些方法可以访问享元对象的内部状态（共享部分）和外部状态（不共享部分）。
2. **ConcreteFlyweight（具体享元类）**：实现享元接口，并为内部状态（即可以共享的部分）增加存储空间。
3. **UnsharedConcreteFlyweight（非共享享元类）**：指那些不被共享的具体享元类，通常是组合享元对象的子类。
4. **FlyweightFactory（享元工厂）**：负责创建和管理享元对象，确保合理地共享享元实例。工厂根据客户端提供的键（Key）来查找已有的享元对象，如果存在则返回已存在的实例，如果不存在则创建一个新的享元对象并返回。
5. **Client（客户端）**：维持对所有享元对象的引用，并且在需要时请求享元工厂来创建或返回享元对象。

## 模式的优缺点

优点：

1. **减少内存消耗**：通过共享相同的对象，享元模式显著减少了程序中的内存使用。
2. **提高性能**：由于减少了对象的创建，享元模式可以提高系统的性能，特别是在大量相似对象的场景中。

缺点：

1. **复杂性增加**：为了实现共享，可能需要维护一个较为复杂的享元对象管理机制。
2. **非共享部分管理**：需要对共享部分和非共享部分进行区分和管理，这可能增加编码的复杂性。

## 适用场景

享元模式适用于以下场景：

1. 系统中**存在大量相似对象**，导致内存开销过大。
2. 对象的大多数状态**可以外部化**，或者说可以通过外部状态来**区别不同对象**。
3. 应用程序**不依赖于对象标识的唯一性**。

## 示例代码（Java）

以下是一个简单的享元模式示例，用于字符对象的管理：
在这个示例中，`FlyweightFactory` 确保相同的字符只会被创建一次，并且通过共享实例来减少内存消耗。客户端可以请求享元对象，并通过外部状态来进行具体的操作。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/xyms.svg)

```java
// Flyweight接口
interface Flyweight {
    void operation(String extrinsicState);
}

// 具体享元类
class ConcreteFlyweight implements Flyweight {
    private final String intrinsicState;

    public ConcreteFlyweight(String intrinsicState) {
        this.intrinsicState = intrinsicState;
    }

    @Override
    public void operation(String extrinsicState) {
        System.out.println("Intrinsic State: " + intrinsicState + ", Extrinsic State: " + extrinsicState);
    }
}

// 享元工厂
class FlyweightFactory {
    private final Map<String, Flyweight> flyweights = new HashMap<>();

    public Flyweight getFlyweight(String key) {
        if (!flyweights.containsKey(key)) {
            flyweights.put(key, new ConcreteFlyweight(key));
        }
        return flyweights.get(key);
    }
}

// 客户端
public class Client {
    public static void main(String[] args) {
        FlyweightFactory factory = new FlyweightFactory();
      
        Flyweight flyweight1 = factory.getFlyweight("A");
        flyweight1.operation("First Call");

        Flyweight flyweight2 = factory.getFlyweight("B");
        flyweight2.operation("Second Call");

        Flyweight flyweight3 = factory.getFlyweight("A");
        flyweight3.operation("Third Call");
    }
}
```

输出结果

> Intrinsic State: A, Extrinsic State: First Call
> Intrinsic State: B, Extrinsic State: Second Call
> Intrinsic State: A, Extrinsic State: Third Call

## 更多参考资料

[享元模式 | 菜鸟教程](https://www.runoob.com/design-pattern/flyweight-pattern.html)

# 桥接模式

桥接模式（Bridge Pattern）是一种结构型设计模式，它通过将**抽象部分与它的实现部分分离**，使它们可以独立地变化。这种模式的核心思想是“**分离抽象接口及其实现部分**”，从而解耦两者，使它们可以独立变化。
桥接模式主要包含以下几个部分：

1. **Abstraction（抽象部分）**：定义抽象接口，并保存一个对实现部分 `Implementor` 对象的引用。
2. **RefinedAbstraction（修正抽象部分）**：扩展抽象接口，通常会调用 `Implementor` 中定义的操作。
3. **Implementor（实现部分接口）**：定义实现部分的接口，该接口不一定要与抽象接口完全一致。通常，Implementor 接口提供基本操作，ConcreteImplementor 完成这些操作的具体实现。
4. **ConcreteImplementor（具体实现部分）**：具体实现 `Implementor` 接口。

## 模式的优缺点

**优点：**

1. **解耦合**: 桥接模式可以将抽象部分和实现部分分开，使它们可以独立地变化。这意味着对其中一个部分的修改不会影响到另一个部分，从而降低了系统的耦合度，提高了系统的灵活性。
2. **可扩展性**: 桥接模式通过组合的方式，使得抽象部分和实现部分可以独立地扩展。这意味着可以很容易地添加新的抽象部分或实现部分，而不会影响到现有的代码结构。
3. **符合开闭原则**: 桥接模式通过抽象部分和实现部分的分离，使得系统对于扩展是开放的，对于修改是关闭的。这符合开闭原则，即对于系统的修改应该是通过扩展来实现，而不是通过修改现有的代码来实现。
4. **更好的复用性**: 桥接模式可以将抽象部分和实现部分组合起来，形成不同的功能组合。这样可以更好地复用已有的代码，提高代码的复用性。

**缺点：**

1. **增加系统复杂度**: 桥接模式引入了抽象部分和实现部分之间的额外的层级，使得系统的结构变得更加复杂。这会增加代码的阅读和理解难度，降低系统的可维护性。
2. **可能导致过度设计**: 如果不加以适当的限制，桥接模式可能导致过度设计，使得系统变得过于灵活和复杂。这会增加开发和维护的成本，降低系统的性能。
3. **需要对抽象和实现进行精心设计**: 桥接模式需要对抽象部分和实现部分进行精心设计，以确保它们可以独立地变化和扩展。这需要花费额外的时间和精力来进行设计和测试。

## 适用场景

- 需要从**多个维度来扩展一个系统**。
- **抽象和实现部分**需要**独立扩展**，而不会相互影响。
- **不希望**在抽象和实现部分之间**有固定的绑定关系**。

## 示例代码（Java）

下面是一个简单的桥接模式的示例代码，展示了如何使用该模式来分离抽象和实现部分：
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/qjms.svg)

```java
// 抽象部分接口
abstract class Abstraction {
    protected Implementor implementor;

    protected Abstraction(Implementor implementor) {
        this.implementor = implementor;
    }

    public abstract void operation();
}

// 修正抽象部分
class RefinedAbstraction extends Abstraction {
    public RefinedAbstraction(Implementor implementor) {
        super(implementor);
    }

    @Override
    public void operation() {
        implementor.operationImpl();
    }
}

// 实现部分接口
interface Implementor {
    void operationImpl();
}

// 具体实现部分A
class ConcreteImplementorA implements Implementor {
    @Override
    public void operationImpl() {
        System.out.println("ConcreteImplementorA operation");
    }
}

// 具体实现部分B
class ConcreteImplementorB implements Implementor {
    @Override
    public void operationImpl() {
        System.out.println("ConcreteImplementorB operation");
    }
}

// 客户端
public class Client {
    public static void main(String[] args) {
        Implementor implementorA = new ConcreteImplementorA();
        Abstraction abstractionA = new RefinedAbstraction(implementorA);
        abstractionA.operation();  // 输出: ConcreteImplementorA operation

        Implementor implementorB = new ConcreteImplementorB();
        Abstraction abstractionB = new RefinedAbstraction(implementorB);
        abstractionB.operation();  // 输出: ConcreteImplementorB operation
    }
}
```

输出结果：

> ConcreteImplementorA operation
> ConcreteImplementorB operation

## 更多参考资料

[桥接模式 | 菜鸟教程](https://www.runoob.com/design-pattern/bridge-pattern.html)

# 装饰器模式

装饰器模式（Decorator Pattern）是一种结构型设计模式，它允许向一个**现有的对象添加新的功能**，同时又**不改变其结构**。装饰器模式是通过创建一个装饰器类（**装饰者**），用来**包装原有的类**，并在保持原类接口不变的情况下，**提供额外的功能**。装饰器模式特别适合需要动态地**添加或撤销**职责的场景。

关键组成部分：

1. **组件接口（Component）**：定义一个对象接口，可以给这些对象动态地添加职责。
2. **具体组件（Concrete Component）**：实现组件接口的类，是被装饰的原始对象。
3. **装饰器抽象类（Decorator）**：实现组件接口，并包含一个指向组件对象的引用，可以是具体组件，也可以是其他装饰器。
4. **具体装饰器（Concrete Decorator）**：继承装饰器抽象类，负责向被装饰对象添加新的功能。

## 模式的优缺点

优点：

1. **灵活性**：可以动态地添加或撤销对象的职责，不需要修改对象的代码。
2. **符合开闭原则**：可以通过扩展来增加新功能，而不是修改现有代码。
3. **细粒度控制**：通过使用多个具体装饰器，可以精确地控制添加的功能。

缺点：

1. **复杂性增加**：由于使用了较多的小对象，系统可能变得复杂。
2. **调试困难**：在使用多个装饰器时，调试变得更加困难，因为你需要逐层分析功能的添加过程。
3. **性能开销**：每个装饰器都会引入一个新的对象，会增加系统的内存和性能开销。

## 适用场景

1. 扩展一个类的功能。
2. 动态增加功能，动态撤销。

## 示例代码（Java）

以下是一个简单的Java示例，展示了装饰器模式的使用：
在这个示例中，`ConcreteDecoratorA`和 `ConcreteDecoratorB`动态地向 `ConcreteComponent`添加了新的行为，通过组合多个装饰器对象，客户端可以灵活地为对象添加各种功能。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/zsqms.svg)

```java
// 组件接口
interface Component {
    void operation();
}

// 具体组件
class ConcreteComponent implements Component {
    @Override
    public void operation() {
        System.out.println("ConcreteComponent operation");
    }
}

// 装饰器抽象类
abstract class Decorator implements Component {
    protected Component component;

    public Decorator(Component component) {
        this.component = component;
    }

    @Override
    public void operation() {
        component.operation();
    }
}

// 具体装饰器A
class ConcreteDecoratorA extends Decorator {
    public ConcreteDecoratorA(Component component) {
        super(component);
    }

    @Override
    public void operation() {
        super.operation();
        addedBehavior();
    }

    private void addedBehavior() {
        System.out.println("ConcreteDecoratorA added behavior");
    }
}

// 具体装饰器B
class ConcreteDecoratorB extends Decorator {
    public ConcreteDecoratorB(Component component) {
        super(component);
    }

    @Override
    public void operation() {
        super.operation();
        addedBehavior();
    }

    private void addedBehavior() {
        System.out.println("ConcreteDecoratorB added behavior");
    }
}

// 客户端代码
public class DecoratorPatternDemo {
    public static void main(String[] args) {
        Component component = new ConcreteComponent();
        Component decoratorA = new ConcreteDecoratorA(component);
        Component decoratorB = new ConcreteDecoratorB(decoratorA);

        decoratorB.operation();
    }
}
```

运行结果：

> ConcreteComponent operation
> ConcreteDecoratorA added behavior
> ConcreteDecoratorB added behavior

## 更多参考资料

[装饰器模式 | 菜鸟教程](https://www.runoob.com/design-pattern/decorator-pattern.html)

# 适配器模式

适配器模式（Adapter Pattern）是一种结构型设计模式，它允许**将一个类的接口转换成另一个接口**，以便客户端可以**调用那些原本接口不兼容的类**。这种模式使得原本由于接口不兼容而**不能一起工作的类可以一起工作**。适配器模式分为**类适配器模式和对象适配器模式**。

关键组成部分：

1. **目标接口（Target）**：客户端所期望的接口。
2. **需要适配的类（Adaptee）**：有一个不兼容的接口，但需要被适配。
3. **适配器（Adapter）**：实现目标接口，并通过组合或者继承的方式调用需要适配的类的接口。

类适配器 vs 对象适配器

- **类适配器**：使用继承方式实现适配器。这种方式需要多重继承（在Java中通过接口实现），适配器继承自目标接口和需要适配的类。
- **对象适配器**：使用组合方式实现适配器。适配器持有一个需要适配的类的实例，并在实现目标接口的方法中调用这个实例的方法。

## 模式的优缺点

优点：

- **提高类的复用性**：通过适配器模式，可以将原本无法一起工作的类结合起来。
- **提高产品的灵活性**：通过引入适配器，可以在不改变现有类的情况下使用它们的新功能。
- **符合开闭原则**：不修改原有代码的情况下，通过添加适配器类扩展系统功能。

缺点：

- **复杂性增加**：引入适配器模式会增加系统的复杂性，因为需要额外编写适配器代码。
- **性能开销**：适配器模式可能会带来一些额外的性能开销，尤其是当适配器层次较多时。

## 适用场景

1. **遗留系统集成**：当需要整合遗留系统中的一些老接口和新系统中的新接口时，可以使用适配器模式。
2. **第三方库整合**：当需要使用第三方库，但它们的接口与系统不兼容时，可以使用适配器模式进行接口转换。
3. **不同格式数据处理**：当系统中需要处理不同格式的数据时，可以使用适配器模式将这些不同格式的数据转换为统一格式进行处理。

通过适配器模式，系统的灵活性和可维护性得到了提升，使得不兼容接口的类能够协同工作，实现了接口的复用和扩展。

## 示例代码（Java）

以下是一个Java示例，展示了适配器模式的使用。

![](https://ypycdn.nanshuo.icu/posts/shejimoshi/spqms.svg)

```java
// 目标接口
interface Target {
    void request();
}

// 需要适配的类
class Adaptee {
    public void specificRequest() {
        System.out.println("Adaptee specificRequest");
    }
}

// 类适配器
class ClassAdapter extends Adaptee implements Target {
    @Override
    public void request() {
        specificRequest();
    }
}

// 对象适配器
class ObjectAdapter implements Target {
    private Adaptee adaptee;

    public ObjectAdapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }

    @Override
    public void request() {
        adaptee.specificRequest();
    }
}

// 客户端代码
public class AdapterPatternDemo {
 public static void main(String[] args) {
        // 使用类适配器
        Target classAdapter = new ClassAdapter();
        classAdapter.request();

        // 使用对象适配器
        Adaptee adaptee = new Adaptee();
        Target objectAdapter = new ObjectAdapter(adaptee);
        objectAdapter.request();
    }
}
```

运行结果：

> Adaptee specificRequest
> Adaptee specificRequest

## 更多资料参考

[适配器模式 | 菜鸟教程](https://www.runoob.com/design-pattern/adapter-pattern.html)

# 代理模式

代理模式（Proxy Pattern）是一种结构型设计模式，它为其他对象**提供一种代理以控制对这个对象的访问**。代理模式通常用于**延迟处理、控制访问**或**在对象的访问上做一些处理**。

关键组成部分：

1. **抽象主题（Subject）**：声明真实对象和代理对象的共同接口，这样代理对象可以在任何时候替代真实对象。
2. **真实主题（RealSubject）**：定义代理对象所代表的真实对象。
3. **代理（Proxy）**：实现抽象主题接口，并包含对真实主题的引用，从而可以在需要时操作真实对象。

代理模式的类型：

1. **远程代理（Remote Proxy）**：为一个对象在不同的地址空间提供局部代表。
2. **虚拟代理（Virtual Proxy）**：根据需要创建开销很大的对象。
3. **保护代理（Protection Proxy）**：控制对原始对象的访问，权限控制。
4. **智能指引（Smart Reference）**：在访问对象时执行一些附加操作，如引用计数和日志记录。

## 模式的优缺点

优点：

- **控制访问**：可以控制对真实对象的访问。
- **减少对象创建**：可以延迟创建或减少开销较大的对象的创建。
- **权限管理**：可以用于对真实对象的访问进行权限管理。
- **增强功能**：可以在访问对象时附加一些功能，如日志、缓存等。

缺点：

- **引入额外开销**：由于需要进行额外的处理，代理模式可能会引入一些额外的开销。
- **复杂性增加**：代码结构变得更加复杂，尤其是在需要多个代理类时。

## 适用场景

1. **远程代理**：为远程服务器上的对象提供本地代理，简化远程访问。
2. **虚拟代理**：延迟加载开销较大的对象，如大图片文件的加载。
3. **保护代理**：控制对原始对象的访问权限，如对重要资源的访问控制。
4. **智能指引**：在访问对象时附加一些额外的操作，如日志记录和引用计数。

通过代理模式，系统可以在不修改真实对象代码的情况下，对对象的访问进行控制和增强，从而提高系统的灵活性和可维护性。

## 示例代码（Java）

以下是一个Java示例，展示了代理模式的使用

![](https://ypycdn.nanshuo.icu/posts/shejimoshi/dlms.svg)

```java
// 抽象主题接口
interface Subject {
    void request();
}

// 真实主题类
class RealSubject implements Subject {
    @Override
    public void request() {
        System.out.println("RealSubject request");
    }
}

// 代理类
class Proxy implements Subject {
    private RealSubject realSubject;

    @Override
    public void request() {
        if (realSubject == null) {
            realSubject = new RealSubject();
        }
        System.out.println("Proxy request");
        realSubject.request();
    }
}

// 客户端代码
public class ProxyPatternDemo {
    public static void main(String[] args) {
        Subject proxy = new Proxy();
        proxy.request();
    }
}
```

运行结果：

> Proxy request
> RealSubject request

## 更多参考资料

[代理模式 | 菜鸟教程](https://www.runoob.com/design-pattern/proxy-pattern.html)

# 外观模式

外观模式（Facade Pattern）是一种结构型设计模式，它**提供**了一个**统一的接口**，用来访问子系统中的一群接口。外观模式**定义了一个高层接口**，使得子系统更容易使用。

关键组成部分：

1. **外观类（Facade）**：提供统一的接口，访问子系统的功能。外观类知道哪些子系统负责处理请求，从而将客户端的请求代理给适当的子系统对象。
2. **子系统类（Subsystem classes）**：实现子系统的功能。它们处理由外观类指派的任务。子系统对客户端来说是不可见的，客户端通过外观类与子系统进行交互。

## 模式的优缺点

优点：

- **简化了客户端与子系统之间的交互**：客户端通过外观类与子系统交互，不需要了解子系统的复杂实现。
- **降低客户端与子系统的耦合度**：外观模式将客户端与子系统解耦，使得子系统的变化不会影响客户端。
- **更好的划分访问层次**：可以控制客户端对子系统的访问，提供更加灵活和安全的访问方式。

缺点：

- **引入了额外的层次**：虽然外观模式简化了接口，但也引入了额外的类和对象层次，可能会使系统更加复杂。
- **不完全符合开闭原则**：在外观类中添加新的子系统可能需要修改外观类的代码。

## 适用场景

1. **简化复杂系统的使用**：外观模式可以为复杂系统提供一个简单的接口，使得系统更易于使用。例如，图形用户界面库通常使用外观模式来简化窗口管理。
2. **分层系统中的访问控制**：在分层系统中，可以使用外观模式为每一层提供一个接口，从而简化层与层之间的依赖关系。
3. **遗留系统的集成**：通过外观模式，可以为遗留系统提供一个新的接口，从而使得新系统能够更方便地与遗留系统集成。

## 示例代码（Java）

以下是一个Java示例，展示了外观模式的使用。

![](https://ypycdn.nanshuo.icu/posts/shejimoshi/wgms.svg)

```java
// 子系统类
class SubsystemA {
    public void operationA() {
        System.out.println("SubsystemA operationA");
    }
}

class SubsystemB {
    public void operationB() {
        System.out.println("SubsystemB operationB");
    }
}

class SubsystemC {
    public void operationC() {
        System.out.println("SubsystemC operationC");
    }
}

// 外观类
class Facade {
    private SubsystemA subsystemA;
    private SubsystemB subsystemB;
    private SubsystemC subsystemC;

    public Facade() {
        subsystemA = new SubsystemA();
        subsystemB = new SubsystemB();
        subsystemC = new SubsystemC();
    }

    public void operation1() {
        System.out.println("Facade operation1");
        subsystemA.operationA();
        subsystemB.operationB();
    }

    public void operation2() {
        System.out.println("Facade operation2");
        subsystemB.operationB();
        subsystemC.operationC();
    }
}

// 客户端代码
public class FacadePatternDemo {
    public static void main(String[] args) {
        Facade facade = new Facade();
        facade.operation1();
        facade.operation2();
    }
}
```

运行结果：
>Facade operation1
SubsystemA operationA
SubsystemB operationB
Facade operation2
SubsystemB operationB
SubsystemC operationC


## 更多参考推荐

[外观模式 | 菜鸟教程](https://www.runoob.com/design-pattern/facade-pattern.html)

# 组合模式

组合模式是一种结构型设计模式，它允许你将对象组织成树形结构来表现“**整体-部分**”的层次关系。组合模式使得客户端能够**以统一的方式处理单个对象和组合对象**，**而无需关心它们的具体类型**。

在组合模式中，通常有以下角色：

1. **Component（组件）**：定义了树结构中所有对象的通用接口，可以是抽象类或接口。它声明了一些操作，例如添加子组件、删除子组件、获取子组件等。
2. **Leaf（叶子）**：表示树结构中的叶子节点，它没有子节点。实现了 Component 接口的叶子对象是树中的最终对象，它们不能再包含其他对象。
3. **Composite（复合）**：表示树结构中的复合节点，它可以包含其他子组件，即叶子节点或其他复合节点。Composite 类实现了 Component 接口，并提供了具体的操作来添加、删除和获取子组件。

## 模式的优缺点

优点：

1. **简化客户端代码：** 组合模式通过统一叶节点和复合节点的接口，简化了客户端代码。客户端无需关心处理的是单个对象还是组合对象，可以一致地对待它们。
2. **灵活性和扩展性：** 可以很容易地增加新的组件，因为组合模式对客户端隐藏了具体对象的复杂性。这使得系统更具灵活性和扩展性。
3. **统一操作方式：** 组合模式使得可以通过统一的方式对整个对象树进行操作。无论操作是针对单个对象还是整个组合结构，都可以通过相同的接口进行。
4. **层次结构清晰：** 组合模式可以将复杂的层次结构清晰地表示出来，从而更容易理解系统的结构和组织方式。

缺点：

1. **限制类型灵活性：** 在组合模式中，所有的组件都必须实现相同的接口，这可能会限制到某些组件类型的灵活性。
2. **不适合需要限制或保护子组件访问的情况：** 组合模式的结构是透明的，子组件可以自由访问，这在某些情况下可能不是所期望的。
3. **增加系统复杂性：** 组合模式引入了额外的层次结构，可能会增加系统的复杂性。尤其是在处理树结构较深、逻辑较复杂的情况下，可能会导致代码难以维护和理解。

## 适用场景

组合模式适用于以下场景：

1. **树形结构：** 当你的应用程序中存在树形结构，且你希望以统一的方式处理整体和部分时，组合模式就非常适合。例如，文件系统中的文件和文件夹的关系，菜单和菜单项的关系等。
2. **部分-整体关系：** 当你的对象具有部分-整体关系，并且你希望客户端能够以统一的方式对待单个对象和对象组合时，组合模式非常有用。例如，组织机构中的部门和员工的关系，图形界面中的容器和控件的关系等。
3. **统一接口：** 当你希望客户端通过统一的接口与复杂对象结构进行交互时，可以使用组合模式。这样可以简化客户端代码，减少对对象结构的了解和依赖。
4. **行为的传递：** 当你希望将请求沿着对象树传递，并且每个对象都能够处理请求或将请求传递给其子对象时，组合模式非常有用。这样可以在不同层次的对象上执行相同的操作，而无需更改客户端代码。
5. **灵活性和扩展性：** 当你希望系统具有灵活性和可扩展性，并且能够轻松添加新的组件或修改现有组件时，组合模式提供了一种有效的方式。它使得系统更易于维护和扩展，因为对象的层次结构在逻辑上被统一起来了。

## 示例代码（Java）

以下是一个简单的示例，演示了如何使用组合模式来表示组织结构中的员工：
在这个示例中，`Employee` 接口是组件，`Developer` 类是叶子，`Manager` 类是复合。`Manager` 类可以包含其他 `Employee` 对象，这些对象可以是叶子也可以是复合。客户端代码演示了如何创建和组合不同类型的员工，并展示了它们的层次结构。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/zhms.svg)

```java
// Component
interface Employee {
    void showDetails();
}

// Leaf
class Developer implements Employee {
    private String name;

    public Developer(String name) {
        this.name = name;
    }

    @Override
    public void showDetails() {
        System.out.println("Developer: " + name);
    }
}

// Composite
class Manager implements Employee {
    private String name;
    private List<Employee> subordinates;

    public Manager(String name) {
        this.name = name;
        subordinates = new ArrayList<>();
    }

    public void addEmployee(Employee employee) {
        subordinates.add(employee);
    }

    @Override
    public void showDetails() {
        System.out.println("Manager: " + name);
        for (Employee employee : subordinates) {
            employee.showDetails();
        }
    }
}

// Client
public class CompositePatternExample {
    public static void main(String[] args) {
        Developer dev1 = new Developer("John");
        Developer dev2 = new Developer("Alice");

        Manager manager1 = new Manager("Bob");
        manager1.addEmployee(dev1);
        manager1.addEmployee(dev2);

        Developer dev3 = new Developer("Emily");
        Manager manager2 = new Manager("Charlie");
        manager2.addEmployee(dev3);

        Manager manager3 = new Manager("David");
        manager3.addEmployee(manager1);
        manager3.addEmployee(manager2);

        manager3.showDetails();
    }
}
```

## 更多参考推荐

[组合模式 | 菜鸟教程](https://www.runoob.com/design-pattern/composite-pattern.html)
