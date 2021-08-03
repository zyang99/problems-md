## vuex 和 vue-bus

+ 父子之间的通信有props、$emit、ref、parent、child
+ 但是对于兄弟组件以及更深层次关系的组件之间通信。需要使用到vuex和vue-bus
  + vuex 不但能够实现组件间的通信，还提供了相应的逻辑处理方法，但是较为庞大
  + vue-bus 适用于不太复杂的项目中任意组件的传值问题

### vue-bus

+ 导包，导入文件夹。新建一个bus.js 文件

  + 或者有插件，使用插件---插件需要安装

  - ```js
    import Vue from 'vue'
    export const vBus = new Vue()
    ```

+ 先有接收方监听动作(一般尽早监听：在created()里面，或者在munted())

  + ```js
    import vBus from 'bus.js'
    created(){
        vBus.$on('change',callback)  //param1：监听的事件名。param2:调用的回调函数
    }
    // 在离开页面的时候没必要监听，需要销毁这个监听事件
    beforeDestory(){
        vBus.$off('change',callback)
    }
    ```

- 再有发送方

  - ```JS
    import vBus from 'bus.js'
    //在某个需要发送的地方 
    vBus.$emit('change',content)   //param1：发送的事件名  param2：随着发送的内容参数
    ```

## 正则表达式

+ 构造正则表达式的方法和创建数学表达式的方法一样。也就是用多种元字符与运算符可以将小的表达式结合在一起来创建更大的表达式。正则表达式的组件可以是单个的字符、字符集合、字符范围、字符间的选择或者所有这些组件的任意组合。

+ 正则表达式写在 /.../ 里面

+ 限定符

  + `？`   表示前面的字符出现1次或者0次。（可有可无）

    + ```js
      /https?/       //可匹配http 和 https
      ```

  + `*`  表示前面的字符出现0次或者多次。

    + ```js
      /ab*c/      //可匹配 ac abc abbbbc
      ```

  + `+` 表示前面的字符出现1次以上

    + ```js
      /ab+c/        //可匹配 abc  abbbc  abbbbbbc
      ```

  + `{x}` 表示前面的字符出现次数为x次

    + ```js
      /ab{5}c/    //可匹配 abbbbbc
      ```

  + `{x,y}` 表示前面的字符出现次数范围内（x,y） 

    + ```js
      /ab{1,6}c/    //可匹配b出现次数1-6次 abc abbc abbbc abbbbc                                                 abbbbbc  abbbbbbc
      /ab{0,1}c/    //可匹配b出现次数0-1次 类似于/ab?c/
      ```

    + ```js
      /ab{1,}c/    //可匹配b出现次数1次以上的 类似于/ab+c/
      /ab{0,}c/    //可匹配b出现次数0次以上的 类似于/ab*c/
      ```

    + ```js
      /ab{,5}c/     //没有这样的写法
      ```

  + `(abc)` 使用括号把abc作为限定符操作对象

    + ```js
      /(ab)?c/   //可匹配ab出现0次或者1次  可匹配 abc c
      ```

+ 或运算



# JS常用的循环遍历

+ 数组
  + for
  + for...of
  + forEach
  + some
  + every
  + filter
  + map
  + find
  + findIndex
  + reduce
  + reduceRight

+ 对象

  + for...in
  + Object.keys
  + Object.values
  + Object.entries
  + Object.getOwnPropertyNames

# Typescript

### 基础类型

+ 布尔值boolean

+ 数字number

+ 字符串string

+ 数组array

  + 数组泛型 

  + ```js
    let list:Array<number>=[1,2,3]
    ```

+ 元组tulpe
+ 枚举enmu
+ Any-----不清楚类型的变量，这些值可能来自于动态的内容。我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查

+ Void-----表示没有任何类型：当一个函数没有返回值时，其返回值类型是Void；对一个变量声明Void类型，只能赋予undefined和null
+ Null和Undefined
+ Never-----表示那些永不存在的值的类型。是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。

#### 非原始类型

+ Object 

#### 类型断言

类型断言，相当于告诉编译器，我知道自己在干嘛，我很确定。好比类型转换

+ ```typescript
  //'尖括号'语法
  let someValue: any = "this is a string";
  
  let strLength: number = (<string>someValue).length;
  ```

+ ```typescript
  //as 语法
  let someValue: any = "this is a string";
  
  let strLength: number = (someValue as string).length;
  ```




### 变量声明







#### 模块化： JS 模块

+ 随着业务逻辑增加，代码越来越多且复杂。为了复用JS，简化代码，提高js运行效率
+ 能够提供特定功能的单独JS文件

#### 组件化

+ 一个页面的功能点很多，界面复杂。复用代码，简化项目编写，提高运行效率。
+ 用来实现局部功能效果的代码和资源集合