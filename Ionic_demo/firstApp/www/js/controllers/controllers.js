
//修改后如下:

define(function(require) {
  'use strict';

  var services = require('services/services');

  var controllers = angular.module('starter.controllers', []);
  //controllers.controller('controller的名字',require('对应的文件地址'));

  //controllers.controller('DashCtrl',require('controllers/DashCtrl'));
  //controllers.controller('ChatsCtrl',require('controllers/ChatsCtrl'));
  //controllers.controller('ChatDetailCtrl',require('controllers/ChatDetailCtrl'));
  //controllers.controller('AccountCtrl',require('controllers/AccountCtrl'));

  controllers.controller('AppCtrl',require('controllers/AppCtrl'));

  controllers.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('loading:show', function() {
      $ionicLoading.show({templateUrl:'templates/loading.html'})
    });

    $rootScope.$on('loading:hide', function() {
      $ionicLoading.hide()
    });
  }]);

  return controllers;
});
