angular.module('app')
    .controller('ApplicationCtrl', function ($scope) {
        $scope.$on('login', function (_, user) {
            // on login get the bubbled up user 
            $scope.currentUser = user;
        });
    });