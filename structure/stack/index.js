import {Stack,dec2bin,decx} from './stack.js'

const stack = new Stack()
stack.push('ni')
stack.push('hao')
stack.push('ma')
stack.push('wo')
stack.push('hao')

console.log(stack.items);
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
console.log(stack.peek());
console.log(stack.toString());
console.log(stack.isEmpty());
console.log(stack.size());

console.log(dec2bin(8));
console.log(decx(8,8));