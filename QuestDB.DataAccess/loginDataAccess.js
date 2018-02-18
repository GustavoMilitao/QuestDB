module.exports = loginDataAccess;

function loginDataAccess() {
    
    if(!this.mongoose) {
        this.mongoose = require('mongoose');        
        this.uri = "mongodb://eckounltd:cefet123@custerpokemon-shard-00-00-zznsg.mongodb.net:27017,custerpokemon-shard-00-01-zznsg.mongodb.net:27017,custerpokemon-shard-00-02-zznsg.mongodb.net:27017/pokedeck?ssl=true&replicaSet=CusterPokemon-shard-0&authSource=admin";
        this.mongoose.Promise = global.Promise,
        this.mongoose.connect(this.uri); 
    }
    var User = mongoose.model('Users');
    var Login = mongoose.model('Login');
    this.login_a_user = function(req, res, callback) {
        User.find({ user : req.body.user, 
                    password : req.body.password},
                    function(err, response){
                        if(err){
                            callback(err, response);
                        } else {
                            var today = new Date();
                            var guid = Guid.raw();
                            var new_login = new Login({
                                idUser : response._id, 
                                hash : guid,
                                maxAge : today.setDate(today.getDate() + 365)
                            });
                            new_login.save(function(error, resp){
                                res.cookie('user',guid);
                                callback(error, resp);
                            });
                        }
                    });
    }
};