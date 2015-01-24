'use strict';

/**
 * @ngdoc function
 * @name gemStore.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the gemStore
 */
angular.module('gemStore')
  .controller('TestCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
