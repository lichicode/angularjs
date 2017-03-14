/**
 * Created by wfm on 2017/01/05.
 */
'use strict';

//这是全局变量
app.run(['$rootScope','$http','$timeout','$q',
  function ($rootScope,$http,$timeout, $q) {
    $rootScope.onibaritems = [
      {title: "首页", href: "#/tab/dash"},
      {title: "聊天", href: "#/tab/chats"}
    ];

    $rootScope.tabs = [{
      value: 'share',
      label: '分享'
    }, {
      value: 'ask',
      label: '问答'
    }, {
      value: 'job',
      label: '招聘'
    }, {
      value: 'bb',
      label: '吐槽'
    }];
  }]);
