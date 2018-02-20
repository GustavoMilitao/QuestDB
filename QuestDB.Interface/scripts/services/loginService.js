angular.module('questDBServices')
    .factory('loginService', loginService);

function loginService($resource) {

    loginService.resourceLogin = $resource('/api/login/:user', null, {
        update: {
            method: 'PUT'
        }
    });

    loginService.get_session = function (idSessionUser, callbackSuccess, callbackError) {
        loginService.resourceLogin.query({ user: idSessionUser }, callbackSuccess, callbackError);
    }

    return loginService;
};