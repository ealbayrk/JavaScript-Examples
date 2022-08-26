var add = function (x, y) {  //Anonim bir fonksiyon oluşturuldu ve değişken atandı ...
  console.log(x + y);

  //Callback Fonksiyonlar ve Asenkron Çalışma: // aynı anda çalışır. 

  function first_print() {
    console.log("first screen output");
  }

  function second_print() {
    setTimeout(function () {
      console.log("second screen output")
    }, 3000); //3 saniye geç çalıştırıyor .
  }

  function third_print() {
    console.log("third screen output");
  }
  first_print();
  second_print();
  third_print();
}
add(5,3);

function mesajVer(ad, soyad) {
  alert(`Merhaba ${ad} ${soyad}`);
}

mesajVer("Ebrar", "Albayrak", "Mrs.");
mesajVer("Ebrar"); 
mesajVer();

const toplam = (a, b) => a+b; //altaki gösterimin kısaltılmış hali
/*
  //let toplam (a,b)
  return a+b;
  */

console.log(toplam(20, 5));



let age= prompt('Reşit misin ? Yaşınızı Giriniz..');

let kontrol =
  age< 18
    ? () => alert('Üzgünüm giriş yapamazsınız ...')
    : () => alert('Kayıt yaptırılıyor...');

kontrol();

function üs (x,y) {
for (let i = 0 ;i<y;y++)
result *= x ;
return result ;

}



