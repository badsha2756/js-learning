let heading = document.querySelector('#heading1');
heading.innerHTML="JavaScript";
heading.style.color='green';
heading.style.fontSize='80px'

//let trName=document.querySelector('.subheading');
//trName.style.color= "red";

//let trName=document.querySelectorAll('.subheading'[1]);
//trName.style.color= "blue";

//heading.classList.add('title');

// create new element 
const addElement = document.createElement('h2');
addElement.innerHTML='Mousumi K';

const parent=document.querySelector('.myDiv');
parent.appendChild(addElement);

addElement.style.color='blue'
addElement.style.fontSize='50px'
addElement.classList.add("title");
console.log(addElement); 
// create elemnet in various position...

/* const creEle = document.createElement('h3');
creEle.innerHTML='Dipak Kumar';
creEle.insertAdjacentElement('beforebegin',creEle);
console.log(creEle); */




