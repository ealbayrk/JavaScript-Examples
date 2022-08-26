let a= `Ebrar ALBAYRAK` ;
let eMail='ealbayrk@gmail.com';
console.log(a.length);
console.log(a.indexOf('A')); 
//Metnin içinde aramak istediğimiz değerin index numarasını bize verir.
console.log(a.lastIndexOf('A'));
// aranan kelime birden fazla geçiyorsa en sondakini döndürür .
console.log(a.search('A'));//indexOf ile aynı sonuçlara ulaşırız genel 
//olarak "Regular Expressions" işlemleri için çok kullanılan bir metottur
console.log(a.slice(5,10));
//Metni index numarası 5-10 arasındaki parçayı bize verir .
//Eğer tek sayı yazarsak o sayıdan sonraki kısmı bize verir .
console.log(a.replace ('Ebrar' , 'Berkay'));
//İkisinin yerini değiştirir .
console.log(a.toUpperCase());//büyük harf yapar 
console.log(a.toLowerCase());//küçük harf yapar
console.log(a.split(' ')  );//array haline getir
console.log(a.charAt(1)); //karakteri arat
let domain = eMail.slice(eMail.indexOf('@')+1);//domain yazdır 
console.log(domain);
console.log(eMail.includes("b" + "C"));
console.log(eMail.includes("b"));





