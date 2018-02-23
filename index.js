var express = require('express');
var app = express();
/**
 * create basic route that handles everything and returns some JSON, so you
 * are able to try if it's working
  */

  app.get('/*', function(req, res) {
    res.json({message: 'Hello World!'});
  });

  app.listen(8080);