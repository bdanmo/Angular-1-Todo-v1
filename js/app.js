angular.module("toDoList", [])
.controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log("Hello! This is the helloWorld funciton in the mainCtrl.");
    }
});