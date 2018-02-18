module.exports = questionDataAccess;

function questionDataAccess(){


    if(!this.mongoose) {
        this.mongoose = require('mongoose');        
        this.uri = "mongodb://eckounltd:cefet123@custerpokemon-shard-00-00-zznsg.mongodb.net:27017,custerpokemon-shard-00-01-zznsg.mongodb.net:27017,custerpokemon-shard-00-02-zznsg.mongodb.net:27017/pokedeck?ssl=true&replicaSet=CusterPokemon-shard-0&authSource=admin";
        this.mongoose.Promise = global.Promise,
        this.mongoose.connect(this.uri); 
    }
    var Question = mongoose.model('Questions');
    this.get_questions = function(req, res, callback) {
        Question.find({}, callback);
    }

    this.get_a_question = function(req, res, callback){
        Question.findById(req.params.questionId, callback);
    }
  
    this.create_a_question = function(req, res, callback) {
        var new_question = new Question(req.body);
        new_question.save(callback);
    };
  
    this.update_a_question = function(req, res, callback) {
        Question.findOneAndUpdate(
            {_id: req.params.questionId}, 
            req.body, 
            {new: true}, callback);
    };
  
  
    this.delete_a_question = function(req, res, callback) {
        Question.findByIdAndRemovemove(req.params.questionId, callback);
    };
}