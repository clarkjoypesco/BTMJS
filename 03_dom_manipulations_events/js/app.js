//create element
const li = document.createElement("li");

//add class
li.className = "collection-item";

//add id
li.id = "new-item";

//add attribute
li.setAttribute("title", "New Item");

//Create a text node and append
li.appendChild(document.createTextNode("Hello World"));

//Create a new link element
const link = document.createElement("a");

//add class to link
link.className = "delete-item secondary-content";

//Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//Append link to li
li.appendChild(link);

//Append li as child to ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);
