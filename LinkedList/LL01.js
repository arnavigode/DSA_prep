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
    push(value){
        const newNode = new Node(value)
        if(!this.head){ //means if this.head = null
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this  //return this 'LinkedList'
    }
    pop(){
        
    }                 
    unshift(val){}            
    insert(index, val){}       
}

let myLL = new LinkedList(7)
myLL.push(4)
console.log('myLL', myLL)