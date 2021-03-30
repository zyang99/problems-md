# 你平时不忙的时候，都在干嘛？
+ 我时不时会有一些问题想法冒出来，但是当时又没有时间分出时间线来解决，我就会记录下问题。然后我不忙的时候，我就会去解决这些疑惑。
[跳转](#jump)

## const\let\var区别	

* 都是用来声明变量的。const和let是ES6新增的	

var和let的区别	
* 作用域：var作用范围是全局或者函数块；let作用域则是它当前的代码块，即可以是全局或者函数块，也可以是什么if之类的代码块。==》let声明的变量作用范围更精确，使用更灵活。
* 重复声明：var允许在同一作用域中重复声明，而let不允许	
* 绑定全局对象：var声明一个全局的变量时候，会在全局对象里新建一个属性，而let不会（this.var 这个可以输出）
 - ### let vm不能用window.vm输出，只能vm输出，var vm 都可以？
* 变量提升和暂存死区：理解执行上下文的生命周期![生命周期](problem_files/1.jpg)
** 所有使用var声明的变量都会在执行上下文的创建阶段时作为变量对象的属性被创建并初始化。以名称和对应值组成对象的属性被创建，如果名称跟已声明的有相同，也不会影响。变量可以在声明之前使用。这也是为什么可以重复声明了。
** let不会变量提升，let声明变量存在暂存死区。	
	
const和let的区别	
* const和let相似，具有上述let的属性。
* const声明的是一个只读变量，声明之后不允许改变其值。所以声明必须初始化，不然报错。
* const保证的不是变量的值不变，而是保证变量指向的内存地址所保存的数据不允许改动（即栈内存在的值和地址）
* js中数据类型分为两类：原始数据类型（undefined、null、true/false、number、string）和对象数据类型（object、array、等）
* 对于原始数据类型，值就保存在变量指向的那个内存地址（栈中），const声明的原始数据变量等同于常量；
```javascript
const s='hi';
console.log(s);  //'hi'
s='hello'; //Uncaught TypeError: Assignment to constant variable.
```
* 对于对象类型数据，变量指向的内存地址中其实保存了一个指向实际数据的指针，const只能保证指针不可修改，而指针指向的数据结构是无法保证其不能被修改的（堆中）
```javascript
const obj = {
	value:1
}
obj.value=2;
console.log(obj.value); //2
obj={}   //Uncaught TypeError: Assignment to constant variable.
```
---------
## 什么是回调函数
在大多数编程语言中，函数的形参总是由外往内向函数体传递参数，但在JS里如果形参是关键字"callback"则完全相反，它便是函数体在完成某种操作后由内向外调用某个外部函数。

## promise和callback


## 箭头函数，箭头函数中的this
## 函数里面this指代哪部分（普通函数和箭头函数）
+ 在全局作用域中出现的this，指全局对象
+ 在函数内部出现的this，指代什么要看函数被调用的方式
	- 被直接调用时，this指全局对象window
	- 被作为构造函数时，this指当前正在构建的对象
	- 被作为某个对象A的方法调用时，this指方法所属的对象A
	- 使用函数的apply或者call方法时，this指第一个参数
+ 箭头函数中的this
	- 箭头函数中不绑定this，它会捕获其所在上下文的this值（实际内部没有this，会拷贝上级的this指向）
	- 箭头函数的this,总是指向**定义时（在Vue实例里面但是它定义的时候没有这个实例。Vue实例有创建时间）**所在的对象，而不是运行时所在的对象
+ 在对象方法定义中有this指向的时候不要使用箭头函数，这时this会变成静态的
+ 需要动态this的时候不要使用箭头函数

## javascript中in和of的区别
+ 最直接的区别就是 for in遍历的是数组的索引。for of遍历的是数组元素值
+ for of 遍历数组
+ for in 遍历对象


## 缓存池	
## html中导入js文件到底在什么地方导入？
+ 凡是没有绑定加载事件(如：window.onload、$(document).ready())的js文件中的代码，在本文件（代码）加载完成后立即解析执行。
+ 对于必须要在DOM加载之前运行的JavaScript脚本，我们需要把这些脚本放置在页面的head中，
而不是通过外部引用的方式，因为外部的引用增加了网络的请求次数；
并且我们要确保内敛的这些JavaScript脚本是很小的，最好是压缩过的，并且执行的速度很快，
不会造成浏览器渲染的阻塞。
+ 对于支持使用script标签的async和defer属性的浏览器，我们可以使用这两个属性；其中需要注意的点就是，
async表示的意思是异步加载JavaScript文件，它的下载过程可以在HTML的解析过程中进行，
加载完成之后立即执行这个文件的代码，执行文件代码的过程中会阻塞HTML的解析，
它不保证文件加载的顺序。defer表示的意思是在HTML文档解析之后在执行加载完成的JavaScript文件，
JavaScript文件的下载过程可以在HTML的解析过程中进行，它是按照script标签的先后顺序来加载文件的。
更多详细的解释可以参考async vs defer attributes
+ 一般是需要在页面加载之前运行的js脚本需要放置在head中，很重要的就进行同步加载（会阻塞页面渲染）。有一部分放在head中可以
可以添加async来实现异步加载。以及defer这些属性 

## 0.1 + 0.2 = 0.30000000000000004 ？？？？

[有关于0.1+0.2！=0.4 ](https://zhuanlan.zhihu.com/p/95318421)

## foreach -- some --- filter --- findIndex  --- includes  --- padStart --padEnd  (补零)
## 模板字符串的使用


## JSONP

## console.log('ni ',ni) 和 console.log('ni '+ni) 
+ ,是传参进来，进行输出。逗号的位置会输出空格。
+ +是进行连接，然后输出（+后面不是字符串的会先转换成能进行+操作的类型）

