export class Stack {
  constructor() {
    this.items = []
  }
  // push ：添加新元素到栈顶
  push(...element) {
    this.items.push(element)
  }

  // pop  删除栈顶的元素，并返回删除的元素
  pop() {
    return this.items.pop()
  }

  // peek  查看(返回)一下栈顶的元素，不对栈做任何修改
  peek() {
    if(this.items.length === 0 ){
      return null
    }
    return this.items[this.items.length - 1]
  }
  // isEmpty  查看栈是否为空
  isEmpty() {
    return this.items.length === 0
  }

  // size  返回栈里元素的个数
  size() {
    return this.items.length
  }

  toString() {
    return this.items.toString()
  }
}

// 十进制转二进制
export function dec2bin(num){
  const stack = new Stack()

  while(num>0){
    let remainder = num % 2;
    num = Math.floor(num/2);
    stack.push(remainder)
  }

  let binString = ''
  while(!stack.isEmpty()){
    binString += stack.pop()
  }

  return binString
}

// 十进制转x进制:x--2,8,10  十六进制不一样
export function decx(num,x){
  const stack = new Stack()

  while(num>0){
    let remainder = num % x;
    num = Math.floor(num/x);
    stack.push(remainder)
  }

  let binString = ''
  while(!stack.isEmpty()){
    binString += stack.pop()
  }

  return binString
}

