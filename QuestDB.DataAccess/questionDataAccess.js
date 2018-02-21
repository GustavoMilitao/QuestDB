'use strict';

var connection = require('./connection/connection');

var Question = connection.mongoose.model('Questions');
var QuestionType = connection.mongoose.model('QuestionTypes');
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

exports.get_question_types = function (req, res, callback) {
    QuestionType.find({}, callback);
}

exports.create_a_question_type = function (req, res, callback) {
    var new_question_type = new QuestionType(req.body);
    new_question_type.save(callback);
}