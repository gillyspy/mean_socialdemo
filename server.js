var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

//serve up (GET) resources from root;
//app.use( '/statically', express.static(__dirname));

// wire in auth middleware always
app.use(require('./auth'));

// pull in our API controller;
app.use('/api/posts', require('./controllers/api/posts'));

// pull in our static files (e.g. Angular apps and resources);
app.use( '/', require('./controllers/static'));

//mount controller for jwt session
app.use('/api/sessions', require('./controllers/api/sessions'));

//mount controller for user login
app.use('/api/users', require('./controllers/api/users'));

app.listen(3000, function(){
    console.log('Server listening on 3000');
});

