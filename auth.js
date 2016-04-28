//middleware to decode the user from the JWT (which was orginally generated on the server). i.e. do not trust username client is sending us
var jwt = require('jwt-simple');

// get serverside key
var config = require('./config');


module.exports = function (req, res, next) {
    if (req.headers['x-auth']) {
        req.auth = jwt.decode(req.headers['x-auth'], config.secret);
    }
    next();
};