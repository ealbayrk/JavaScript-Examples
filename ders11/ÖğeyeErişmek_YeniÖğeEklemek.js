let item = document.querySelector("ul#list>li:last-child")
console.log(item);  
item.innerHTML="son öğe ile değiştir    "


let item2 = document.querySelector("ul#list>li:first-child")
console.log(item2);  
item2.innerHTML="ilk öğe ile değiştir "

let ulDom = document.querySelector("ul#list")//listenin içerisine eleman ekleme 
let liDom = document.createElement('li')
liDom.innerHTML="Kendi öğemiz"
ulDom.append(liDom);//sona ekler
//ulDom.prepend(liDom);//başa ekler 