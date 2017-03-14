/**
 * Created by wfm on 2017/01/05.
 */
'use strict';

app.controller('DashCtrl', ['$scope','$state','$ionicSlideBoxDelegate','$timeout','$location',
  function($scope,$state,$ionicSlideBoxDelegate,$timeout,$location) {

    $scope.topimages=[
      {image:'img/home/banner-idex.png'},
      {image:'img/home/banner-idex.png'},
      {image:'img/home/banner-idex.png'}
    ];
    //下拉刷新
    $scope.doRefresh = function () {

      $timeout(function () {
        $scope.$broadcast('scroll.refreshComplete');
      }, 2000);


    };

    $scope.ionlists=[
      {type:'1_ion',image:'img/home/ionic-1.png',name:'法律援助'},
      {type:'2_ion',image:'img/home/ionic-1.png',name:'法律援助'},
      {type:'3_ion',image:'img/home/ionic-1.png',name:'法律援助'},
      {type:'4_ion',image:'img/home/ionic-1.png',name:'法律援助'},
      {type:'5_ion',image:'img/home/ionic-1.png',name:'法律援助'},
      {type:'6_ion',image:'img/home/ionic-1.png',name:'法律援助'}
    ];

    $scope.ionlists2=[
      {image:'img/home/ionic-2.png',name:'折扣券'},
      {image:'img/home/ionic-2.png',name:'折扣券'},
      {image:'img/home/ionic-2.png',name:'折扣券'},
      {image:'img/home/ionic-2.png',name:'折扣券'},
      {image:'img/home/ionic-2.png',name:'折扣券'},
      {image:'img/home/ionic-2.png',name:'折扣券'}
    ];

    $ionicSlideBoxDelegate.update();
    $ionicSlideBoxDelegate.$getByHandle("slideboximgs").loop(true); //这句就是实现无限循环的关键，绑定了滑动框，



    $scope.ionlistsclick = function ($index,type) {

      //console.log('index：' + $index + ',type：' + type);

      $state.go("tab.dash-detail", {
        'id':$index
      });


    };


    //幻灯页切换事件
    /*$scope.go_changed=function(index){
      console.log(index)
    }*/
  }
]);
