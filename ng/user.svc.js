angular.module('app')
    .service('UserSvc', function ($http) {
        var svc = this;
        svc.getUser = function () {
            if (!!window.localStorage.token) {
                $http.defaults.headers.common['X-Auth'] = window.localStorage.token;
            }
            return $http.get('/api/users')
                .then(function (response) {
                    return response.data
                });
        };

        svc.createUser = function (username, password) {
            //TODO:
            return $http.post('/api/users', {
                username: username,
                password: password
            }).then(function () {
                return svc.login(username, password);
            });

        };

        svc.login = function (username, password) {
            return $http.post('/api/sessions', {
                    username: username,
                    password: password
                })
                .then(function (response) {
                    //TODO: store this token in something that persists
                    window.localStorage.token = response.data;

                    // send up the X-auth request on ALL requests
                    //NOTE: I don't understand yet how this is relevant to all requests yet
                    $http.defaults.headers.common['X-Auth'] = response.data;
                    return svc.getUser();
                });
        }
    })
;