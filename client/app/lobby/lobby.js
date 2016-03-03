angular.module( 'moviematch.lobby', ['ngRoute'] )

.controller( 'LobbyController', function( $scope, Session, Lobby, Socket, $location, Auth, $window, $uibModal) {
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
    console.log(data, 'dis is da data')
    $scope.users.push( data );
  } );

  Socket.on('removeUser', function (data) {
    for(var i = 0; i < $scope.users.length; i++) {
      if($scope.users[i].username === data.username) {
        $scope.users.splice(i, 1);
      }
    }
  })
  $scope.startSession = function( sessionName ) {
    Socket.emit( 'startSession', { sessionName: sessionName } );
    // Socket.emit('ready', {sessionName: sessionName});
  };

  Socket.on( 'sessionStarted', function() {
    $location.path( '/movieinput' );
  } );

  //start options view when everyone is in the room
  $scope.open = function () {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '../app/movieinput/movieinput.html',
        controller: 'MovieInputController',
        size: 'lg'
      });

      // modalInstance.result.then(function () {
      // }, function () {
      //   $log.info('Modal dismissed at: ' + new Date());
      // });
    };

  // $scope.$on('$routeChangeStart', function (next, current) {
  //   if($location.path() === '/match') {
  //     return;
  //   } else {
  //     console.log($scope.username, '<--username')
  //     console.log(Socket, '<--sock')
  //     Socket.emit('routeChange', {sessionName: $scope.session.sessionName, username: $scope.username});
  //     // Socket.leave($window.localStorage.getItem('sessionName'));
  //     console.log('left', $window.localStorage.getItem('sessionName'))
  //   }
  // })
} )
