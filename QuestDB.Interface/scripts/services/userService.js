angular.module('questDBServices')
    .factory('userService', userService);

function userService($resource) {

    userService.resourceUser = $resource('/api/users/:userId', null, {
        update: {
            method : 'PUT'
        }
    });

    userService.get_a_user = function (idUser, callbackSuccess, callbackError) {
        userService.resourceUser.get({ userId: idUser }, callbackSuccess, callbackError);
    }

    userService.create_a_user = function (user, callbackSuccess, callbackError) {
        userService.resourceUser.save(user, callbackSuccess, callbackError);
    }

    return userService;
};