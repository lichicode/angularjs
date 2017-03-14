
//修改后如下:

define(['app'],function(app) {
  'use strict';

   var chatdetailctrl=function ($scope, $stateParams, ChatDetailService) {
     //$scope.chat = ChatDetailService.get($stateParams.chatId);

     //异步调用
     ChatDetailService.getGameData($stateParams.gameId).then(function(data){
       $scope.chat = data;
     },function(error){
       console.log(error);
     });
   };

  chatdetailctrl.$inject = ['$scope', '$stateParams', 'ChatDetailService'];

  app.registerController('ChatDetailCtrl',chatdetailctrl);

  //return ctrl

});
