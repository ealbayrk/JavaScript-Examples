let arr = [1,2,3,"dört","beş"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let ar = [1,2,3,["dört","beş","altı"],7,8];
console.log("2. " + ar[2][0]);

ar.forEach((item, index) => {
  console.log(item, index);
});
  console.log("3-2: "+ar[3][2]);
  let gunler = ['pazartesi','sali','carsamba'] 
  gunler = ['cuma','cumartesi','pazar'] 
  console.log(gunler);
  //let ile tanımlanan arraylere yeni değerler atanabilir .
  /*
  const gunler = ['pazartesi','sali','carsamba'] 
  gunler = ['cuma','cumartesi','pazar'] 
  console.log(gunler);
  //error alırız çünkü const ile tanımlanmış.
  */
 gunler.push('pazartesi') ; //metod ekler .
 gunler.unshift('perşembe');
 console.log(gunler);
 gunler.splice(2,2);
 console.log("splice çıkarma : " +gunler);//eleman çıkarır
 gunler.splice(1,0 , "ebrar" , "albayrak")
 console.log("splice ekleme : " + gunler)//eleman ekler


 var sports = ['basketball', 'football', 'tennis' ];
 console.log(sports); 
 sports.shift();//dizinin başındaki elemanı çıkarır ..
 console.log(sports);
 sports.push('parachuting') //en sona eleman ekler. 
 console.log(sports);
 sports.pop();//en son elemanı siler .
 console.log(sports);
 console.log(sports.includes('baseball'));
 console.log(sports.includes('tennis'));//eleman var mı diye kontrol eder .


 const dersler = ['matematik' , 'Türkçe' , 'İngilizce' , 'Fizik']
 console.log("eski dersler :  " + dersler);
 const NewDersler = dersler.slice(1,3);//bölüyor yeni array oluşturuyor..
 console.log("yeni dersler : " + NewDersler);
 console.log(dersler);

 const alisverisListem = ["karpuz", "şeftali", "kaysı"];
const stringAlisverisListem =  alisverisListem.join(); //bir şey koymadığımız için consolda aralarına virgül ekler.
console.log(stringAlisverisListem);
const stringAlisverisListem2 = alisverisListem.join(" muz");//arraya muzu ekler .
console.log(stringAlisverisListem2);


const yiyecekler = ["hamburger", "pizza", "köfte"];
const icecekler = ["kahve", "çay"];
const menu = yiyecekler.concat(icecekler);//arrayleri birleştirir.
menu.forEach(function(menu, menuIndeksi) {
    console.log(menu, menuIndeksi);
});

//Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten 
//farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.
const sayilar = [1,2,3];
let sayilarin5kati = sayilar.map(function(sayi) {
    return sayi*5;
});
console.log(sayilarin5kati);
console.log(sayilar);








