/* Video: Local & Session Storage
// Set local storage item
// localStorage.setItem('name', 'John');

// Set session storage item
// sessionStorage.setItem('name', 'Beth');

// Remove from storage
// localStorage.removeItem('name');

// Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.getElementById('task').value;
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task Saved');

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task) {
    console.log(task);
});
End of Video: Local & Session Storage */

/* Video: Event Bubbling and Delegation
// Event Bubbling
//document.querySelector('.card-title').addEventListener('click', function() {
//    console.log('card-title');
//});
//
//document.querySelector('.card-content').addEventListener('click', function() {
//    console.log('card-content');
//});
//
//document.querySelector('.card').addEventListener('click', function() {
//    console.log('card');
//});
//
//document.querySelector('.col').addEventListener('click', function() {
//    console.log('col');
//});

// Event Delegation
//const delItem = document.querySelector('.delete-item');
//delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(event) {
    if(event.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        event.target.parentElement.parentElement.remove();
    }
}
End of Video: Event Bubbling and Delegation */

/* Video: Keyboard Events
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

//form.addEventListener('submit', runEvent);

// Key Down
taskInput.addEventListener('keydown', runEvent);
// Key Up
taskInput.addEventListener('keyup', runEvent);
// Key Press
taskInput.addEventListener('keypress', runEvent);
// Focus
taskInput.addEventListener('focus', runEvent);
// Blur
taskInput.addEventListener('blur', runEvent);
// Cut
taskInput.addEventListener('cut', runEvent);
// Paste
taskInput.addEventListener('paste', runEvent);

function runEvent(event) {
    console.log(`Event type: ${event.type}`);
    console.log(event.target.value);
    // heading.innerText = event.target.value;

}
End of Video: Keyboard Events */

/* Video: Mouse Events
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// Double Click 
clearBtn.addEventListener('dblclick', runEvent);
// Mouse Down: press the mouse button
clearBtn.addEventListener('mousedown', runEvent);
// Mouse Up: release the mouse button
clearBtn.addEventListener('mouseup', runEvent);
// Mouse Enter
card.addEventListener('mouseenter', runEvent);
// Mouse Leave
card.addEventListener('mouseleave', runEvent);
// Mouse Over
card.addEventListener('mouseover', runEvent);
// Mouse Out
card.addEventListener('mouseout', runEvent);
// Mouse Move
card.addEventListener('mousemove', onMove);

// Event Handlers
function runEvent(event) { 
    console.log(`Event Type: ${event.type}`);
}

function onMove(event) { 
    console.log(`Event Type: ${event.type}`);
    heading.textContent = `MouseX: ${event.offsetX} MouseY: ${event.offsetY}`;
    document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 40)`;
}

 End of Video: Mouse Events */

/* Video: Event Listeners & The Event Object
// document.querySelector('.clear-tasks').addEventListener('click', function(event) {
//   console.log('Hello World!');
// });
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(event) {
    let val;

    // Event Target Element
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;

    // Event type
    val = event.type;
    
    // Timestamp
    val = event.timeStamp;

    // Coordinates event relative to the window
    val = event.clientY;
    val = event.clientX;

    // Coordinates event relative to the element
    val = event.offsetY;
    val = event.offsetX;
    console.log(val);
}
End of Video: Event Listeners & The Event Object */

/* Video: Replace and delete DOM Elements
// Replace Element
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

// Get old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace 
cardAction.replaceChild(newHeading, oldHeading);

// Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();
list.removeChild(lis[3]);

// Classes and Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

// Classes
let val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

// Attributes
val = link;
val = link.getAttribute('href');
link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');

console.log(val); 
End of Video: Creating DOM Elements */

/* Video: Creating DOM Elements
const li = document.createElement('li');
li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title', 'New Item');
li.appendChild(document.createTextNode('Hello World'));

// Create new Link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);
document.querySelector('ul.collection').appendChild(li);

console.log(li); 
End of Video: Creating DOM Elements */


/* Video: Traversing the DOM
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// NODE TYPES:
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

val = list.children[0];
list.children[0].textContent = 'Hello';

// Children of Children
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Count Child elements
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get Next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get Previouss Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);

End of Video: Traversing the DOM */

/* Video: DOM Selectors for Multiple Elementsu
// getElementsBy
const items = document.getElementsByClassName('collection-item');
items[0].style.color = 'red';
items[3].textContent = 'Hello'; 
val = items;

const listItems = document.querySelector('ul').
    getElementsByClassName('collection-item');
val = listItems;

const lis = document.getElementsByTagName('li');
val = lis;

// Convert HTML collection to an array
let lisArray = Array.from(lis);
lisArray.reverse();

lisArray.forEach(function(li, index) {
    console.log(li.className);
    li.textContent = `${index}: Hello`;
});

// querySelectoAll
const things = document.querySelectorAll('ul.collection li.collection-item');
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li) {
    li.style.background = 'grey';
});

for( let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = 'lightgrey';
}
console.log(things);
End of Video: DOM Selectors for Multiple Elements */

/* Video: DOM Selectors for Single Elements
// 1. GetElementBy 
val = document.getElementById('task-title');

// Change styling
val.style.background = 'pink';
val.style.color = 'white';
val.style.padding = '5px';
// val.style.display = 'none';

// Change content
val.textContent = 'Task List';
val.innerText = 'My Tasks';
val.innerHTML = '<span style="color:red">Task List</span>';

// 2. QuerySelector
document.querySelector('#task-title');
document.querySelector('.card-title');
document.querySelector('h5');
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';

document.querySelector('li:nth-child(odd)').style.background = 'grey';

console.log(val);
End of Video: DOM Selectors for Single Elements */

/* Video examining the Document Object
// So-called html collections (they are not arrays)
val = document;
val = document.all;
val = document.all[0];
val = document.all[1];
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

// Turning html collections into arrays to use forEach
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
    console.log(script);
});

console.log(val);
End of video: Examiing the Document Object */
