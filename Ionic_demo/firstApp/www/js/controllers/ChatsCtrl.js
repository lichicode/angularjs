

//修改后如下:

define(['app'],function(app) {
  'use strict';

 var chatsctrl=function ($scope, Chats) {//服务Chats

   //$scope.chats = Chats.all();  原始的应用是这样的，
   //
   // 方案1：下面是修改用$q异步调用:
   /*
    Chats.all().then(function (data) {
    $scope.chats = data;
    }).finally(function () {

    });
    */

   //方案2：$http方法的Callback

   function successCallback(data) {
     $scope.chats = data
   }

   function failCallback(error) {
     console.log(error);
   }

   Chats.getAllData(successCallback, failCallback);


   $scope.remove = function (chat) {
     Chats.remove(chat);
   };
 };

  chatsctrl.$inject = ['$scope', 'Chats'];

  app.registerController('ChatsCtrl',chatsctrl);

  //return ctrl
});
