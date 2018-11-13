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


// OBTIENE LA FECHA DE HOY
var date = new Date();
var currentMonthDay = date.getDate();
var monthDayTag = document.querySelector('.date-number');
monthDayTag.innerHTML = currentMonthDay;

var days = new Array(7)
days[0] = "Domingo";
days[1] = "Lunes";
days[2] = "Martes";
days[3] = "Miércoles";
days[4] = "Jueves";
days[5] = "Viernes";
days[6] = "Sábado";
var currentWeekDay = days[date.getDay()];
var weekDayTag = document.querySelector('.date-day');
weekDayTag.innerHTML = currentWeekDay;

var months = new Array();
months[0] = "Enero";
months[1] = "Febrero";
months[2] = "Marzo";
months[3] = "Abril";
months[4] = "Mayo";
months[5] = "Junio";
months[6] = "Julio";
months[7] = "Agosto";
months[8] = "Septiembre";
months[9] = "Octubre";
months[10] = "Noviembre";
months[11] = "Diciembre";
var currentMonth = months[date.getMonth()];
var monthTag = document.querySelector('.date-month');
monthTag.innerHTML = currentMonth + ', ';

var currentYear = date.getFullYear();
var yearTag = document.querySelector('.date-year');
yearTag.innerHTML = currentYear;


// ABRE/CIERRA EL MODAL
function toggleModal() {
  modal.classList.toggle('modal-open');
}

triggerModalButton.addEventListener('click', toggleModal);
modalBackground.addEventListener('click', toggleModal);


// AÑADE UNA TAREA A LA LISTA
function addNewTask() {
  newListElement = document.createElement('li');
  newListElement.classList.add('list__element');
  newTask = document.createTextNode(taskName.value);
  newListElement.appendChild(newTask);
  newListElement.addEventListener('click', toggleTask);
  taskListCurrent.appendChild(newListElement);

  toggleModal();
}

newTaskButton.addEventListener('click', addNewTask);


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

