angular.module('app')
    .config(
        [
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider
                    .when('/', {
                        controller: 'PostsCtrl',
                        templateUrl: 'posts.html'
                    }) // root
                    .when('/register', {
                        controller: 'RegisterCtrl',
                        templateUrl: 'register.html'
                    }) // register
                    .when('/login', {
                        controller: 'LoginCtrl',
                        templateUrl: 'login.html'
                    })
                    .otherwise({
                        redirectTo: '/register'
                    })
                ;// default is root
            }
        ]
    ); // config;
//module ;