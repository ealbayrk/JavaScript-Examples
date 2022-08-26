/*DOM’da HTML ile hazırladığınız sayfa, document; 
Bu document'in içine yerleştirdiğiniz her türlü öğe ise element olarak adlandırılır. 
DOM'da nesnelerin birer element olarak kullanılabilmesi için hiyerarşik bir düzen izlenerek çağrılmaları gerekir.
HTML’deki her bir elamanın birbiri ile hiyerarşik bir yapı oluşturması ile oluşur. 
DOM bir ağaç dizini gibi bütün dokümanları birbirine bağlar.
Neden JavaScript ? 
Çünkü JavaScript ile beraber dinamik yapılar kurabilşyoruz.
*/

console.log(document.URL);
console.log(document.head);
console.log(document.body);

console.log(document.body.style.backgroundColor="red");
//renk verir 