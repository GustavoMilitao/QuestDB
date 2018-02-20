'use strict';
module.exports = function(app) {
  var controller = require('../controllers/userAPI');

  app.route('/api/users')
  .get(controller.get_users)
  .post(controller.create_a_user);

app.route('/api/users/:userId')
  .get(controller.get_a_user)
  .put(controller.update_a_user)
  .delete(controller.delete_a_user);

  app.route('/api/users/search/:query')
  .get(controller.get_user_by_query);

  app.route('/api/logged')
  .get(controller.get_logged_user);

};