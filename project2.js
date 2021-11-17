console.log("This is project.js");

function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

function Display() {}

Display.prototype.add = function (book) {
  console.log("Adding to UI");
  let tableBody = document.getElementById("tableBody");
  let uistring = `
                <tr>
                    <td>${book.No}</td>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                 </tr> `;
  tableBody.innerHTML += uistring;
};
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book?.Author?.length < 2) {
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (type, displaymessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>message</strong>${displaymessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div> `;
};
setTimeout(function () {
  message.innerHTML = "";
}, 2000);

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSumit);
console.log("libraryForm", libraryForm);
function libraryFormSumit(e) {
  console.log("You have sumitted library form");
  e.preventDefault();
  let name = document.getElementById("bookname").value;
  let author = document.getElementById("Author").value;
  let type;
  let fiction = document.getElementById("Fiction");
  console.log("fiction");
  let programing = document.getElementById("Programming");
  let cooking = document.getElementById("cooking");
  let selecttype = document.getElementById("selecttype");
  if (selecttype.value) {
    type = selecttype.value;
  }
  // if (fiction.checked) {
  //   type = fiction.value;
  // } else if (programing.checked) {
  //   type = programing.value;
  // } else if (cooking.checked) {
  //   type = cooking.value;
  // }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", " Your book has been sucessfully added");
  } else {
    display.show("danger", " Sorry you can not add this book");
  }

  e.preventDefault();
}
