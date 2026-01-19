const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <span class="delete" onclick="deleteTask(this)">❌</span>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(element) {
  element.parentElement.remove();
}
