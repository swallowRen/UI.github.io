'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

      // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
      .state('font', {
        url: '/',
        templateUrl: 'templates/font.html'
      })
      .state('color', {
        url: '/color',
        templateUrl: 'templates/color.html'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'templates/cart.html'
      })
      .state('form', {
        url: '/form',
        templateUrl: 'templates/form.html'
      })
      .state('button', {
        url: '/button',
        templateUrl: 'templates/button.html'
      })
      .state('label', {
        url: '/label',
        templateUrl: 'templates/label.html'
      })
      .state('alert', {
        url: '/alert',
        templateUrl: 'templates/alert.html'
      })
      .state('popover', {
        url: '/popover',
        templateUrl: 'templates/popover.html',
        controller: 'popoverCtrl'
      })
      .state('breadcrumb', {
        url: '/breadcrumb',
        templateUrl: 'templates/breadcrumb.html'
      })
      .state('pagination', {
        url: '/pagination',
        templateUrl: 'templates/pagination.html'
      })
      .state('tab', {
        url: '/tab',
        templateUrl: 'templates/tab.html'
      })
      .state('progress', {
        url: '/progress',
        templateUrl: 'templates/progress.html'
      });
  }
]);
