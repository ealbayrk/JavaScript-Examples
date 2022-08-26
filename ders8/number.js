//import '../assets/css/style.css';
//const app = document.getElementById('app');
//app.innerHTML='<h1>JavaScriptforNumber</h1>';

console.log(Number(33));//yazdırır
console.log(Number('45'));//yazdırır
console.log(Number ('44px'));//Nan 
console.log(new Number(66));//özellikleri yazdırır .PrimitiveValue,Prototype.
console.log(new Number('44px'));
console.log(parseInt('55px' , 10));
console.log(parseFloat('55.9999px' * 10)); 
console.log(Number(`55e10`));//10 tane 0 ekler
console.log('9+ +99.5555'); //aynen yazdırır .

const r = Number('55px');
console.log(isNaN(r));// Number olup olmadığını döndürür//true .
console.log(isNaN('I am a String'));//NaN"Not-a-Number"// sayı değil bu yüzden true 
console.log(Number.isNaN(Number.NaN));//True 
console.log(typeof 99.88);
console.log(99 instanceof Number );
console.log(Number ('99') instanceof Number );
console.log(Object.prototype.toString.call(99).slice(8,-1)==='[Object Number]');
//JavaScript prototype özelliği, nesne oluşturuculara yeni yöntemler eklemenize de olanak tanır.
console.log(Number.prototype);//özelliklerini yazdırır .
console.log(parseFloat((99.9567).toFixed(4)));//ondalık basmağa yuvarlıyor 
//Yöntem toFixed(), bir sayıyı bir dizeye dönüştürür.
//Yöntem toFixed(), dizeyi belirtilen sayıda ondalık basamağa yuvarlar.
console.log((99.324234).toPrecision(5));//son 5 basamak
console.log(new Number(99).valueOf());