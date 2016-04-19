toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  var self = this;

  self.todos = [];

  self.addToDo = function(thingToDo) {
    self.todos.push(new ToDoFactory(thingToDo));
  };

  self.removeToDo = function() {
    self.todos.pop();
};
}]);
