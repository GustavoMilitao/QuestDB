var app = angular.module('questDB');
app.controller('RegisterDoneController', ['$location', '$scope', '$timeout', function ($location, $scope, $timeout) {
    $scope.ready = false;
    $timeout(function(){$location.path("/")}, 2000);

    loginService.get_session_valid(
        function (response) {
            if (response.success && !response.validSession) {
                $scope.ready = true;
            }
        }, function (err) {
        }
    );
}]);