'use strict';

var connection = require('./connection/connection');

var User = connection.mongoose.model('Users');

var Login = connection.mongoose.model('Login');

exports.login_a_user = function (req, res, callback) {
    exports.User.find({
        user: req.body.user,
        password: req.body.password
    },
        function (err, response) {
            if (err || !response.length) {
                callback(err, response);
            } else {
                var today = new Date();
                var new_login = new exports.Login({
                    idUser: response.id,
                    maxAge: today.setDate(today.getDate() + 365)
                });
                new_login.save(function (error, resp) {
                    res.cookie('user', resp.id, { expires: new Date(253402300000000) });
                    callback(error, resp);
                });
            }
        });
}

exports.get_session = function (req, res, callback) {
    exports.Login.findById(req.cookies['user'], callback);
}