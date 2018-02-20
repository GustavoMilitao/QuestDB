angular.module('questDBServices')
    .factory('loginService', loginService);

function loginService($resource) {

    loginService.resourceLogin = $resource('/api/login', null, {
        update: {
            method: 'PUT'
        }
    });

    loginService.get_session_valid = function (callbackSuccess, callbackError) {
        loginService.resourceLogin.get({}, callbackSuccess, callbackError);
    }

    loginService.login_a_user = function(credentials, callbackSuccess, callbackError){
        loginService.resourceLogin.save(credentials, callbackSuccess, callbackError);
    }

    return loginService;
};