var app = angular.module('questDB');
app.controller('RegisterDoneController', ['$location', '$scope', '$timeout', function ($location, $scope, $timeout, permission) {
    $scope.ready = !permission || (permission.success && !permission.validSession);
    $timeout(function(){$location.path("/")}, 2000);
}]);