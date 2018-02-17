module.exports = questionComponent;

function questionComponent(){
    var questionBusiness = require('questionBusiness');

    this.get_questions = function(req, res, callback){
        questionBusiness.get_questions(req, res, callback);
    }
}