let info =document.querySelector("#myName")
let name_=prompt("Enter your name pls !")
info.innerHTML += `${name_}`


let Days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  ];
 
  let Months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  function showTime() {
    const todayis = new Date();
    let hours = todayis.getHours();
    let minutes = todayis.getMinutes();
    let seconds = todayis.getSeconds();
    let day = Days[todayTime.getDay()]; 
    let date = todayis.getDate();
    let month = Months[todayis.getMonth()];
    let year = todayis.getFullYear();
  
    document.getElementById("myClock").innerHTML=`
    ${hours} : ${minutes} : ${seconds} 
    ${day} : ${month} : ${month} : ${year}`
      
    setTimeout(showTime, 1000);
  }
  
  showTime();