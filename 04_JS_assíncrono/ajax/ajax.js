const xhr = new XMLHttpRequest();
const btnElement = document.querySelector('button');
const inputElement = document.querySelector('input');
let img = document.querySelector('img');
let apiGIT;
let userGIT;





btnElement.onclick = function (){
  userGIT = inputElement.value;
  xhr.open('GET',`https://api.github.com/users/${userGIT}`);

  xhr.send(null);



  xhr.onreadystatechange = function (){
    if (xhr.readyState === 4){
      apiGIT = JSON.parse(xhr.responseText);
      console.log(apiGIT)
      img.src = apiGIT.avatar_url;
      
    }
  }
  
}
