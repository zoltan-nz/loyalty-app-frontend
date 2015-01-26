'use strict';

describe('Controller: ProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('gemStoreApp'));

  var ProductsController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsController = $controller('ProductsController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
