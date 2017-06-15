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
    e.preventDefault()
    let list = $('#select_list :selected').text();
    let desc = this.$taskDescriptionInput.val()
    let priority = this.$taskPriorityInput.val()
    debugger
    let newTask = new Task(desc, priority, list)
    newTask.build()
  })
}
