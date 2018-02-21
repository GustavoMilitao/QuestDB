var app = angular.module('questDB');
app.controller('QuestionController', function ($scope, $http, $timeout, $location, loginService, $routeParams, permission) {
    $scope.ready = !permission || (permission.success && permission.validSession);
});
