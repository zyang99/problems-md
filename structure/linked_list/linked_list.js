export class Node{
  constructor(element){
    // 保存元素
    this.element = element;
    // 指向下一个节点
    this.next = null;
  }
}

export class LinkedList{
  constructor(){
    this.head = null;
    this.length = 0
  }
  // append:向链表尾部追加一个node
  append(element){
    // 创建一个新的节点node
    const newNode = new Node(element);
    // 判断head是否为空
    if(!this.head){
      this.head = newNode;
    }else{ //不为空的时候，从head开始遍历直到最后
      let current = this.head;
      while(current.next){
        current = current.next
      }
      // 遍历到最后把新节点加来
      current.next = newNode;
    }
    // 每追加一个新节点，链表长度加1
    this.length++
  }

  // insert 插入元素到某个位子(一般是中间)
  insert(position,element){

  }
  // get 获取对应位置的元素
  // indexOf 返回元素在列表中索引
  // update 修改某个位置的元素
  // removeAt 从列表特定位置删除一项
  // remove从列表中删除一项
  // isEmpty
  // size
}