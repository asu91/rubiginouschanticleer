var express = require( 'express' );
var db = require( './config/db' );
var app = express();

var http = require( 'http' ).Server( app );
var io = require( 'socket.io' )( http );
var Session = require( './sessions/sessions' );
var User = require( './users/users' );

io.on( 'connect' , function( socket ){
  console.log( 'we are connected!!' );
  socket.on( 'disconnect', function() {
    console.log( 'were not connected anymore' );
  });

  //this recieves the create event emitted in client/sessions/sessions.js-emitCreate
  socket.on( 'session', function( data ) {
    Session.findOne( { where: { sessionName: data.sessionName } } )
    .then( function( session ) {
      //this function emits an event named newSession and sends the newly created session
      io.emit( 'newSession', session.dataValues );
    } );
  } );

  //this function listens to the new join event in client/sessions/sessions.js-emitJoin
  socket.on( 'newJoin', function( data ) {
    //this function creates a new or joins an existing socket-room
    socket.join( data.sessionName );
    // User.findOne( { where: { username: data.username } } )
    // .then( function( user ) {
      //this function emits a newUser event and the new user to a specific room named the session name
      io.to( data.sessionName ).emit( 'newUser', data );
    // } );
  } );

  socket.on( 'startSession', function( data ) {
    socket.join( data.sessionName );
    io.to( data.sessionName ).emit( 'sessionStarted' );
  } );

  // This listener handles broadcasting a matched movie to connected clients.
  socket.on( 'foundMatch', function( data ) {
    socket.join( data.sessionName );
    io.to( data.sessionName ).emit( 'matchRedirect', data.movie.id );
  })

  socket.on('routeChange', function(data) {
    socket.join( data.sessionName );
    io.to( data.sessionName ).emit('removeUser', {username: data.username})
  })

  socket.on('ready', function (data) {
    socket.join(data.sessionName);
    io.to(data.sessionName).emit('newReadyUser', {count: "blah"})
  })

  socket.on('allReady', function(data) {
    socket.join(data.sessionName);
    io.to(data.sessionName).emit('goMatch');
  })
});

const PORT = 8000;

require( './config/middleware' )( app, express );
require( './config/routes' )( app, express );

http.listen( process.env.PORT || PORT );
console.log( 'Listening on port ' + PORT );

module.exports = app;
