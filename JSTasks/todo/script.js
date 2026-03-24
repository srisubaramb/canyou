let tasks = [
  { id: 1, name: "Buy milk", status: "pending" },
  { id: 2, name: "Read book", status: "completed" },
];
renderTask();
let taskCount = tasks.length;
document.querySelector("#task-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = e.target.elements["task-name"].value;
  if (taskName !== "" && !isTaskIsThere(taskName)) {
    taskCount++;
    const obj = { id: taskCount, name: taskName, status: "pending" };
    tasks.push(obj);
    renderTask();
  } else {
    alert("Task is already There 🤷‍♀️");
  }
  e.target.reset();
});
function renderTask() {
  const todoDisplay = document.querySelector(".todo-display");
  todoDisplay.innerHTML = "";
  tasks.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element.name;
    const completeButton = document.createElement("button");
    completeButton.textContent = "Completed";
    completeButton.setAttribute("onclick", `completeTask(${element.id})`);
    if (element.status === "completed") {
      li.classList.add("completed");
    }
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("onclick", `deleteTask(${element.id})`);
    li.append(completeButton, deleteButton);
    console.log(li);
    todoDisplay.appendChild(li);
  });
  document.querySelector(".task-count").textContent = tasks.length;
}
function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  renderTask(tasks);
}
function completeTask(taskId) {
  tasks = tasks.map((task) =>
    task.id === taskId ? {...task, status : "completed"} : task,
  );
  renderTask(tasks);
}
function isTaskIsThere(taskName) {
  return tasks.filter((task) => task.name === taskName).length !== 0;
}