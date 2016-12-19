var app = angular.module("simpleApp", ["ngRoute", "ui.materialize", "angular-loading-bar", "ngAnimate", "firebase"]);
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

        $

      }]);


app.controller('MainCtrl', function($scope, $firebaseArray) {



        $scope.mostrarConsola = function (){
            console.log("Hola soy un texto en la consola");

        };

        $scope.searchCode = function (code){

          var refTypeInfo = firebase.database().ref().child("typeInfo");
          // create a synchronized array to typeInfo
          $scope.typeInfos = $firebaseArray(refTypeInfo);

          //TODO: static to variable
          $scope.typeInfo = 'phone';

          try{
          //if($scope.firebaseUser){
            if(code){
              var refCodes = firebase.database().ref().child("codes").orderByChild("codeInfo").equalTo(code);
            }else{
              var refCodes = firebase.database().ref().child("codes");
            }

            // create a synchronized array to codes
            $scope.codes = $firebaseArray(refCodes);
           //}

        }catch(err){
              console.log(err);
        }
      };

      $scope.addInfo = function() {

        var refCodesAdd = firebase.database().ref().child("codes");
        // create a synchronized array to codes
        $scope.codesAdd = $firebaseArray(refCodesAdd);
        $scope.codesAdd.$add({
              msgInfo: $scope.msgInfo,
              typeInfo: $scope.typeInfo,
              user: $scope.firebaseUser.uid,
              codeInfo: $scope.codeInfo,
              timestamp: firebase.database.ServerValue.TIMESTAMP
        });
      };


      });
