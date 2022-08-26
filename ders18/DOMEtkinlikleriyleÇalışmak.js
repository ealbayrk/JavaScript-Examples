/*let greeting = document.querySelector("#greeting")
greeting.addEventListener("click" , metin)
function metin (){
console.log("TIKLANINCA ÇIKACAK METİN...");
console.log(this.innerHTML="Tıklanınca bilgi değişti ..." );
this.style.color=="pink" ? this.style.color=="black" : this.style.color=="pink" 

}
*/
let greeting = document.querySelector("#greeting")
greeting.addEventListener("mouseover" , metin)
function metin (){
console.log("ÜSTÜNE GELİNCE ÇIKACAK METİN...");
console.log(this.innerHTML="Üstüne gelince bilgi değişti ..." );
console.log(this.style.color="pink");

}
//let counter = 0;9
let counter = localStorage.getItem('counter')? Number(localStorage.getItem('counter')):0
let counterDOM = document.querySelector('#counter')
let increaseDOM= document.querySelector('#art')
let decreaseDOM = document.querySelector('#azalt')
counterDOM.innerHTML=counter;
increaseDOM.addEventListener( "click" , ClickON);
decreaseDOM.addEventListener("click" , ClickON)

function ClickON (){
    
    console.log(this.id);
    console.log(typeof(counter));
    this.id=="art"?counter+=1:counter-=1;
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML=counter;
}

