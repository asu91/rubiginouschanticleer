var https = require('https');

module.exports = {
  omdbSearch : function(req, res) {
    var movieTitle = req.params.movie_title;

    var options = {
      host: 'www.omdbapi.com',
      path: '/?s=' + movieTitle,
      method: 'GET'
    };

    var externalReq = externalAPI(options, function(data) {
      res.json(data);
    });
    externalReq.end();
  },

  omdbFind : function(imdb_id, callback) {
    var options = {
      host: 'www.omdbapi.com',
      path: '/?plot=full&i=' + imdb_id,
      method: 'GET'
    };

    var externalReq = externalAPI(options, callback);
    externalReq.end();
  },


  movieDB : function(req, res) {
    var params = request.params.filter;

    var options = {
      host: 'https://api.themoviedb.org/3',
      path: '?api_key=00668398b30762f2cc8f563e9a8617de' + params,
      method: 'GET'
    };

    var externalReq = externalAPI(options, res);
    externalReq.end();
  }
};

// Helper function to make external API calls
function externalAPI(options, callback) {
  return https.request(options, function(res) {
    res.setEncoding('utf-8');

    var data = '';

    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      callback(data);
    });
  });
}