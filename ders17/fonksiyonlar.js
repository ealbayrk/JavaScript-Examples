
 let PI =3.14;
function konininhacmi (r , h  ) 
{
    var result= PI*r*r*h*1/3; 
    return result;		
}
var mainResult = konininhacmi(3,8); 


console.log(mainResult);

function factorial(n){
  if(n === 0){
      return 1;
  } else{
      return n * factorial(n-1);
  }
}

// ES5
var sayi = function(x) {
  return x*x
};

// ES6
//let sayi = x => x*x; 

var resit= (age) => {
  if (age>=18) {
    return 'reşit';
  } else {
    return 'çocuk';
  }
}
//this-->Bir metot içerisinde kullanıldığı zaman ait olduğu nesneyi temsil eder.
