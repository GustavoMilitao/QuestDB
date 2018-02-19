angular.module('questDB', ['angucomplete-alt', 'ngRoute'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl : 'QuestDB.Interface/views/partials/login/Index.html',
        controller : 'LoginController'
    });

    $routeProvider.when('/login', {
        templateUrl : 'QuestDB.Interface/views/partials/login/Index.html',
        controller : 'LoginController'
    });

    $routeProvider.when('/home', {
        templateUrl : 'QuestDB.Interface/views/partials/login/Index.html',
        controller : 'LoginController'
    });

    $routeProvider.otherwise({ redirectTo : '/'});

});