var movieAPI = require('./movieAPIRequests');
var _ = require('underscore');
var NewMovie = require('../sessions/sessions').NewMovie;

module.exports = {
  omdbSearch: function (req, res) {
    movieAPI.omdbSearch(req, res);
  },

  post: function (req, res) {
    var session_id = req.body.session_id;
    var imdb_ids = _.uniq(req.body.movies);
    var allMovies = [];
    
    _.each(imdb_ids, function(id, index) {

      movieAPI.omdbFind(id, function (data) {
        data = JSON.parse(data);
        var movie = {
          title: data.Title,
          poster: data.Poster,
          plot: data.Plot,
          votes: 0,
          year: data.Year,
          session_id: session_id
        };
        allMovies.push(movie);

        if (allMovies.length === imdb_ids.length) {
          NewMovie.bulkCreate(allMovies)
            .then(function() {
                res.end("SUCCESS!!!!");
            })
            .catch(function(err) {
              console.error(err);
            });
          }
      });
    });
  }
}