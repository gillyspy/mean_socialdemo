var express = require('express');
var router = express.Router();

// static javascript assets
router.use( '/assets', express.static(__dirname + '/../assets'));

// our Angular app
router.get('/', function(req,res){
    res.sendfile('layouts/app.html');
});

router.use('/', express.static(__dirname + '/../templates'));

module.exports = router;
