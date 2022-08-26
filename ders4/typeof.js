console.log(typeof 'kodluyoruz');
//Bu kontrolleri yaparken sıkça typeof kullanılır.
console.log(typeof 5 );
//Bir başka şekilde isInteger( )
// isFinite( ) veya isNaN( ) kullanarak da kontrol sağlayabiliriz.
console.log(Number.isInteger(123));//true
console.log(Number.isFinite('123')); //false
console.log(Number.isNaN('NaN')); //false
console.log(Number.isNaN(NaN) );//true