'use strict';

var loginDataAccess = require('../QuestDB.DataAccess/loginDataAccess');

exports.login_a_user = function (req, res, callback) {
    loginDataAccess.login_a_user(req, res, callback);
}

exports.get_session = function (req, res, callback) {
    loginDataAccess.get_session(req, res, callback);
}