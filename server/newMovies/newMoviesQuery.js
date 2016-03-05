//newMoviesQuery 
//require the newMovies Model 
var NewMovie = require('../sessions/sessions').NewMovie;

module.exports = {

	insertAll: function(session_id, movies, callback){
		console.log("we are in insertAll Query", movies);
		movies.forEach(function(movie){
			movie.session_id = session_id;
			console.log(movie, 'insertAll.movie!!! ', movie.session_id); 
		});
		NewMovie.bulkCreate(movies)
		.then(function(){
			console.log("movies entered");
			callback(); 
		});
	},

  getMoviesBySession: function(sessionName, callback) {
  	
  	NewMovie
  	  .findAll({
  	  	where: {session_id: sessionName}
  	  })
  	  .then(function(movies){
  	  	callback(movies); 
  	  });
  }

};