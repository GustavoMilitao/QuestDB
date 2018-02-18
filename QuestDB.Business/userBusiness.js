'use strict';

var userDataAccess = require('../QuestDB.DataAccess/userDataAccess');

exports.get_users = function (req, res, callback) {
      userDataAccess.get_users(req, res, callback);
};

exports.get_a_user = function (req, res, callback) {
      userDataAccess.get_a_user(req, res, callback);
};

exports.get_user_by_metadata = function (req, res, callback) {
      userDataAccess.get_user_by_metadata(req, res, callback);
};

exports.create_a_user = function (req, res, callback) {
      userDataAccess.create_a_user(req, res, callback);
};

exports.update_a_user = function (req, res, callback) {
      userDataAccess.update_a_user(req, res, callback);
};


exports.delete_a_user = function (req, res, callback) {
      userDataAccess.delete_a_user(req, res, callback);
};