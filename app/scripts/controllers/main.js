'use strict';

/**
 * @ngdoc function
 * @name gemStore.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gemStore
 */
angular.module('gemStore')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
