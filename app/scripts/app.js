(function() {
  'use strict';

  angular.module('threeApp', []).config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

}).call(this);
