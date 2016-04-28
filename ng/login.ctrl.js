angular.module('app')
    .controller('LoginCtrl', function ($scope, UserSvc, $location) {
        $scope.login = function (username, password) {
            UserSvc
                .login(username, password) //login now returns the data;
                .then(function (user) {
                    // bubble up the logged in response info (Application controller will listen for it)
                    $scope.$emit('login', user);
                    $location.path('/');
                });
        };
    });
