![](es6.png)

# ES6核心特性

### ES6以上在方法中给形参设置一个默认值为function(date=''){}，可以防止无实参传入的效果。

## 项目的配置 babel webpack


## 全局作用域和块级作用域
+ 旧的ES5只有全局作用域和函数作用域（函数内），可能导致：1、内层变量覆盖外层变量；2、变量泄露，成为全局变量。
+ 提供**`let`** **`const`**来表示块级作用域
+ 使用**`let`**来避免循环体闭包问题
+ **`let`** **`const`**不可以重复声明变量


## 数组的扩展
+ `Array.from()`：将伪数组对象或可遍历兑现转换为真数组
	- 如果一个对象的所有键名都是正整数或零，并且有length属性，则是伪数组。典型的有函数的`arguments`对象，大多数DOm元素集，还有字符串。
	- ```js
	let s = 'nihao'
	s.forEach(item=>console.log(item))
	<!-- Uncaught TypeError: s.forEach is not a function
	    at <anonymous>:1:3 -->
	Array.from(s).forEach(item=>console.log(item));
	<!-- Console换行打印：n i h a o -->
	```
+ `Array.of(v1,v2,v3)`：将一系列值转换成数组
	- 当调用`new Array()`构造器时，根据传入的参数类型和数量，会有不同的结果
	- `new Array(2)` 将数组长度属性设置为这个，数组没有赋值
	- `new Array(1,2,3)` 将这些参数作为数组的值来设置。
	- `Array.of`总会创建一个包含所有传入参数的数组，而不管参数的数量与类型。不存在由于参数不同导致的重载。
	- ```js
	let items = Array.of(1, 2);
	console.log(items.length); // 2
	console.log(items[0]); // 1
	console.log(items[1]); // 2
	items = Array.of(2);
	console.log(items.length); // 1
	console.log(items[0]); // 2
	```
+ 数组实例的`find()`和`findIndex()`
	- `find()`：找出第一个符合条件的数组成员，参数是一个回调函数，所有成员依次调用，直到找到返回true的成员，返回该成员。没有返回undefined。
	- ```js
	[1, 4, -5, 10].find((n) => n < 0)
	```
	- `findIndex()`：返回第一个符合条件的成员的索引。如果所有都不符合条件，返回-1。
	- ```js
	[1, 5, 10, 15].findIndex(function(value, index, arr) {
	  return value > 9;
	}) // 2
	```
+ 数组实例的`includes()`
	- 在此之前通常使用`indexOf()`检查是否包含某个值。缺点：1、不够语义化。找到参数值的第一个出现位置，所以要去比较是否不等于-1.
	- 2、内部使用严格的全等符号（===）进行判断，会导致对NaN的误判
	-``` 
	[NaN].indexOf(NaN) // -1
	[NaN].includes(NaN) // true
	```
	- `includes()`返回布尔值，表示某数组是否含有给定的值。第一个参数表示给定的寻找值；第二个参数表示搜索的起始位置，默认为0。如果是负数，表示倒着查询；如果这时（为负数的时候）大于了数组长度，则会重置为0。
	- ```js
	[1, 2, 3].includes(2)      // true
	[1, 2, 3].includes(4)      //false
	[1, 2, 3].includes(2, -1); // true
	[1, 2, 3].includes(2, -4); // true
	[1, 2, 3].includes(2, 1);  // true
	[1, 2, 3].includes(2, 4);  // flase
	```
+ 数组实例的`entries()` `keys()` `values()`
	- 都是用来遍历数组，都返回一个遍历器对象，可用 `for...of`来进行遍历
	- 区别：`entries()`对键值对遍历；`keys()`对键名遍历；`values()`对键值遍历。
	- ```js
	for (let index of ['a', 'b'].keys()) {
	  console.log(index);
	}
	// 0
	// 1
	for (let elem of ['a', 'b'].values()) {
	  console.log(elem);
	}
	// a
	// b
	for (let [index, elem] of ['a', 'b'].entries()) {
	  console.log(index, elem);
	}
	// 0 "a"
	// 1 "b"
	```
	
## Promise