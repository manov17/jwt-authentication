var jwt = require('jsonwebtoken');
var config = require('../config.js');

module.exports = function(router) {
  router.post('/login',function(req,res) {
    /*
     * Check if the username and password is correct
     */
  if(req.body.username === 'admin' && req.body.password === 'admin') {
    res.json ({
      id:1,
      username: 'admin',
      jwt: jwt.sign({
        id:1,
      }, config.JWT_SECRET, {expiresIn: 60*60 })
    });
  } else {
    /*
     * if the username or password was wrong, return 401 (unauthorized)
     * status code and JSON error message
     */
      res.status(401).json({
        error: {
          message: 'Wrong username or password!'
        }
      });
    }
  });
  return router;
}