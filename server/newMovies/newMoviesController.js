var newMoviesQuery = require('./newMoviesQuery');



module.exports = {

	get: function(req, res){
		var session_name = req.params.session_name;  
		//to do put the get request in the params
		newMoviesQuery.getMoviesBySession(session_name, function(moviesData){
			res.json(moviesData); 

		});

	},

	post: function(req, res){
		var session_name = req.body.session_name;
		var receivedMovies = req.body.movies;
		
		console.log("********",session_name); 
		console.log(receivedMovies,'<---received');
		//res.send(session_name);
		newMoviesQuery.insertAll(session_name, receivedMovies, function(){
			console.log("data received");
		});
	}	

};


