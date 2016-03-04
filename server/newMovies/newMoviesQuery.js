//newMoviesQuery 
//require the newMovies Model 
var NewMovie = require('../sessions/sessions').NewMovie;

module.exports = {

	insertAll: function(sessionName, movies, callback){
		console.log("we are in insertAll Query", movies);
		movies.forEach(function(movie){
			movie.session_id = sessionName;
			console.log(movie); 
		});
		NewMovie.bulkCreate(movies)
		.then(function(){
			console.log("movies entered");
			callback(); 
		});
	},

  getMoviesBySession: function(sessionName, callback) {
  	NewMovies
  	  .findAll({
  	  	where: {session_id: sessionName}
  	  })
  	  .then(function(movies){
  	  	callback(movies); 
  	  });
  }

};