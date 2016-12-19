var app = angular.module("simpleApp", ["ngRoute", 'ui.materialize']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../views/intro.html"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});


app.controller('demoCtrl', ["$scope", function ($scope) {
        $scope.select = {
            value: "Option1",
            choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
        };

        $scope.mostrarConsola = function (){
            console.log("Hola soy un texto en la consola");
        };

      }]);
