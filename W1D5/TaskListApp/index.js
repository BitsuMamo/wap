const addTask = document.getElementById('add-task');
const clearTasks = document.getElementById('clear-tasks');
const data = document.getElementById('data');
const task = document.getElementById('task');

let listOfTasks = loadTasksFromLocalDB();
refreshTask();

function refreshTask() {
    data.value = "";

    let text = "";

    listOfTasks.forEach(task => {
        text += task + "\n";
    })

    data.value = text;
}

function saveTaskToLocalDB() {
    localStorage.setItem('tasks', JSON.stringify(listOfTasks));

}

function loadTasksFromLocalDB() {
    const tasksFromDB = localStorage.getItem('tasks');
    if(tasksFromDB == null) return [];
    

    return JSON.parse(tasksFromDB)
}

addTask.addEventListener('click', () => {
    let taskStringaValue = task.value.trim();

    if(taskStringaValue == null) return;
    if (taskStringaValue == "") return

    listOfTasks.push(taskStringaValue)

    saveTaskToLocalDB();
    refreshTask();
})



clearTasks.addEventListener('click', () => {
    listOfTasks = [];
    saveTaskToLocalDB();
    refreshTask();
})