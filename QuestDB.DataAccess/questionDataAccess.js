'use strict';

var connection = require('./connection/connection');

var Question = connection.mongoose.model('Questions');

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
    Question.findByIdAndRemovemove(req.params.questionId, callback);
};
