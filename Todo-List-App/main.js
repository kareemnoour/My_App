const task = document.getElementById("addTasksInp");
const tasks = document.getElementById("tasks");
const btn = document.getElementById("addTasksBtn");

let saveTasks = [];

if (localStorage.getItem("tasks")) {
    saveTasks = JSON.parse(localStorage.getItem("tasks"));
}

loadFromStorage();

function createTask(val) {
    tasks.innerHTML += `
        <li>
            <span>${val}</span>
            <button class="delete" onclick ="deleteTask()">
            <svg viewBox="0 0 448 512" class="svgIcon">
            <path
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
            ></path>
            </svg>
            </button>
        </li>`;
    console.log(saveTasks);
}

function deleteTask() {
    let delBtn = event.target;
    if (delBtn.classList.contains("delete")) {
        delBtn.parentElement.remove();
    }
    saveTasks = saveTasks.filter((task) => task !== delBtn.parentElement.children[0].textContent);
    saveTaskToLocalStorage(saveTasks);
}

function saveTaskToLocalStorage(Tasks) {
    localStorage.setItem("tasks", JSON.stringify(Tasks));
}

function loadFromStorage() {
    let data = localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        for (let i = 0; i < tasks.length; i++) {
            createTask(tasks[i]);
        }
    }
}

btn.addEventListener("click", () => {
    createTask(task.value);
    saveTasks.push(task.value);
    task.value = "";
    saveTaskToLocalStorage(saveTasks);
});
