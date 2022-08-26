let a = 20 
let b = 25 ;
let c= 40 ;
console.log(Boolean (c>b>a) );//false
console.log( Boolean(100));//true
console.log( Boolean(3.14));//true
console.log(Boolean(-15));//true
console.log( Boolean("Hello"));//true
console.log( Boolean('false'));//true
console.log(Boolean(1 + 7 + 3.14));//true
const c1 = Boolean(undefined); //false
const c2 = Boolean(null);//false
const c3 = Boolean("");//false
const c4 = Boolean(false);//false
const c5 = Boolean(NaN);//false
const c6 = Boolean(0);//false
const c7 = Boolean(-0);//false
console.log(c1 , c2 , c3 , c4 ,c5 ,c6 );
console.log(Boolean(1n));//true
console.log(Boolean(-1n));//true
console.log(Boolean(Infinity));//true
console.log(Boolean({}));//true
console.log(Boolean(Symbol()));//true

