var newMoviesQuery = require('./newMoviesQuery');



module.exports = {

	get: function(req, res){
		var session_id = req.params.session_id;

		newMoviesQuery.getMoviesBySession(session_id, function(moviesData){
			res.json(moviesData);

		});

	},


	post: function(req, res){

		var session_id = req.body.session_id;
		var receivedMoviesArray = req.body.movies;
		newMoviesQuery.insertAll(req.body.session_id, req.body.movies, function(){
			res.send('HI THERE');
		});
	},

	put: function(req, res) {
		var id = req.body.id;
		var vote = req.body.vote;
		newMoviesQuery.getMovieById(id, vote, function() {
      res.send('it worked!')
		});

	}


};


