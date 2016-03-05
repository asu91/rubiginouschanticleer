var movieAPI = require('./movieAPIRequests');
var _ = require('underscore');
var NewMovie = require('../sessions/sessions').NewMovie;

module.exports = {
  omdbSearch: function (req, res) {
    movieAPI.omdbSearch(req, res);
  },

  post: function (req, res) {
    var session_id = req.body.session_id;
    var imdb_ids = req.body.movies;
    console.log(session_id,'session_id', imdb_ids, 'imdb_ids')
    _.each(imdb_ids, function(id) {
      movieAPI.omdbFind(id, function (data) {
        data = JSON.parse(data);
        var movie = {
          title: data.Title,
          poster: data.Poster,
          plot: data.Plot,
          votes: 0,
          year: data.Year,
          session_id: session_id
        }

        NewMovie.findOrCreate({where: movie})
          .then(function(data) {
            console.log('SUCCESS!!!!')
          })
          .catch(function(err) {
            console.error(err);
          });
      });
    });
  }
}