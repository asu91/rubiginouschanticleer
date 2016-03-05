var mController = require( '../newMovies/newMoviesQuery' );
var _ = require('underscore')

module.exports = {
  checkMatch: function(sessionID, callback) {

    mController.getMoviesBySession(sessionID, function(data) {
      var max = -100000;
      console.log(data, '<---------------------DATA');
      var pairs = _.map(data, function(item) {
        if (item.votes > max) {
          max = item.votes;
        }
        return [item.id, item.votes];
      });

      var selectedMovies = _.filter(pairs, function(item) {
        return item[1] === max;
      });
    
      
      var winnerIndex = Math.floor(Math.random() * selectedMovies.length);
      mController.getMovieByID(selectedMovies[winnerIndex][0], function(movie) {
        console.log(selectedMovies[winnerIndex],'!!!', selectedMovies, '<------------------------------------');
        console.log(movie, '<------------------------------------');
        callback(movie);
      }); 
      

    });
  }
}