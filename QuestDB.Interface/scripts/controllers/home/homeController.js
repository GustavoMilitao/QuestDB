var app = angular.module('questDB');
app.controller('HomeController',
    function ($scope, userService, $location, $cookies, questionService, NgTableParams) {
        $scope.user = {};
        $scope.questions = [];
        $scope.users = [];

        $scope.logout = function () {
            $scope.ready = false;
            var d = new Date();
            d.setTime(d.getTime() + (-1 * 24 * 60 * 60 * 1000));
            $cookies.put('user', '', {
                expires: d.toUTCString(),
                path: '/'

            });
            $location.path('/');
        }

        $scope.addUserToQuestion = function(questions, users) {
            questions.forEach(function (question) {
                users.forEach(function(user){
                    if(question.idUser === user._id){
                        question.user = user.user;
                        question.emailUser = user.email;
                    }
                });
            });
        }

        userService.get_logged_user(function (response) {
            $scope.user = response.user;
            questionService.get_questions(function (response) {
                $scope.questions = response.questions.map(function(question){
                    return {
                        _id : question._id,
                        idUser : question.idUser,
                        questionTypeId : question.questionType.typeId,
                        questionTypeDescription : question.questionType.typeDescription,
                        title : question.title,
                        statement : question.statement,
                        alternatives : question.alternatives,
                        correctAlternative : question.correctAlternative,
                    }
                });
                $scope.ready = true;
                userService.get_users(function (response) {
                    $scope.users = response.users;
                    $scope.addUserToQuestion($scope.questions, $scope.users);
                    $scope.tableParams = new NgTableParams({}, { dataset: $scope.questions });
                }, function (error) {
                    alert(error.message);
                });
            }, function (error) {
                alert(error.message);
            });
        }, function (error) {
            alert(error.message);
        });
    });