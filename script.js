var app = angular.module("myApp", ["ngRoute","ngMaterial","ngResource"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "Training.html",
                controller: "training"
            })
            .when("/Communication", {
                templateUrl: "Communication.html"
            })
            .when("/Training", {
                templateUrl: "Training.html",
                controller: "training"
            })
    })
    .controller("myCtrl", function ($scope, $location) {
        $scope.func1 = function () {
            $location.path("/Training")
            console.log("you are on training page");
        }
        $scope.func2 = function () {
            $location.path("/Communication")
            console.log("you are on communication page");
        }

    })
    .controller("training", function ($scope,$http) {
        $scope.students=[]
        var empid=1
        var refresh=function(){
            $http.get("data.json").then(function(response){
                $scope.students=response.data
            })
        }
        refresh();
        $scope.saveRecord = function () {

            if ($scope.newStudent.id == null) {

                $scope.newStudent.id = empid++;

                $scope.students.push($scope.newStudent);

            } else {

                for (i in $scope.students) {

                    if ($scope.students[i].id == $scope.newStudent.id) {

                        $scope.students[i] = $scope.newStudent;

                    }

                }

            }

            $scope.newStudent = {};
            console.log("save record called");
        }
        $scope.delete = function (id) {

            for (i in $scope.students) {

                if ($scope.students[i].id == id) {

                    $scope.students.splice(i, 1);

                    $scope.newStudent = {};

                }

            }

        }

        $scope.edit = function (id) {

            for (i in $scope.students) {

                if ($scope.students[i].id == id) {

                    $scope.newStudent = angular.copy($scope.students[i]);

                }

            }

        }
    })
    .controller("newCtrl",function(){
        
    })