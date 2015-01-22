'use strict';
/*jshint esnext: true */

import MainController from './main/main.controller';
import NavbarController from '../components/navbar/navbar.controller';

angular.module('loyaltyAppFrontend', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
  .controller('MainController', MainController)
  .controller('NavbarController', NavbarController)

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
