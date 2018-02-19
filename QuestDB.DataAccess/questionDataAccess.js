'use strict';

var connection = require('./connection/connection');

var Question = connection.mongoose.model('Questions');
var userDataAccess = require('../QuestDB.DataAccess/userDataAccess');

exports.get_questions = function (req, res, callback) {
    Question.find({}, callback);
}

exports.get_a_question = function (req, res, callback) {
    Question.findById(req.params.questionId, callback);
}

exports.create_a_question = function (req, res, callback) {
    var new_question = new Question(req.body);
    new_question.save(callback);
};

exports.update_a_question = function (req, res, callback) {
    Question.findOneAndUpdate(
        { _id: req.params.questionId },
        req.body,
        { new: true }, callback);
};

exports.delete_a_question = function (req, res, callback) {
    Question.findByIdAndRemove(req.params.questionId, callback);
};

exports.get_user_questions = function (req, res, callback) {
    Question.find({ idUser: req.params.userId }, callback);
};

exports.get_user_questions_by_query = function (req, res, callback) {
    userDataAccess.get_user_by_query(req, res,
        function (err, response) {
            if (err) {
                callback(err, response);
            } else {
                var usersIds = response.map(function (value) {
                    return { idUser: value.id };
                });
                if(usersIds.length){
                    Question.find({ $or: usersIds }, callback);
                } else {
                    callback(err, []);
                }
            }
        });
};
