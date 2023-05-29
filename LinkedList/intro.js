// diff between Arrays and Liked list
// Array has index LL has no index it has head and tail
// Array occupies contiguous space in memory LL can be anywher in memory

// LL TC ==> BIG O
// o(n)  => adding or removing Tail
// o(1) => adding or removing head
// o(n) => adding or removing item in between node
// o(n) => finding value in node

// where there is iteration the TC will be o(n);

// under the hood
let LL = [11, 3, 23, 7, 4];
// actual node looks
let tail = {
  value: 4,
  next: null,
};
let forSeven = {
  value: 7,
  next: tail,
};
// also written as
let forSeven2 = {
  value: 7,
  next: {
    value: 4,
    next: null,
  },
};
// so complete LL will look like
let head = {
  head: 11,
  next: {
    value: 3,
    next: {
      value: 23,
      next: {
        value: 7,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};



// LL Constructor 

class LinkedListDemo{
    constructor(val){}         //crates new node
    push(val){}                //crates new node //add node to end
    unshift(val){}             //crates new node //add node to beginning
    insert(index, val){}       //crates new node //inserts it at some index
}
// each of the above method creating a new node
// so creating a class to create new node

class NodeDemo{
    constructor(value){
        this.value = value;
        this.next = null
    }
}
const newNode = new NodeDemo(4);


// creating LL 

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }         
    push(val){}                 
    unshift(val){}            
    insert(index, val){}       
}

let myLL = new LinkedList(4)

console.log('myLL', myLL)