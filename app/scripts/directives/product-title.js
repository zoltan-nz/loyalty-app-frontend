'use strict';

/**
 * @ngdoc directive
 * @name gemStore.directive:productTitle
 * @description
 * # productTitle
 */
angular.module('gemStore')
  .directive('productTitle', function () {
    return {
      templateUrl: '../../views/directives/product-title.html',
      restrict: 'E'
    };
  });
