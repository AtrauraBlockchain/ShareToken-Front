'use strict';

angular.module('myApp.createShareholder', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/createShareholder', {
    templateUrl: 'createShareholder/createShareholder.html',
    controller: 'CreateShareholderCtrl'
  });
}])

.controller('CreateShareholderCtrl', ['$scope',function($scope) {
  $scope.treatment = "Mr";
  $scope.name = "";
  $scope.surname = "";
  $scope.id = "";
  $scope.account = "";


  $scope.generateHash = function() {
      var CryptoJS = require("crypto-js");
      var stringToEncrypt = "3/^5b,GhSh}%(,b*" +$scope.name + $scope.surname + $scope.id + $scope.account;
      var ciphertext = CryptoJS.SHA3.encrypt('my message', { outputLength: 224 });

      console.log(ciphertext.toString());

  }


}]);