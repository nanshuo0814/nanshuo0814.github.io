---
title: React 快速入门学习
date: 2024-07-24
cover: https://ypycdn.nanshuo.icu/posts/react_learn/react_logo.png
excerpt: 本文详细介绍了 React 的基础知识，包括安装、项目目录、核心语法等，还通过 TodoList 案例巩固了相关知识，展示了丰富的代码和效果。 
#permalink: /archives/WFfRmJ7i
isOriginal: true
category:
 - react
tag: 
 - react
 - 前端
---


中文官网：[https://zh-hans.react.dev/learn](https://zh-hans.react.dev/learn)
使用前端开发工具 VSCode 来学习
# React 基础知识
### 安装 React
进入要存放代码的目录，打开cmd，输入一下目录：
```bash
npx create-react-app 项目名字
```
例如：npx create-react-app react-learn-demo
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image.png)
### 项目目录
使用 VSCode 打开查看具体目录结构：
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image1.png)
### 启动项目
进入 package.json 文件，查看启动项目的命令：
```bash
npm run start
```
打开谷歌浏览器输入：[http://localhost:3000/](http://localhost:3000/)，看到一下界面表示项目启动成功！
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image2.png)
### 核心语法
#### React 组件的两种创建方式

1. 函数组件：官方推荐使用，本文章以这种方式学习
2. 类组件：相对写起来比函数组件复杂一些

App.js：函数组件方式
```jsx
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```
App.js：类组件方式
```tsx
import React, { Component } from'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
```
#### function App() {}
定义了一个名为 `App` 的函数组件。在 React 中，组件是构建用户界面的基本单元
#### 使用 export default App;
将组件导出，以便在其他模块中可以导入和使用这个组件
#### return 语句
函数组件必须使用 `return` 语句来返回要渲染的内容，`return`后面通常是搭配 "()" 来使用，如果你是单行写完所有的代码，就可以省略这个花括号，否则就要加上这个括号（换行、多行写代码情况下），相对于`return`应该表达式返回，（）里面的内容就代表一个表达式一样，可以这么理解
返回单行代码：这个只能单行写完所有要返回的代码
```tsx
function App() {
  return <div>hello react!</div>
}

```
返回多行：
```javascript
function App() {
  return (
    <div>hello react!</div>
  );
}

export default App;
```
#### 闭合标签
在 JSX 中，所有的标签都必须正确闭合，例如 `<div>` 要有对应的 `</div>`
错误示范：`<div>hello react!</div`
```tsx
function App() {
  return (
    <div>hello react!</div
  );
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image3.png)
#### 只能返回一个根元素
正确的写法：
```jsx
function App() {
  return (
    <div>hello react!</div>
  );
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image4.png)
错误的写法：编译会出错
```tsx
function App() {
  return (
    <div>hello react!</div>
    <div>hello react!</div>
    <div>hello react!</div>
  );
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image5.png)
> 解决不能返回多个根元素的问题

使用`jsx`提供的空标签：`<></>`
```tsx
function App() {
  return (
    <>
      <div>hello react!</div>
      <div>hello react!</div>
      <div>hello react!</div>
    </>
  );
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image6.png)
再包一层`div`容器
```tsx
function App() {
  return (
    <div>
      <div>hello react!</div>
      <div>hello react!</div>
      <div>hello react!</div>
    </div>
  );
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image7.png)
#### ClassName
在 React 中，`className` 用于为组件或元素添加 CSS 类名（不使用class），以应用相应的样式
```jsx
function App() {
  return <div class="myDiv">myDiv</div>;
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image8.png)
以下是一些关于 `className` 的要点和示例：

1. 基本用法：
   - 可以直接将字符串作为 `className` 的值。
     例如：`<div className="my-class">...</div>`
2. 多个类名：
   - 可以通过空格分隔多个类名。
     例如：`<div className="class1 class2">...</div>`
3. 动态类名：
   - 可以根据组件的状态或其他条件来动态设置 `className` 。
     例如：
```jsx
const [isActive, setIsActive] = useState(false);
<button className={isActive? 'active' : ''}>按钮</button>
```

4. 与 CSS 模块结合：
   - 如果使用 CSS 模块，可以通过导入并使用特定的对象来设置 `className` 。
     例如：
