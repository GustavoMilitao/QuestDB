'use strict';
module.exports = function (app) {
  var controller = require('../controllers/questionAPI');
  
  app.route('/api/questions')
    .get(controller.get_questions)
    .post(controller.create_a_question);

  app.route('/api/questions/:questionId')
    .get(controller.get_a_question)
    .put(controller.update_a_question)
    .delete(controller.delete_a_question);
};
