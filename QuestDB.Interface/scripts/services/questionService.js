angular.module('questDBServices')
    .factory('questionService', questionService);

function questionService($resource) {

    questionService.resourceQuestion = $resource('/api/questions/:questionId', null, {
        update: {
            method : 'PUT'
        }
    });

    questionService.resourceLoggedQuestion = $resource('/api/logged/questions');

    questionService.resourceQuestionTypes = $resource('/api/questionTypes');

    questionService.create_a_question_to_logged_user = function(question, callbackSuccess, callbackError){
        return questionService.resourceLoggedQuestion.save(question, callbackSuccess, callbackError).$promise;
    };

    questionService.get_question_types = function(callbackSuccess, callbackError){
        return questionService.resourceQuestionTypes.get({},callbackSuccess, callbackError).$promise;
    };

    questionService.get_questions = function(callbackSuccess, callbackError){
        return questionService.resourceQuestion.get({},callbackSuccess, callbackError).$promise;
    };

    questionService.get_question = function(questId, callbackSuccess, callbackError){
        return questionService.resourceQuestion.get({ questionId : questId },callbackSuccess, callbackError).$promise;
    };

    return questionService;
};