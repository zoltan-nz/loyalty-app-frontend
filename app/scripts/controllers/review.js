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
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
