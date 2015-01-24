'use strict';

/**
 * @ngdoc function
 * @name gemStore.controller:PanelController
 * @description
 * # PanelController
 * Panel manager of the gemStore
 */
angular.module('gemStore')
  .controller('PanelController', function () {
    this.tab = 1;

    this.selectTab = function (setTab) {
      this.tab = setTab;
    };
    this.isSelected = function (checkTab) {
      return this.tab === checkTab;
    };
  });
