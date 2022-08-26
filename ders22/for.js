for (var i = 0; i < 100; i++) {
  if (i % 2 == 0) {
      console.log(i);
  };
};

const animals = ["cat" , "dog" , "bird", "horse"];
animals.forEach( animal => console.log( animal ) );
//bütün arraylari forEach ile yazdırıyoruz.

const numbers = [4, 11, 9];
const newArray = [];
numbers.forEach(function(numbers){
  newArray.push(numbers*3);
});
console.log(newArray);
//array içerisinde işlem yapıyoruz..

const products = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]
const newProducts = products.filter(eleman => eleman.length > 7) 
console.log(newProducts); //harf sayısı 7 den fazla olanları alıyoruz ...



let users = [
	{Name: "Ebrar", isActive: true},
	{Name: "berkay", isActive: true},
  {Name: "emir", isActive: false}
]
const newUsers = users.filter(user=>user.isActive===true)
console.log(newUsers.Name);


let person = [{
  name: "Adem",
  age: 25,
  languages: ["JavaScript", "CSS"],
},
{
  name: "Oğuz",
  age: 33,
  languages: ["Java", "HTML"],
  }
];
const newPerson =person.filter(person=>person.age>30)
console.log(newPerson.name);


const fiyat = [ 50, 200, 250, 45 ,  150, 2500, 80 ];
const newFiyat=fiyat.map (f=>{
if (f>99)
return f-(f*0,50);


else 
return f ;

})