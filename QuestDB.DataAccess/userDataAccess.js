module.exports = userDataAccess;

function userDataAccess(){
    
    if(!this.mongoose) {
        this.mongoose = require('mongoose');        
        this.uri = "mongodb://eckounltd:cefet123@custerpokemon-shard-00-00-zznsg.mongodb.net:27017,custerpokemon-shard-00-01-zznsg.mongodb.net:27017,custerpokemon-shard-00-02-zznsg.mongodb.net:27017/pokedeck?ssl=true&replicaSet=CusterPokemon-shard-0&authSource=admin";
        this.mongoose.Promise = global.Promise,
        this.mongoose.connect(this.uri); 
    }
    var User = mongoose.model('Users');
    this.get_users = function(req, res, callback) {
        User.find({}, callback);
    }

    this.get_a_user = function(req, res, callback){
        User.findById(req.params.userId, callback);
    }
  
    this.create_a_user = function(req, res, callback) {
        var new_user = new User(req.body);
        new_user.save(callback);
    };
  
    this.update_a_user = function(req, res, callback) {
        User.findOneAndUpdate(
            {_id: req.params.userId}, 
            req.body, 
            {new: true}, callback);
    };
  
  
    this.delete_a_user = function(req, res, callback) {
        User.findByIdAndRemovemove(req.params.userId, callback);
    };
}