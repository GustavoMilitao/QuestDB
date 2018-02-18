module.exports = userBusiness;

function userBusiness(){
    if(!this.userDataAccess){
        this.userDataAccess = require('userDataAccess');
    }

    this.get_users = function(req, res, callback) {
        userDataAccess.get_users(req, res, callback);
    }
  
    this.get_a_user = function(req, res, callback){
        userDataAccess.get_a_user(req, res, callback);
  }
  
  this.create_a_user = function(req, res, callback) {
        userDataAccess.create_a_user(req, res, callback);
  };
  
  this.update_a_user = function(req, res, callback) {
        userDataAccess.update_a_user(req, res, callback);
  };
  
  
  this.delete_a_user = function(req, res, callback) {
        userDataAccess.delete_a_user(req, res, callback);
  };
}