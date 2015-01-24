'use strict';

/**
 * @ngdoc function
 * @name gemStore.controller:StoreController
 * @description
 * # StoreController
 * Controller of the gemStore
 */

var gems = [{
  name: 'Dodecahedron',
  price: 2.95,
  description: 'This is the description',
  canPurchase: true,
  soldOut: false,
  images: [
    { full: '/images/gem-02.gif',
      thumb: '/images/gem-02.gif'}
    ],
  reviews: [
    {
      stars: 5,
      body: 'I love this product!',
      author: 'example@example.com'
    }
  ]
},{
  name: 'Dodecahedron2',
  price: 2722211.5675,
  description: 'This is the description',
  canPurchase: true,
  soldOut: false
}];

angular.module('gemStore')
  .controller('StoreController', function () {

    this.products = gems;

  });
