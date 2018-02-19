var app = angular.module('questDB', ['angucomplete-alt', 'ngRoute'])
.config(function($routeProvider){

    $routeProvider.when('/', {
        templateUrl : '../../views/partials/login/Index.html',
        controller : 'LoginController'
    });

    $routeProvider.when('', {
        templateUrl : '../../views/partials/login/Index.html',
        controller : 'LoginController'
    });

    $routeProvider.when('/login', {
        templateUrl : '../../views/partials/login/Index.html',
        controller : 'LoginController'
    });

    $routeProvider.when('/home', {
        templateUrl : '../../views/partials/login/Index.html',
        controller : 'LoginController'
    });

});