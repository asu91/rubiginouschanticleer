// var db = require( '../config/db' );
// var Sequelize = require( 'sequelize' );

// var Session = db.define( 'sessions', {
//   sessionName : Sequelize.STRING
// } );

// Session.sync().then( function() {
//   console.log( "sessions table created" );
// } )
// .catch( function( err ) {
//   console.error( err );
// } );

// module.exports = Session;

var db = require( '../config/db' );
var Sequelize = require( 'sequelize' );
// var newMovies = require('../config/db');

var Session = db.define( 'sessions', {
  sessionName : Sequelize.STRING
});

var NewMovie = db.define('newMovies', {
	title: Sequelize.STRING,
	poster: Sequelize.STRING,
	plot: Sequelize.STRING,
	votes: Sequelize.INTEGER,
  year: Sequelize.INTEGER,
	session_id: {
	    type: Sequelize.INTEGER //,
	    //unique: 'newMovies_idx'
  	}	
});

Session.sync().then( function() {
  console.log( "sessions table created" );
  NewMovie.sync();
} )
.catch( function( err ) {
  console.error( err );
} );


NewMovie.belongsTo(Session, {foreignKey: 'session_id'});



module.exports = {
	Session: Session,
	NewMovie: NewMovie
};

