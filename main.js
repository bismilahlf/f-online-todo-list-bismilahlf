'use strict';

var newTaskButton = document.querySelector('.modal__add-button');
var taskList = document.querySelector('.task-list');
var taskName = document.querySelector('.modal__input');
var newListElement;
var newTask;

newTaskButton.addEventListener('click', addNewTask);

function addNewTask() {
  newListElement = document.createElement('li');
  newTask = document.createTextNode(taskName.value);
  newListElement.append(newTask);
  newListElement.addEventListener('click', completeTask);
  taskList.appendChild(newListElement);
}

function completeTask(e) {
  e.target.classList.toggle('completed-task');
  
}
