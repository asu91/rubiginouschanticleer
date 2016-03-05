angular.module('moviematch.movieinput', [])

.controller('MovieInputController', function($scope, $http, $location, Session, RequestFactory, $uibModalInstance) {
  $scope.movieTitle = "";
  $scope.searchResults;
  $scope.movieChoices = [];
  $scope.error;

  // Get movies and assigns them to $scope.searchResults
  $scope.fetchSearchResults = function() {
    RequestFactory.omdbSearch($scope.movieTitle)
      .then(function(res){
        var data = JSON.parse(res.data);
        $scope.searchResults = data.Search;
      });
  };


  // Adds and removes movies from $scope.movieChoices
  // Assigns error messages if > 5 movies chosen
  $scope.updateMovies = function(add, movie) {
    if (add && $scope.movieChoices.length < 5 ) {
      $scope.movieChoices.push(movie);
    } else if (!add) {
      $scope.movieChoices.splice(movie, 1);
      $scope.error = null;
    } else {
      $scope.error = "Already 5 movies!!";
    }
  };


  // Fired when user completes movie picks
  $scope.readyToVote = function($http) {
    // Make array of imdb_IDs from movie picks
    var movies = _.map($scope.movieChoices, function(movie) {
      return movie.imdbID;
    })
    Session.getSession()
      .then(function(session) {
        var options = {
          session_id: session.id,
          movies: movies
        };

        // send IMDB_ID of movies picks to server
        RequestFactory.addMovies(options)
          .then(function() {
            // send data back to '/loading'
            $uibModalInstance.close($scope.movieChoices);
          });
      });
  };


  /** POP-UP SPECIFIC FUNCTIONS **/
  $scope.ready = function() {
    $location.path('/loading')
  }

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  /******************************/

  // Watch for changes in searchbar for live search
  $scope.$watch('movieTitle', $scope.fetchSearchResults);
})

.factory('RequestFactory', function($http) {
  // Makes request to omdb API and returns results in a promise
  var omdbSearch = function(movieTitle) {
    return $http({
      method: 'GET',
      url: '/api/omdb/search/' + movieTitle
    });
  };

  // Makes request to movieDB API and returns results in a promise
  var movieDB = function() {
    return $http({
      method: 'GET',
      url: '/api/movieDB/'
    });
  };

  // Makes request to add movies to database and returns nothing
  var addMovies = function(data) {
    return $http({
      method: 'POST',
      url: '/api/moviesTODO',
      data: data
    });
  };

  return {
    omdbSearch: omdbSearch,
    movieDB: movieDB,
    addMovies: addMovies
  };
});