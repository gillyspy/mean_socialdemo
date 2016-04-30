angular.module('app')
    .config(
        [
            '$routeProvider',
            '$locationProvider',
            function ($routeProvider, $locationProvider) {

                //route (i.e. URL) routing logic on client side
                $routeProvider
                    .when('/', {
                        controller: 'PostsCtrl',
                        templateUrl: 'posts.html'
                    }) // root
                    .when('/posts', {
                        controller: 'PostsCtrl',
                        templateUrl: 'posts.html'
                    }) // post

                    .when('/register', {
                        controller: 'RegisterCtrl',
                        templateUrl: 'register.html'
                    }) // register
                    .when('/login', {
                        controller: 'LoginCtrl',
                        templateUrl: 'login.html'
                    })

                    .otherwise({
                        redirectTo: '/'
                    })
                ;// default is root

                //html5 mode for hashless URLs
                $locationProvider.html5Mode(true);
            }
        ]
    ); // config;
//module ;

