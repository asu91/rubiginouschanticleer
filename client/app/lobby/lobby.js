angular.module( 'moviematch.lobby', ['ngRoute'] )

.controller( 'LobbyController', function( $scope, Session, Lobby, Socket, $location, Auth, $window) {
  $scope.session = {};

  Session.getSession()
  .then( function( session ) {

    $scope.session = session;
    
    Lobby.getUsersInOneSession( $scope.session.sessionName )
    .then( function( users ){
      $scope.users = users;
    } );

  });

  $scope.username = Auth.getUserName();
  $scope.users = [];


  //this function is listening to any newUser event and recieves/appends the new user
  Socket.on( 'newUser', function( data ) {
    $scope.users.push( data );
  } );

  Socket.on('removeUser', function (data) {
    console.log('gets here!')
    for(var i = 0; i < $scope.users.length; i++) {
      if($scope.users[i] === data.username) {
        $scope.users.splice(i, 1);
      }
    }
  })

  $scope.startSession = function( sessionName ) {
    Socket.emit( 'startSession', { sessionName: sessionName } );
  };

  Socket.on( 'sessionStarted', function() {
    $location.path( '/match' );
  } );

  //start options view when everyone is in the room
  $scope.startMovieInput = function() {
    // Socket.emit('startMovieInput', {})
  }

  $scope.$on('$routeChangeStart', function (next, current) {
    if($location.path() === '/match') {
      return;
    } else {
      console.log($scope.username, '<--username')
      console.log(Socket, '<--sock')
      Socket.emit('routeChange', {sessionName: $window.localStorage.getItem('sessionName'), username: $scope.username});
      // Socket.leave($window.localStorage.getItem('sessionName'));
      console.log('left', $window.localStorage.getItem('sessionName'))
    }
  })
} )
