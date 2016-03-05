var mController = require( '../newMovies/newMoviesQuery' );
var _ = require('underscore')

var checkMatch = function(sessionID, callback) {
  var sessionID = req.params.session_id;

  mController.getMoviesBySession(sessionID, function(data) {
    var max = 0;
    var pairs = _.map(data, function(item) {
      if (item.votes > max) {
        max = item.votes;
      }
      return [item.id, item.votes];
    });
    var selectedMovies = [];
    var selectedMovies = _.map(pairs, function(item) {
      if(item[1] = max) {
        return item[0];
      }
    
    })
  
    
    selectedMovieID = Math.floor(Math.random() * selectedMovies.length + 1)
    mController.getMovieByID(selectedMovies[selectedMovieID], function(movie) {
      callback(movie);
    }) 
    

  })


}

module.exports = {
  checkMatch: checkMatch  
};
