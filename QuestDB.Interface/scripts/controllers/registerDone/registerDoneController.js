var app = angular.module('questDB');
app.controller('RegisterDoneController', ['$location', '$timeout', function ($location, $timeout) {
    angular.element(document).ready(function () {
        $timeout(function(){$location.path("/")}, 2000);
    });
}]);