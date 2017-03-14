/**
 * 路由
 */
angular.module('IonicClub.router', [])
    .config(['$provide', '$stateProvider', '$urlRouterProvider', function ($provide, $stateProvider, $urlRouterProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        /*
        *
        * template这个属性和templateUrl都是用来定义视图对应的html模板的，前者接受的是一个html的字符串，后者接受的是一个文件路径的地址
        *
        * prefetchTemplate 默认为true。这个设置为false，表示不提前加载html
        *
        * resolve:预载入 可以预先载入一系列依赖或者数据，然后注入到控制器中
        *
        *
        * 1、$ionicView.enter
             在进入视图的时候响应的事件，在控制器中使用on方法监听触发

         2、$ionicView.leave
            在离开视图的时候响应的事件。注意如果从A界面到B界面跳转，那么B界面的enter会先响应，再响应A界面的leave事件

         3、$stateChangeStart
            在切换路由是响应的事件，可以用来判断前置路由是什么，控制当进入某些页面时执行的函数，比如说进入某些页面都要把右上角的按钮显示出来等等
        * */
        $stateProvider
            /*.state('tab', {
                url: "/tab",
                views: {
                    'main': {
                        abstract: true,
                        templateUrl: 'templates/tabs.html'
                    }
                }
            })*/
            .state('tab', {
                url: "/tab",
                abstract: true,                     //abstract：true就是指设置这个界面为母版界面，可以这么理解，这是一个架子，所有的子界面都有这个统一的界面
                templateUrl: "templates/tabs.html"  //templateUrl是定义了这个路由视图对应的界面
            })
            .state('tab.topics', {                  //指topics这个视图是tab的一个子视图
                url: '/topics/:tab',
                views: {                            //格式是views:{name:{parms}}
                    'tab': {
                        templateUrl: 'templates/tab-topics.html',
                        controller: 'TopicsCtrl'
                    }
                }
            })
            .state('tab.topicDetail', {
                url: '/topicDetail/:topicId',
                views: {
                    'tab': {
                        templateUrl: 'templates/tab-topicDetail.html',
                        controller: 'TopicDetailCtrl'
                    }
                }
            })
            .state('tab.login', {
                url: '/login',
                views: {
                    'account': {
                        prefetchTemplate:false,
                        templateUrl: 'templates/tab-login.html',
                        controller: 'LoginCtrl'
                    }
                },
                resolve: {
                    validater: ['$location', 'localStorageService', function ($location, localStorageService) {
                        var loginInfo = localStorageService.get('User');
                        if (loginInfo) {
                            $location.path('/tab/account');
                        }
                    }]
                }
            })
            .state('tab.account', {
                url: '/account',
                views: {
                    'account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                },
                resolve: {
                    validater: ['$location', 'localStorageService', function ($location, localStorageService) {
                        var loginInfo = localStorageService.get('User');
                        if (!loginInfo) {
                            $location.path('/tab/login');
                        }
                    }]
                }
            })
            .state('tab.account-detail', {
                url: '/account/detail',
                views: {
                    'account': {
                        templateUrl: 'templates/tab-account-detail.html',
                        controller: 'AccountDetailCtrl'
                    }
                }
            })
            .state('user', {
                url: '/user/:loginname',
                templateUrl: 'templates/user.html',
                controller: 'UserCtrl'
            })
        $urlRouterProvider.otherwise('tab/topics/');
    }])