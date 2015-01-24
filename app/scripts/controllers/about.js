'use strict';

/**
 * @ngdoc function
 * @name gemStore.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gemStore
 */
angular.module('gemStore')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
