angular.module('app')
    .service('UserSvc', function ($http) {
        var svc = this;
        svc.getUser = function () {
            return $http.get('/api/users')
                .then(function (response) {
                    return response.data
                });
        };

        svc.login = function (username, password) {
            return $http.post('/api/sessions', {
                    username: username,
                    password: password
                })
                .then(function (response) {
                    svc.token = response.data;
                    // send up the X-auth request on ALL requests
                    //NOTE: I don't understand yet how this is relevant to all requests yet
                    $http.defaults.headers.common['X-Auth'] = response.data;
                    return svc.getUser();
                });
        }
    })
;