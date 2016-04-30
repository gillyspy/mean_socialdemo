//user model
var User = require('../../models/user');

//build a router to to facilitate attaching our API to our server app
var router = require('express').Router();

var bcrypt = require('bcrypt');

var jwt = require('jwt-simple');

var config = require('../../config');


// post to return jwt token when given valid username and password
router.post('/', function (req, res, next) {
    User.findOne({username: req.body.username})
        .select('password') // pipe in explicit password request as it's normally not returned in the model;
        .select('username') // is this necessary?
        .exec(function (err, user) {
                if (err) {
                    return next(err)
                }

                if (!user) {
                    return res.sendStatus(401)
                }
            console.log('session.js');
                //otherwise
                bcrypt.compare(req.body.password, user.password, function (err, valid) {
                    if (err) {
                        return next(err)
                    }

                    if (!valid) {
                        return res.send(401)
                    }

                    var token = jwt.encode({username: user.username}, config.secret);
                    res.send(token);
                }); // compare;
            } // exec;
        ); //findOne;
}); // post ;

module.exports = router;
