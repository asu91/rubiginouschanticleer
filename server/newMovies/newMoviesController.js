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

		var session_id = req.body.session_id;
		var receivedMoviesArray = req.body.movies;
		console.log(req.body.session_id,'<--------------------------------------------------------->>>')
		newMoviesQuery.insertAll(req.body.session_id, req.body.movies, function(){
			console.log("data received");
			res.send('HI THERE');
		});
	}	

};


