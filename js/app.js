angular.module("toDoList", [])
.controller('mainCtrl', function($scope, dataService) {
    $scope.helloConsole = dataService.helloConsole;
    
    $scope.learningNgChange = function() {
        console.log("An input has changed!");
    }

    dataService.getTodos(function(response) {
        $scope.todos = response.data;
    });

})

.service('dataService', function($http) {

    this.getTodos = function(callback) {
        $http.get('mock/todos.json')
        .then(callback);
    }

});