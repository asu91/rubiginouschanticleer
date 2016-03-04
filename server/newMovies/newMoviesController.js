var newMoviesQuery = require('./newMoviesQuery');



module.exports = {

	get: function(req, res){
		var session_name = req.params.session_name;
		console.log("******Session Name*** ",session_name);  

		newMoviesQuery.getMoviesBySession(session_name, function(moviesData){
			res.json(moviesData); 

		});

	},

	post: function(req, res){
		var session_name = req.body.session_name;
		var receivedMovies = req.body.movies;
		newMoviesQuery.insertAll(session_name, receivedMovies, function(){
			console.log("data received");
		});
	}	

};


