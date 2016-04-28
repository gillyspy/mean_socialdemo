angular.module('app')
    .controller('LoginCtrl', function ($scope, UserSvc) {
        $scope.login = function (username, password) {
            UserSvc.login(username, password)
                .then(function (user) {
                    //TODO: do more than print out the user
                    console.log('print out the user', user);
                });
        };
    });
