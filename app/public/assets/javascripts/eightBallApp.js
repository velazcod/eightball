var app = angular.module("eightBall", []);
app.controller("eightBallController", function($scope, $http) {
  $scope.submit = function() {
    if ($scope.question) {
      console.log("Asking question: " + $scope.question);
      $http.get("/eightball?question=".concat($scope.question)).success(function (answer) {
        $scope.answer = answer.response;
      });
    }
  };
});
