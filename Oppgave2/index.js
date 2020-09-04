
window.onload = oppstart;

function oppstart() {

  listeners();
  updateTodo();
}

function listeners(){
  document.getElementById("new-todo-button").addEventListener('click', () => {popup();})
  document.getElementById("close").addEventListener('click', () => {disablePopup();})
}

function updateTodo(){
  var deleteBtn = document.getElementsByClassName("todo-list-delete-button");
  var completeBtn = document.getElementsByClassName("todo-list-complete-button");
  for (let i = 0; i < completeBtn.length; i++){
    deleteBtn[i].addEventListener('click', deleteTodoItem);
    completeBtn[i].addEventListener('click', completeTodoItem);
  }
}

function deleteTodoItem(){
  this.parentNode.remove();
}

function popup(){
  document.getElementById("my-modal").style.display = "block";
  document.querySelector('#create-button').addEventListener('click', createNewTodo)
}

function disablePopup(){
  document.getElementById("my-modal").style.display = "none";
}
  var completedTodoCollection = document.getElementsByClassName("normal-table-row");
  var activeTodoCollection = document.getElementsByClassName("todo-list-item");

function createNewTodo(){
  let newTodoData = {
    title: document.getElementById("new-title").value,
    description: document.getElementById("new-description").value,
    author: document.getElementById("new-author").value
  }

  document.getElementById("new-title").value = "";
  document.getElementById("new-description").value ="";
  document.getElementById("new-author").value="";
  let newTodo = newTodoHtml(newTodoData);
  document.getElementById("todo-list").insertAdjacentHTML("beforeend", newTodo);
  updateTodo();
  document.getElementById("my-modal").style.display = "none";
}

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
