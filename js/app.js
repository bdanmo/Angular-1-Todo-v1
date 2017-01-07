angular.module("toDoList", [])


.service('dataService', function($http) {

    this.getTodos = function(callback) {
        $http.get('mock/todos.json')
        .then(callback);
    };

    this.deleteTodo = function(todo) {
        console.log(todo.name + " has been deleted.");
        //delete todo from database
    };

    this.saveTodo = function(todo) {
        console.log(todo.name + " has been saved.");
        //save todo in database
    };

});