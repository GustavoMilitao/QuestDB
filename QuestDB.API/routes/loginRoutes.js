'use strict';
module.exports = function(app) {
  var controller = require('../controllers/loginAPI');
  var path = require('path');

  app.route('/api/login')
  .post(controller.login_a_user)
  .get(controller.get_session_valid);
  
};
