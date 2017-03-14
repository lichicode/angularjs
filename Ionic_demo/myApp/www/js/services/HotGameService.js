/**
 * Created by wfm on 2017/01/05.
 */
'use strict';

app.factory('HotGameService', ['$http','$timeout','$q',
  function($http,$timeout, $q) {
    function getHotGameBanner() {
      /* Spoof a network call using promises*/
      var deferred = $q.defer();
      var data = [];
      var url = "http://test.lbwan.com:18080/lbopen/channel/getAdvertisingList.json?channelId=37&callback=JSON_CALLBACK"
      $http.jsonp(url).success(function (response) {
        var resData = response.data.rows;
        //for(var key in resData){
        //  resData[key].image = 'http://test.lbwan.com/res/'+resData[key].image;
        //  data.push(resData[key].image)
        //}
        for (var key = 0; key <= 2; key++) {
          resData[key].image = 'http://test.lbwan.com/res/' + resData[key].image;
          data.push(resData[key].image)
        }
        deferred.resolve(data);
      }).error(function (error) {
        console.log(error);
      });
      return deferred.promise;
    }
    var page = 1;
    var rows = 4;

    return {
      getData: function (bool) {
        if (bool === true) {
          page = 1;
        }
        /* Spoof a network call using promises*/
        var deferred = $q.defer();
        var data = [];
        var url = 'http://test.lbwan.com:18080/lbopen/channel/getAllMakeGameListName.json?channelId=37';
        url += "&currentPage=";
        url += page;
        url += "&pageSize=";
        url += rows;
        url += "&callback=JSON_CALLBACK";

        $http.jsonp(url).success(function (response) {
          data = response.data.rows;
          for (var key in data) {
            data[key].icon = "http://test.lbwan.com/res/" + data[key].icon;
          }
          page++;
        }).error(function (error) {
          console.log(error);
        });

        $timeout(function () {
          // success response!
          deferred.resolve(data);
        }, 1000);
        return deferred.promise;
      },
      getHotGameBanner: getHotGameBanner
    };
  }
]);
