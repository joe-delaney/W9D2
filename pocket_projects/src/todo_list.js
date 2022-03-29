let todos = JSON.parse(localStorage.getItem('items')) || [];
let ul = document.querySelector(".todos");
let todoForm = document.querySelector(".add-todo-form");

function addToDo(e){
  e.preventDefault();
  let input = document.querySelector("input[name='add-todo']");
  let value = input.value;
  let todo = {value: value, done: false};
  todos.push(todo);
  localStorage.setItem('items', JSON.stringify(todos));
  todoForm.reset();
  populateList(todos);
}

function populateList(arr) {
  if(!ul.children.length < 2) {
    arr.forEach(todo => {
      let label = document.createElement("label");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      label.innerText = todo.value;
      checkbox.checked = todo.done;
      let li = document.createElement("li");
      li.appendChild(checkbox);
      li.appendChild(label);
      ul.appendChild(li);
    });
  } else {
    let label = document.createElement("label");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label.innerText = arr[arr.length - 1].value;
    checkbox.checked = arr[arr.length - 1].done;
    let li = document.createElement("li");
    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
  }
}

todoForm.addEventListener("submit",addToDo);
populateList(todos);
