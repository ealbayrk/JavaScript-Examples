/*Yöntem prompt(), kullanıcıdan giriş yapmasını isteyen bir iletişim kutusu görüntüler.

Kullanıcı ()"Tamam"ı tıklarsa yöntem girdi değerini döndürür, aksi takdirde döndürür null.

<small> öğesi, metni çevreleyen metinden bir boyut daha küçük gösterecek şekilde tanımlar.*/

let NameOfTheSchool = prompt("Enter the school name : ")
console.log(NameOfTheSchool);
let greeting = document.querySelector('#baslık')
baslık.innerHTML=`${greeting.innerHTML}  <small style = "color : pink"> ${NameOfTheSchool} </small>`


