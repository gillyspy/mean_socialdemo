// our API

var Post = require('../../models/post');

//build a router to to facilitate attaching our API to our server app
var router = require('express').Router();

router.get('/', function(req, res, next){
    Post.find()
	.sort({ date : -1 }) 
	.exec(function(err, posts){
	    if(err){ return next(err)};
	    res.json(posts);
	})
    ; //Post ops
});

router.post('/', function(req, res, next){
    // create a social post "document" from the http request (coincidentally called a post)
    var post = new Post({
	username : req.body.username,
	body : req.body.body
    });
    //save the document into the db
    post.save(function(err, post) {
	if(err){ return next(err) }
	res.json(201, post);
    });
    //res.sendStatus(201); //book had deprecated res.send();
});

module.exports = router;
