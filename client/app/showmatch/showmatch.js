angular.module( 'moviematch.showmatch', [] )

.controller( 'ShowmatchController', function($scope, FetchMovies, Session, Auth, $routeParams, Socket) {
  $scope.movieChosen = false;
  $scope.winner;
  $scope.session;
  $scope.user = {};
  $scope.user.name = Auth.getUserName();

  // Show winning movie
  Socket.on('winner', function(movie) {
    console.log(movie, '<--------------------------------------- MOVIE'); 
    $scope.winner = movie;
    $scope.movieChosen = true; 
  })

  // Fires a 'ready' signal to server when last voter joins the room
  if ($routeParams.ready === "true") {

  console.log("EMITTING EMIT <------------------------");
    // Get session info
    Session.getSession()
      .then(function(session) {
        $scope.session = session;
        Socket.emit('selectedMovie', {
          session_id: $scope.session.id,
          session_name: $scope.session.sessionName
        });
      });
  }



});
