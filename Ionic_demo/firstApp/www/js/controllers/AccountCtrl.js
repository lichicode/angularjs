//修改后如下:

define(['app'],function(app) {
  'use strict';

  function ctrl($scope,ModalService) {
    $scope.settings = {
      enableFriends: true
    };

    ModalService.initModal($scope);
  }

  ctrl.$inject = ['$scope','ModalService'];

  app.registerController('AccountCtrl',ctrl);

  //return ctrl
});
