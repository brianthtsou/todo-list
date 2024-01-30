const list = document.getElementById("todo-list");
const field = document.getElementById("task-field");

function addToList() {
  if (field.value === "") {
    alert("Please enter in a task!");
    return;
  }
  const task = document.createElement("li");
  task.textContent = field.value;
  list.appendChild(task);

  const x_button = document.createElement("span");
  x_button.className = "close";
  x_button.textContent = "x";

  task.appendChild(x_button);

  x_button.onclick = function () {
    removeTask(this);
  };

  task.onclick = function () {
    remove(this);
  };
  field.value = "";
}

function removeTask(e) {
  li_task = e.parentNode;
  li_task.parentNode.removeChild(li_task);
}
