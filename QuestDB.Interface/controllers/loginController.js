'use strict';

var loginAPI = require('../../QuestDB.API/controllers/loginAPI');
var userAPI = require('../../QuestDB.API/controllers/userAPI');
var path = require('path');

exports.login = function (req, res) {
  loginAPI.login_a_user(req, res,
    function (err, result) {
      if (err)
        res.send(err);
      var us = result[0];
      if (us) {
        res.send({ success: true });
      } else {
        res.send({ success: false });
      }
    });
};

exports.register_page = function (req, res) {
  // var cookie = req.cookie['user'];
  // if (cookie) {
  //   res.redirect("/home")
  // } else {
  res.render(path.join(__dirname + "/../../views/register/index.html"));
  // }
};

exports.register_done_page = function (req, res) {
  res.render(path.join(__dirname + "/../../views/registerDone/index.html"));
};

exports.register = function (req, res) {
  userAPI.get_user_by_query(req, res,
    function (err, user) {
      if (err)
        res.send(err);
      if (user.length > 0) {
        res.send({ success: false });
      } else {
        userAPI.create_a_user(req, res);
      }
    });
};