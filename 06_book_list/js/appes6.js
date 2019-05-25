// Book Constructor
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Constructor
class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");

    // Create tr element
    const row = document.createElement("tr");

    // Insert cols

    row.innerHTML = ` <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="delete">X</a></td>
          `;
    list.appendChild(row);
  }

  //Show Alert
  showAlert(message, className) {
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
  }

  // Delete Book
  deleteBook(target) {
    target.parentElement.parentElement.remove();
  }

  //Clear Fields
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Event Listeners for add book
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

// Event Listener for delete

document.getElementById("book-list").addEventListener("click", function(e) {
  //Instantiate UI
  const ui = new UI();

  if (e.target.className === "delete") {
    //Delete book
    ui.deleteBook(e.target);
    //Show message
    ui.showAlert("Book Removed!", "success");
  }

  e.preventDefault();
});
