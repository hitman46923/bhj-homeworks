
let taskInput = document.getElementById('task__input');
let addButton = document.getElementById('tasks__add');
let taskList = document.getElementById('tasks__list');


let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];


savedTasks.forEach(function(task) {
    createTaskElement(task);
});


function createTaskElement(task) {
    let taskItem = document.createElement('div');
    taskItem.classList.add('task');

    let taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.innerText = task;

    let removeButton = document.createElement('a');
    removeButton.classList.add('task__remove');
    removeButton.innerText = '\u00D7';

 
    removeButton.addEventListener('click', function() {
        removeTask(taskItem);
    });


    taskItem.appendChild(taskTitle);
    taskItem.appendChild(removeButton);

    taskList.appendChild(taskItem);
}


function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText !== '') {
        createTaskElement(taskText);
        savedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(savedTasks));
        taskInput.value = '';
    }
}


function removeTask(taskItem) {
    let taskText = taskItem.firstChild.innerText;
    let taskIndex = savedTasks.indexOf(taskText);

    if (taskIndex !== -1) {
        savedTasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(savedTasks));
    }

    taskItem.remove();
}


function handleKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }
}


addButton.addEventListener('click', addTask);


taskInput.addEventListener('keydown', handleKeyPress);
