angular.module('moviematch.loading', [])

.controller('LoadingController', function ($scope, $location, Socket, Lobby, Session) {

  $scope.session = {};
  $scope.userCount = 0;
  $scope.users = [{}]
  $scope.totalUsers;

  Socket.on('goMatch', function() {
    $location.path('/match');
  })

  Socket.on( 'newReadyUser', function( data ) {

    $scope.userCount++
    console.log($scope.userCount, $scope.totalUsers, '??')
    if ($scope.userCount === $scope.totalUsers) {
      // $location.path('/match');
      console.log('comon')
      Socket.emit('allReady', {sessionName: $scope.session.sessionName});
    }
  } );


  Session.getSession()
    .then(function (session) {
      $scope.session = session;

      Lobby.getUsersInOneSession( $scope.session.sessionName )
        .then(function (users) {
          console.log(users.length,'user length')
          $scope.totalUsers = users.length;
          Socket.emit( 'ready', { sessionName: session.sessionName } );
        });
  });


})