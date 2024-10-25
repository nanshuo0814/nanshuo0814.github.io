---
title: 设计模式-行为型模式（11种）
date: 2024-05-17 19:38:09
cover: https://ypycdn.nanshuo.icu/posts/shejimoshi/xwxmsfm.png
excerpt: 本文介绍了行为型模式中的责任链、命令、迭代器、状态、中介者、备忘录、解释器、观察者、策略、模板方法和访问者模式。每种模式都有其优缺点和适用场景，并通过 Java 代码示例进行了演示。
#permalink: /archives/deMFMPMH
isOriginal: true
category:
 - 设计模式
tag: 
 - 行为型模式
 - 责任链模式
 - 命令模式
 - 迭代器模式
 - 状态模式
 - 中介者模式
 - 备忘录模式
 - 解释器模式
 - 观察者模式
 - 策略模式
 - 模板方法模式
 - 访问者模式
---

**记忆口诀**：行责命迭状中，备解观策模访（**行者鸣笛撞钟，八戒观测模仿**）
解释：行（行为型模式）责（责任链模式）命（命令模式）迭（迭代器模式）状（状态模式）中（中介者模式）备（备忘录模式）解（解释器模式）观（观察者模式）策（策略模式）模（模板方法模式）访（访问者模式）
# 责任链模式
责任链模式是一种行为设计模式，用于将请求从**一系列对象中传递**，**直到其中一个对象能够处理请求为止**。在这种模式中，每个接收者都包含对另一个接收者的引用，形成**一条链**。请求沿着这条链传递，直到其中一个接收者处理它，或者到达链的末端。
这种模式的主要目的是解耦**发送者和接收者**，使得多个对象都有机会处理请求，而不需要显式指定接收者。这种解耦可以提高代码的灵活性和可维护性。

责任链模式通常包含以下几个角色：

1. **抽象处理者**（Handler）：定义一个处理请求的接口，通常包含一个指向下一个处理者的引用。
2. **具体处理者**（ConcreteHandler）：实现抽象处理者接口，处理它所负责的请求，或者将请求传递给链中的下一个处理者。
3. **客户端**（Client）：创建责任链，并将请求发送到链的起始点。
## 模式的优缺点
优点：

1.  **解耦发送者和接收者：** 发送者无需知道请求的具体处理者是谁，接收者也无需知道请求的发送者是谁，从而实现了解耦。
2.  **灵活性：** 可以动态地改变请求的处理顺序或者新增/移除处理者，而不需要修改客户端代码，从而提高了系统的灵活性和可扩展性。
3.  **可扩展性：** 可以轻松地新增新的处理者来处理新的请求类型，而不影响现有的处理逻辑。
4.  **单一职责原则：** 每个具体处理者只需关注自己负责的请求类型，符合单一职责原则，代码更易于理解和维护。

缺点：

1.  **性能问题：** 因为请求可能需要经过多个处理者，所以在处理大量请求时，责任链模式可能会导致性能问题，特别是在链中处理者数量较多时。
2.  **请求丢失风险：** 如果责任链没有正确配置或者链中没有合适的处理者来处理请求，请求可能会被丢失，导致系统出现问题。
3.  **可能导致循环调用：** 如果责任链的配置不当，可能会导致循环调用的问题，使系统进入死循环，需要特别注意链的设计和配置。
## 适用场景

1. 有多个对象可以**处理同一个请求**，具体哪个对象处理该请求由运行时刻自动确定。
2. 在不明确指定接收者的情况下，向多个对象中的一个**提交一个请求**。
3. 可动态**指定一组**对象处理请求。

具体的应用场景包括但不限于：**请求处理管道、事件处理系统、日志记录系统、权限验证系统**等。在这些场景中，责任链模式可以帮助组织和管理请求的处理流程，提高系统的灵活性、可扩展性和可维护性。
## 示例代码（Java）
这个示例演示了一个简单的责任链模式，其中有三个具体的处理者：ConcreteHandlerA、ConcreteHandlerB 和 ConcreteHandlerC。每个处理者都有一个指向下一个处理者的引用，并实现了handleRequest方法来处理请求或者将请求传递给下一个处理者。在客户端中，构建了责任链，并发送了一系列请求，每个请求都沿着责任链传递，直到有一个处理者处理它为止。

