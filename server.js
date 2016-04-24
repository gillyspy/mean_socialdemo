var express = require('express');
var bodyParser = require('body-parser');

//database & schema
var Post = require('./models/post');

var app = express();

app.use(bodyParser.json());

//serve up (GET) resources from root
//app.use( '/statically', express.static(__dirname));

// pull in our API controller
app.use('/api/posts', require('./controllers/api/posts'));

// pull in our static files (e.g. Angular apps and resources)
app.use( '/', require('./controllers/static'));

app.listen(3000, function(){
    console.log('Server listening on 3000');
});

