
class Cookie{   //a cookie machine
    // constructor creates new cookies
    constructor(color){
        this.color = color
    }
    // getters
    getColor(){
        return this.color;
    }
    // setters
    setColor(color){
        this.color = color;
    }
}

// specific instance of new cookie
let cookieOne = new Cookie('green');
let cookieTwo = new Cookie('blue');

console.log(cookieOne.getColor())
cookieOne.setColor('yellow')
console.log(cookieOne.getColor())



// classes for lnked list

class LinkedList{
    constructor(val){}
    push(val){}
    unshift(val){}
    insert(index, val){}
    remove(index, val){}
    pop(){}
    shift(){}
}
