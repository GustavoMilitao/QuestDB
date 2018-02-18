'use strict';
module.exports = function(app) {
  var controller = require('../controllers/loginController');
  var baseController = require('../controllers/baseController');

  app.route('/login')
    .get(baseController.default_page)
    .post(controller.login);

    app.route('/')
    .get(baseController.default_page);

  app.route('')
    .get(baseController.default_page);

  app.route('/register')
    .get(controller.register_page)
    .post(controller.register);

  app.route('/registerDone')
    .get(controller.register_done_page);
};
