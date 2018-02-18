'use strict';


var loginBusiness = require('loginBusiness');

exports.login_a_user = function(req, res) {
    loginBusiness.login_a_user(req, res,
      function(err, response) {
      if (err)
        res.send(err);
      res.send({success : true });
    });
  };
  