let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li>
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <div>
                    <button onclick="toggleTask(${index})">
                        ${task.completed ?'Not-Complet' : 'Complet'}
                    </button>
                    <button onclick="deleteTask(${index})"> Delet</button>
                </div>
            </li>
        `;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value.trim() !== "") {
        tasks.push({ text: input.value, completed: false });
        input.value = "";
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
renderTasks();
