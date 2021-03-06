'use strict';
module.exports = function (app) {
  var controller = require('../controllers/questionAPI');
  var path = require('path');

  app.route('/api/questions')
    .get(controller.get_questions)
    .post(controller.create_a_question);

  app.route('/api/questions/:questionId')
    .get(controller.get_a_question)
    .put(controller.update_a_question)
    .delete(controller.delete_a_question);

    app.route('/api/users/:userId/questions')
    .get(controller.get_user_questions);

    app.route('/api/users/search/:query/questions')
    .get(controller.get_user_questions_by_query);

    app.route('/api/logged/questions')
    .post(controller.create_a_question_to_logged_user);

    app.route('/api/questionTypes')
    .get(controller.get_question_types)
    .post(controller.create_a_question_type);
    
};
