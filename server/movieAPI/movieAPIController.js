var https = require('https');


module.exports = {
  omdb : function(req, res) {
    var movieTitle = req.params.movie_title;
    console.log('REQUEST!! movie title: ', movieTitle);

    var options = {
      host: 'www.omdbapi.com',
      path: '/?s=' + movieTitle,
      method: 'GET'
    };

    externalReq = externalAPI(options, res);
    externalReq.end();
  },

  movieDB : function(req, res) {
    var params = request.params.filter;

    var options = {
      host: 'https://api.themoviedb.org/3',
      path: '?api_key=00668398b30762f2cc8f563e9a8617de' + params,
      method: 'GET'
    };

    externalReq = externalAPI(options, res);
    externalReq.end();
  }
};

// Helper function to make external API calls
function externalAPI(options, response) {
  return https.request(options, function(res) {
    res.setEncoding('utf-8');

    var data = '';

    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      console.log(data);
      response.json(data);
    });
  });
}