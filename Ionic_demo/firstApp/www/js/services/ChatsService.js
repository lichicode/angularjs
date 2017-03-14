//修改后如下:

define([],function() {
  'use strict';

 var factory=function($q,$http) {
   // Might use a resource here that returns a JSON array

   // Some fake testing data
   var chats = [{
     id: 0,
     name: 'Ben Sparrow',
     lastText: 'You on your way?',
     face: 'img/ben.png'
   }, {
     id: 1,
     name: 'Max Lynx',
     lastText: 'Hey, it\'s me',
     face: 'img/max.png'
   }, {
     id: 2,
     name: 'Adam Bradleyson',
     lastText: 'I should buy a boat',
     face: 'img/adam.jpg'
   }, {
     id: 3,
     name: 'Perry Governor',
     lastText: 'Look at my mukluks!',
     face: 'img/perry.png'
   }, {
     id: 4,
     name: 'Mike Harrington',
     lastText: 'This is wicked good ice cream.',
     face: 'img/mike.png'
   }];


   return {
     all: function () {
       //return chats;

       //添加一步服务$.q  ,在请求开始之间建立deferred，
       // 然后return deferred.promise.在获取到数据的时候deferred.resolve(data)

       var deferred = $q.defer();
       deferred.resolve(chats);

       return deferred.promise;

     },
     remove: function (chat) {
       chats.splice(chats.indexOf(chat), 1);
     },
     get: function (chatId) {
       for (var i = 0; i < chats.length; i++) {
         if (chats[i].id === parseInt(chatId)) {
           return chats[i];
         }
       }
       return null;
     },
     getAllData: function(successCallback,failCallback) {

       //方案1：$http.get()+callback,出现一个跨域访问的问题
       /*
       var url = "http:///"
       $http.get(url).success(function (data) {
         //业务处理
         successCallback(data)
       }).error(function (error) {
         //业务处理
         failCallback(error)
       });
       */


       //方案2：$http.jsonp()+callback ，使用jsonp就可以实现跨域访问
       var url = "http://test.lbwan.com:18080/lbopen/channel/getAllMakeGameListName.json?channelId=37&currentPage=1&pageSize=10";
       url+="&callback=JSON_CALLBACK";
       $http.jsonp(url).success(function (data) {
         //业务处理
         var data = data.data.rows;
         for(var key in data){
           data[key].icon = "http://test.lbwan.com/res/"+data[key].icon;
         }
         successCallback(data)
       }).error(function (error) {
         //业务处理
         failCallback(error)
       });
       //var deferred = $q.defer();
       //deferred.resolve(chats);
       //return deferred.promise;
       //return chats;
     }

   };
  };

  factory.$inject = ['$q','$http'];
  return factory
});
