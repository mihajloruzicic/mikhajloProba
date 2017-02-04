var express = require("express");
var app = express();

app.get('/cheer.txt', function(req, res){
    res.end('You have quite lovely eyes.')
});

app.get('/jeer.txt', function(req, res){
    res.end('You have quite lovely bla bla.')
});

var server = app.listen(8080, function() {
    console.log('Listening on port 8080')
});
