    //Selecteurs
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
    //Ecouteurs
    todoButton.addEventListener("click", addTodo);
    todoList.addEventListener("click", deleteCheck)
    //Fonctions
    function addTodo(event) {
    event.preventDefault();
    
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Créer le <li>
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Button check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Button Supprimer
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // Ajouter notre TODO à TODO-list
    todoList.appendChild(todoDiv);
    todoInput.value = ""
}

function deleteCheck(e) {
    const item = e.target;
    //Delete TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
        //item.parentElement.remove()
    }
}