// our API

var Post = require('../../models/post');

//build a router to to facilitate attaching our API to our server app
var router = require('express').Router();

router.get('/', function(req, res, next){
    Post.find()
		.sort({date: -1})
		.exec(function (err, posts) {
			if (err) {
				return next(err)
			}
			;
			res.json(posts);
		})
	; //Post ops
});

router.post('/', function(req, res, next){
    // create a social post "document" from the http request (coincidentally called a post)
    var post = new Post({
		//username : req.body.username, // do not trust this username sent from client
		body: req.body.body
	});

	// get username from decoded jwt that was attached to the request by middlware on the server
	post.username = req.auth.username;

	//save the document into the db
	post.save(function (err, post) {
		if (err) {
			return next(err)
		}
		res.status(201).json(post);
	});
	//res.sendStatus(201); //book had deprecated res.send();
});

module.exports = router;
