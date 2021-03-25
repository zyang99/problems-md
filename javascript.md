#### HTML 超文本标记语言 HyperText Markup Language
#### URL 统一资源定位符 Uniform Resource Locator
#### DOM 文档对象模型 Document Object Model
## 在JavaScript中一切皆对象

#### 关于字符串几个有用的函数：  A是一个字符串   
A.length  返回字符串的长度  
A.indexOf('a')  在A中是否a字符串 存在返回首次出现的位置，不存在返回-1 空字符串返回0 
A.slice(0,3)  截取字符串从0到3位置的字符串。A.slice(2) 截取从2到末尾    
A.toUpperCase() 全部转换为大写字母  
A.toLowerCase()  全部转换为小写字母 
A.replace('a','b')  替换a为b  前面除了能写字符串 还可以定义正则
	- replace(/a/g,b'')   ---- 将全部a替换成b


#### 关于数组的几个有用的函数：      B是一个数组         
B.length  返回数组的长度    
A.split(',') 将字符串按照，分隔符分割转换成数组     
B.join(',') 将数组B转换成字符串并且以，分隔符连接       
B.toString() 将数组B转换成字符串        
B.push('a') 在数组B末尾添加'a',成功返回新数组长度   
B.pop() 删除数组末尾的元素，并返回删除的元素      
B.unshift('a') 在数组B开头添加'a'，成功返回新数组长度       
B.shift() 删除数组开头的元素，并返回删除的元素



### 对象    
点表示法:点表示法只能获得字面量的成员名字   
括号表示法:除此之外还能获得变量的成员名字（所以对象又叫做关联数组。对象设置了字符串到值的映射；数组是数字到值的映射）
### this关键词    
关键字"this"指向了当前代码运行时的对象( 原文：the current object the code is being written inside )     
在字面量的对象里this似乎不是很有用，但是当用构造器创建对象的时候，this就相当有用。this指向代码运行时候的当前对象。  

### 关于querySelector(ALl)和getElementById   
query获取的是静态的，getElement获取的是动态的//===通过这两个方法获取一个表单，然后更新表单数据。静态就只会获取原有的。而动态每次更新（添加了一行后）后获取的都是不一样的。这样就无限重复了 

### 关于var和let  
var会有'变量提升'，let不能//现在更多使用的是let
### 一种常见的对象定义模式 （在构造器中定义属性，在prototype上定义方法） js中继承通过原型链来继承
```javascript
// 构造器及其属性定义
function Test(a,b,c,d) {
  // 属性定义
};
// 定义第一个方法
Test.prototype.x = function () { ... }
// 定义第二个方法
Test.prototype.y = function () { ... }
// 等等……
``` 

### 异步编程  
#### setTimeout()
```javascript
/**
 * 在指定的时间后执行一段代码
 * >函数引用
 * >在执行代码之前等待的最短时间间隔（ms）0函数将‘尽快’运行：需要在主线程为空时候执行
 * >更多参数
 */
==========================================
let myGreeting = setTimeout(function syaHi(){
  alert('hi');
},2000);
//or
function syaHi(){
  alert('hi');
};
let myGreeting = setTimeout(syaHi,2000);
//这里myGreeting是返回的一个标志符变量，

===========================================//在超时完成前可以清除超时
clearTimeout(myGreeting);

==========================================//如果函数需要参数，在setTimeout()都以列表末尾附加参数传递进去
setTimeout(syaHi,2000,'zy');

==========================================//时间设置为0的时候，回调函数会尽快执行，但是在主线程程序之后
```

#### setInterval()
```javascript
/**
 *间隔一段时间重复执行一段代码。  这个间隔时间包括代码执行时间和延迟等待时间
 *参数传递和setTimeout()一致。 重复执行的时间不能少于第二个等待时间
 */
==============================//在页面上显示时间并且每1s更新一次
function displayTime(){
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.querySelector('.demo').textContent = time;
};
const createClock = setInterval(displayTime,1000)
==============================//同样清除这个间隔时间
```
```javascript
//可以使用setTimeOut()的递归调用来实现setInterval()
let showTime = setTimeout(function displayTime(){
  let date = new Date();
  let time = date.toLocaleTimeString();
  console.log(time);
  setTimeout(displayTime,1000);
},1000);
=================================
/**
 * 相比于setInterval()，这个方式能够保证每次重复之间的间隔时间是相同的
 *
 */
```
### requestAnimationFrame()  见小球游戏的js文件里面让小球动起来
该方法是递归调用的    

## Promises