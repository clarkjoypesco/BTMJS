//REPLACE HEADING

//CREATE ELEMENT
const newHeading = document.createElement("h2");

//Add Id
newHeading.id = "task-title";

//add content to newheading
newHeading.appendChild(document.createTextNode("Task List"));

//To Replace Get oldheading
const oldHeading = document.getElementById("task-title");

//get Parent
const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

//REMOVE ELEMENT

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

//Remove list item
lis[0].remove();

//Remove child element

list.removeChild(lis[3]);

//CLASSES AND ATR

const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");
val = link;

//Attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "Google");
val = link.hasAttribute("title");
link.removeAttribute("title");
val = link;

console.log(val);
