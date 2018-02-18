module.exports = questionBusiness;

function questionBusiness(){
    if(!this.questionDataAccess){
        this.questionDataAccess = require('questionDataAccess');
    }

    this.get_questions = function(req, res, callback) {
        questionDataAccess.get_questions(req, res, callback);
    }
  
  this.get_a_question = function(req, res, callback){
        questionDataAccess.get_a_question(req, res, callback);
  }
  
  this.create_a_question = function(req, res, callback) {
        questionDataAccess.create_a_question(req, res, callback);
  };
  
  this.update_a_question = function(req, res, callback) {
        questionDataAccess.update_a_question(req, res, callback);
  };
  
  
  this.delete_a_question = function(req, res, callback) {
        questionDataAccess.delete_a_question(req, res, callback);
  };
}