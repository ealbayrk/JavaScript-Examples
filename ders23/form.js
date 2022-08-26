let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)//fare,klavye olayları .
function formSubmit(event){
  event.preventDefault();
  console.log("Process completed ...");
  let scoreDOM=document.querySelector('#score')
  console.log(scoreDOM.value);
//formdaki inputun name bilgisi mutlaka olmalı !!
  localStorage.setItem('score',scoreDOM.value)//bilgiyi aldık istediğimiz yere kaydettik ve artık kullanabiliyoruz.
}
