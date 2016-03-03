angular.module('moviematch.movieinput', [])

.controller('MovieInputController', function($scope, $http, movieAPI) {
  $scope.movieTitle = "";
  $scope.searchResults;
  $scope.movieChoices = [];
  $scope.error;

  $scope.fetchSearch = function() {
    $http({
      method: 'GET',
      url: '/api/omdb/' + $scope.movieTitle
    }).then(function(res){
        var results = JSON.parse(res.data);
        $scope.searchResults = results.Search;
    });
  }

  // TODO
  // $scope.fetchCollection = function() {
  //   $http({
  //     method: 'GET',
  //     url: '/api/movieDB/' + $scope.movieTitle
  //   }).then(function(res){
  //     // console.log(res.data);
  //      // $scope.searchResults = JSON.parse(res.data);
  //   });
  // }

  $scope.updateMovies = function(add, movie) {
    if (add && $scope.movieChoices.length < 5 ) {
      $scope.movieChoices.push(movie);
    } else if (!add) {
      $scope.movieChoices.splice(movie, 1);
      $scope.error = null;
    } else {
      $scope.error = "Already 5 movies!!";
    }
  }

  $scope.$watch('movieTitle', $scope.fetchSearch);
});
