angular.module('app')
    .controller('RegisterCtrl', function ($scope, UserSvc, $location) {
        $scope.register = function (username, password) {

            console.log('RegisterCtrl');
            UserSvc
                .createUser(username, password) //login now returns the data;
                .then(function (user) {
                    // bubble up the logged in response info (Application controller will listen for it)
                    $scope.$emit('login', user);
                    $location.path('/');
                })
                
            ;
        };
    });
