module.exports = questionBusiness;

function questionBusiness(){
    if(!this.questionBusiness){
        this.questionDataAccess = require('questionDataAccess');
    }

    this.get_questions = function(req, res, callback) {
        questionDataAccess.get_questions(req, res, callback);
    }
  
  exports.get_a_question = function(req, res, callback){
        questionDataAccess.get_a_question(req, res, callback);
  }
  
  exports.create_a_question = function(req, res, callback) {
        questionDataAccess.create_a_question(req, res, callback);
  };
  
  exports.update_a_question = function(req, res, callback) {
        questionDataAccess.update_a_question(req, res, callback);
  };
  
  
  exports.delete_a_question = function(req, res, callback) {
        questionDataAccess.delete_a_question(req, res, callback);
  };
}