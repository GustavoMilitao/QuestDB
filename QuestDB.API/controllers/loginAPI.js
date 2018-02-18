'use strict';

var loginBusiness = require('../../QuestDB.Business/loginBusiness');

exports.login_a_user = function (req, res) {
  loginBusiness.login_a_user(req, res,
    function (err, response) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true });
    });
};

exports.get_session = function (req, res) {
  loginBusiness.get_session(req, res,
    function (err, response) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true });
    });
};
