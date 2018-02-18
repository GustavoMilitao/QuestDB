'use strict';

var loginAPI = require('../../QuestDB.API/controllers/loginAPI');
var userAPI = require('../../QuestDB.API/controllers/userAPI');

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
  userAPI.get_a_user(req, res, function () {

  });
  var query = { email: req.body.email };
  User.find(query, function (err, user) {
    if (err)
      res.send(err);
    if (user.length > 0) {
      res.send({ success: false });
    } else {
      var new_user = new User(req.body);
      new_user.save(function (err, user) {
        if (err)
          res.send(err);
        res.send({ success: true });
      });
    }
  });
};