// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

define([
  'services/services',
  'controllers/controllers'],function() {
  'use strict';

  var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);
  //延迟滚动
  app.directive('lazyScroll', ['$rootScope', '$timeout',
    function($rootScope, $timeout) {
      return {
        restrict: 'A',
        link: function ($scope, $element) {
          var scrollTimeoutId = 0;
          $scope.invoke = function () {
            $rootScope.$broadcast('lazyScrollEvent');
          };
          $element.bind('scroll', function () {
            $timeout.cancel(scrollTimeoutId);
            scrollTimeoutId = $timeout($scope.invoke, 0);
          });
        }
      };
    }]);
  //图片延迟加载
  app.directive('imageLazySrc', ['$document', '$timeout', '$ionicScrollDelegate', '$compile',
    function ($document, $timeout, $ionicScrollDelegate, $compile) {
      return {
        restrict: 'A',
        scope: {
          lazyScrollResize: "@lazyScrollResize",
          imageLazyBackgroundImage: "@imageLazyBackgroundImage"
        },
        link: function ($scope, $element, $attributes) {
          if (!$attributes.imageLazyDistanceFromBottomToLoad) {
            $attributes.imageLazyDistanceFromBottomToLoad = 0;
          }
          if (!$attributes.imageLazyDistanceFromRightToLoad) {
            $attributes.imageLazyDistanceFromRightToLoad = 0;
          }
          if ($attributes.imageLazyLoader) {
            var loader = $compile('<div class="image-loader-container"><ion-spinner class="image-loader" icon="' + $attributes.imageLazyLoader + '"></ion-spinner></div>')($scope);
            $element.after(loader);
          }
          var deregistration = $scope.$on('lazyScrollEvent', function () {
              console.log('scroll');
              if (isInView()) {
                loadImage();
                deregistration();
              }
            }
          );
          function loadImage() {
            $element.bind("load", function (e) {
              if ($attributes.imageLazyLoader) {
                loader.remove();
              }
              if ($scope.lazyScrollResize == "true") {
                //Call the resize to recalculate the size of the screen
                $ionicScrollDelegate.resize();
              }
            });
            if ($scope.imageLazyBackgroundImage == "true") {
              var bgImg = new Image();
              bgImg.onload = function () {
                if ($attributes.imageLazyLoader) {
                  loader.remove();
                }
                $element[0].style.backgroundImage = 'url(' + $attributes.imageLazySrc + ')'; // set style attribute on element (it will load image)
                if ($scope.lazyScrollResize == "true") {
                  //Call the resize to recalculate the size of the screen
                  $ionicScrollDelegate.resize();
                }
              };
              bgImg.src = $attributes.imageLazySrc;
            } else {
              $element[0].src = $attributes.imageLazySrc; // set src attribute on element (it will load image)
            }
          }
          function isInView() {
            var clientHeight = $document[0].documentElement.clientHeight;
            var clientWidth = $document[0].documentElement.clientWidth;
            var imageRect = $element[0].getBoundingClientRect();
            return (imageRect.top >= 0 && imageRect.top <= clientHeight + parseInt($attributes.imageLazyDistanceFromBottomToLoad))
              && (imageRect.left >= 0 && imageRect.left <= clientWidth + parseInt($attributes.imageLazyDistanceFromRightToLoad));
          }
          $element.on('$destroy', function () {
            deregistration();
          });
          $timeout(function () {
            if (isInView()) {
              loadImage();
              deregistration();
            }
          }, 500);
        }
      };
    }]);

  app.run(['$ionicPlatform','$rootScope',function ($ionicPlatform,$rootScope) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    $rootScope.debug = true;

  }])
    .config(['$stateProvider','$urlRouterProvider','$controllerProvider',function ($stateProvider, $urlRouterProvider,$controllerProvider) {
      app.registerController=$controllerProvider.register;
      app.loadControllerJs = function(controllerJs){
        return function($rootScope, $q){
          var def = $q.defer(),
              deps=[];
          angular.isArray(controllerJs) ? (deps = controllerJs) : deps.push(controllerJs);
          require(deps,function(){
            $rootScope.$apply(function(){
              def.resolve();
            });
          });
          return def.promise;
        };
      };

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

        // setup an abstract state for the tabs directive
        .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html',
          controller: 'AppCtrl',
          resolve:{
            deps: app.loadControllerJs('./controllers/AppCtrl')
          }
        })
        // Each tab has its own nav history stack:
        .state('tab.dash', {
          url: '/dash',
          views: {
            'tab-dash': {
              templateUrl: 'templates/tab-dash.html',
              controller: 'DashCtrl',
              resolve:{
                //这里要执行加载js，我们使用$q的方法阻塞执行
                //定义了一个方法，这个方法接受一个路径或者包含路径名称的数组
                //使用$q的方法异步执行
                //这里的话应该是这么理解的，使用require的方式加载文件，通过require的相应callback
                //响应了$q的执行结果事件resolve

                deps:app.loadControllerJs('./controllers/DashCtrl')

              }
            }
          }
        })
        .state('tab.hotGame', {
          url: '/hotGame',
          views: {
            'tab-hotGame': {
              templateUrl: 'templates/hotGame.html',
              controller: 'HotGameCtrl',
              resolve:{
                deps: app.loadControllerJs('./controllers/HotGameCtrl')
              }
            }
          }
        })
        .state('tab.chats', {
          url: '/chats',
          views: {
            'tab-chats': {
              templateUrl: 'templates/tab-chats.html',
              controller: 'ChatsCtrl',
              resolve:{
                deps: app.loadControllerJs('./controllers/ChatsCtrl')
              }
            }
          }
        })
        .state('tab.chat-detail', {
          url: '/chats/:gameId',   //1、通过route传递
          views: {
            'tab-chats': {
              templateUrl: 'templates/chat-detail.html',
              controller: 'ChatDetailCtrl',
              resolve:{
                deps: app.loadControllerJs('./controllers/ChatDetailCtrl')
              }
            }
          }
        })
        .state('tab.account', {
          url: '/account',
          views: {
            'tab-account': {
              templateUrl: 'templates/tab-account.html',
              controller: 'AccountCtrl',
              resolve:{
                deps: app.loadControllerJs('./controllers/AccountCtrl')
              }
            }
          }
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tab/dash');

    }]);


  return app;

});
