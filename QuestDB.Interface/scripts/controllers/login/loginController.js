var app = angular.module('questDB');
app.controller('LoginController', function ($scope, $timeout, $location, loginService) {
    $scope.ready = false;
    $scope.form = {
        email: "",
        password: ""
    };
    $scope.shown = false;
    $scope.showAlert = function () {
        $scope.shown = true;
    };
    $scope.hideAlert = function () {
        $scope.shown = false;
    };
    $scope.submitForm = function () {
        $('.btn-load').button('loading');
        loginService.login_a_user({
            email: $scope.form.email,
            password: $scope.form.password
        }, function (response) {
            $('.btn-load').button('reset');
            if (response.success) {
                $location.path("/home");
            } else {
                $scope.showAlert();
                $timeout(function () {
                    $scope.hideAlert();
                }, 2000);
            }
        }, function (error) {
            $('.btn-load').button('reset');
            alert(error.message);
        });
    };

    // esconder a view enquanto não carrega o retorno da chamada asíncrona
    loginService.get_session_valid(
        function (response) {
            if (response.success && !response.validSession) {
                $scope.ready = true;
            }
        }, function (err) {
        }
    );
});
