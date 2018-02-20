var app = angular.module('questDB');
app.controller('RegisterController',
    function ($scope, $http, $timeout, $location, userService) {
        $scope.form = {
            user: "",
            email: "",
            password: "",
            password1: ""
        };
        $scope.telaLogin = function () {
            $location.path("/");
        }
        $scope.senhasDifer = false;
        $scope.usuarioCadastrado = false;

        $scope.senhasDiferem = function () {
            $scope.senhasDifer = true;
        };
        $scope.hideSenhasDiferem = function () {
            $scope.senhasDifer = false;
        };
        $scope.usuarioJaCadastrado = function () {
            $scope.usuarioCadastrado = true;
        };
        $scope.hideUsuarioJaCadastrado = function () {
            $scope.usuarioCadastrado = false;
        };
        $scope.submitForm = function () {
            if ($scope.form.password != $scope.form.password1) {
                $scope.senhasDiferem();
                $timeout(function () {
                    $scope.hideSenhasDiferem();
                }, 2000);
            } else {
                userService.create_a_user({
                    user: $scope.form.user,
                    email: $scope.form.email,
                    password: $scope.form.password
                }, function (response) {
                    if (response.success) {
                        window.location.href = "/registerDone";
                    } else {
                        alert(response.message);
                        // $scope.usuarioJaCadastrado();
                        // $timeout(function () {
                        //     $scope.hideUsuarioJaCadastrado();
                        // }, 3000);
                    }
                }, function (error) {
                    alert(error.message);
                });
            }
        };
    });