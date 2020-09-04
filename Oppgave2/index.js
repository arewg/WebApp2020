
window.onload = oppstart;

function oppstart() {

  listeners();
  updateTodo();
}

//Lytter etter trykk for å åpne/lukke popup vinduet med new todo form
function listeners(){
  document.getElementById("new-todo-button").addEventListener('click', () => {popup();})
  document.getElementById("close").addEventListener('click', () => {disablePopup();})

}

//Åpner form-vinduet og lytter etter trykk på Create-knappen som
//oppretter et nytt kort.
function popup(){
  document.getElementById("my-modal").style.display = "block";
  document.querySelector('#create-button').addEventListener('click', createNewTodo)
}

//Lukker form-vinduet ved trykk på krysset
function disablePopup(){
  document.getElementById("my-modal").style.display = "none";
}

//Oppdateres slik at antall knapper stemmer med antall kort og slik at
//riktig knapp sletter/completer riktig kort.
function updateTodo(){
  var deleteBtn = document.getElementsByClassName("todo-list-delete-button");
  var completeBtn = document.getElementsByClassName("todo-list-complete-button");
  for (let i = 0; i < completeBtn.length; i++){
    deleteBtn[i].addEventListener('click', deleteTodoItem);
    completeBtn[i].addEventListener('click', completeTodoItem);
  }
}

//Sletter et kort
function deleteTodoItem(){
  this.parentNode.remove();
}

//Funksjon for å opprette nye todo-kort, ved å hente ut verdien i feltene og 
//sette de på de riktige stedene ved opprettelse av ny HTML for kortet.
function createNewTodo(){
  let newTodoData = {
    title: document.getElementById("new-title").value,
    description: document.getElementById("new-description").value,
    author: document.getElementById("new-author").value
  }

  //Nullstiller feltene i formen etter jeg har hentet ut verdien
  //i de for opprettelse av nytt kort. 
  document.getElementById("new-title").value = "";
  document.getElementById("new-description").value ="";
  document.getElementById("new-author").value="";

  let newTodo = newTodoHtml(newTodoData);
  document.getElementById("todo-list").insertAdjacentHTML("beforeend", newTodo);
  updateTodo();

  //Lukker form-vinduet
  document.getElementById("my-modal").style.display = "none";
}

//Returnerer kortet som HTML
function newTodoHtml(data){
  return `
    <li class="todo-list-item">
      <h2 class="todo-list-title">${data.title}</h1>
      <p class="todo-list-description">${data.description}</p>
      <p class="todo-list-author">${data.author}</p>
      <button class="todo-list-delete-button">Delete</button>
      <button class="todo-list-complete-button">Complete</button>
    </li>
    `
  }

  //Funksjon for å flytte et aktivt TODO-kort til et ferdig, funker
  //på samme måte som createtodo-funksjon
  function completeTodoItem(){
    let completeTodoData = {
      title: this.parentNode.querySelector(".todo-list-title").innerHTML,
      description: this.parentNode.querySelector(".todo-list-description").innerHTML,
      author: this.parentNode.querySelector(".todo-list-author").innerHTML
    }
    console.log(completeTodoData)
    createCompleteTodoTableEntry(completeTodoData);
    this.parentNode.remove();
  }

  function createCompleteTodoTableEntry(data){
    let entry = completeTodoItemHtml(data);
    document.getElementById("completed-todos-table").innerHTML += entry;
    updateTodo();
  }

  function completeTodoItemHtml(data){
    return `
    <tr class="normal-table-row">
      <td>${data.title}</td>
      <td>${data.author}</td>
      <td>${data.description}</td>
      <td>${new Date().toLocaleDateString()}</td>
    </tr>
    `
  }
