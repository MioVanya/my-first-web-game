const PORT=20000;

var server;
var express = require('express');
var app = express();

const http = require('http');

server=http.createServer({
    }, app).listen(PORT, () => { 
    console.log('Listening on '+server.address().port);
    });
    
app.get('/ivan',function(req,res)
{
    res.sendFile(__dirname+'/game.html');
});