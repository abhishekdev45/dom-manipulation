//GETELEMENTSBYCLASSNAME 

var items document.getElementsByClassName('list-group-item'); = console.log(items);

console.log(items[1]);

// items[1].textContent = 'Hello 2';

// items[1].style.fontweight "bold"; 
// items[1].style.backgroundColor="yellow";

// Gives error

//items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor='#f4f4f4';
// }


// const newLi = document.createElement('li');
// newLi.textContent = 'New List Item'; 
// const ulElement = document.querySelector('.list-group');
// ulElement.appendChild(newLi);

// const elementsWithSameClass = document.getElementsByClassName('my-list');
// if (elementsWithSameClass.length > 0) {
//   elementsWithSameClass[0].textContent = 'Updated List Item (using getElementsByClassName)';
// }

// const elementsWithTagName = document.getElementsByTagName('li');
// if (elementsWithTagName.length > 0) {
//   elementsWithTagName[0].textContent = 'Updated List Item (using getElementsByTagName)';
// }

// Change the 2nd item's background color to green
const secondItem = document.querySelector('#items .list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

// Make the 3rd item invisible
const thirdItem = document.querySelector('#items .list-group-item:nth-child(3)');
thirdItem.style.display = 'none';

const listItemElements = document.querySelectorAll('#items .list-group-item');
if (listItemElements.length > 1) {
  // Change the font color to green for the 2nd item
  listItemElements[1].style.color = 'green';
}

const oddItems = document.querySelectorAll('#items .list-group-item:nth-child(odd)');
oddItems.forEach(item => {
  item.style.backgroundColor = 'green';
});

