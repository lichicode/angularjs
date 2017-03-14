

define(['app'],function(app) {
  'use strict';

  function ctrl($scope,MenuLeftService) {
    $scope.tabs = MenuLeftService.getTabs();

  }

  ctrl.$inject = ['$scope','MenuLeftService'];

  //app.registerController('AppCtrl',ctrl);

  return ctrl
});
