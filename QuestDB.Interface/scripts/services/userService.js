angular.module('questDBServices')
    .factory('userService', userService);

function userService($resource) {

    userService.resourceUser = $resource('/api/users/:userId', null, {
        update: {
            method : 'PUT'
        }
    });

    userService.resourceLoggedUser = $resource('/api/logged');

    userService.get_a_user = function (idUser, callbackSuccess, callbackError) {
        return userService.resourceUser.get({ userId: idUser }, callbackSuccess, callbackError).$promise;
    }

    userService.create_a_user = function (user, callbackSuccess, callbackError) {
        return userService.resourceUser.save(user, callbackSuccess, callbackError).$promise;
    }

    userService.get_logged_user = function(callbackSuccess, callbackError){
        return userService.resourceLoggedUser.get(callbackSuccess, callbackError).$promise;
    }

    userService.get_users = function(callbackSuccess, callbackError){
        return userService.resourceUser.get({ }, callbackSuccess, callbackError).$promise;
    }

    return userService;
};