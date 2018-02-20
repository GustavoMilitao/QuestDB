'use strict';

var userDataAccess = require('../QuestDB.DataAccess/userDataAccess');
var loginBusiness = require('./loginBusiness');

exports.get_users = function (req, res, callback) {
      userDataAccess.get_users(req, res, callback);
};

exports.get_a_user = function (req, res, callback) {
      userDataAccess.get_a_user(req, res, callback);
};

exports.get_user_by_query = function (req, res, callback) {
      userDataAccess.get_user_by_query(req, res, callback);
};

exports.get_logged_user = function (req, res, callback) {
      loginBusiness.get_session(req, res, function (err, response) {
            if (err)
                  res.send({ success = false, error: err });
            if (response.id) {
                  req.params.userId = response.userId;
                  userDataAccess.get_a_user(req, res, callback);
            } else {
                  callback(err, response);
            }
      });
};

exports.create_a_user = function (req, res, callback) {
      req.params.query = "[{\"email\" : \"" + req.body.email + "\"}]";
      userDataAccess.get_user_by_query(req, res, function (err, response) {
            if (!response.length) {
                  userDataAccess.create_a_user(req, res, callback);
            } else {
                  callback(err, response);
            }
      })
};

exports.update_a_user = function (req, res, callback) {
      userDataAccess.update_a_user(req, res, callback);
};


exports.delete_a_user = function (req, res, callback) {
      userDataAccess.delete_a_user(req, res, callback);
};