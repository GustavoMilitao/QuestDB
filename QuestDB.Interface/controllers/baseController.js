'use strict';

var loginAPI = require('../../QuestDB.API/controllers/loginAPI');

exports.default_page = function (req, res) {
    var cookie = req.cookies['user'];
    if (!cookie) {
        res.render('QuestDB.Interface/views/login/index.html');
    } else {
        loginAPI.get_session(req, res, function (err, response) {
            if (err || !response.length) {
                res.render('QuestDB.Interface/views/login/index.html');
            } else {
                res.render('QuestDB.Interface/views/home/index.html');
            }
        });
    }
};