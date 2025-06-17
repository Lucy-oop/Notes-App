const notesContainer = document.querySelector(".notes-container");
//This line finds the HTML element with class .notes-container.It stores that element in a variable called notesContainer.This is where we’ll add new notes later.//
const createBtn = document.querySelector(".btn");



//This tells the browser: "When someone clicks the button..."We’ll run some code inside the function (() => { ... }) when the button is clicked.


createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  //This creates a new <p> element (a paragraph).We will use this as a note box.
  let img = document.createElement("img");
  //This creates a new <img> element (an image).This image will be used as a delete button inside the note.

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  //Makes the note editable—you can type inside it directly on the page.
 

  img.src = "delete.png"; 
  img.className = "delete-btn";


  img.addEventListener("click", () => {
    notesContainer.removeChild(inputBox);
    updateStorage(); // Update local storage after deletion
  });

  //When the image is clicked, the inputBox (the whole note) is removed from notesContainer.

  inputBox.appendChild(img);
  //Adds the delete image into the note box.
  notesContainer.appendChild(inputBox);
  updateStorage();

  //Adds the complete note (with image) to the .notes-container section on your page.
});