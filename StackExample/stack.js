
let nameOfLanguage=[]; 


let AddButton = document.getElementById('add');
let ListOfContainer = document.getElementById('ListOfContainer');
let text = document.getElementById('text');
let DeleteButton = document.getElementById('delete');

AddButton.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('nameOfLanguage');
    ListOfContainer.appendChild(paragraph);
    paragraph.innerHTML = text.value;
    text.value = "";
    nameOfLanguage.push(paragraph.innerHTML);
    console.log(nameOfLanguage);
    console.log(paragraph.innerHTML);
    

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through'; 
      
    });
    

    DeleteButton.addEventListener('click', function () {
        nameOfLanguage.pop();
        console.log(nameOfLanguage);
        

      
    
})
})

