angular.module('questDB')
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateUrl: 'QuestDB.Interface/views/partials/login/Index.html',
            controller: 'LoginController',
            resolve: {
                permission: function ($location, $cookies, $route, loginService) {
                    var userCookie = $cookies.get('user');
                    if (userCookie) {
                        return loginService.get_session_valid(
                            function (response) {
                                if (response.success && response.validSession) {
                                    $location.path('/home');
                                }
                            }, function (err) {
                            }
                        );
                    }
                }
            },
            caseInsensitiveMatch: true
        });

        $routeProvider.when('/login', {
            templateUrl: 'QuestDB.Interface/views/partials/login/Index.html',
            controller: 'LoginController',
            resolve: {
                permission: function ($location, $cookies, loginService) {
                    var userCookie = $cookies.get('user');
                    if (userCookie) {
                        return loginService.get_session_valid(
                            function (response) {
                                if (response.success && response.validSession) {
                                    $location.path('/home');
                                }
                            }, function (err) {
                            });
                    }
                }
            },
            caseInsensitiveMatch: true
        });

        $routeProvider.when('/home', {
            templateUrl: 'QuestDB.Interface/views/partials/home/Index.html',
            controller: 'HomeController',
            resolve: {
                permission: function ($location, $cookies, loginService) {
                    var userCookie = $cookies.get('user');
                    if (userCookie) {
                        return loginService.get_session_valid(function (response) {
                            if (!response.success || !response.validSession) {
                                $location.path('/');
                            }
                        }, function (err) {
                            $location.path('/');
                        });
                    } else {
                        $location.path('/');
                    }
                }
            },
            caseInsensitiveMatch: true
        });

        $routeProvider.when('/register', {
            templateUrl: 'QuestDB.Interface/views/partials/register/Index.html',
            controller: 'RegisterController',
            resolve: {
                permission: function ($location, $cookies, loginService) {
                    var userCookie = $cookies.get('user');
                    if (userCookie) {
                        return loginService.get_session_valid(
                            function (response) {
                                if (response.success && response.validSession) {
                                    $location.path('/home');
                                }
                            }, function (err) {
                            });
                    }
                }
            },
            caseInsensitiveMatch: true
        });

        $routeProvider.when('/registerDone', {
            templateUrl: 'QuestDB.Interface/views/partials/registerDone/Index.html',
            controller: 'RegisterDoneController',
            resolve: {
                permission: function ($location, $cookies, loginService) {
                    var userCookie = $cookies.get('user');
                    if (userCookie) {
                        return loginService.get_session_valid(
                            function (response) {
                                if (response.success && response.validSession) {
                                    $location.path('/home');
                                }
                            }, function (err) {
                            });
                    }
                }
            },
            caseInsensitiveMatch: true
        });

        $routeProvider.otherwise({ redirectTo: '/' });

        $routeProvider.when('/question/new', {
            templateUrl: 'QuestDB.Interface/views/partials/question/Index.html',
            controller: 'QuestionController',
            resolve: {
                permission: function ($location, $cookies, loginService) {
                    var userCookie = $cookies.get('user');
                    if (userCookie) {
                        return loginService.get_session_valid(function (response) {
                            if (!response.success || !response.validSession) {
                                $location.path('/');
                            }
                        }, function (err) {
                            $location.path('/');
                        });
                    } else {
                        $location.path('/');
                    }
                }
            },
            caseInsensitiveMatch: true
        });

    });
    