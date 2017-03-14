define([],function () {
  "use strict";
  var factory = function () {

    var tabs = [{
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

    return {
      getTabs: function () {
        return tabs;
      }
    };
  };
  factory.$inject = ['$http','$q'];
  return factory;
});
