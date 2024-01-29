const list = document.getElementById("todo-list");
const field = document.getElementById("task-field");

function addToList() {
  const task = document.createElement("li");
  task.innerHTML = field.value;
  list.appendChild(task);
  task.onclick = function () {
    remove(this);
  };
  field.innerHTML = "";
}

function remove(e) {
  e.parentNode.removeChild(e);
}
