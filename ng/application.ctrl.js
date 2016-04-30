angular.module('app')
    .controller('ApplicationCtrl', function ($scope, UserSvc, $rootScope, $location) {
        $scope.$on('login', function (_, user) {

            // on login get the bubbled up user
            $scope.currentUser = user;
            console.log('login heard', user, $scope.currentUser);
        });
        // login previous user if they have an existing token
        //TODO: look into using cookies to store the JWT
        var apptoken = window.localStorage.token;
        if (!!apptoken) {
            return UserSvc.getUser()
                .then(function (user) {
                    //trigger an update of application level interpolated variable
                    $scope.$emit('login', user);
                    $location.path('/posts');
                });
        }
        ;

    });