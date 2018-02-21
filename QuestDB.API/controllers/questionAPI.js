'use strict';

var questionBusiness = require('../../QuestDB.Business/questionBusiness');

exports.get_questions = function (req, res) {
  questionBusiness.get_questions(req, res,
    function (err, response) {
      if (err) {
        res.send({ success: false, error: err });
      } else {
        res.send({ success: true, questions: response });
      }
    });
}

exports.get_a_question = function (req, res) {
  questionBusiness.get_a_question(req, res,
    function (err, response) {
      if (err) {
        res.send({ success: false, error: err });
      } else {
        res.send({ success: true, questions: response });
      }
    });
}

exports.create_a_question = function (req, res) {
  questionBusiness.create_a_question(req, res,
    function (err, response) {
      if (err) {
        res.send({ success: false, error: err });
      } else {
        res.send({ success: true, question: response });
      }
    });
};

exports.update_a_question = function (req, res) {
  questionBusiness.update_a_question(req, res,
    function (err, response) {
      if (err) {
        res.send({ success: false, error: err });
      } else {
        res.send({ success: true, question: response });
      }
    });
};


exports.delete_a_question = function (req, res) {
  questionBusiness.delete_a_question(req, res,
    function (err, response) {
      if (err) {
        res.send({ success: false, error: err });
      } else {
        res.send({ success: true });
      }
    });
};

exports.get_user_questions = function (req, res) {
  questionBusiness.get_user_questions(req, res,
    function (err, response) {
      if (err) {
        res.send({ success: false, error: err });
      } else {
        res.send({ success: true, questions: response });
      }
    });
}

exports.get_user_questions_by_query = function (req, res) {
  questionBusiness.get_user_questions_by_query(req, res,
    function (err, response) {
      if (err) {
        res.send({ success: false, error: err });
      } else {
        res.send({ success: true, questions: response });
      }
    });
}

exports.create_a_question_to_logged_user = function (req, res) {
  questionBusiness.create_a_question(req, res,
    function (err, response) {
      if (err) {
        res.send({ success: false, error: err });
      } else {
        res.send({ success: true, question: response });
      }
    });
};

exports.get_question_types = function (req, res) {
  questionBusiness.get_question_types(req, res,
    function (err, response) {
      if (err) {
        res.send({ success: false, error: err });
      } else {
        res.send({ success: true, types: response });
      }
    });
}

exports.create_a_question_type = function (req, res) {
  questionBusiness.create_a_question_type(req, res,
    function (err, response) {
      if (err) {
        res.send({ success: false, error: err });
      } else {
        res.send({ success: true, questionType: response });
      }
    });
};