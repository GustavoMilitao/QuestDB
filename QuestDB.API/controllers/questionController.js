'use strict';


var mongoose = require('mongoose'),
  Question = mongoose.model('Questions');

exports.get_questions = function(req, res){
  Question.find({}, function(err, response){
    if(err)
      res.send(err);
    res.send({ success: true, questions : response});
  });
}

exports.get_a_question = function(req, res){
  Question.findById(req.params.questionId
    , function(err, response){
    if(err)
      res.send(err);
    res.send({ success: true, questions : response});
  });
}

exports.create_a_question = function(req, res) {
  var new_question = new Question(req.body);
  new_question.save(function(err, response) {
    if (err)
      res.send(err);
    res.send({success : true, question : response });
  });
};

exports.update_a_question = function(req, res) {
  Question.findOneAndUpdate(
      {_id: req.params.questionId}, 
      req.body, 
      {new: true}, 
      function(err, response) {
    if (err)
      res.send(err);
    res.send({ success : true, question : response });
  });
};


exports.delete_a_question = function(req, res) {
  Question.remove({
    _id: req.params.questionId
  }, function(err, question) {
    if (err)
      res.send(err);
    res.send({ success : true });
  });
};