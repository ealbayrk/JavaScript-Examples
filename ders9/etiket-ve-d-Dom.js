/*HTML <div> sayesinde diğer syfa öğelerini içine alır , HTML belgesini bölümlere ayırır.
Örneğin :

<div id="ornek1" name="ornek1" title="Örnek bir Div Elementi">
  <h5>Başlık 5</h5>
  <p>Bu bir paragraf elementidir...</p>
  <p>Burası da başka bir paragraf elementidir...</p>
</div>

h1 --> ana başlık 
h2 --> 2.başlık 
innerText : texti değiştirir
innerHTML : şeklini vs değiştirir eğer istersen text de değişir .*/
//let h2 =document.getElementsByTagName('h2');//belirtilen etiket adına sahip tüm öğelerin bir koleksiyonunu döndürür.
//console.log(h2.title2.innerHTML);//belirtilen etiket adına sahip tüm öğelerin bir koleksiyonunu döndürür.

let title = document.getElementById('title') ;
title.innerHTML = '<p>hdeneme</p>';
title.innerText="değiştirdik"
console.log(title);
const title_ = document.getElementsByTagName('başlık'); 
/*
 <ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea
        <ul>
          <li>China</li>
          <li>Africa</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
*/
let link = document.querySelector('ul#list>li>a');//ben ul'un içindeki li'nin içindeki a'yı istiyorum..
/*<a href="InfoForLink">Link Bilgisi</a> 
yaparsak 
let link = document.querySelector('#InfıForLink');
yapabiliriz .
*/

console.log(link.innerHTML);
console.log(link.innerHTML+= " Değiştirme"); //linki adını değiştirdim
document.body.style.backgroundColor='lightpink';
link.style.color="blue"
title.style.color=  "red"
link.classList.add('btn')


