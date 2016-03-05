//newMoviesQuery 
//require the newMovies Model 
var NewMovie = require('../sessions/sessions').NewMovie;

module.exports = {

  insertAll: function(session_id, movies, callback){
    console.log("we are in insertAll Query", movies);
    movies.forEach(function(movie){
      movie.session_id = session_id;
    });
    NewMovie.bulkCreate(movies)
    .then(function(){
      callback(); 
    });
  },

  getMoviesBySession: function(session_id, callback) {
    
    NewMovie
      .findAll({
        where: {session_id: session_id}
      })
      .then(function(movies){
        callback(movies); 
      });
  },

  updateMovieVote: function(id, vote, callback) {
    NewMovie.find({where: {
      id: id
    }})
      .then(function(movie) {
        if(vote === 1) {
          return movie.increment('votes');
        } else if (vote === -1) {
          return movie.decrement('votes');
        }
      })
      .then(function() {
        callback();
      })
  },

  getMovieByID: function(id, callback) {

  	NewMovie.find({where: {
      id: id
    }})
      .then(function(movie) {
      	callback(movie);
    })
  }

};