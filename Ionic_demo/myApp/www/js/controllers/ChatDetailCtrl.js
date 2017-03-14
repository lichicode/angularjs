/**
 * Created by wfm on 2017/01/05.
 */
'use strict';

app.controller('ChatDetailCtrl', ['$scope','$stateParams','$ionicScrollDelegate','$timeout','$ionicNavBarDelegate','ChatsService',
  function($scope, $stateParams, $ionicScrollDelegate, $timeout,$ionicNavBarDelegate,ChatsService) {

    var viewScroll = $ionicScrollDelegate.$getByHandle('messageDetailsScroll');

    // console.log("enter");
    $scope.doRefresh = function() {
      // console.log("ok");
      $scope.messageNum += 5;
      $timeout(function() {
        $scope.messageDetils = ChatsService.getAmountMessageById($scope.messageNum,
          $stateParams.messageId);
        $scope.$broadcast('scroll.refreshComplete');
      }, 200);
    };


  /*
      $ionicView.loaded	     视图已经被加载。该事件仅在视图被创建之后添加到 DOM 时发生。当离开一个已经被缓存的视图，下次再访问该视图时，事件不会被激活。loaded 事件适合添加一些对这个视图的设置代码，然而当一个视图被激活时并不推荐监听这个事件。
      $ionicView.enter	     已经完全进视图并且该视图已经被激活。不管首次加载还是访问一个缓存的视图，该事件都会发生。
      $ionicView.leave	     视图已经完全离开并且不在是激活状态的视图。不管是缓存还是销毁，该事件都会发生。
      $ionicView.beforeEnter 视图即将进入并成为活动视图。
      $ionicView.beforeLeave 视图即将离开并不再是活动视图。
      $ionicView.afterEnter	 视图已经完全进入并且现在是激活状态。
      $ionicView.afterLeave	 视图已经完全离开并且不再是激活状态
      $ionicView.unloaded	   视图控制器已经被销毁并且所有元素都已经被从 DOM 中移除

    **/

    $scope.$on("$ionicView.beforeEnter", function() {
      $scope.message = ChatsService.getMessageById($stateParams.messageId);

      $scope.message.noReadMessages = 0;
      $scope.message.showHints = false;
      ChatsService.updateMessage($scope.message);
      $scope.messageNum = 10;
      $scope.messageDetils = ChatsService.getAmountMessageById($scope.messageNum,
        $stateParams.messageId);
      $timeout(function() {
        viewScroll.scrollBottom();
      }, 0);
    });

    $ionicNavBarDelegate.setTitle('asdsad');

    window.addEventListener("native.keyboardshow", function(e){
      viewScroll.scrollBottom();
    });
  }
]);
