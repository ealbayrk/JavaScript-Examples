let stack = [];

stack.push("E");
console.log(stack); 

stack.push("B");
console.log(stack); 

stack.push("R");
console.log(stack); 

stack.push("A");
console.log(stack); 

stack.push("R");
console.log(stack); 

console.log("*********************");

console.log(stack.pop()); 
console.log(stack); 

console.log(stack.pop()); 
console.log(stack);

console.log(stack.pop()); 
console.log(stack); 

console.log(stack.pop());
console.log(stack);

console.log(stack.pop()); 
console.log(stack); 

console.log(stack.pop()); 

console.log("********************");

function change(str) {
    let stack = [];
   
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    
    let changeStr = '';
    while (stack.length > 0) {
        changeStr += stack.pop();
    }
    return changeStr;
}
console.log(change('Ebrar ALBAYRAK')); 


console.log("************************");


class Stack {
    constructor() {
        this.items = [];
        this.count = 0
    }
    push(element) {//en sona eleman ekler
        this.items[this.count] = element
        console.log(`${element} added ${this.count}`)
        this.count += 1
        return this.count - 1
    }

    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} DELETE`)
        return deleteItem
    }

    peek() {
        console.log(`Top : ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    isEmpty() {
        console.log(this.count == 0 ? 'EMPTY' : 'NOT EMPTY')
        return this.count == 0
    }

    size() {
        console.log(`${this.count} ELEMENT`)
        return this.count
    }

   
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }
    clear() {
        this.items = []
        this.count = 0
        console.log('CLEAR ...')
        return this.items
    }
}

const stack_ = new Stack()

stack_.isEmpty()
stack_.push(458)
stack_.peek()
stack_.push(15)
stack_.pop()
stack_.isEmpty()
console.log(stack_.print())
stack_.clear()
console.log(stack_.print())
stack_.size()


