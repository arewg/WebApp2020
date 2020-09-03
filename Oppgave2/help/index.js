window.onload = oppstart;

function oppstart() {

  var modal = document.getElementById("my-modal");

  var span = document.getElementsByClassName("close")[0];
  // Get the button that opens the modal
  var todoButton = document.getElementById("new-todo-button");


  todoButton.onclick = function () {
    modal.style.display = "block";
    //Lager form variabel her fordi det er her vinduet dukker opp når du klikker på todo

  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

const wrapper = document.getElementById("todo-list");
const description = "";
const listDesctiption = description.split(" ");
const types = ["p", "div", "li"];

//Lager teksten
const addText = (el, text) => {
  el.innerHTML = text;
  return el;
};

//Lager selve elementet f.eks listen som teksten skal knyttes til
const addElement = (node, el) => {
  node.appendChild(el);
};

//Husk å legg til if test her hvis det funker
//Lager det faktiske elementet med metodene over
const createElement = (type) => {
  return document.createElement(type);
}

const createListElements = () => {
  listDesctiption.map((text) => addElement(wrapper, addText(createElement("li"), text)))
}

const createNewTodo = (event) => {
  event.preventDefault();
 }
 
 const handleInputChange = (event) => {
   event.preventDefault();
   description = event.target.value;
 }



