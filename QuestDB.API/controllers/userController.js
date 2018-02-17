'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('Users');


  exports.get_users = function(req, res){
    User.find({}, function(err, response){
      if(err)
        res.send(err);
      res.send({ success: true, users : response});
    });
  }
  
  exports.get_a_user = function(req, res){
    User.findById(req.params.userId
      , function(err, response){
      if(err)
        res.send(err);
      res.send({ success: true, users : response});
    });
  }
  
  exports.create_a_user = function(req, res) {
    var new_user = new User(req.body);
    new_user.save(function(err, response) {
      if (err)
        res.send(err);
      res.send({success : true, user : response });
    });
  };
  
  exports.update_a_user = function(req, res) {
    User.findOneAndUpdate(
        {_id: req.params.userId}, 
        req.body, 
        {new: true}, 
        function(err, response) {
      if (err)
        res.send(err);
      res.send({ success : true, user : response });
    });
  };
  
  
  exports.delete_a_user = function(req, res) {
    User.remove({
      _id: req.params.userId
    }, function(err, user) {
      if (err)
        res.send(err);
      res.send({ success : true });
    });
  };