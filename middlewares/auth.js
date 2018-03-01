var jwt = require('jsonwebtoken');
var config = require('../config.js');

module.exports = function(req,res,next) {
  /*
   * check if authorization header is set
   */
  if(req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization'))
  {
    try{
      /*
       * try to decode & verify the jwt token
       * The token contains user's id (it contain more information)
       * and this is saved in req.user object
       */
      req.user = jwt.verify(req.header['authorization'], config.JWT_SECRET);
    } catch(err) {
      /*
       * if the authorization header is corrupted, it throws exception
       *  so return 401 status code with JSON error message
       */
      return res.status(401).json({
        error: {
          msg: 'Failed to authenticate token!'
        }
      });
    }
  } else {
    /*
     * If there is no authorization header, return 401 status code with JSON
     *  error message
     */
    return res.status(401).json ({
      error: {
        msg: 'No token!'
      }
    });
  }
  next();
  return;
}