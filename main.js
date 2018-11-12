'use strict';

var triggerModalButton = document.querySelector('.modal__trigger-button');
var modal = document.querySelector('.modal');
var modalBackground = document.querySelector('.modal__background');
var newTaskButton = document.querySelector('.modal__add-task-button');
var taskListCurrent = document.querySelector('.task-list__current');
var taskListCompleted = document.querySelector('.task-list__completed');
var taskName = document.querySelector('.modal__input');
var newListElement;
var newTask;

// ABRE/CIERRA EL MODAL
function toggleModal() {
  modal.classList.toggle('modal-open');
}

triggerModalButton.addEventListener('click', toggleModal);
modalBackground.addEventListener('click', toggleModal);


// AÑADE UNA TAREA A LA LISTA
newTaskButton.addEventListener('click', addNewTask);

function addNewTask() {
  newListElement = document.createElement('li');
  newTask = document.createTextNode(taskName.value);
  newListElement.appendChild(newTask);
  newListElement.addEventListener('click', toggleTask);
  taskListCurrent.appendChild(newListElement);

  toggleModal();
}

// MARCA/DESMARCA UNA TAREA COMO COMPLETADA 
function toggleTask(e) {
  if(e.target.classList.contains('completed-task')){
    e.target.classList.remove('completed-task');
    taskListCompleted.removeChild(e.target);
    taskListCurrent.appendChild(e.target);
  } else {
    e.target.classList.add('completed-task');
    taskListCurrent.removeChild(e.target);
    taskListCompleted.appendChild(e.target);
  }
}

