const list = document.getElementById("todo-list");
const field = document.getElementById("task-field");

function addToList() {
  const task = document.createElement("li");
  task.innerHTML = field.value;
  list.appendChild(task);
  field.innerHTML = "";
}
