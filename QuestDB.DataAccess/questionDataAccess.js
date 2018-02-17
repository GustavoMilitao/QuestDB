module.exports = questionDataAccess;

function questionDataAccess(){
    var mongoose = require('mongoose'),
    var Question = mongoose.model('Questions');
    this.get_questions = function(req, res, callback) {
        Question.find({}, callback);
    }
}