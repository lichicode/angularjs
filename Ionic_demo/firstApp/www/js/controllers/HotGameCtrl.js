define(['app'],function(app) {
  'use strict';

  function ctrl($scope,HotGameService,$ionicSlideBoxDelegate) {
    HotGameService.getHotGameBanner().then(function (data) {
      if( !data || data.length === 0 ) return;
      $scope.banner = data;
      $ionicSlideBoxDelegate.update();
    });

    $scope.items = [];
    $scope.loadMore = function () {
      if($scope.noMore == true){
        return ;
      }
      HotGameService.getData()
        .then(function (data) {
          if(data.length == 0){
            $scope.noMore = true;
          }
          Array.prototype.push.apply($scope.items, data);
        }).finally(function () {
          // Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };
    $scope.doRefresh = function () {
      HotGameService.getData(true)
        .then(function (data) {
          $scope.items = [];
          if(data.length == 0){
            $scope.noMore = true;
          }else{
            $scope.noMore == false
          }
          Array.prototype.push.apply($scope.items, data);
        }).finally(function () {
          // Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.refreshComplete');
        });
    };
    $scope.getStarSrc = function (i,star) {
      var starSrc = {
        1:"http://test.lbwan.com/img/icon_star_on.png",
        2:"http://test.lbwan.com/img/icon_star_off.png",
        3:"http://test.lbwan.com/img/icon_star_half.png"
      }
      if(star >= i *2){
        return starSrc[1];
      }else if(star <= (i-1)*2){
        return starSrc[2]
      }else if(star == i*2-1){
        return starSrc[3]
      }
    };
  }

  ctrl.$inject = ['$scope','HotGameService','$ionicSlideBoxDelegate'];

  app.registerController('HotGameCtrl',ctrl);

});
