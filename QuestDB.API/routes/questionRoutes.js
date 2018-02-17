'use strict';
module.exports = function(app) {
  var controller = require('../controllers/questionController');
  
  app.route('/questions')
    .get(controller.get_questions)
    .post(controller.create_a_question);

  app.route('/questions/:questionId')
    .get(controller.get_a_question)
    .put(controller.update_a_question)
    .delete(controller.delete_a_question);
};
