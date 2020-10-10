const inputElement = document.querySelector('input');
const btnElement = document.querySelector('button');
const ulElement = document.querySelector('#app ul');

console.log(btnElement)

let toDo = JSON.parse(localStorage.getItem('list_toDo')) || [];

renderToDo();

function renderToDo(){
  ulElement.innerHTML= '';

  for (element of toDo){
    
    let linkElement = document.createElement('a');
    let linkText = document.createTextNode(' Delete');

    let newElement = document.createElement('li');
    let newNode = document.createTextNode(element);

    let pos = toDo.indexOf(element);

    linkElement.setAttribute('onclick','deleteToDo('+ pos +')');

    linkElement.setAttribute('href','#')
    
    linkElement.appendChild(linkText);

    newElement.appendChild(newNode);
    
    newElement.appendChild(linkElement);

    ulElement.appendChild(newElement);
  }
}

btnElement.onclick = function (){
  click();
}

function click (){
  let todoValue = inputElement.value;
  toDo.push(todoValue);
  inputElement.value = '';
  renderToDo();
  saveTodo();
}

function deleteToDo(pos){
  toDo.splice(pos,1);
  renderToDo();
  saveTodo();
}

document.addEventListener('keyup', (event) => {
  
  if (event.key =='Enter'){
    click();
  }
})

function saveTodo(){
    localStorage.setItem('list_toDo', JSON.stringify(toDo));

}