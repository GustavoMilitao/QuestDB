var app = angular.module('questDB');
app.controller('QuestionController', function ($scope, questionService, readonly, $routeParams) {
    $scope.ready = false;
    $scope.question = {};
    $scope.readonly = readonly ? true : false;
    $scope.question.alternatives = [];
    $scope.letters = 'abcdefghijklmnopqrstuvwxyz';
    $scope.questionTypes = [];

    $scope.createQuestion = function () {
        if($scope.question.alternatives.length > 1 || $scope.question.questionType.typeId == "0"){
        $('.btn-load').button('loading');
        questionService.create_a_question_to_logged_user($scope.question,
            function (response) {
                $('.btn-load').button('reset');
                if (response.success) {
                    alert('Questão criada com sucesso!');
                    $scope.question = {};
                    $scope.question.questionType = $scope.questionTypes[0];
                    $scope.question.alternatives = [];
                } else {
                    $('.btn-load').button('reset');
                    alert(response.message);
                }
            }, function (err) {
                alert(err.message);
            });
        } else {
            alert('É necessário adicionar ao menos 2 alternativas para uma questão objetiva');
        }
    }

    $scope.getLetterFromInt = function (num) {
        return $scope.letters.charAt(num);
    }

    $scope.getCollection = function (num) {
        return new Array(num);
    }

    $scope.adicionarAlternativa = function () {
        $scope.question.alternatives.push({
            letter: $scope.getLetterFromInt($scope.question.alternatives.length),
        });
        if ($scope.question.alternatives.length == 1) {
            $scope.question.correctAlternative = $scope.question.alternatives[0];
        }
    }

    questionService.get_question_types(function (response) {
        $scope.questionTypes = response.types;
        $scope.question.questionType = $scope.questionTypes[0];
        if($routeParams.questionId){
            questionService.get_question($routeParams.questionId,
                function(response){
                $scope.ready = true;
                $scope.question = response.question;
            }, function(err){
                alert(err.message);
            });
        } else{
            $scope.ready = true;
        }
    }, function (err) {
        alert(err.message);
    });
});

