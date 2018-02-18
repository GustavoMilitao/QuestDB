'use strict';
module.exports = function(app) {
  var controller = require('../controllers/baseController');
  
  app.route('/home')
    .get(controller.default_page);
};
