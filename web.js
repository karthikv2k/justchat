var express = require('express');
var exec = require("child_process").exec;
var app =express.createServer(express.logger(),express.bodyParser());

var authdb={};
var url=require("url");
var querystring=require("querystring");
var io = require('socket.io').listen(app);
var fs = require('fs');

io.sockets.on('connection',function(socket){
    socket.on('message', function (data) {
      socket.broadcast.json.emit('message',data);
      console.log("got: "+data);
      });
    });

app.get('/',function(request,response){
    fs.readFile(__dirname + '/index.html',function(ierr,data){
        response.end(data);
      });
   });

app.get('/index.css',function(request,response){
    fs.readFile(__dirname + '/index.css',function(ierr,data){
        response.end(data);
      });
   });
var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log('listening on port port');
    });

