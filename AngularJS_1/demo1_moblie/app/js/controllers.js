'use strict';

/* Controllers */


function MyCtrl1() {

}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


/* Controllers */
var controllers = angular.module('myApp', []);
    controllers.controller('login', ['$scope', 'LoginService', function ($scope, LoginService) {
        $scope.login = {};
        $scope.login.submit = function() {
            console.log($scope.login.email);
            console.log($scope.login.password);
            // do some process, invoke the service layer
            LoginService.login(
                {},
                {
                    email: $scope.login.email,
                    password: $scope.login.password
                },
                function (success) {
                    if (success.status == "success") {
                        alert('login success');
                    } else {
                        // error message
                    }
                },
                function (error) {
                    // error message
                }
            );
        };
    }]);
