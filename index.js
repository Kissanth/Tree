// // class Stack{

// //     constructor(){

// //         this.list = []

// //     }

// //     push(element){

// //         this.list.push(element)

// //     }

// //     pop(){

// //         if(this.list.length===0){
// //             return 'underflow'
// //         }

// //         this.list.pop()
// //     }

// //     peek(){

// //         return this.list[this.list.length-1]

// //     }

// //   isEmpty(){
// //     if(this.list.length===0){

// //         console.log("no it's empty")

// //     }

// //   }

// //     printlist(){

// //       let str = "";
// //       for (let i = 0; i < this.list.length; i++)
// //           str += this.list[i] + " ";
// //       return str;

// //     }
// // }

// // let stack = new Stack()

// //Queue

// class Queue{

//   constructor(){

//     this.object = []
//     this.front = 0
//     this.backend = 0

//   }

//   empty(){

//     this.object[this.front]===0;
//     return "Oh no it was not possible "
//   }

//   add(value){

//       this.object.push(value)

//       this.backend++

//   }

//   remove(){
//     let s = this.object.shift()

//     return s
//   }

//   print(){
//     let str = '';

//     for(let i = 0; i < this.object.length; i++)
//       str += this.object[i] + " ";
//     return str;

// }
// }

// let io = new Queue()
// io.add(23)
// io.add(12)
// // the.add(34)
// console.log(io.print())
// console.log(io.remove())
// console.log(io.print())

//Tree

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// class Bst {
//   constructor() {
//     this.root = null;
//   }

//   add(data) {
//     let newnode = new Node(data);

//     if (this.root === null) {
//       this.root = newnode;
//     } else {
//       this.insert(this.root, newnode);
//     }
//   }
//   insert(data1, data2) {
//     if (data2.data < data1.data) {
//       if (data1.left === null) {
//         data1.left = data2;
//       } else {
//         this.insert(data1.left, data2);
//       }
//     } else {
//       if (data1.right === null) {
//         data1.right = data2;
//       } else {
//         this.insert(data1.right, data2);
//       }
//     }

//   }
//   search(data) {
//     let current = this.root;

//     while (current !== null) {
//       if (data === current.data) {
//         return current;
//       } else if (data < current.data) {
//         current = current.left;
//       } else {
//         current = current.right;
//       }
//     }

//     return null;
//   }

// }

// let d1 = new Bst();
// d1.add(12);
// d1.add(23);
// d1.add(99);
// d1.add(1)
// let s = d1.search(23)

// console.log(s)

// Practice  Binary search tree code

class Node {fdf
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(node) {
    let newnode = new Node(node);

    if (this.root === null) {
      this.root = newnode;
    } else {
      this.insert(this.root, newnode);
    }
    
  }

  insert(data1, data2) {
    if (data1.data > data2.data) {
      if (data1.left === null) {
        data1.left = data2;
      } else {
        this.insert(data1.left, data2);
      }
    } else {
      if (data1.right === null) {
        data1.right = data2;
      } else {
        this.insert(data1.right, data2);
      }
    }
  }

  remove(value) {

    this.root = this.remoeNode(this.root,value)
  
  }


  removeNode(node,value){

    if(node===null){
      return null;
      
    }
    if(node.right > value){
      node.left =  this.removeNode(node.left,value)
      
    }else if(node.data < value){
    node.right = this.re
      
    }
    
  }

  
}



  
let s = new BST(12);

s.add(33);
s.add(1);
s.add(3);
s.add(66);
// [s.add(2);]
console.log(s);

s.remove(3)
console.log(s)