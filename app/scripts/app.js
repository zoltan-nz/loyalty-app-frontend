'use strict';

/**
 * @ngdoc overview
 * @name loyaltyAppFrontendApp
 * @description
 * # loyaltyAppFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('loyaltyAppFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
