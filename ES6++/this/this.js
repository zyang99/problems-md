// 全局作用域下this是等于window的
// console.log(this===window); //true
// var a = 1;  //let 就不是了,var会绑定全局对象
// var b = function(){return 'function'}
// console.log(window.a === a); //true

// function test() {
//   console.log(this);
// }
// test();

// class Test{
//   constructor(){
//     this.test = function(){
//       console.log('non-static' + this);
//     }
//   }
//   t(){
//     console.log('static'+this);
//   }
// }
// const t = new Test()
// t.test( )
// t.t()
// 'use strict'
// let obj ={
//   a:'obj-a'
// }
// var a = 2;
// function test(b,c){
//   console.log(this.a,b,c);
// }
// test()
// test.call(obj,3,4)
// test.apply(obj,[3,4])
// const testbind = test.bind(obj,3)
// testbind(4)

// let obj2 = {
//   a:'obj2-a'
// }
// const testbind1 = test.bind(obj2,3,4).bind(obj,3,4)
// testbind1()
// 'use strict'
// const test = ()=>{
//   console.log(this);
// }
// test()
// let obj ={
//   a:'obj-a'
// }
// var a= 2;
// const test =()=>{
//   console.log(this.a);
// }
// test()
// test.call(obj)
// test.apply(obj)
// const testbind = test.bind(obj)
// testbind()
// new test()
// obj.test = function(){
//   // console.log(this);
//   let t1 = function(){
//     let t2 = ()=>{
//       console.log('t2',this);
//     }
//     t2()
//   }
//   t1()
// }
// obj.test()

let obj ={
  a:1,
  b:{
    c:()=>{
      console.log(this);
    }
  }
}
obj.b.c()
// let obj = {
//   a:1,
//   fun:function(){
//     console.log(this);
//   }
// }
// setTimeout(obj.fun,0)
// setTimeout('obj.fun()',0)
// function test() {
//   console.log(this == !this);
// }
// test()
