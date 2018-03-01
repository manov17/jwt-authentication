var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var config = require('./config.js')

// /*
//  * Create basic route that handles everything and returns some JSON, so you
//  * are able to try if it's working
//  */
// app.get('/*', function(req, res) {
//     res.json({message: 'Hello World!'});
// });

// app.listen(8081);

var router = express.Router();
var bodyPraser = require('body-parser');
var config = require('./config.js');

app.use(bodyParser.json());
/*
 * Add middleware. Because we defined the first parameter ('/api'), it will run
 * only for urls that starts with '/api/*' 
 */
app.use('/api', require('./middlewares/auth.js'));
/*
 * Add the protected route '/hello-world' after '/api'
 * So now it is availbale on /api/hello-world 
 */
app.use('/api', require('./controllers/helloworld')(router));
/*
 * Add the '/login' route handler 
 */
app.use('/', require('./controllers/user.js')(router));
/*
 * Start server
 */
app.listen(config.PORT);