var db = require('../db');

var Schema = db.Schema;

var userSchema = new Schema({
    username : { type : String, required : true },
    body     : { type : String, required : true },
    date     : { type : Date, required : true, default : Date.now }
});

var Post = db.model('Post', userSchema )

module.exports = Post;
