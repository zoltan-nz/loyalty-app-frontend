'use strict';

/**
 * @ngdoc overview
 * @name gemStore
 * @description
 * # gemStore
 *
 * Main module of the application.
 */
angular
  .module('gemStore', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('initUrl', '/')
  .constant('baseHref', '/')
  .value('$sniffer', { history: true })
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
