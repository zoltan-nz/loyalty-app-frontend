'use strict';

/**
 * @ngdoc directive
 * @name gemStore.directive:productPanels
 * @description
 * # productPanels
 */
angular.module('gemStore')
  .directive('productPanels', function () {
    return {
      templateUrl: '../../views/directives/product-panels.html',
      restrict: 'E',
      controller: function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
          this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });
