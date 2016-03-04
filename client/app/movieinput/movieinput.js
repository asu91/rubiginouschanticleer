angular.module('moviematch.movieinput', [])

<<<<<<< Updated upstream
.controller('MovieInputController', function($scope, $http, $location, Session, Lobby, $uibModalInstance) {
=======
.controller('MovieInputController', function($scope, $http, requestFactory, Session) {
>>>>>>> Stashed changes
  $scope.movieTitle = "";
  $scope.searchResults;
  $scope.movieChoices = [];
  $scope.error;
  $scope.session = {};
  $scope.users;

  // Get movies and assigns them to $scope.searchResults
  $scope.fetchSearchResults = function() {
    requestFactory.omdb($scope.movieTitle)
      .then(function(res){
        var data = JSON.parse(res.data);
        $scope.searchResults = data.Search;
      });
  };

  // Get movies and assigns them to $scope.searchResults
  $scope.fetchInTheaters = function() {
    requestFactory.movieDB()
      .then(function(res){
        var results = JSON.parse(res.data);
        $scope.searchResults = results.Search;
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

  // Fired when user completes choices
  $scope.readyToVote = function($http) {
    var session_name = Session.getSession();
    var movies = 
    var options = {
      session_name: session_name,
      movies: $scope.movieChoices
    };
    requestFactory.addMovies(options);
    $uibModalInstance.close($scope.movieChoices);
  }

  $scope.$watch('movieTitle', $scope.fetchSearch);


  Session.getSession()
    .then( function( session ) {
      $scope.session = session;
      Lobby.getUsersInOneSession( $scope.session.sessionName )
        .then( function( users ){
          $scope.users = users;
        });
  });

  $scope.ready = function() {
    $location.path('/loading')
  }

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})

.factory('requestFactory', function($http) {
  // Makes request to omdb API and returns results in a promise
  var omdb = function(movieTitle) {
    return $http({
      method: 'GET',
      url: '/api/omdb/' + movieTitle
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
    omdb: omdb,
    movieDB: movieDB,
    addMovies: addMovies
  };
});