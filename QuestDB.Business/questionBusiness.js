module.exports = questionBusiness;

function questionBusiness(){
    var questionDataAccess = require('questionDataAccess');

    this.get_questions = function(req, res, callback) {
        questionDataAccess.get_questions(req, res, callback);
    }
}