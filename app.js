//GETELEMENTSBYCLASSNAME 

// var items document.getElementsByClassName('list-group-item'); 

// console.log(items[1]);

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
// const secondItem = document.querySelector('#items .list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// Make the 3rd item invisible
// const thirdItem = document.querySelector('#items .list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

// const listItemElements = document.querySelectorAll('#items .list-group-item');
// if (listItemElements.length > 1) {
//   // Change the font color to green for the 2nd item
//   listItemElements[1].style.color = 'green';
// }

// const oddItems = document.querySelectorAll('#items .list-group-item:nth-child(odd)');
// oddItems.forEach(item => {
//   item.style.backgroundColor = 'green';
// });

 var itemList = document.querySelector('#items');

// parentNode

// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor='#f4f4f4'; 
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement

//console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor = '#f4f4f4'; 
//console.log(itemList.parentElement.parentElement.parentElement)

// childNodes

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = 'yellow';



// FirstChild

// console.log(itemList.firstChild);

// // firstElementChild

// console.log(itemList.firstElementChild);

// itemList.firstElementChild.textContent = 'Hello 1';
 

 // lastChild

// console.log(itemList.lastChild); // lastElementChild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling

// console.log(itemList.nextSibling);

// // nextElementSibling

// console.log(itemList.nextElementSibling);

// previousSibling

// console.log(itemList.previousSibling);

// previousElementSibling // console.log(itemlist.previous ElementSibling);

// itemlist.previous ElementSibling.style.color = 'green';
 // Create a div var newDiv = document.createElement('div');

// Add class newDiv.className= 'hello';

// Add id

// newDiv.id = 'hello1';

// Add attr

// newDiv.setAttribute('title', 'Hello Div');

// Create text node

// var newDivText = document.createTextNode('HEllo');

// // Add text to div newDiv.appendChild(newDivText);

// var container=document.querySelector('header .container');

// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// container.insertBefore(newDiv, h1);

