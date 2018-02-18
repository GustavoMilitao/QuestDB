'use strict';

var questionBusiness = require('../../QuestDB.Business/questionBusiness');

exports.get_questions = function (req, res) {
  questionBusiness.get_questions(req, res,
    function (err, response) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true, questions: response });
    });
}

exports.get_a_question = function (req, res) {
  questionBusiness.get_a_question(req, res,
    function (err, response) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true, questions: response });
    });
}

exports.create_a_question = function (req, res) {
  questionBusiness.create_a_question(req, res,
    function (err, response) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true, question: response });
    });
};

exports.update_a_question = function (req, res) {
  questionBusiness.update_a_question(req, res,
    function (err, response) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true, question: response });
    });
};


exports.delete_a_question = function (req, res) {
  questionBusiness.delete_a_question(req, res,
    function (err, question) {
      if (err)
        res.send({ success: false, error: err });
      res.send({ success: true });
    });
};
