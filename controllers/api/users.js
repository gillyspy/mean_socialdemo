// our API

var User = require('../../models/user');

//build a router to to facilitate attaching our API to our server app
var router = require('express').Router();

var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');

var config = require('../../config');

// get existing user
router.get('/', function (req, res, next) {
    if (!req.headers['x-auth']) {
        return res.send(401);
    }
    var auth = jwt.decode(req.headers['x-auth'], config.secret);
    User.findOne({username: auth.username}, function (err, user) {
            if (err) {
                return next(err);
            }
            res.json(user);
        }
    );
}); // get

// create a new user
router.post('/', function (req, res, next) {

    var user = new User({username: req.body.username});
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        user.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send(201);
        });
    });
}); // post ;

module.exports = router;
