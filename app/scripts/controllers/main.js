'use strict';

/**
 * @ngdoc function
 * @name gemStore.controller:MainController
 * @description
 * # MainController
 * Controller of the gemStore
 */
angular.module('gemStore')
  .controller('MainController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
