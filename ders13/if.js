let a = 100 ;

console.log(a==100);// hem değeri hem türü eşitse
console.log(a==100);//değeri eşitse

console.log(!!2); //true

let username = prompt("Enter the name  ");
if (username.length>0){
console.log(username);
console.log(`Name: ${username}`);
}
else {
console.log("not info");}


function vkiHesapla(weight, height) {
   var vki;
 if(vki<18.5) return alert(`your body mass index is low: ${vki}`);
 if(vki>= 18.5 && vki < 25) return alert(`your body mass index is  normal ${vki}`);
 if(vki>= 25.0 && vki <30) return alert(`your body mass index is hight ${vki}`);
 if(vki>= 30) return alert(`your body mass index is too high ${vki}`);
 return alert("check the values you entered");
 };




 var random = Math.floor(Math.random() * 10);
 var guess = prompt ("enter the number you guessed")
 if(guess==random && guess != null){
 alert(`It is true . The number is : ${guess}`)}
 else if (guess == ""){
alert("enter the num!");}
else if (guess == null) {
   alert("you refused to log  in");}
else {
  alert("try again ... Random Number: " + randomSayi);
}