```jsx
import styles from './styles.module.css';
<div className={styles.myDiv}>...</div>
```
#### 插值语法
大花括号：`{ 变量 }`，应用很广泛，很灵活！！！
最简单的实现：
```tsx
function App() {
  const value = 10; 
  return <div>{value}</div>;
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image9.png)
#### 条件渲染
```tsx
function App() {
  let value = ''
  const flag = true
  if (flag) {
    value = <a href="https://github.com/nanshuo0814">这是一个链接</a>
    // 加上单引号变成字符串
    // value = '<a href="https://github.com/nanshuo0814">这是一个链接</a>'
  } else {
    value = <span>这是一个span</span> 
  }
  return (
    <div>{ value }</div>
  );
}

export default App;
```
flag：true
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image10.png)
如果 value 的值加上了单引号，表示它就是一个单纯是字符串了，而不是渲染标签了
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image11.png)
flag：false
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image12.png)
#### 列表渲染
```tsx
function App() {
  const list = [
    { id: 1, name: "南烁" },
    { id: 2, name: "小南" },
    { id: 3, name: "小烁" },
  ];
  const listContent = list.map(item =>( 
    <li key={item.id}>{item.name}</li>
  ));
  return <ul>{listContent}</ul>;
}

export default App;
```
`<li key={item.id}>{item.name}</li>`：其中 key 属性里面也使用了插值语法，就是动态获取 item.id
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image14.png)
`Fragment`标签的使用：
由于 React 的返回只能有一个根元素，导致如果列表的每一行返回都加上分隔符返回的话，可能就需要借助它了，需求时下面这样
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image15.png)
代码实现：
```tsx
import { Fragment } from "react";

function App() {
  const list = [
    { id: 1, name: "南烁" },
    { id: 2, name: "小南" },
    { id: 3, name: "小烁" },
  ];
  const listContent = list.map((item) => (
    <Fragment key={item.id}>
      <li key={item.id}>{item.name}</li>
      <div>===========</div>
    </Fragment>
  ));
  return <ul>{listContent}</ul>;
}

export default App;
```
> 为什么不使用 <></> ?

因为需要为子元素添加`key`唯一标识

1. `<></>`是 Fragment 的一种简写形式，它的作用是在无需向 DOM 添加额外节点的情况下，对一组子元素进行分组。使用`<></>`可以使代码更加简洁，并且避免了不必要的 DOM 嵌套，提高了性能和可维护性
2. 然而，`<></>`不支持添加`key`属性。而`key`在 React 中是非常重要的，特别是在处理列表渲染等情况下。`key`可以帮助 React 更高效地更新和渲染组件，识别列表中元素的变化，从而正确地进行元素的添加、删除和移动等操作
3. 当渲染一个列表时，如果没有为每个列表项提供`key`，React 会发出警告，并且在性能和渲染的准确性上可能会出现问题
4. 在这种需要为子元素添加`key`的场景下，就不能使用`<></>`，而必须使用完整的`<Fragment>`形式并添加`key`属性
#### 事件触发
```tsx
import { Fragment } from "react";

function App() {
  const handleClick = () => {
    alert('按钮被点击了');
  };
  return (
    <button onClick={handleClick}>按钮</button>
  );
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image16.png)
#### useState 的使用
```tsx
import { useState } from "react";

function App() {
  // 声明一个名为 count 的状态变量，并将其初始值设为 0
  // setCount 是用于更新 count 状态的函数
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // 通过调用 setCount 函数来更新 count 的值
    setCount(count + 1);
    console.log("count++");
  };

  return (
    <div>
      <p>数量: {count}</p>
      <button onClick={handleIncrement}>数量 + 1</button>
    </div>
  );
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image17.png)
> 引入问题：由于上面定义的 setCount 是直接替换旧值，对于只有单个属性的修改，可能影响不大，但对于列表、数组数据的修改则会出现数据丢失的问题

实例代码：
```tsx
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "南烁" },
    { id: 2, name: "小南" },
    { id: 3, name: "小烁" },
  ]);

  const listData = data.map(item => (
    <li key={item.id}>{item.name}</li>
  ))

  const [id, setId] = useState(4)
  
  const handleClick = () => {
    setData([
      // 浅拷贝
      ...data,
      { id: id, name: "小光" + id }
    ]);
    setId(id + 1)
    console.log(id)
  }

  return (
    <>
      <ul>{listData}</ul>
      <button onClick={handleClick}>添加一条数据</button>
    </>
  );
}

