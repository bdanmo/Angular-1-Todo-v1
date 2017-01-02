angular.module("toDoList", [])
.controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log("Hello! This is the helloWorld funciton in the mainCtrl.");
    }

    $scope.todos = [
        {"name": "Practice guitar"},
        {"name": "Learn more JavaScript"},
        {"name": "Get a better job"},
        {"name": "Record a song"},
    ]
});