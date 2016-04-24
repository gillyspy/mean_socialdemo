//encapsulate db connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground');

module.exports = mongoose;
