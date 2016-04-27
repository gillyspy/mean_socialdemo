//instantiate the declared angular app
angular.module('app', [
    'ngRoute'
]);
angular.module('app')
    .controller('LoginCtrl', function ($scope, UserSvc) {
        $scope.login = function (username, password) {
            UserSvc.login(username, password)
                .then(function (user) {
                    console.log(user);
                });
        };
    });

// create a controller and inject our service
angular
    .module('app')
    .controller('PostsCtrl', function ($scope, PostsSvc) {
        console.log('PostsCtrl controller');
        $scope.addPost = function () {
            if ($scope.postBody) {
                PostsSvc.create({
                    username: 'gillyspy',
                    body: $scope.postBody
                }).success(function (post) {
                    $scope.posts.unshift(post);
                    $scope.postBody = null;
                }); // success
            } // endif;
        } // end addPost;
        ;

        // via API service
        PostsSvc.fetch()
            .success(function (posts) {
                $scope.posts = posts;
            })
        ;

    })
; // end controller


// ng service for loading posts
angular.module('app')
    .service('PostsSvc', function ($http) {

        // add a fetch method to our service
        this.fetch = function () {
            return $http.get('/api/posts');
        }; // fetch;

        // add a create method to our service
        this.create = function (post) {
            return $http.post('/api/posts', post);
        }; //create;

    });// service()



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
angular.module('app')
    .service('UserSvc', function ($http) {
        var svc = this;
        svc.getUser = function () {
            return $http.get('/api/users', {
                headers: {'X-Auth': this.token}
            });
        };
        svc.login = function (username, password) {
            return $http.post('/api/sessions', {
                    username: username,
                    password: password
                })
                .then(function (val) {
                    svc.token = val.data;
                    return svc.getUser();
                });
        }
    })
;