'use strict';

var loginBusiness = require('../../QuestDB.Business/loginBusiness');

exports.login_a_user = function (req, res) {
  loginBusiness.login_a_user(req, res,
    function (err, response) {
      if (err) {
        res.send({ success: false, error: err });
      } else if (response.id) {
        res.send({ success: true });
      } else {
        res.send({ success: false });
      }
    });
};

exports.get_session_valid = function (req, res) {
  loginBusiness.get_session(req, res,
    function (err, response) {
      if (err) {
        res.send({ success: false, error: err });
      } else {
        res.send({
          success: true,
          validSession: response.id != undefined &&
            response.maxAge > (new Date())
        });
      }
    });
};
