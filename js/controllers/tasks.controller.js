'use strict';
// Tasks Controller
function TasksController(){
  this.$addTaskForm = $('#add_task');
  this.$taskDescriptionInput = $('#task_description');
  this.$selectListMenu =$('#select_list');
  this.$taskPriorityInput =$('#task_priority');
  this.$wrapper = $('#wrapper');
}

TasksController.prototype.init = function(){
  this.$addTaskForm.on('submit', (e) => {
    e.preventDefault();

    let taskList = List.all[($('select').val())];
    let taskDesc = this.$taskDescriptionInput.val();
    let taskPriority = this.$taskPriorityInput.val();
    let newTask = new Task(taskDesc, taskPriority,taskList);
    newTask.build()

    $('.destroy-task').on('click', (e) => {
       e.preventDefault()
       e.target.parentElement.remove()
       taskList.tasks.splice(newTask.id, 1, null)
     })
  })
}
