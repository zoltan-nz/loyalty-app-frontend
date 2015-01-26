'use strict';

/**
 * @ngdoc service
 * @name gemStore.Product
 * @description
 * # Product
 * Factory in the gemStore.
 */
angular.module('gemStore')
  .factory('Product', ['$resource', function($resource) {

    return $resource('products/:productId.json', {}, {
      query: {method: 'GET', params:{phoneId:'phones'}, isArray:true}
    });

  }]);
