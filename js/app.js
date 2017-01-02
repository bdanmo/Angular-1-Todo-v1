angular.module("toDoList", [])
.controller('mainCtrl', function($scope) {
    $scope.learningNgChange = function() {
        console.log("An input has changed!");
    }

    $scope.todos = [
        {"name": "Practice guitar"},
        {"name": "Learn more JavaScript"},
        {"name": "Get a better job"},
        {"name": "Record a song"},
    ]
});