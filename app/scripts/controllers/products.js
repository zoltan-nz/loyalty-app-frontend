'use strict';

/**
 * @ngdoc function
 * @name gemStoreApp.controller:ProductsController
 * @description
 * # ProductsController
 * Controller of the gemStore
 */
angular.module('gemStore')
  .controller('ProductsController', ['$scope', 'Product', function($scope, Product) {
    $scope.products = Product.query();
  }]);
