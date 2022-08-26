//Çok Satırlı Dize Yazımı: 
//Eski kullanım:
let eskiString = "En sevdiğim yemekler:\nİskender\nMantı";
console.log(eskiString);
//Yeni kullanım:
let yeniString = `En sevdiğim yemekler:
İskender
Mantı`;
console.log(yeniString);


//İnterpolasyon, metin içerisinde değişken kullanmak anlamına gelir.
// Normal dizeler içerisine ifadeler gömmek için kullanılır.
let ad = `Ebrar`
let soyad = `ALBAYRAK`
//Eski kullanım
console.log("Benim adım "+ad+" "+ soyad);
//Yeni kullanım
console.log(`Benim adım ${ad} ${soyad}`);

let a = 99;
let b= 999;
console.log(`${a} çarpı ${b} eşittir ${a*b}`);
 
//MAİL:
const mail = "ealbayrk0@gmail.com" ;
let name = "Ebrar ALBAYRAK ";
let info= `Hoşgeldiniz ${name}
Mail Adresinizin uzunluğu : ${mail.length}
borcunuz ${5+256}`;
console.log(info);



