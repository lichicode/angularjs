define([],function () {
  "use strict";
  var factory = function ($ionicModal) {

    var initModal = function ($scope,callback) {
      var modal = $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.modal = modal;
        return modal
      });
      $scope.openModal = function () {
        $scope.modal.show();
      };
      $scope.closeModal = function () {
        callback && callback()
        $scope.modal.hide();
      };
      $scope.$on('$destroy', function () {
        $scope.modal.remove();
      });
      return modal;
    };
    return {
      initModal : initModal
    };
  };
  factory.$inject = ['$ionicModal'];
  return factory;
});