export default App;
```
正常情况下：
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image18.png)
如果没有添加`...data`的话：也就是注释掉这行代码，点击添加一条数据就会出现下面的现象，之前的数据都没了，只显示新添加的数据
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image19.png)
如果将`...data`搞到最后，点击添加一条数据时，就会在头部添加，展开运算符
```tsx
setData([
  { id: id, name: "小光" + id },
  // 浅拷贝
  ...data,
]);
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image20.png)
#### filter 过滤器
过滤 id == 2 的数据：
```tsx
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "南烁" },
    { id: 2, name: "小南" },
    { id: 3, name: "小烁" },
  ]);

  const listData = data.map((item) => <li key={item.id}>{item.name}</li>);

  const handleClick = () => {
    setData(data.filter((item) => item.id !== 2));
    console.log("已过滤~");
  };

  return (
    <>
      <ul>{listData}</ul>
      <button onClick={handleClick}>过滤 id 为2的数据</button>
    </>
  );
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image21.png)
### 组件通信与插槽
#### 插槽
插槽的使用场景演示，根据下面的案例，可以以此类推出许多可能的场景，例如：父子组件传值等等场景
以 img 标签为例：style 样式里面的字属性名字如果是下划线连接的都变成了驼峰式命名了，如：background-color ==> backgroundColor
```jsx
import favicon from "./logo.svg";

function App() {
  const imgStyle = {
    width: 200,
    height: 200,
    backgroundColor: "red",
  };

  const imgData = {
    className: "App-logo",
    style: {
      width: 200,
      height: 200,
      backgroundColor: "green",
    },
  };

  return (
    <div>
      {/* 第一种实现方式，常规 */}
      <img
        src={favicon}
        alt="logo"
        className="App-logo"
        style={{
          width: 200,
          height: 200,
          backgroundColor: "grey",
        }}
      />
      {/* 第二种实现方式，使用插槽 */}
      <img src={favicon} alt="logo" className="App-logo" style={imgStyle} />
      {/* 第三种实现方式，使用展开运算符+插槽，简化标签的属性，让看起来更加清晰 */}
      <img src={favicon} alt="logo" {...imgData} />
    </div>
  );
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image22.png)
#### React 组件的Props
```jsx
// 第一种写法
function Article1(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>{props.active ? "真值" : "假值"}</p>
    </div>
  );
}
// 第二种写法
function Article2({ title, content, active }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{active ? "真值" : "假值"}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Article1
        title="React"
        content="React 是由 Facebook 推出的一个用于构建用户界面的 JavaScript 库。"
        active
      />
      <Article2
        title="Vue"
        content="Vue.js 是一套构建用户界面的渐进式 JavaScript 框架。"
      />
    </>
  );
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image23.png)
#### React 组件中展开 Props 使用场景
> 嵌套式 props，多层嵌套，实际开发业务里会出现这种需求，也是一样的道理使用插槽和展开运算符传递参数，以此类推

```jsx
function Detail({ title, content, active }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{content}</div>
      <div>{active ? "真" : "假"}</div>
    </div>
  );
}

function Article({ title, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <Detail
        {...content}
      />
    </div>
  );
}

function App() {
  const data = {
    title: "标题",
    content: {
      title: "Vue",
      content: "Vue.js 是一套构建用户界面的渐进式 JavaScript 框架。",
      active: true,
    },
  };

  return (
    <>
      <Article {...data} />
    </>
  );
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image24.png)
#### 将 JSX 作为 Props 传递（组件插槽）
参数`footer`的默认值 + `children`（用于接收列表项）
```jsx
function List({ children, title, footer = <div>默认底部</div> }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>{children}</ul>
      {footer}
    </>
  );
}

function App() {
  return (
    <>
      <List title="列表标题1" footer={<div>列表底部1</div>}>
        <li>列表项1</li>
        <li>列表项2</li>
        <li>列表项3</li>
      </List>
      <List title="列表标题2">
        <li>列表项1</li>
        <li>列表项2</li>
        <li>列表项3</li>
      </List>
    </>
  );
}

export default App;
```
#### 子组件向父组件传递
```jsx
import { useState } from "react";

function Detail({ onActive }) {
  const [status, setStatus] = useState(false);
  function handleClick() {
    setStatus(!status);
    onActive(status);
  }
  return (
    <>
      <button onClick={handleClick}>按钮</button>
      {status && <div>hello world</div>}
    </>
  );
}
function App() {
  function handleActive(status) {
    console.log(status);
  }
  return (
    <>
      <Detail onActive={handleActive} />
    </>
  );
}

export default App;
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image25.png)
#### 使用 Content 进行多级组件传值
Context 提供了一种在组件树中跨层级共享数据的方式，无需通过中间组件逐层传递 props
在最顶层的组件中（通常是父组件或祖先组件），使用`Provider`来包裹子组件，并通过`value`属性提供要共享的数据
使用 Content 前：
```jsx
import { createContext } from "react";

