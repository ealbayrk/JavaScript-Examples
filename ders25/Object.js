let obje1 = [1,2,3]
let obje2 = {obj:1}

console.log("obje1 : "  ,  typeof(obje1));
console.log("obje2 : "  ,  typeof(obje2));

let a = new Object();//ikisi de obje oluşturur
let b = {}//ikisi de obje oluşturur
console.log("a: " , typeof(a));
console.log("b: " , typeof(b));
 
//object.prototype :Prototipler, JavaScript nesnelerinin özellikleri birbirinden devraldığı mekanizmadır
const myObject = {
    city: 'İstanbul',
    greet() {
      console.log(`Greetings from ${this.city}`);
    }
  }
  myObject.greet();
  
  const myDate = new Date();

do {
  object = Object.getPrototypeOf(myDate);
  console.log(myDate);
  break ;
} while (myDate);


//*****************************************************
let school ={
First:"FMW " ,
Name : "Işık Universitesi" ,
Profession : "Computher ",
"4 senelik" : 4 ,
Lesson : ["MATH" , "PHYSY" , "COMP"],
FullName : function(){
    return `${this.First} ${Name}`
}
 
}
console.log(school);
console.log(school.Name + " "+ school[" 4senelik"] + " " +school.Profession + " " + school.Lesson + " " + school.FullName);

school.profession = " engineering"//yeni bilgi eklemek
console.log(school.profession);
school.language=" english "
console.log(school.language);

//keys anahtar kelimesi
key = Object.keys(school)
console.log(key);
console.log(Object.keys(school));
key.forEach(item=> {
    console.log(item);
    
});
let nameOf = settings.FullName;
console.log(nameOf);

let { First ,Name , Profession , Lesson , FullName} = settings
console.log(settings);
console.log(First ,Name , Profession , Lesson , FullName);










