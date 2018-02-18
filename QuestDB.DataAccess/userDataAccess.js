'use strict';

var connection = require('./connection/connection');

var User = connection.mongoose.model('Users');
exports.get_users = function (req, res, callback) {
    User.find({}, callback);
}

exports.get_a_user = function (req, res, callback) {
    User.findById(req.params.userId, callback);
}

exports.get_user_by_metadata = function (req, res, callback) {
    var metadata = JSON.parse(req.params.metadata);
    var obj = {};
    Object.keys(metadata).forEach(function (key) {
        obj[key] = metadata[key];
    });
    User.find(obj, callback);
}

exports.create_a_user = function (req, res, callback) {
    var new_user = new User(req.body);
    new_user.save(callback);
};

exports.update_a_user = function (req, res, callback) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        { new: true }, callback);
};

exports.delete_a_user = function (req, res, callback) {
    User.findByIdAndRemovemove(req.params.userId, callback);
};