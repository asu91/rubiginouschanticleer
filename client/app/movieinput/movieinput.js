angular.module('moviematch.movieinput', [])

.controller('MovieInputController', function($scope, $http, $location, Session, Lobby, $uibModalInstance) {
  $scope.movieTitle = "";
  $scope.searchResults;
  $scope.movieChoices = [];
  $scope.error;
  $scope.session = {};
  $scope.users;

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



  $scope.ok = function () {
    $uibModalInstance.close($scope.movieChoices);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
