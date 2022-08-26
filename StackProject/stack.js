var Bpush = document.getElementById('push');
var Bpop = document.getElementById('pop');
var Bswap = document.getElementById('swap');
var Bmax = document.getElementById('max');
var Bmin = document.getElementById('min');
var Breverse = document.getElementById('reverse');
var BfastFill = document.getElementById('fastFill');
var Bclean = document.getElementById('clean');
class Stack {
    constructor() {
        this.items = [];

    }
    push(input) {
        if (this.items.length < 5) {
            document.getElementById(this.items.length + 1).value = input;
            return this.items.push(input);

        } else {
            window.alert("Array dolu...");
            return;
        }
    }
    pop() {

        if (this.items.length > 0) {
            document.getElementById(this.items.length).value = "";
            return this.items.pop();

        } else {
            console.log("Array boş...");
        }

    }

    swap() {

        let leng = this.items.length;
        var temp = document.getElementById(this.items[leng - 1].toString()).value;
        document.getElementById(this.items[leng - 1].toString()).value = document.getElementById(this.items[leng - 2].toString()).value;
        document.getElementById(this.items[leng - 2].toString()).value = temp;
        [this.items[leng - 1], this.items[leng - 2]] = [this.items[leng - 2], this.items[leng - 1]];

    }

    Max() {
        var max = Math.max(...this.items);
        alert(max);
    }
    Min() {
        var min = Math.min(...this.items);
        alert(min);
    }
    reverse() {
        var rev = this.items.reverse();
        alert(rev);
        console.log(rev);
    }

    fastFill() {
        if (this.items.length < 5) {
        for (var i = 0; i < 5; i++) {
            
            stack.push(Math.floor(Math.random() * 1000) + 1);
        }
    }
        else{
            window.alert("Array dolduruldu ...");
        }
    }
    clean() {
        for (var i = 0; i < 5; i++) {
            this.items.pop();
        }
    }

}

let stack = new Stack();
Bpush.addEventListener('click', function () {
    let inputValue = document.getElementById('inputValue').value;
    stack.push(inputValue);
    

});
Bpop.addEventListener('click', function () {
    stack.pop();
  
});
Bswap.addEventListener('click', function () {
    stack.swap();
   
});
Bmax.addEventListener('click', function () {
    stack.Max();
});
Bmin.addEventListener('click', function () {
    stack.Min();
});
Breverse.addEventListener('click', function () {
    stack.reverse();
});
BfastFill.addEventListener('click', function () {
    let inputValue = document.getElementById('inputValue').value;
   stack.fastFill();
});
Bclean.addEventListener('click', function () {
    stack.clean();
});




