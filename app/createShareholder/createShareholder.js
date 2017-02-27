'use strict';

angular.module('myApp.createShareholder', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/createShareholder', {
    templateUrl: 'createShareholder/createShareholder.html',
    controller: 'CreateShareholderCtrl'
  });
}])

.controller('CreateShareholderCtrl', [function() {

}]);