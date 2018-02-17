'use strict';
module.exports = function(app) {
  var controller = require('../controllers/userController');

  app.route('/users')
  .get(controller.get_users)
  .post(controller.create_a_user);

app.route('/users/:userId')
  .get(controller.get_a_user)
  .put(controller.update_a_user)
  .delete(controller.delete_a_user);
};
