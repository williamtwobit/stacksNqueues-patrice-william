const createNode = (data = null, next = null) => ({
  data,
  next
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

///// INVOKING AND LOGGING ////
const myStack = new Stack;

myStack.push('hi there!');
myStack.push('goodbye');
myStack.push('sing');
myStack.push('dance');
console.log('pop', myStack.pop());
console.log('peek', peek(myStack));
console.log('stack', myStack);
display(myStack);
