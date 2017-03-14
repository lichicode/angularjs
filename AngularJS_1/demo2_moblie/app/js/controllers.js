'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


function MyCtrlLogin($scope, LoginService) {
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
                    alert(success.data.username);
                } else {
                    // error message
                }
            },
            function (error) {
                // error message
            }
        );
    };

    $scope.developers = [

        {

            name: "Jesus", country: "Spain"

        },

        {

            name: "Dave", country: "Canada"

        },

        {

            name: "Wesley", country: "USA"

        },

        {

            name: "Krzysztof", country: "Poland"

        }

    ];


    $scope.updated = 0;

    $scope.stop = function() {

        textWatch();

    };



    var vm = $scope.vm = {};
    vm.option1 = {
        allowClear:true
    };
    vm.option2 = {
        'multiple': true,
        'simple_tags': true,
        'tags': ['tag1', 'tag2', 'tag3', 'tag4']
    };

}
MyCtrlLogin.$inject = ['$scope', 'LoginService'];


function MyCtrlRegister() {

}
MyCtrlRegister.$inject = [];
