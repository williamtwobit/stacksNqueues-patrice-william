const createNode = (data=null, next=null) => ({
  data,
  next
});

class Stack{
  constructor(){
    this.top = null;
  }

  push(data){
    if(this.top === null){
      this.top = createNode(data);
      return;
    }
    else{
      let node = createNode(data, this.top);
      this.top = node;
    }
  }
}

///// INVOKING AND LOGGING ////
const myStack = new Stack;

myStack.push('hi there!');
myStack.push('goodbye');

console.log(myStack);