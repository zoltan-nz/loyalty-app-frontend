'use strict';

describe('Directive: productPanels', function () {

  // load the directive's module
  beforeEach(module('gemStoreApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<product-panels></product-panels>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the productPanels directive');
  }));
});
