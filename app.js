//GETELEMENTSBYCLASSNAME 

var items document.getElementsByClassName('list-group-item'); = console.log(items);

console.log(items[1]);

// items[1].textContent = 'Hello 2';

// items[1].style.fontweight "bold"; 
// items[1].style.backgroundColor="yellow";

// Gives error

//items.style.backgroundColor = '#f4f4f4';

for(var i = 0; i < items.length; i++){
  items[i].style.backgroundColor='#f4f4f4';
}


const newLi = document.createElement('li');
newLi.textContent = 'New List Item'; 
const ulElement = document.querySelector('.list-group');
ulElement.appendChild(newLi);

const elementsWithSameClass = document.getElementsByClassName('my-list');
if (elementsWithSameClass.length > 0) {
  elementsWithSameClass[0].textContent = 'Updated List Item (using getElementsByClassName)';
}

const elementsWithTagName = document.getElementsByTagName('li');
if (elementsWithTagName.length > 0) {
  elementsWithTagName[0].textContent = 'Updated List Item (using getElementsByTagName)';
}

