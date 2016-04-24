var express = require('express');
var router = express.Router();

// static javascript assets
router.use( '/assets', express.static(__dirname + '/../assets'));

// our Angular app
router.get('/', function(req,res){
    res.sendfile('layouts/postsAngular.html');
});

module.exports = router;
