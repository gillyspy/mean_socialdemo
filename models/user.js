var db = require('../db');


//TODO: force a username to be unique in the database or model.  What is best practice? 
var user = db.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, select: false}
});

module.exports = db.model('User', user);