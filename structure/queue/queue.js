export class Queue {
  constructor() {
    this.items = []
  }

  // enqueue：向队尾添加一个或多个新选项
  enqueue(...element) {
    this.items.push(element)
  }

  // 移除队列最前面的项，并返回被移除的元素
  dequeue() {
    return this.items.shift()
  }

  // 返回队列中第一个元素，不做任何改变
  front() {
    if (this.isEmpty) return null;
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  toString() {
    return this.items.toString()
  }
}