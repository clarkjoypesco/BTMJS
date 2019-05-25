// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");

  // Create tr element
  const row = document.createElement("tr");

  // Insert cols

  row.innerHTML = ` <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" ckass="delete">X</a></td>
  `;
  list.appendChild(row);
};

//Show Alert
UI.prototype.showAlert = function(message, className) {
  //Create div
  const div = document.createElement("div");

  // Add classes
  div.className = `alert ${className}`;

  //Add Text
  div.appendChild(document.createTextNode(message));

  //get Parent
  const container = document.querySelector(".container");

  //get form
  const form = document.querySelector("#book-form");

  //insert alert
  container.insertBefore(div, form);

  //timeout after 3 sec
  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 3000);
};

//Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};
// Event Listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
  //Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //Instantiate book
  const book = new Book(title, author, isbn);

  //Instantiate UI
  const ui = new UI();

  //Validate
  if (title === "" || author === "" || isbn === "") {
    //Error alert

    ui.showAlert("Please fill in all the fields", "error");
  } else {
    //Add book to list
    ui.addBookToList(book);

    //Show success
    ui.showAlert("Book Added!", "success");

    // clear fields
    ui.clearFields();
  }

  e.preventDefault();
});
