module.exports = loginBusiness;

function loginBusiness(){
    if(!this.loginDataAccess) {
        this.loginDataAccess = require('loginDataAccess');
    }

    this.login_a_user = function(req, res, callback) {
      loginDataAccess.login_a_user(req, res, callback);
    }
}