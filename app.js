//import express module
var express = require('express');
//Create an ninstance of express to be used as server
var app = express();
//instantiate  a lintening port for the server
var port = process.env.PORT || 5000;
//configure express to serve static resources
app.use(express.static('public'));
app.use(express.static('src/views'));
// A single url mapping
app.get('/', function (req, res) {
	res.send('This url map to root of the application');
});
//Mapping to the specific url
app.get('/books', function (req, res) {
	res.send('This url map to /books resource of the application');
});
// make a server listen to a port with a single task.
app.listen(port, function (err) {
	console.log('Server listening to port '+port);
})