export function Section({ children }) {
  return <section className="section">{children}</section>;
}

export function Heading({ level, children }) {
  switch (level) {
    case 1:
      return <h1 className="heading-level-1">{children}</h1>;
    case 2:
      return <h2 className="heading-level-2">{children}</h2>;
    case 3:
      return <h3 className="heading-level-3">{children}</h3>;
    case 4:
      return <h4 className="heading-level-4">{children}</h4>;
    case 5:
      return <h5 className="heading-level-5">{children}</h5>;
    case 6:
      return <h6 className="heading-level-6">{children}</h6>;
    default:
      throw Error("未知的 level: " + level + ", 仅支持 1-6");
  }
}

export default function App() {
  return (
    <div>
      <Section>
        <Heading level={1}>h1</Heading>
        <Heading level={2}>h2</Heading>
        <Heading level={3}>h3</Heading>
        <Heading level={4}>h4</Heading>
        <Heading level={5}>h5</Heading>
        <Heading level={6}>h6</Heading>
      </Section>
      <Section>
        <Heading level={1}>h1</Heading>
      </Section>
    </div>
  );
}
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image26.png)
使用 Content 后：
```jsx
import { createContext, useContext } from "react";

export function Section({ children }) {
  const level = useContext(LevelContent);
  return (
    <section className="section">
      <LevelContent.Provider value={level + 1}>
        {children}
      </LevelContent.Provider>
    </section>
  );
}

export function Heading({ children }) {
  const level = useContext(LevelContent);
  switch (level) {
    case 1:
      return <h1 className="heading-level-1">{children}</h1>;
    case 2:
      return <h2 className="heading-level-2">{children}</h2>;
    case 3:
      return <h3 className="heading-level-3">{children}</h3>;
    case 4:
      return <h4 className="heading-level-4">{children}</h4>;
    case 5:
      return <h5 className="heading-level-5">{children}</h5>;
    case 6:
      return <h6 className="heading-level-6">{children}</h6>;
    default:
      throw Error("未知的 level: " + level + ", 仅支持 1-6");
  }
}

const LevelContent = createContext(0);

export default function App() {
  return (
    <div>
      <Section>
        <Heading>h1</Heading>
        <Section>
          <Heading>h2</Heading>
          <Section>
            <Heading>h3</Heading>
            <Section>
              <Heading>h4</Heading>
              <Section>
                <Heading>h5</Heading>
                <Section>
                  <Heading>h6</Heading>
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
      <Section>
        <Heading>h1</Heading>
      </Section>
    </div>
  );
}
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image27.png)
#### useReducer 用于统一管理状态
跟 useState 一样的功能，不过这个能够处理更加复杂一点的状态，更细的操作

1. 使用 useState：
```jsx
import { useState } from "react";

