angular.module('app')
    .controller('LoginCtrl', function ($scope, UserSvc) {
        $scope.login = function (username, password) {
            UserSvc.login(username, password)
                .then(function (response) {

                    // bubble up the logged in response info (Application controller will listen for it)
                    $scope.$emit('login', response.data);
                });
        };
    });
