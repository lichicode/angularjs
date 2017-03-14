/**
 * Created by wfm on 2017/01/05.
 */
'use strict';

app.controller('ChatsCtrl', ['$scope','$state','$ionicPopup','localStorageService','ChatsService',
  function($scope, $state, $ionicPopup, localStorageService,ChatsService) {

    $scope.onSwipeLeft = function() {
      $state.go("tab.friends");
    };


    //长按出现弹出框
    $scope.popupMessageOpthins = function(message) {
      $scope.popup.index = $scope.messages.indexOf(message);
      $scope.popup.optionsPopup = $ionicPopup.show({
        templateUrl: "templates/popup.html",
        scope: $scope
      });
      $scope.popup.isPopup = true;
    };

    $scope.markMessage = function() {
      var index = $scope.popup.index;
      var message = $scope.messages[index];
      if (message.showHints) {
        message.showHints = false;
        message.noReadMessages = 0;
      } else {
        message.showHints = true;
        message.noReadMessages = 1;
      }
      $scope.popup.optionsPopup.close();
      $scope.popup.isPopup = false;
      ChatsService.updateMessage(message);
    };

    $scope.deleteMessage = function() {
      var index = $scope.popup.index;
      var message = $scope.messages[index];
      $scope.messages.splice(index, 1);
      $scope.popup.optionsPopup.close();
      $scope.popup.isPopup = false;
      ChatsService.deleteMessageId(message.id);
      ChatsService.clearMessage(message);
    };

    $scope.topMessage = function() {
      var index = $scope.popup.index;
      var message = $scope.messages[index];
      if (message.isTop) {
        message.isTop = 0;
      } else {
        message.isTop = new Date().getTime();
      }
      $scope.popup.optionsPopup.close();
      $scope.popup.isPopup = false;
      ChatsService.updateMessage(message);
    };

    //跳转到详细页面
    $scope.messageDetils = function(message) {
      $state.go("tab.chat-detail", {
        "messageId": message.id
      });
    };

    $scope.$on("$ionicView.beforeEnter", function(){
      // console.log($scope.messages);
      $scope.messages = ChatsService.getAllMessages();
      $scope.popup = {
        isPopup: false,
        index: 0
      };
    });
  }
]);
