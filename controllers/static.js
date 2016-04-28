var express = require('express');
var router = express.Router();
var path = require('path');

// static javascript assets
router.use( '/assets', express.static(__dirname + '/../assets'));

// our Angular app
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../layouts', 'app.html'));
});

router.use('/', express.static(__dirname + '/../templates'));

module.exports = router;
