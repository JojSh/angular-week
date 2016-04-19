toDoApp.factory('ToDoFactory', function() {
  var Todo = function(thingToDo){
    this.text = thingToDo;
    this.completed = false;
  };

  Todo.prototype.complete = function() {
    this.completed = true;
  };

  return Todo;
});
