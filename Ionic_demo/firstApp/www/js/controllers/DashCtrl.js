
//修改后如下:

define(['app'],function(app) {
  'use strict';

  function ctrl($scope,$ionicSlideBoxDelegate,ClassService) {

    //初始化
    $scope.firstClass = ClassService.getFirstClass();
    $scope.secondClass = ClassService.getSecondClass($scope.firstClass[0].name);
    $scope.thirdClass = ClassService.getThirdClass($scope.secondClass[0].name);
    $scope.text = $scope.thirdClass[0].name;
    $scope.slideIndex = 0;
    $scope.slideSecondIndex = 0;
    $scope.slideThirdIndex = 0;

    //点击方法
    $scope.firstClick = function (index,item,event) {
      $scope.slideIndex = index;
      $scope.secondClass = ClassService.getSecondClass(item.name);
      $scope.slideSecondIndex = 0;
      $scope.thirdClass = ClassService.getThirdClass($scope.secondClass[0].name);
      $scope.slideThirdIndex = 0;
      $scope.text = $scope.thirdClass[0].name;
      //event.target.style.border = "2px solid blue"
    };
    $scope.secondClick = function (index,item){
      $scope.slideSecondIndex = index;
      $scope.thirdClass = ClassService.getThirdClass(item.name);
    };
    $scope.thirdClick = function (index,item) {
      $scope.slideThirdIndex = index;
      $scope.text = item.name;
    };


    //初始化slidetabs数据
    $scope.initSlideTabs = {
      data:[
        {name:"欢迎",tpl:'templates/slidetabs/welcome.html'},
        {name:"作者",tpl:'templates/slidetabs/author.html'},
        {name:"广告",tpl:'templates/slidetabs/ad.html'}
      ],//tab的内容
      doesContinue:true,//是否循环切换
      showPager:true,//是否显示小黑点
      slideInterval:4000//自动切换的时间间隔
    };
    //默认选择第一个
    $scope.slideIndex2 = 0;
    //滑动下面的滑块，响应上面的tabs切换
    $scope.slideChanged = function(index) {
      $scope.slideIndex2 = index;
    };

    //点击上面的tabs切换，响应下面的滑块滑动
    $scope.activeSlide = function (index) {
      $ionicSlideBoxDelegate.slide(index);
    };


  }

  ctrl.$inject = ['$scope','$ionicSlideBoxDelegate','ClassService'];

  app.registerController('DashCtrl',ctrl);

  //return ctrl
});
