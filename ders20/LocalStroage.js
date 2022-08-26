/*
JSON.stringify()Bir dizeye dönüştürmek için JavaScript işlevini kullanılır.
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
*********************************************************************
let user = {userName:"EbrarAlbayrak" ,isActive:true}
localStorage.setItem('userinfo' , user)
*/
let user = {userName:"EbrarAlbayrak" ,isActive:true} //artık consola userinfo yazdığımda bu bilgiler çıkacaktır .
localStorage.setItem('userinfo' , JSON.stringify(user)); //Stringe çevirdiğim bir yaoıyı JSON ile birlikte parse edip tekrar kullanabiliyorum .
let userinfo = localStorage.getItem('userinfo')
userinfo=JSON.parse(userinfo) 
console.log(userinfo);
//localStroage basitçe bir metni , sayıyı hafızada tutuyor .


