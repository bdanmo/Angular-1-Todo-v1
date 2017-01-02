angular.module("toDoList", [])
.controller('mainCtrl', function($scope, dataService) {
    $scope.helloConsole = dataService.helloConsole;
    
    $scope.learningNgChange = function() {
        console.log("An input has changed!");
    }

})

.service('dataService', function() {

    this.helloConsole = function() {
        console.log("This is the data service function.");
    }

});