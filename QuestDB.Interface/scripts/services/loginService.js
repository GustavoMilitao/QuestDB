angular.module('questDBServices')
    .factory('loginService', loginService);

function loginService($resource) {

    loginService.resourceLogin = $resource('/api/login', null, {
        update: {
            method: 'PUT'
        }
    });

    loginService.get_session_valid = function (callbackSuccess, callbackError) {
        return loginService.resourceLogin.get({}, callbackSuccess, callbackError).$promise;
    }

    loginService.login_a_user = function(credentials, callbackSuccess, callbackError){
        return loginService.resourceLogin.save(credentials, callbackSuccess, callbackError).$promise;
    }

    return loginService;
};