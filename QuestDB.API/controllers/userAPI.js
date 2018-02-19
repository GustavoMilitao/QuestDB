'use strict';

var userBusiness = require('../../QuestDB.Business/userBusiness');

exports.get_users = function (req, res) {
  userBusiness.get_users(req, res,
    function (err, response) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true, users: response });
    });
}

exports.get_a_user = function (req, res) {
  userBusiness.get_a_user(req, res,
    function (err, response) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true, user: response });
    });
}

exports.get_user_by_query = function (req, res) {
  userBusiness.get_user_by_query(req, res,
    function (err, response) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true, user: response });
    });
};

exports.create_a_user = function (req, res) {
  userBusiness.create_a_user(req, res,
    function (err, response) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true, user: response });
    });
};

exports.update_a_user = function (req, res) {
  userBusiness.update_a_user(req, res,
    function (err, response) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true, user: response });
    });
};


exports.delete_a_user = function (req, res) {
  userBusiness.delete_a_user(req, res,
    function (err, response) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true });
    });
};