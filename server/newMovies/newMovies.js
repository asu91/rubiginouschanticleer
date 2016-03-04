//This is done in the session.js
//file so that we can create a foreign
//key for newMovies. 

// var db = require( '../config/db' );
// var Sequelize = require('sequelize');
// var newMovies = require('../config/db');

// var Session = require('../sessions/sessions');


// var NewMovie = db.define('newMovies', {
// 	newMovieName: Sequelize.STRING,
// 	newMoviePoster: Sequelize.STRING,
// 	newMoveOverview: Sequelize.STRING
// });


// NewMovie.sync()
// 	.then(function(){
// 		console.log("new movie table created");
// 	})
// 	.catch(function(err){
// 		console.error(err);
// 	});


// //set the session key into the movies
// //NewMovie.belongsTo(Session, {foreignKey: 'session_id'});
// //example:
// //Session_User.belongsTo( Session, {foreignKey: 'session_id'} );



// module.exports = NewMovie; 