![](https://ypycdn.nanshuo.icu/posts/shejimoshi/zrlms.svg)
```java
// 抽象处理者
public abstract class Handler {
    protected Handler successor;

    public void setSuccessor(Handler successor) {
        this.successor = successor;
    }

    public abstract void handleRequest(int request);
}

// 具体处理者A
public class ConcreteHandlerA extends Handler {
    @Override
    public void handleRequest(int request) {
        if (request >= 0 && request < 10) {
            System.out.println("ConcreteHandlerA handles request: " + request);
        } else if (successor != null) {
            successor.handleRequest(request);
        }
    }
}

// 具体处理者B
public class ConcreteHandlerB extends Handler {
    @Override
    public void handleRequest(int request) {
        if (request >= 10 && request < 20) {
            System.out.println("ConcreteHandlerB handles request: " + request);
        } else if (successor != null) {
            successor.handleRequest(request);
        }
    }
}

// 具体处理者C
public class ConcreteHandlerC extends Handler {
    @Override
    public void handleRequest(int request) {
        if (request >= 20 && request < 30) {
            System.out.println("ConcreteHandlerC handles request: " + request);
        } else if (successor != null) {
            successor.handleRequest(request);
        }
    }
}

// 客户端
public class Client {
    public static void main(String[] args) {
        // 构建责任链
        Handler handlerA = new ConcreteHandlerA();
        Handler handlerB = new ConcreteHandlerB();
        Handler handlerC = new ConcreteHandlerC();
        handlerA.setSuccessor(handlerB);
        handlerB.setSuccessor(handlerC);

        // 发送请求
        int[] requests = {5, 12, 25};
        for (int request : requests) {
            handlerA.handleRequest(request);
        }
    }
}
```
输出结果：
>ConcreteHandlerA handles request: 5
ConcreteHandlerB handles request: 12
ConcreteHandlerC handles request: 25

## 更多参考推荐
[责任链模式 | 菜鸟教程](https://www.runoob.com/design-pattern/chain-of-responsibility-pattern.html)

# 命令模式
命令模式是一种行为设计模式，它将**请求封装成一个对象**，从而**允许使用不同的请求**、**队列**或者**日志请求参数化**其他对象。命令模式也**支持可撤销**的操作。

在命令模式中，存在以下几个关键角色：

1. **命令（Command）：** 声明执行操作的接口。
2. **具体命令（Concrete Command）：** 实现命令接口，负责调用实际的操作者来执行请求。
3. **接收者（Receiver）：** 知道如何实施与执行一个请求相关的操作。
4. **调用者/请求者（Invoker）：** 要求命令对象执行请求的对象。
5. **客户端（Client）：** 创建具体命令对象，并将其与一个接收者对象相关联。
## 模式的优缺点
优点：

1.  **解耦请求发送者和接收者：** 命令模式将请求封装成对象，使得请求的发送者和接收者之间解耦，发送者无需知道接收者的具体实现，从而提高了系统的灵活性和可维护性。
2.  **支持撤销和重做操作：** 由于命令对象可以记录请求的状态，因此可以轻松实现撤销和重做操作，增加了系统的可靠性和可扩展性。
3.  **容易扩展新命令：** 可以通过添加新的命令类来扩展系统的功能，而不需要修改已有的代码，符合开闭原则。
4.  **组合命令：** 可以将多个命令组合成一个复合命令，从而实现一次性执行多个命令的功能。
5.  **记录操作日志：** 命令模式可以方便地记录命令的执行历史，用于生成操作日志或者事务记录。

缺点：

1.  **类数量增加：** 引入了额外的命令类和接收者类，可能会增加系统的复杂性和代码量。
2.  **可能导致系统性能下降：** 每个命令都需要创建一个具体命令对象，可能会导致内存消耗增加，并且在某些情况下可能会降低系统的性能。
3.  **不适用于简单场景：** 在一些简单的场景中，引入命令模式可能会显得过于繁琐，不值得使用。
4.  **命令的过期问题：** 如果命令对象长时间保持在内存中，可能会导致一些命令对象变得过时而无法正确执行。
## 适用场景
命令模式适用于**需要将请求和执行者解耦、支持撤销和重做操作、或者需要将请求进行参数化**的场景。认为是命令的地方都可以使用命令模式，比如： 1、GUI 中每一个按钮都是一条命令。 2、模拟 CMD。在这些场景中，命令模式可以帮助提高系统的灵活性、可维护性和可扩展性
## 示例代码（Java）
这个示例演示了一个简单的命令模式，其中有一个命令接口 Command，一个具体的命令类 LightOnCommand，一个接收者类 Light 和一个调用者类 RemoteControl。客户端创建了一个 Light 对象，然后创建了一个 LightOnCommand 对象，并将其关联到 RemoteControl 对象中。最后，调用者执行命令，Light 对象的开关被打开。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/mlms.svg)
```java
// 命令接口
interface Command {
    void execute();
}

// 具体命令类
class LightOnCommand implements Command {
    private Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        light.turnOn();
    }
}

// 接收者类
class Light {
    public void turnOn() {
        System.out.println("Light is on");
    }

    public void turnOff() {
        System.out.println("Light is off");
    }
}

// 调用者类
class RemoteControl {
    private Command command;

    public void setCommand(Command command) {
        this.command = command;
    }

    public void pressButton() {
        command.execute();
    }
}

// 客户端类
public class Client {
    public static void main(String[] args) {
        // 创建接收者对象
        Light light = new Light();
        
        // 创建具体命令对象，并关联接收者对象
        Command lightOnCommand = new LightOnCommand(light);

        // 创建调用者对象，并设置命令对象
        RemoteControl remoteControl = new RemoteControl();
        remoteControl.setCommand(lightOnCommand);

        // 调用者执行命令
        remoteControl.pressButton();
    }
}
```
输出结果：
>Light is on

## 更多参考推荐
[命令模式 | 菜鸟教程](https://www.runoob.com/design-pattern/command-pattern.html)
# 迭代器模式
迭代器模式是一种行为设计模式，它提供一种方法**顺序访问**一个聚合对象中的各个元素，而又**不暴露该对象的内部表示**。迭代器模式将集合和迭代器分离，使得集合的实现可以**独立于迭代器的实现**。

在迭代器模式中，通常包含以下几个关键角色：

1.  **迭代器（Iterator）：** 定义访问和遍历元素的接口，包括 hasNext()、next() 等方法。
2.  **具体迭代器（Concrete Iterator）：** 实现迭代器接口，在具体的集合对象上进行迭代。
3.  **聚合对象（Aggregate）：** 定义创建相应迭代器的接口。
4.  **具体聚合对象（Concrete Aggregate）：** 实现聚合接口，返回一个具体迭代器的实例。
5.  **客户端（Client）：** 使用迭代器模式的代码。
## 模式的优缺点
优点：

1. **简化集合遍历：** 迭代器模式提供了统一的接口来遍历集合元素，使得客户端代码可以更加简洁和易于理解。
2. **解耦集合和遍历方式：** 迭代器模式将集合和遍历方式分离开来，使得集合的具体实现和遍历方式可以独立变化，提高了系统的灵活性和可扩展性。
3. **支持多种遍历方式：** 迭代器模式允许定义多种不同的迭代器实现，从而支持多种遍历方式，例如正向遍历、反向遍历、跳跃遍历等。
4. **隐藏集合内部结构：** 迭代器模式隐藏了集合的内部结构，使得客户端无需了解集合的具体实现方式，从而降低了客户端与集合之间的耦合度。
5. **单一职责原则：** 迭代器模式符合单一职责原则，每个迭代器负责遍历集合的一个方面，使得代码更加清晰和易于维护。

缺点：

1. **增加类的数量：** 迭代器模式引入了额外的迭代器类和抽象类，可能会增加系统的复杂性和代码量。
2. **性能问题：** 在某些情况下，使用迭代器模式可能会导致性能问题，特别是在对大型集合进行遍历时，迭代器的创建和维护可能会影响系统的性能。
3. **不适用于特定集合：** 迭代器模式并不适用于所有集合类型，例如某些特定的数据结构可能没有明显的迭代方式，或者迭代方式固定不变，此时使用迭代器模式可能会显得不够灵活。
## 适用场景

1. **需要遍历访问集合元素：** 当需要遍历访问集合元素，但又不希望暴露集合内部结构的细节时，可以使用迭代器模式。例如，遍历列表、集合、数组等数据结构时，使用迭代器模式可以提供一种统一的方式来进行遍历。
2. **不同遍历方式：** 当需要支持多种不同的遍历方式，例如正向遍历、反向遍历、跳跃遍历等时，迭代器模式非常有用。通过定义不同的迭代器实现，可以灵活地支持多种遍历方式。
3. **隐藏集合内部结构：** 当需要隐藏集合的内部结构，使得客户端无需了解集合的具体实现方式时，可以使用迭代器模式。迭代器模式将集合的遍历方式与集合的具体实现分离开来，使得客户端可以通过统一的接口来遍历集合元素。
4. **支持延迟加载：** 当需要延迟加载集合元素，例如懒加载或者按需加载时，迭代器模式可以帮助实现按需遍历集合元素，从而节省资源和提高性能。
5. **适用于不同的集合类型：** 迭代器模式适用于不同类型的集合，例如列表、集合、数组等。无论集合类型如何变化，迭代器模式都提供了一种统一的遍历方式，使得客户端代码更加灵活和可维护。
## 示例代码（Java）
Java 示例代码实现迭代器模式
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/ddqms.svg)
```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

// 迭代器接口
interface Iterator<T> {
    boolean hasNext();
    T next();
}

// 具体迭代器类
class ListIterator<T> implements Iterator<T> {
    private List<T> list;
    private int position = 0;

    public ListIterator(List<T> list) {
        this.list = list;
    }

    public boolean hasNext() {
        return position < list.size();
    }

    public T next() {
        return list.get(position++);
    }
}

// 聚合对象接口
interface Aggregate<T> {
    Iterator<T> iterator();
}

// 具体聚合对象类
class ListAggregate<T> implements Aggregate<T> {
    private List<T> list;

    public ListAggregate() {
        this.list = new ArrayList<>();
    }

    public void add(T element) {
        list.add(element);
    }

    public Iterator<T> iterator() {
        return new ListIterator<>(list);
    }
}

// 客户端
public class Client {
    public static void main(String[] args) {
        // 创建具体聚合对象
        Aggregate<String> aggregate = new ListAggregate<>();

        // 向聚合对象中添加元素
        aggregate.add("Apple");
        aggregate.add("Banana");
        aggregate.add("Orange");

        // 获取迭代器并遍历元素
        Iterator<String> iterator = aggregate.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
```
输出结果：
>Apple
Banana
Orange

## 更多参考推荐
[迭代器模式 | 菜鸟教程](https://www.runoob.com/design-pattern/iterator-pattern.html)
# 状态模式
状态模式是一种行为设计模式，它**允许对象在其内部状态改变时改变它的行为**。状态模式**将对象的状态封装成独立的类**，并将每个状态的行为抽象成一个**接口**或者**抽象类**，从而使得对象状态的变化可以通过改变对象持有的状态对象来实现。

在状态模式中，通常包含以下几个关键角色：

1.  **环境（Context）：** 定义客户端感兴趣的接口，维护一个具体状态对象的实例，并在状态发生变化时改变状态对象。
2.  **抽象状态（State）：** 定义一个接口或者抽象类，用于封装环境对象中的特定状态所对应的行为。
3.  **具体状态（Concrete State）：** 实现抽象状态接口或者抽象类，定义状态对象的具体行为。
## 模式的优缺点
优点：

1. **简化条件逻辑：** 状态模式将对象的状态抽象成独立的类，使得在环境对象中不再需要复杂的条件逻辑来判断不同状态下的行为，从而简化了代码结构。
2. **增强可扩展性：** 状态模式将每个状态封装成独立的类，使得状态之间的转换逻辑可以分布在不同的状态类中，增强了系统的可扩展性和灵活性，新的状态可以通过增加新的状态类来实现。
3. **增强可维护性：** 状态模式将对象的状态封装成独立的类，使得状态变化的逻辑和行为与环境对象解耦，从而使得系统更加清晰、易于理解和易于维护。
4. **避免使用大量的条件语句：** 在状态模式中，由于状态的变化由状态对象来管理，因此避免了在环境对象中使用大量的条件语句来判断状态，使得代码更加简洁和易于理解。

缺点：

1. **增加类的数量：** 状态模式引入了额外的状态类，可能会增加系统的复杂性和代码量，尤其是在状态较多或者状态转换逻辑复杂的情况下。
2. **状态对象的创建和维护：** 在状态模式中，每个状态都是一个独立的类，可能会增加对象的创建和维护成本，尤其是在状态较多时。
3. **状态转换逻辑分散：** 在状态模式中，状态转换逻辑可能会分散在多个状态类中，可能会导致状态转换逻辑的管理和维护变得复杂。
4. **不适用于简单状态：** 对于简单的状态和状态转换逻辑，引入状态模式可能会显得过于繁琐，不值得使用。
## 适用场景
状态模式适用于对象具有**多个状态且状态之间存在转换关系**的场景。例如，交通信号灯的状态包括红灯、黄灯和绿灯，状态之间存在着严格的转换关系；订单状态的变化包括待支付、已支付、待发货、已发货等，不同状态下订单的行为也不同。在这些场景中，状态模式可以帮助组织和管理对象的状态转换逻辑，使得系统更加清晰、灵活和易于维护。
## 示例代码（Java）
这个示例代码演示了一个简单的状态模式，其中包括了一个抽象状态类 State，两个具体状态类 ConcreteStateA 和 ConcreteStateB，以及一个环境类 Context。在客户端代码中，首先创建了一个 Context 对象，然后设置了初始状态为 ConcreteStateA，随后调用 request 方法，输出 "Handle state A"。接着将状态设置为 ConcreteStateB，再次调用 request 方法，输出 "Handle state B"。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/ztms.svg)
```java
// 抽象状态类
interface State {
    void handle();
}

// 具体状态类A
class ConcreteStateA implements State {
    public void handle() {
        System.out.println("Handle state A");
    }
}

// 具体状态类B
class ConcreteStateB implements State {
    public void handle() {
        System.out.println("Handle state B");
    }
}

// 环境类
class Context {
    private State state;

    public void setState(State state) {
        this.state = state;
    }

    public void request() {
        state.handle();
    }
}

// 客户端
public class Client {
    public static void main(String[] args) {
        // 创建环境对象
        Context context = new Context();

        // 设置初始状态为A
        context.setState(new ConcreteStateA());
        context.request(); // 输出 "Handle state A"

        // 设置状态为B
        context.setState(new ConcreteStateB());
        context.request(); // 输出 "Handle state B"
    }
}
```
输出结果：
>Handle state A
Handle state B
## 更多参考推荐
[状态模式 | 菜鸟教程](https://www.runoob.com/design-pattern/state-pattern.html)
# 中介者模式
中介者模式是一种行为设计模式，它通过引入一个**中介者对象**来**封装**一系列**对象之间的交互**，从而**降低**对象之间的直接**耦合**。中介者模式通过将对象之间的交互集中到中介者对象中来**减少对象之间的依赖关系**，使得系统更加灵活、易于维护和扩展。

在中介者模式中，通常包含以下几个关键角色：

1.  **中介者（Mediator）：** 定义一个接口用于与各个同事对象通信，包括一个或多个抽象方法用于定义各个同事对象之间的交互。
2.  **具体中介者（Concrete Mediator）：** 实现中介者接口，负责协调各个同事对象的交互，了解并维护各个同事对象之间的依赖关系。
3.  **同事类（Colleague）：** 每个同事类都知道中介者对象，与其他同事对象通过中介者对象进行交互。
4.  **具体同事类（Concrete Colleague）：** 实现同事接口，每个具体同事类都包含一些自己的业务逻辑，通过中介者对象与其他同事对象进行交互。
## 模式的优缺点
优点：

1. **降低对象之间的耦合度：** 中介者模式通过引入中介者对象来封装对象之间的交互，使得对象之间不需要直接相互通信，从而降低了对象之间的耦合度。
2. **简化对象之间的交互：** 中介者模式将对象之间的交互集中到中介者对象中来进行协调，使得对象之间的交互变得简单而直接，不再需要了解和维护复杂的交互逻辑。
3. **提高系统的灵活性和可维护性：** 中介者模式将对象之间的依赖关系集中到中介者对象中，使得系统更加灵活和可维护。新增、删除或者修改一个对象都不会影响到其他对象，从而降低了系统的维护成本。
4. **促进对象的复用：** 中介者模式将对象之间的交互逻辑封装在中介者对象中，可以使得这些交互逻辑得到复用，提高了代码的可重用性。

缺点：

1. **中介者对象可能变得过于复杂：** 当系统中的对象之间存在复杂的交互关系时，中介者对象可能会变得过于复杂，包含大量的逻辑和状态，从而导致中介者对象的复杂性增加。
2. **增加了系统的单点故障：** 中介者模式将系统中的对象之间的交互集中到中介者对象中，如果中介者对象出现了问题或者无法正常工作，整个系统可能会受到影响，增加了系统的单点故障的风险。
3. **降低了系统的可扩展性：** 中介者模式将对象之间的交互逻辑封装在中介者对象中，使得新增、删除或者修改一个对象都需要修改中介者对象，可能会降低系统的可扩展性。
## 适用场景
介者模式适用于以下场景：

1.  当对象之间存在**复杂的交互关系**，并且需要通过一个中介者对象来统一协调时，可以使用中介者模式。例如，聊天室中的各个用户之间需要通过一个中介者来进行消息的转发。
2.  当系统中的对象之间存在**多对多的依赖关系**，并且这些依赖关系难以维护时，可以使用中介者模式。中介者模式可以将多对多的依赖关系转变为一对多的依赖关系，使得系统更加简单和易于维护。
3.  当对象之间存在**循环依赖关系**时，可以使用中介者模式打破循环依赖，从而使得系统更加稳定和可靠。
## 示例代码（Java）
这个示例代码演示了一个简单的中介者模式，其中包括了一个抽象中介者接口 Mediator，一个具体中介者类 ConcreteMediator，一个抽象同事类 Colleague，以及两个具体同事类 ConcreteColleagueA 和 ConcreteColleagueB。在客户端代码中，首先创建了一个 ConcreteMediator 对象作为中介者，然后创建了两个具体同事对象并注册到中介者中，最后通过同事对象发送消息。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/zjzms.svg)
```java
// 抽象中介者
interface Mediator {
    void addColleague(Colleague colleague);
    void sendMessage(Colleague sender, String message);
}

// 具体中介者
class ConcreteMediator implements Mediator {
    private List<Colleague> colleagues;

    public ConcreteMediator() {
        this.colleagues = new ArrayList<>();
    }

    public void addColleague(Colleague colleague) {
        colleagues.add(colleague);
    }

    public void sendMessage(Colleague sender, String message) {
        for (Colleague colleague : colleagues) {
            if (colleague != sender) {
                colleague.receiveMessage(message);
            }
        }
    }
}

// 抽象同事类
abstract class Colleague {
    protected Mediator mediator;

    public Colleague(Mediator mediator) {
        this.mediator = mediator;
    }

    public abstract void sendMessage(String message);
    public abstract void receiveMessage(String message);
}

// 具体同事类A
class ConcreteColleagueA extends Colleague {
    public ConcreteColleagueA(Mediator mediator) {
        super(mediator);
    }

    public void sendMessage(String message) {
        mediator.sendMessage(this, message);
    }

    public void receiveMessage(String message) {
        System.out.println("ConcreteColleagueA received message: " + message);
    }
}

// 具体同事类B
class ConcreteColleagueB extends Colleague {
    public ConcreteColleagueB(Mediator mediator) {
        super(mediator);
    }

    public void sendMessage(String message) {
        mediator.sendMessage(this, message);
    }

    public void receiveMessage(String message) {
        System.out.println("ConcreteColleagueB received message: " + message);
    }
}

// 客户端
public class Client {
    public static void main(String[] args) {
        // 创建中介者对象
        Mediator mediator = new ConcreteMediator();

        // 创建具体同事对象并注册到中介者
        Colleague colleagueA = new ConcreteColleagueA(mediator);
        Colleague colleagueB = new ConcreteColleagueB(mediator);
        mediator.addColleague(colleagueA);
        mediator.addColleague(colleagueB);

        // 同事对象发送消息
        colleagueA.sendMessage("Hello, this is colleague A.");
        colleagueB.sendMessage("Hi, this is colleague B.");
    }
}
```
输出结果：
>ConcreteColleagueB received message: Hello, this is colleague A.
ConcreteColleagueA received message: Hi, this is colleague B.
## 更多参考推荐
[中介者模式 | 菜鸟教程](https://www.runoob.com/design-pattern/mediator-pattern.html)
# 备忘录模式
备忘录模式是一种行为设计模式，它允许在**不暴露对象实现细节的情况下保存和恢复对象的状态**。备忘录模式将对象的状态**保存在一个备忘录对象中**，通过备忘录对象来保存和恢复对象的状态，从而实现对象的**恢复和撤销**功能。

在备忘录模式中，通常包含以下几个关键角色：

1.  **发起人（Originator）：** 定义一个接口用于创建备忘录对象和恢复对象状态，发起人对象通常是需要保存和恢复状态的对象。
2.  **备忘录（Memento）：** 用于存储发起人对象的状态，备忘录对象可以保存发起人对象的内部状态，也可以提供一些访问状态的方法给发起人对象。
3.  **管理者（Caretaker）：** 负责保存备忘录对象，管理者对象通常不需要了解备忘录对象的具体内容，只负责存储备忘录对象和将备忘录对象提供给发起人对象。
## 模式的优缺点
**优点：**

1. **封装性良好：** 备忘录模式将对象的状态保存在备忘录对象中，使得对象的实现细节对外隐藏，从而提高了系统的封装性和安全性。
2. **状态保存和恢复方便：** 备忘录模式可以有效地保存对象的内部状态，并提供一种方便的方式来恢复对象的状态，使得对象的状态可以轻松地进行备份和恢复。
3. **灵活性高：** 备忘录模式可以在不破坏对象封装的情况下保存和恢复对象的状态，使得系统更加灵活和可扩展。
4. **支持多次撤销操作：** 备忘录模式可以保存多个备忘录对象，从而支持多次撤销操作，使得系统具有良好的撤销和恢复功能。

**缺点：**

1. **资源消耗较大：** 备忘录模式需要保存对象的历史状态，因此可能会占用较多的内存资源，特别是在需要保存大量状态的情况下。
2. **可能引起性能问题：** 备忘录模式需要保存对象的历史状态，并提供恢复功能，可能会引起性能问题，特别是在需要频繁保存和恢复状态的情况下。
3. **可能导致存储过多状态：** 备忘录模式可以保存对象的历史状态，但如果保存的状态过多可能会导致存储空间的浪费，需要合理管理备忘录对象。
4. **可能导致对象状态暴露：** 如果备忘录对象的状态可以被外部访问和修改，可能会导致对象状态的暴露，破坏对象的封装性和安全性。
## 适用场景
备忘录模式适用于以下场景：

1.  当需要保存对象的内部状态，并且需要在之后将对象**恢复到之前的状态**时，可以使用备忘录模式。例如，文本编辑器中的撤销和恢复功能可以使用备忘录模式来实现。
2.  当需要在**不破坏对象封装的情况下保存和恢复对象的状态**时，可以使用备忘录模式。备忘录模式将对象的状态保存在备忘录对象中，从而使得对象的实现细节对外隐藏，提高了系统的封装性。
3.  当需要**实现撤销和恢复功能时**，可以使用备忘录模式。备忘录模式可以有效地保存对象的历史状态，并提供一种方便的方式来恢复对象的历史状态，从而实现撤销和恢复功能。
## 示例代码（Java）
这个示例代码演示了一个简单的备忘录模式，其中包括了一个备忘录类 Memento，一个发起人类 Originator，一个管理者类 Caretaker。在客户端代码中，首先创建了发起人和管理者对象，然后设置发起人对象的状态并保存到备忘录中，修改发起人对象的状态并保存到备忘录中，最后恢复发起人对象的状态。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/bwlms.svg)
```java
// 备忘录类
class Memento {
    private String state;

    public Memento(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }
}

// 发起人类
class Originator {
    private String state;

    public void setState(String state) {
        this.state = state;
    }

    public String getState() {
        return state;
    }

    public Memento saveStateToMemento() {
        return new Memento(state);
    }

    public void getStateFromMemento(Memento memento) {
        state = memento.getState();
    }
}

// 管理者类
class Caretaker {
    private Memento memento;

    public void setMemento(Memento memento) {
        this.memento = memento;
    }

    public Memento getMemento() {
        return memento;
    }
}

// 客户端
public class Client {
    public static void main(String[] args) {
        // 创建发起人和管理者对象
        Originator originator = new Originator();
        Caretaker caretaker = new Caretaker();

        // 设置发起人对象的状态并保存到备忘录中
        originator.setState("State 1");
        caretaker.setMemento(originator.saveStateToMemento());

        // 修改发起人对象的状态并保存到备忘录中
        originator.setState("State 2");
        caretaker.setMemento(originator.saveStateToMemento());

        // 恢复发起人对象的状态
        originator.getStateFromMemento(caretaker.getMemento());
        System.out.println("Current State: " + originator.getState());
    }
}
```
输出结果：
>Current State: State 2
## 更多参考推荐
[备忘录模式 | 菜鸟教程](https://www.runoob.com/design-pattern/memento-pattern.html)
# 解释器模式
解释器模式是一种行为设计模式，它定义了一种**语言文法并解释该语言的语法**，使得用户能够**使用特定的语法来解释表达式或语句**。这种模式**通常用于解释复杂的语言或表达式**，将其**转换为易于理解的形式**。

在解释器模式中，通常包含以下几个关键角色：

1.  **抽象表达式（Abstract Expression）：** 定义了一个解释器的接口，该接口包含了一个 interpret 方法，用于解释表达式或语句。
2.  **终结符表达式（Terminal Expression）：** 实现了抽象表达式接口，并表示语言中的终结符，通常是基本的原子元素。
3.  **非终结符表达式（Non-terminal Expression）：** 实现了抽象表达式接口，并表示语言中的非终结符，通常是由多个终结符或非终结符组合而成的复合元素。
4.  **环境（Context）：** 包含解释器所需的全局信息，通常包含解释器要操作的上下文信息。
## 模式的优缺点
优点：

1. **灵活性高：** 解释器模式可以灵活地定义语言的语法规则，并提供相应的解释器来解释和执行语法，从而使得系统更加灵活和可扩展。
2. **易于扩展：** 解释器模式将语言的语法规则和解释器分开，使得系统的语法规则和解释器可以独立地进行扩展和修改，从而提高了系统的可扩展性。
3. **易于维护：** 解释器模式将复杂的语言或表达式转换为易于理解的形式，使得系统更加易于理解和维护。
4. **适用于复杂的语法规则：** 解释器模式适用于需要解释复杂的语法规则，并执行相应操作的场景，例如编译器、解释器等。

缺点：

1. **性能较低：** 解释器模式通常需要将语言的语法规则转换为内部表示，并通过解释器来解释执行，因此可能会导致性能较低，特别是在处理复杂的语法规则时。
2. **难以维护：** 解释器模式通常需要定义和维护大量的解释器类和语法规则，特别是在处理复杂的语言或表达式时，可能会导致系统的复杂性增加，增加了维护的难度。
3. **不易扩展：** 解释器模式通常需要为每一种语言的语法规则都定义相应的解释器，因此可能会导致系统的扩展性较差，特别是在需要支持多种语言或表达式时。
## 适用场景
解释器模式适用于以下场景：

1.  当**需要解释一种语言的语法**，并执行相应的操作时，可以使用解释器模式。例如，编译器和解释器可以使用解释器模式来解释源代码，并将其转换为机器语言或执行相应的操作。
2.  当**需要定义一种特定的语法**，并提供一种解释器来解释该语法时，可以使用解释器模式。例如，正则表达式的解释和匹配可以使用解释器模式来实现。
3.  当**需要将复杂的语言或表达式转换为易于理解的形式时**，可以使用解释器模式。解释器模式将复杂的语言或表达式转换为易于理解的形式，使得用户能够使用特定的语法来表达和解释问题。
## 示例代码（Java）
这个示例代码演示了一个简单的解释器模式，其中包括了一个抽象表达式接口 Expression，一个终结符表达式类 TerminalExpression，一个非终结符表达式类 OrExpression。在客户端代码中，首先构建了一个解释器树，然后使用解释器来解释给定的上下文，并输出解释结果。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/jsqms.svg)
```java
// 抽象表达式接口
interface Expression {
    boolean interpret(String context);
}

// 终结符表达式类
class TerminalExpression implements Expression {
    private String data;

    public TerminalExpression(String data) {
        this.data = data;
    }

    public boolean interpret(String context) {
        return context.contains(data);
    }
}

// 非终结符表达式类
class OrExpression implements Expression {
    private Expression expr1;
    private Expression expr2;

    public OrExpression(Expression expr1, Expression expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }

    public boolean interpret(String context) {
        return expr1.interpret(context) || expr2.interpret(context);
    }
}

// 客户端
public class Client {
    public static Expression buildInterpreterTree() {
        Expression terminal1 = new TerminalExpression("Hello");
        Expression terminal2 = new TerminalExpression("World");
        return new OrExpression(terminal1, terminal2);
    }

    public static void main(String[] args) {
        String context1 = "Hello";
        String context2 = "Hi";
        
        Expression expression = buildInterpreterTree();

        System.out.println(context1 + " is " + expression.interpret(context1));
        System.out.println(context2 + " is " + expression.interpret(context2));
    }
}
```
输出结果：
>Hello is true
Hi is false

## 更多参考推荐
[解释器模式 | 菜鸟教程](https://www.runoob.com/design-pattern/interpreter-pattern.html)
# 观察者模式
观察者模式是一种行为设计模式，它定义了一种**一对多的依赖关系**，**使得当一个对象的状态发生变化时，所有依赖于它的对象都会得到通知并自动更新**。

在观察者模式中，有两种角色：**观察者和被观察者**。

1.  **被观察者（Subject）：** 也称为主题或可观察对象，它是被观察的对象，具有添加、删除和通知观察者的方法。
2.  **观察者（Observer）：** 观察者对象订阅被观察者对象的状态变化，当被观察者的状态发生变化时，观察者会收到通知并进行相应的更新操作。
## 模式的优缺点
优点：

1. **松耦合性（Loose coupling）：** 观察者模式通过抽象化了对象之间的依赖关系，使得它们之间的联系更加松散。观察者不需要知道具体的被观察者是谁，被观察者也不需要知道具体的观察者是谁，彼此之间的联系通过接口来实现。
2. **可扩展性（Scalability）：** 可以在任何时候增加或删除观察者，而不需要修改被观察者或其他观察者的代码。这使得系统更加灵活，易于扩展。
3. **通知机制（Notification mechanism）：** 当被观察者的状态发生变化时，它会自动通知所有的观察者，从而保证了观察者和被观察者之间的数据同步。
4. **分离关注点（Separation of concerns）：** 观察者模式将关注点分离开来，被观察者只关心自己的状态变化，而观察者只关心被观察者的状态变化，各自职责清晰明确。

缺点：

1. **可能引起内存泄漏（Memory leaks）：** 如果观察者没有正确地被释放或者在被观察者中保持了对观察者的引用，就可能导致内存泄漏问题。
2. **导致性能问题（Performance issues）：** 当被观察者的状态发生变化时，会触发所有观察者的更新操作，如果观察者的数量很大或者更新操作比较耗时，可能会导致性能问题。
3. **可能引起循环依赖（Circular dependencies）：** 如果观察者和被观察者之间存在循环依赖关系，可能会导致系统难以维护和扩展。
4. **过度使用可能导致复杂性增加（Complexity）：** 如果过度使用观察者模式，可能会导致系统中存在大量的观察者和被观察者，增加系统的复杂性和理解难度。
## 适用场景
观察者模式适用于以下场景：

1.  当**一个对象**的状态需要被**多个其他对象监听**并进行相应的处理时，可以使用观察者模式。例如，当一个主题对象的状态发生变化时，需要通知多个观察者对象进行更新操作。
2.  当对象之间存在**一对多的依赖关系**，且需要避免对象之间的紧耦合关系时，可以使用观察者模式。观察者模式可以将对象之间的依赖关系转变为松散的依赖关系，使得系统更加灵活和易于维护。
3.  当对象的状态发生变化后，需要**通知**其他对象进行相应的处理时，可以使用观察者模式。观察者模式可以有效地实现对象之间的解耦，使得对象的状态变化和处理逻辑分离开来，提高了系统的可维护性和可扩展性。
## 示例代码（Java）
这个示例中，**ConcreteSubject** 类是具体的主题，实现了 **Subject** 接口，包括了添加、移除观察者和通知观察者的方法。**ConcreteObserver** 类是具体的观察者，实现了 **Observer** 接口，在构造函数中将自己添加到主题的观察者列表中，并在 **update** 方法中定义了当主题状态改变时需要做的操作。在 **Main** 类中进行了测试。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/gczms.svg)
```java
// 主题接口
interface Subject {
    void attach(Observer observer);
    void detach(Observer observer);
    void notifyObservers();
}

// 具体主题类
class ConcreteSubject implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private int state;

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
        notifyObservers();
    }

    @Override
    public void attach(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void detach(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update();
        }
    }
}

// 观察者接口
interface Observer {
    void update();
}

// 具体观察者类
class ConcreteObserver implements Observer {
    private ConcreteSubject subject;

    public ConcreteObserver(ConcreteSubject subject) {
        this.subject = subject;
        this.subject.attach(this);
    }

    @Override
    public void update() {
        System.out.println("Observer updated, New State: " + subject.getState());
    }
}

// 客户端
public class Client {
    public static void main(String[] args) {
        ConcreteSubject subject = new ConcreteSubject();

        // 添加观察者
        ConcreteObserver observer1 = new ConcreteObserver(subject);
        ConcreteObserver observer2 = new ConcreteObserver(subject);

        // 改变主题状态
        subject.setState(5);
        subject.setState(10);
        
        // 移除观察者
        subject.detach(observer1);

        // 再次改变主题状态
        subject.setState(15);
    }
}
```
输出结果：
>Observer updated, New State: 5
Observer updated, New State: 5
Observer updated, New State: 10
Observer updated, New State: 15

## 更多参考推荐
[观察者模式 | 菜鸟教程](https://www.runoob.com/design-pattern/observer-pattern.html)
# 策略模式
策略模式是一种行为设计模式，它**允许在运行时选择算法的行为**。它包括**定义一系列算法**，将每个算法封装在独立的类中，并使它们可以**相互替换**。这种模式**使得算法可以独立于使用它的客户端而变化**，也使得算法的选择可以更加灵活和可扩展。

在策略模式中，通常有三个主要角色：

1.  **策略（Strategy）**：定义了一个接口或抽象类，声明了所有支持的算法的通用接口。这通常是一个接口，其具体实现是具体算法的具体类。
2.  **具体策略（Concrete Strategy）**：实现了策略接口的具体算法。
3.  **上下文（Context）**：持有一个策略类的引用，用于执行具体的算法。上下文可以根据需要在运行时更改其策略，以便调用不同的算法。
## 模式的优缺点
优点：

1. **灵活性**：策略模式允许在运行时选择算法，使得系统更加灵活。通过更改上下文中的策略，可以轻松地切换算法。
2. **可维护性**：每个算法都被封装在独立的类中，这使得修改和添加新的算法变得容易，同时不影响其他算法的行为。这有助于提高代码的可维护性。
3. **可扩展性**：由于每个算法都是独立的类，因此可以轻松地添加新的算法，而不需要修改现有代码。这使得系统具有很好的可扩展性。
4. **避免条件语句**：策略模式避免了大量的条件语句。通过将算法封装在独立的类中，可以在不需要复杂的条件判断的情况下执行相应的算法。

缺点：

1. **类爆炸**：如果系统中有大量的具体策略类，可能会导致类的数量急剧增加，从而增加了系统的复杂性。
2. **客户端必须了解不同策略**：客户端必须了解所有可用的策略，并选择合适的策略来使用。这可能会增加客户端代码的复杂性。
3. **选择策略的责任**：在某些情况下，选择合适的策略可能会成为一个问题。这需要根据实际情况来确定最佳策略，这可能需要一些经验和判断力。
## 适用场景

1. 如果在一个系统里面有许多类，它们之间的**区别仅在于它们的行为**，那么使用策略模式可以动态地让一个对象在许多行为中**选择**一种行为。
2. 一个系统需要**动态地在几种算法中选择一种**。
3. 如果**一个对象有很多的行为**，如果不用恰当的模式，这些行为就只好使用多重的条件选择语句来实现。
## 示例代码（Java）
这个例子中，**PaymentStrategy** 是策略接口，**CreditCardPaymentStrategy** 和 **PayPalPaymentStrategy** 是具体的策略类。**ShoppingCart** 是上下文类，它持有一个 **PaymentStrategy** 的引用，并根据具体的策略计算订单的总金额。在 **Client** 类中，我们创建了一个购物车实例，并选择了不同的支付策略来计算订单的总金额
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/clms.svg)
```java
// PaymentStrategy.java
interface PaymentStrategy {
    double calculate(double amount);
}

// CreditCardPaymentStrategy.java
class CreditCardPaymentStrategy implements PaymentStrategy {
    @Override
    public double calculate(double amount) {
        // 计算信用卡支付的总金额，可以根据具体算法进行实现
        // 这里简单地假设使用信用卡支付没有折扣
        return amount;
    }
}

// PayPalPaymentStrategy.java
class PayPalPaymentStrategy implements PaymentStrategy {
    @Override
    public double calculate(double amount) {
        // 计算 PayPal 支付的总金额，可以根据具体算法进行实现
        // 这里简单地假设 PayPal 支付有 5% 的折扣
        return amount * 0.95;
    }
}

// ShoppingCart.java
class ShoppingCart {
    private PaymentStrategy paymentStrategy;

    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }

    public void pay(double amount) {
        double totalAmount = paymentStrategy.calculate(amount);
        System.out.println("Total amount after payment: " + totalAmount);
    }
}

// Client.java
public class Client {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();

        // 选择信用卡支付
        PaymentStrategy creditCardStrategy = new CreditCardPaymentStrategy();
        cart.setPaymentStrategy(creditCardStrategy);
        cart.pay(100); // 输出：Total amount after payment: 100.0

        // 选择 PayPal 支付
        PaymentStrategy payPalStrategy = new PayPalPaymentStrategy();
        cart.setPaymentStrategy(payPalStrategy);
        cart.pay(100); // 输出：Total amount after payment: 95.0
    }
}
```
输出结果：
>Total amount after payment: 100.0
Total amount after payment: 95.0

## 更多参考推荐
[策略模式 | 菜鸟教程](https://www.runoob.com/design-pattern/strategy-pattern.html)
# 模板方法模式
模板方法模式是一种行为设计模式，用于**定义一个算法的框架**，而**将一些步骤的实现延迟到子类中**。这种模式在父类中定义算法的骨架，而**具体的步骤实现则由子类完成**。这样做可以使得**算法的结构保持不变**，但是**允许子类为其中的一个或多个步骤提供特定的实现**。

在模板方法模式中，通常包含两类方法：

1.  **模板方法（Template Method）**：定义了算法的框架，描述了算法的各个步骤的执行顺序。这些步骤可能是抽象的，也可能是具体的，其中的某些步骤由子类来实现。
2.  **具体方法（Concrete Method）**：在父类中已经实现的具体步骤，这些步骤在算法中是固定的，不需要子类重写。
## 模式的优缺点
优点：

1. **提高代码复用性**：模板方法模式将相同的代码封装在父类中，以避免在子类中重复实现相同的代码，从而提高了代码的复用性。
2. **提高系统的可扩展性**：由于模板方法模式将具体的实现延迟到子类中，因此可以很容易地添加新的子类来扩展系统的功能，而不会影响现有的代码。
3. **符合开闭原则**：模板方法模式符合开闭原则，允许在不修改现有代码的情况下扩展系统的功能，只需要添加新的子类即可。
4. **提高了代码的一致性**：由于模板方法模式将相同的行为放在了父类中，因此所有的子类都会遵循相同的行为规范，提高了代码的一致性。

缺点：

1. **可能导致代码膨胀**：如果系统中的相似行为不够复杂，使用模板方法模式可能会导致代码膨胀，因为需要定义许多具体的子类来实现相似的行为。
2. **不适合所有情况**：模板方法模式适用于具有相同行为的一组类，如果这些类的行为不同，或者不容易提取出一个通用的行为框架，那么模板方法模式可能不适用。
3. **父类对子类的依赖性**：模板方法模式中，父类的行为可能依赖于子类的实现，这会增加父类和子类之间的耦合性，降低系统的灵活性和可维护性。
## 适用场景
模板方法模式适用于以下情况：

-  当**有一个算法的框架**，但是其中的**一些步骤的实现可能不同**，**需要由子类来具体实现时**，可以考虑使用模板方法模式。
-  当想要在不同的子类中**共享相同的算法结构**，但是其中的**某些步骤可能有所不同**，需要在运行时动态选择具体步骤时，模板方法模式也是一个很好的选择。
-  当希望**避免代码重复**，**提高代码复用性和可维护性时**，可以考虑使用模板方法模式来封装共同的算法框架。
## 示例代码（Java）
这个例子中，**GameCharacter** 是模板类，定义了初始化和攻击两个模板方法，以及相关的抽象方法。**Warrior** 和 **Mage** 是具体子类，实现了抽象方法以完成具体的初始化和攻击行为。在 **Client** 类中，我们创建了一个战士实例和一个法师实例，并调用它们的初始化和攻击方法。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/mbffms.svg)
```java
// GameCharacter.java
public abstract class GameCharacter {
    public final void initialize() {
        initAttributes();
        displayCharacterType();
    }

    public final void attack() {
        performAttack();
    }

    protected abstract void initAttributes();

    protected abstract void displayCharacterType();

    protected abstract void performAttack();
}

// Warrior.java
public class Warrior extends GameCharacter {
    @Override
    protected void initAttributes() {
        System.out.println("Warrior attributes initialized.");
    }

    @Override
    protected void displayCharacterType() {
        System.out.println("Character type: Warrior");
    }

    @Override
    protected void performAttack() {
        System.out.println("Warrior attacks with a sword!");
    }
}

// Mage.java
public class Mage extends GameCharacter {
    @Override
    protected void initAttributes() {
        System.out.println("Mage attributes initialized.");
    }

    @Override
    protected void displayCharacterType() {
        System.out.println("Character type: Mage");
    }

    @Override
    protected void performAttack() {
        System.out.println("Mage casts a spell!");
    }
}

// Client.java
public class Client {
    public static void main(String[] args) {
        GameCharacter warrior = new Warrior();
        warrior.initialize();
        warrior.attack();

        System.out.println();

        GameCharacter mage = new Mage();
        mage.initialize();
        mage.attack();
    }
}
```
输出结果：
:::tips
Warrior attributes initialized.
Character type: Warrior
Warrior attacks with a sword!

Mage attributes initialized.
Character type: Mage
Mage casts a spell!
:::
## 更多参考推荐
[模板模式 | 菜鸟教程](https://www.runoob.com/design-pattern/template-pattern.html)
# 访问者模式
访问者模式是一种行为设计模式，它允许你在**不改变对象结构的前提下定义对对象结构中元素的新操作**。这种模式适用于当你**有一个对象结构**（例如，一个**复杂的数据结构**）并且**希望对这个对象结构中的元素进行不同的操作**，而**不是在每个元素上添加新的方法时使用**。

在访问者模式中，有两个主要角色：

1.  **访问者（Visitor）**：定义了对对象结构中每个元素所执行的操作。访问者模式中的每个具体访问者类都实现了这个接口，并提供了对应于每个元素类型的操作。
2.  **元素（Element）**：定义了一个接受访问者的方法，这个方法将访问者作为参数传递给元素。元素可以是单个对象，也可以是一个对象结构的一部分。
## 模式的优缺点
优点：

1. **增加新操作**：访问者模式使得可以轻松地在现有的对象结构上添加新的操作，而无需修改现有的类。这是因为访问者模式将操作封装在独立的访问者类中，使得新的操作可以通过添加新的访问者来实现，而不会影响现有的对象结构。
2. **将相关行为集中在一起**：访问者模式将相似的行为组织在同一个访问者类中，使得这些行为可以更容易地进行维护和修改。这样做有助于提高代码的可读性和可维护性。
3. **符合开闭原则**：访问者模式使得在不修改现有代码的情况下添加新的操作变得容易，符合开闭原则。只需添加新的访问者类即可实现对现有对象结构的扩展。

缺点：

1. **增加新元素困难**：访问者模式对于在对象结构中添加新的元素比较困难。因为每个访问者类都需要定义对每种元素的访问方法，所以在添加新的元素时，需要修改所有的访问者类，这可能会导致修改量较大。
2. **破坏封装**：访问者模式将访问者类中的操作分离出来，使得它们可以访问元素的内部状态。这可能会破坏元素的封装性，因为元素需要暴露一些内部细节给访问者。
3. **增加了系统复杂性**：访问者模式引入了访问者类和元素类之间的依赖关系，增加了系统的复杂性。当对象结构发生变化时，需要同时修改访问者类和元素类，这可能会增加代码的维护难度。
## 适用场景
访问者模式适用于以下情况：

-  当需要**对一个对象结构中的元素进行不同的操作**，并且这些操作需要独立于对象结构本身时，可以考虑使用访问者模式。
-  当**对象结构中的元素的类层次结构不太可能改变**，但**经常需要添加新的操作**时，访问者模式是一个很好的选择。
-  当需要**对一个对象结构中的元素进行大量不同类型的操作**时，使用访问者模式可以将这些操作组织得更加清晰，避免代码的臃肿和重复。
## 示例代码（Java）
在这个示例中，我们有两个访问者类：**TaxVisitor** 和 **DiscountVisitor**，它们分别实现了 **Visitor** 接口中的 **visit** 方法来执行计价操作。**Product** 类是商品的基类，包含了商品的价格和接受访问者的方法。**Book** 和 **Fruit** 类是具体的商品类，它们继承自 **Product** 类，并实现了 **accept** 方法来接受访问者。
在 **Client** 类中，我们创建了一个书籍和一个水果实例，并分别使用 **TaxVisitor** 和 **DiscountVisitor** 访问者来执行不同的计价操作。
![](https://ypycdn.nanshuo.icu/posts/shejimoshi/fwzms.svg)
```java
// Visitor.java
interface Visitor {
    void visit(Product product);
}

// TaxVisitor.java
class TaxVisitor implements Visitor {
    @Override
    public void visit(Product product) {
        double tax = product.getPrice() * 0.1; // 10% sales tax
        System.out.println("Applying 10% sales tax: $" + tax);
    }
}

// DiscountVisitor.java
class DiscountVisitor implements Visitor {
    @Override
    public void visit(Product product) {
        double discount = product.getPrice() * 0.2; // 20% discount
        System.out.println("Applying 20% discount: $" + discount);
    }
}

// Product.java
class Product {
    private double price;

    public Product(double price) {
        this.price = price;
    }

    public double getPrice() {
        return price;
    }

    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}

// Book.java
class Book extends Product {
    public Book(double price) {
        super(price);
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}

// Fruit.java
class Fruit extends Product {
    public Fruit(double price) {
        super(price);
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}

// Client.java
public class Client {
    public static void main(String[] args) {
        Product book = new Book(20.0);
        Product fruit = new Fruit(10.0);

        Visitor taxVisitor = new TaxVisitor();
        Visitor discountVisitor = new DiscountVisitor();

        book.accept(taxVisitor); // Applying 10% sales tax: $2.0
        fruit.accept(discountVisitor); // Applying 20% discount: $2.0
    }
}
```
输出结果：
>Applying 10% sales tax: $2.0
Applying 20% discount: $2.0

## 更多参考推荐
[访问者模式 | 菜鸟教程](https://www.runoob.com/design-pattern/visitor-pattern.html)