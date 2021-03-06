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

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = createNode(data);

    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;

    if (this.first === null) {
      this.first = node;
    }
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    return node.data;
  }
}

function displayQ(queue) {
  let node = queue.first;
  while (node !== null) {
    console.log(node.data);
    node = node.prev;
  }
}

/// EXERCISE #1 - PALINDROMES ///

function isPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const palindromeStack = new Stack;
  for (let i = 0; i < string.length; i++) {
    palindromeStack.push(string[i]);
  }
  for (let i = 0; i < string.length; i++) {
    if (!(palindromeStack.pop() === string[i])) {
      return false;
    }
  }
  return true;
}

// true, true, false, true
// console.log(isPalindrome("dad"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome('yikes'));
// console.log(isPalindrome("1001"));



/// EXERCISE #2 - MATCHING PARENTHESES ///
//const pStack = new Stack;

function mathParens(string) {
  const pStack = new Stack;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      pStack.push(i.toString());
    } else if (string[i] === ')') {
      try {
        let open = pStack.pop();
      } catch (error) {
        throw new Error(`Missing opener for closer at ${i}`);
      }
    }
  }
  if (pStack.top !== null) {
    throw new Error(`Missing closer for opener at ${pStack.top.data}`);
  } else {
    console.log('All Good!');
  }
}

// const myStack = new Stack;
// myStack.push('(this is good)');
// console.log(myStack);

// mathParens('((2*5)+6)');
//mathParens('(not okay))');
// mathParens('((trippin)');


/// EXERCISE #3 - MATCHING DANCERS ///

function dancerMatch(dancers) {
  const mQ = new Queue;
  const fQ = new Queue;
  let mCount = 0;
  let fCount = 0;
  for (let i = 0; i < dancers.length; i++) {
    if (dancers[i].gender === 'M') {
      if (fQ.first !== null) {
        let femaleDancer = fQ.dequeue();
        fCount--;
        console.log(`Female dancer is: ${femaleDancer} and the male dancer is: ${dancers[i].name}`);
      } else {
        mQ.enqueue(dancers[i].name);
        mCount++;
      }
    }
    if (dancers[i].gender === 'F') {
      if (mQ.first !== null) {
        let maleDancer = mQ.dequeue();
        mCount--;
        console.log(`Female dancer is: ${dancers[i].name} and the male dancer is: ${maleDancer}`);
      } else {
        fQ.enqueue(dancers[i].name);
        fCount++;
      }
    }
  }
  while (fQ.first !== null) {
    if (mQ.first !== null) {
      let femaleDancer = fQ.dequeue();
      fCount--;
      let maleDancer = mQ.dequeue();
      mCount--;
      console.log(`Female dancer is: ${femaleDancer} and the male dancer is: ${maleDancer}`);
    } else {
      console.log(`There are ${fCount} women waiting to dance`);
      fQ.dequeue();
    }
  }
  if (mCount > 0) {
    console.log(`There are ${mCount} men waiting to dance`);
  }
}

const squareDancers = [{
    gender: 'M',
    name: 'bob'
  },
  {
    gender: 'M',
    name: 'chris'
  },
  {
    gender: 'F',
    name: 'luna'
  },
  {
    gender: 'F',
    name: 'sarah'
  },
  {
    gender: 'F',
    name: 'hannah'
  },
  {
    gender: 'M',
    name: 'geoff'
  },
  {
    gender: 'M',
    name: 'larry'
  }
];

// dancerMatch(squareDancers);



/// EXERCISE #4 - OPHIDIAN BANK ///
function bankTeller(peopleQ) {
  while (peopleQ.first !== null) {
    const person = peopleQ.dequeue();
    if (Math.random() <= .25) {
      peopleQ.enqueue(person);
      console.log('wrong paperwork');
    } else {
      console.log('Right paperwork');
    }
  }
}

const myQ = new Queue;
myQ.enqueue('sarah');
myQ.enqueue('james');
myQ.enqueue('bob');
myQ.enqueue('Josh');
myQ.enqueue('marry');
myQ.enqueue('Trey');
myQ.enqueue('Janice');
myQ.enqueue('Jill');
myQ.enqueue('bret');
myQ.enqueue('sad');

bankTeller(myQ);


// ///// INVOKING AND LOGGING STACK OPERATIONS ////
// console.log('////////////////STACK OPERATIONS////////////////');
// const myStack = new Stack;

// myStack.push('hi there!');
// myStack.push('goodbye');
// myStack.push('sing');
// myStack.push('dance');
// console.log('pop', myStack.pop());
// console.log('peek', peek(myStack));
// console.log('stack', myStack);
// display(myStack);

// console.log('///////////////////////////');
// console.log('');
// console.log('');

// ///// INVOKING AND LOGGING QUEUE OPERATIONS ////
// console.log('////////////////QUEUE OPERATIONS////////////////');

// const myQ = new Queue;

// myQ.enqueue("i'm first");
// myQ.enqueue("i'm second");
// myQ.enqueue("i'm last");
// // console.log('dequeue', myQ.dequeue());
// // console.log('dequeue', myQ.dequeue());
// // console.log('dequeue', myQ.dequeue());
// displayQ(myQ);
// // console.log(myQ);
// );
//
// );
//
// );
// .log('dequeue', myQ.dequeue());
// displayQ(myQ);
// // console.log(myQ);
// );
//
// );
//
// );
