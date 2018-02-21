var app = angular.module('questDB');
app.controller('QuestionController', function ($scope, questionService) {
    $scope.ready = false;
    $scope.question = {};
    $scope.question.alternatives = [];
    $scope.qtdAlternativas = 0;
    $scope.letters = 'abcdefghijklmnopqrstuvwxyz';
    $scope.questionTypes = [];

    $scope.createQuestion = function(){
        questionService.create_a_question_to_logged_user($scope.question,
        function(response){
            if(response.success){
                alert('Questão criada com sucesso!');
                $scope.question = {};
            } else{
                alert(response.message);
            }
        }, function(err){
            alert(err.message);
        });
    }

    $scope.getLetterFromInt = function(num){
        return $scope.letters.charAt(num);
    }

    $scope.getCollection = function(num) {
        return new Array(num);   
    }

    $scope.adicionarAlternativa = function(){
        $scope.question.alternatives.push({
            letter : $scope.getLetterFromInt($scope.question.alternatives.length),
        });
        if($scope.question.alternatives.length == 1){
            $scope.question.correctAlternative = $scope.question.alternatives[0];
        }
    }

    questionService.get_question_types(function(response){
        $scope.ready = true;
        $scope.questionTypes = response.types;
    }, function(err){
        alert(err.message);
    });
});

