let islem = function(a, b, operator) {
    switch(operator) {
        case '+':
             a + b;
        break;
        case '-':
            return a - b;
        break;
        case '*':
            return a * b;
        break;
        case '/':
            return a / b;
        break;
        default:
            return 'cannot be identified';
        break;
    }
};
console.log(islem(458, 4, '/'));  
console.log(islem(25, 8, '-'));     
