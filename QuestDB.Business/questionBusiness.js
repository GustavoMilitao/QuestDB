'use strict';

var questionDataAccess = require('../QuestDB.DataAccess/questionDataAccess');
var userBusiness = require('./userBusiness');

exports.get_questions = function (req, res, callback) {
      questionDataAccess.get_questions(req, res, callback);
}

exports.get_a_question = function (req, res, callback) {
      questionDataAccess.get_a_question(req, res, callback);
}

exports.create_a_question = function (req, res, callback) {
      questionDataAccess.create_a_question(req, res, callback);
};

exports.update_a_question = function (req, res, callback) {
      questionDataAccess.update_a_question(req, res, callback);
};


exports.delete_a_question = function (req, res, callback) {
      questionDataAccess.delete_a_question(req, res, callback);
};

exports.get_user_questions = function(req, res, callback){
      questionDataAccess.get_user_questions(req, res, callback);
};

exports.get_user_questions_by_query = function(req, res, callback){
      questionDataAccess.get_user_questions_by_query(req, res, callback);
};

exports.create_a_question_to_logged_user = function(req, res, callback){
      userBusiness.get_logged_user(req, res, function(err, response){
            if (err){
                  res.send({ success : false, error: err });
            } else if (response.id) {
                  req.body.idUser = response.id;
                  questionDataAccess.create_a_question(req, res, callback);
            } else {
                  callback(err, response);
            }
      });
};

exports.get_question_types = function(req, res, callback){
      questionDataAccess.get_question_types(req, res, callback);
}

exports.create_a_question_type = function (req, res, callback) {
      questionDataAccess.create_a_question_type(req, res, callback)
}