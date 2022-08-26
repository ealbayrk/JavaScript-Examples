let school= {
  studentName:"Ebrar ALBAYRAK",
  id :"20COMP1038",
  dep : " engineering" , 
  mail:"20COMP1038@isik.edu.tr"
}

let student= school.studentName
console.log(student);
let {studentName , id:NumberOfSchool , dep , mail} =school 
console.log(studentName , NumberOfSchool , dep , mail);

let {studentName:studentName2 , id:id2, ...text}=school ; //texte atıyoruz devamını ..
console.log(studentName2 , id2);

/*let school2 = school ;
school2.studentName = "Berkay Yılmaz" ;
console.log("eski : "+school.studentName);
console.log("yeni : " + school2.studentName);*/ //kopyalama işlemi yapmaya çalışıyoruz ama bu yol ile başarısız oluyor ...
let school2 = {...school };
school2.studentName = "Berkay Yılmaz" ;
console.log("eski : "+school.studentName);
console.log("yeni : " + school2.studentName);










