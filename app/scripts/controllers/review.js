'use strict';

/**
 * @ngdoc function
 * @name gemStore.controller:ReviewController
 * @description
 * # ReviewController
 * Review form of the gemStore
 */
angular.module('gemStore')
  .controller('ReviewController', function () {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
    };
  });
