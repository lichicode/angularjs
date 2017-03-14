'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var services =angular.module('myApp.services', []).
  value('version', '0.1');

  services.factory('LoginService', ['$resource', function ($resource) {
    return $resource('fakeData/userLogin.json', {}, {
      login: {method: 'GET', params: {}, isArray: false}
    });
  }]);