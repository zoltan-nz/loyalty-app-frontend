'use strict';

describe('Directive: productTitle', function () {

  // load the directive's module
  beforeEach(module('gemStoreApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<product-title></product-title>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the productTitle directive');
  }));
});
