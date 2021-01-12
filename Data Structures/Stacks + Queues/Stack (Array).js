// My solution 

let arr = [];

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    arr.push(value);
    this.top = arr[arr.length - 1];
    this.bottom = arr[0]
    this.length++;
    return this;
  }
  pop(){
    arr.pop();
    this.top = arr[arr.length - 1];
    this.bottom = arr[0]
    this.length--;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();



// another solution
class Stack {
  constructor(){
    this.array = [];
  }
  peek() {
    return this.array[this.array.length-1];
  }
  push(value){
    this.array.push(value);
    return this;
  }
  pop(){
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();


//Discord
//Udemy
//google