export default function App() {
  // 计数器
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
    console.log("+1");
  };
  const handleDecrease = () => {
    setCount(count - 1);
    console.log("-1");
  };
  return (
    <div style={{ padding: 10 }}>
      <button style={{ margin: 10 }} onClick={handleDecrease}>
        -
      </button>
      <span>{count}</span>
      <button style={{ margin: 10 }} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
```

2. 使用 useReducer：
```jsx
import { useReducer, useState } from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

export default function App() {
  // 计数器
  const [state, dispatch] = useReducer(countReducer, 0);

  const handleIncrease = () => {
    dispatch({ type: "increment" });
    console.log("+1");
  };
  const handleDecrease = () => {
    dispatch({ type: "decrement" });
    console.log("-1");
  };
  return (
    <div style={{ padding: 10 }}>
      <button style={{ margin: 10 }} onClick={handleDecrease}>
        -
      </button>
      <span>{state}</span>
      <button style={{ margin: 10 }} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
```

3. 运行结果

![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image28.png)
#### useRef 的使用
```jsx
import { useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();
  function handleClick() {
    prevCount.current = count;
    setCount(count + 1);
    console.log("count+1");
  }

  return (
    <div>
      <p>最新的 count: {count}</p>
      <p>上次的 count: {prevCount.current}</p>
      <button onClick={handleClick}>增大count</button>
    </div>
  );
}
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image29.png)
#### ref useImperativeHandle 的使用
ref 用于引用 DOM 元素或组件实例

1. 访问 DOM 元素：可以对 DOM 进行直接操作，例如获取元素的尺寸、位置等属性，或者调用 DOM 方法。
2. 操作子组件实例：与子组件进行交互，调用子组件的方法。

使用方式

1. `ref` 可以通过字符串形式创建，但这种方式已不被推荐。
2. 更常用的是使用回调函数形式，例如： `<div ref={(node) => this.myDiv = node}>`

`useImperativeHandle` 是一个 React Hook，它允许你自定义父组件通过 `ref` 获取子组件实例的公开方法。通过使用 `useImperativeHandle`，可以选择性地暴露子组件的特定属性或方法给父组件
```jsx
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
const Child = forwardRef(function (props, ref) {
  useImperativeHandle(ref, () => ({
    myFn: () => {
      console.log('子组件的myFn方法');
    }
  }));
  return (
    <div>子组件</div>
  );
})
export default function App() {
  const childRef = useRef()
  function handleClick() {
    childRef.current.myFn()
  }
  return (
    <div>
      <Child ref={childRef} />
      <button onClick={handleClick}>按钮</button>
    </div>
  );
}
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image30.png)
#### useEffect 的使用
`useEffect` 是 React 中的一个钩子函数，用于在函数组件中处理副作用操作。
副作用操作包括但不限于数据获取、订阅事件、手动修改 DOM 等操作，这些操作不应该在组件的渲染过程中直接进行。
`useEffect` 接受两个参数：

1. 第一个参数是一个回调函数，用于执行副作用操作。
2. 第二个参数是一个数组，用于控制副作用函数的执行时机。

如果第二个参数数组为空 `[]` ，则副作用函数仅在组件挂载和卸载时执行。
如果数组中有值，只有当这些值发生变化时，副作用函数才会重新执行
```jsx
import { useEffect, useReducer, useState } from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

export default function App() {
  // 计数器
  const [state, dispatch] = useReducer(countReducer, 0);

  const handleIncrease = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrease = () => {
    dispatch({ type: "decrement" });
  };

  // 监听state的变化
  useEffect(() => {
    console.log("useEffect");
  },[state]);
  

  return (
    <div style={{ padding: 10 }}>
      <button style={{ margin: 10 }} onClick={handleDecrease}>
        -
      </button>
      <span>{state}</span>
      <button style={{ margin: 10 }} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image31.png)
如果第二个参数为空 [] ：
```jsx
  useEffect(() => {
    console.log("useEffect");
  }, []);
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image32.png)
#### useMemo 的使用
React 中的一个钩子函数，用于对计算结果进行缓存和优化
它接受两个参数：

1. 第一个参数是一个函数，用于执行计算操作并返回结果。
2. 第二个参数是一个数组，用于指定依赖项。只有当依赖项中的值发生变化时，才会重新计算结果。
```jsx
import React, { useState, useMemo } from'react';

export default function App() {
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(10);

  const product = useMemo(() => {
    console.log('Calculating product...');
    return num1 * num2;
  }, [num1, num2]);  // 当 num1 或 num2 变化时重新计算乘积

  return (
    <div>
      <p>Num1: {num1}</p>
      <p>Num2: {num2}</p>
      <p>Product: {product}</p>
      <button onClick={() => setNum1(num1 + 1)}>Increase Num1</button>
      <button onClick={() => setNum2(num2 + 1)}>Increase Num2</button>
    </div>
  );
}
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image33.png)
#### useCallback 的使用
`useCallback` 是 React 中的一个钩子函数，用于缓存函数定义，以避免在每次组件重新渲染时都创建新的函数实例。
它接受两个参数：

1. 要缓存的回调函数 `fn`：这是你希望在重新渲染之间缓存的函数。它可以接受任何参数并返回任何值。在初始渲染时，`useCallback` 会返回这个函数。在后续渲染中，如果依赖项没有改变，它将返回之前缓存的函数；如果依赖项发生变化，则返回新传入的函数并进行缓存。
2. 依赖项数组 `dependencies`：这是一个数组，其中包含了在回调函数中使用到的所有响应式的值（如 props、state 以及在组件内部直接声明的变量和函数等）。如果依赖项中的任何一个值发生变化，`useCallback` 将会返回一个新的函数。

使用 `useCallback` 的主要目的是优化性能，特别是在将函数作为 props 传递给子组件时。如果不使用 `useCallback` 缓存函数，每次父组件重新渲染时，子组件接收到的函数都是一个新的实例，即使函数的内容没有变化，也可能导致子组件不必要的重新渲染。通过缓存函数，可以确保在依赖项不变的情况下，子组件接收到的是同一个函数引用，从而避免不必要的渲染
```jsx
import React, { useState, useCallback } from'react';

export default function App() {
  const [count, setCount] = useState(0);

  // 使用 useCallback 缓存 increment 函数
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button> 
    </div>
  );
}
```
# React TodoList 案例实现
接着巩固昨天的 React 知识学习，做一个 TodoList 清单案例实现
[https://www.bilibili.com/video/BV1WC4y1B7Uq/?p=4&spm_id_from=pageDriver](https://www.bilibili.com/video/BV1WC4y1B7Uq/?p=4&spm_id_from=pageDriver)
中文 React 文档官网：[https://zh-hans.react.dev/learn](https://zh-hans.react.dev/learn)
### 安装 React
```bash
npx create-next-app@latest
```
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image34.png)
### 项目结构
使用 VSCode 打开项目查看
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image35.png)
### 启动项目
执行命令：
```bash
npm run dev
```
打开浏览器输入：[http://localhost:3000/](http://localhost:3000/)，看到下面的页面表示启动成功
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image36.png)
### 排除其他的依赖干扰
注释掉全局的 css 样式代码文件 `global.css`，或者直接在`layout.tsx`注释掉导入`global.css`的代码即可
```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// 注释掉全局css代码
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
                                      children,
                                   }: Readonly<{
   children: React.ReactNode;
}>) {
   return (
           <html lang="en">
           <body className={inter.className}>{children}</body>
           </html>
   );
}
```
### 入口文件 page.tsx
在这个文件作为程序的入口
先清空原有的代码，进行开发 TodoList 清单项目
```tsx
// 导入React相关的hooks和组件
"use client";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import TodoFilter from "./component/TodoFilter";
import { useCallback, useMemo, useState } from "react";
import { Todo } from "./types";

// 定义Home组件
export default function Home() {
   // 初始化todos状态和设置todos状态的方法，todos是一个Todo类型的数组
   const [todos, setTodos] = useState<Todo[]>([]);
   // 初始化filter状态和设置filter状态的方法，filter是一个字符串，表示当前的过滤状态
   const [filter, setFilter] = useState("all");

   // 使用useCallback hook定义一个添加todo的方法，确保在todos状态变化时，该方法不会被重新创建
   const addTodo = useCallback((text: string) => {
      const newTodo = {
         id: Math.floor(Math.random() * 100), // 生成一个0-99之间的随机整数作为id
         title: text,
         completed: false,
      };
      setTodos([...todos, newTodo]); // 将新的todo添加到todos数组的末尾
   }, [todos]);

   // 定义一个删除todo的方法
   const deleteTodo = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id)); // 过滤掉指定id的todo
   };

   // 定义一个切换todo完成状态的方法
   const toggleTodo = (id: number) => {
      setTodos(
              todos.map((todo) => {
                 if (id === todo.id) {
                    return { ...todo, completed: !todo.completed }; // 如果todo的id匹配，则切换其完成状态
                 }
                 return todo; // 如果todo的id不匹配，则返回原todo
              })
      );
   };

   // 使用useMemo hook定义一个根据filter状态过滤todos的方法
   // 当todos或filter状态变化时，该方法会重新计算并返回一个新的todos数组
   const filterTodos = useMemo(() => {
      switch (filter) {
         case "all":
            return todos; // 返回所有todos
         case "active":
            return todos.filter((todo) => !todo.completed); // 返回未完成的todos
         case "completed":
            return todos.filter((todo) => todo.completed); // 返回已完成的todos
         default:
            throw new Error("Unknown filter"); // 如果filter状态不是"all"、"active"或"completed"，则抛出一个错误
      }
   }, [todos, filter]);

   // 返回JSX，定义组件的UI结构
   return (
           <div style={{ width: "360px" }}>
              <h1>TodoList</h1>
              {/* 将addTodo方法传递给AddTodo组件 */}
              <AddTodo addTodo={addTodo}></AddTodo>
              {/* 将getFilterTodos、deleteTodo和toggleTodo方法传递给TodoList组件 */}
              <TodoList todos={filterTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
              {/* 将setFilter方法传递给TodoFilter组件 */}
              <TodoFilter setFilter={setFilter}></TodoFilter>
           </div>
   );
}
```
### 新建 types.ts
接口定义：代办事件 Todo

1. id：唯一标识
2. title：代办事件名称
3. completed：是否完成代办事件
```typescript
export interface Todo {
   id: number;
   title: string;
   completed: boolean;
}
```
### 新建 component 文件夹
存放用到的各个组件：顾名思义

1. AddTodo：添加代办事件
2. TodoList：代办事件列表
3. TodoItem：代办事件各项
4. TodoFilter：查询过滤全部、代办、已办事件
#### AddTodo
```tsx
import { useEffect, useState } from "react";
interface AddTodoProps {
   addTodo: (text: string) => void;
}
export default function AddTodo({ addTodo }: AddTodoProps) {
   const [text, setText] = useState("");
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (text.trim() !== "") {
         addTodo(text);
         setText("");
      } else {
         alert("代办内容不能为空");
      }
   };

   const inputStyle = {
      width: 250,
      height: 23,
      borderRadius: 5,
   };

   const buttonStyle = {
      height: 30,
      backgroundColor: "green",
      color: "#fff",
      marginLeft: "5px",
      cursor: "pointer",
      borderRadius: 5,
   };

   // 监听文本框内容变化 
   useEffect(() => {
      console.log(text);
   }, [text]);

   return (
           <form onSubmit={handleSubmit}>
              <input
                      style={inputStyle}
                      type="text"
                      placeholder="输入代办事件"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
              />
              <button style={buttonStyle}>添加代办事件</button>
           </form>
   );
}
```
#### TodoList
```tsx
import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
   todos: Array<Todo>;
   toggleTodo: (id: number) => void;
   deleteTodo: (id: number) => void;
}

export default function TodoList({
                                    todos,
                                    toggleTodo,
                                    deleteTodo,
                                 }: TodoListProps) {
   return (
           <div>
              {todos.map((todo) => (
                      <TodoItem
                              key={todo.id}
                              todo={todo}
                              toggleTodo={toggleTodo}
                              deleteTodo={deleteTodo}
                      ></TodoItem>
              ))}
           </div>
   );
}
```
#### TodoItem
```tsx
export default function TodoItem({ todo, toggleTodo, deleteTodo }: any) {
   return (
           <div
                   style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                      marginTop: "10px",
                   }}
           >
              {todo.title}
              <span style={{ float: "right" }}>
        <button
                style={{ marginRight: "10px", cursor: "pointer" }}
                onClick={() => toggleTodo(todo.id)}
        >
          切换
        </button>
        <button
                style={{ marginRight: "10px", cursor: "pointer" }}
                onClick={() => deleteTodo(todo.id)}
        >
          删除
        </button>
      </span>
           </div>
   );
}
```
#### TodoFilter
```tsx
export default function TodoFilter({ setFilter }: any) {
   return (
           <div style={{marginTop: '10px'}}>
              <button style={{ marginRight: '10px',cursor: 'pointer' }} onClick={() => setFilter("all")}>全部</button>
              <button style={{ marginRight: '10px',cursor: 'pointer' }} onClick={() => setFilter("active")}>代办</button>
              <button style={{ cursor: 'pointer' }} onClick={() => setFilter("completed")}>已办</button>
           </div>
   );
}
```
### 效果展示
#### 初始页面
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image37.png)
#### 添加清单
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image38.png)
#### 清单任务完成
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image39.png)
#### 全部清单
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image40.png)
#### 代办清单
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image41.png)
#### 已办清单
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image42.png)
#### 删除清单任务
![image.png](https://ypycdn.nanshuo.icu/posts/react_learn/image43.png)