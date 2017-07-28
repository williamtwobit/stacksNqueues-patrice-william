const createNode = (data = null, next = null, prev = null) => ({
  data,
  next,
  prev
});

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = createNode(data);
      return;
    } else {
      let node = createNode(data, this.top);
      this.top = node;
    }
  }

  pop() {
    let curr = this.top;
    this.top = this.top.next;
    return curr.data;
  }
}

function peek(stack) {
  if (stack.top === null) {
    return null;
  } else {
    return stack.top.data;
  }
}

function display(stack) {
  let node = stack.top;
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(data){
    const node = createNode(data);

    if(this.last){
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;

    if(this.first === null){
      this.first = node;
    }
  }
}


///// INVOKING AND LOGGING STACK OPERATIONS ////
console.log('////////////////STACK OPERATIONS////////////////');
const myStack = new Stack;

myStack.push('hi there!');
myStack.push('goodbye');
myStack.push('sing');
myStack.push('dance');
console.log('pop', myStack.pop());
console.log('peek', peek(myStack));
console.log('stack', myStack);
display(myStack);

console.log('///////////////////////////');
console.log('');
console.log('');

///// INVOKING AND LOGGING QUEUE OPERATIONS ////
console.log('////////////////QUEUE OPERATIONS////////////////');

const myQ = new Queue;

myQ.enqueue("i'm first");
myQ.enqueue("i'm second");
myQ.enqueue("i'm last");

console.log(myQ);
