/** code for hemeowrk #3

* by : Rene M
*/



//**ar express = require('express');
//var app = express();


//app.use(express.logger());


//app.get('/', function(request, response) {


  //   response.send('Hello World2!');

//});

//var port = process.env.PORT || 5000;
//app.listen(port, function() {
  //console.log("Listening on " + port);
//});




//*******************************************
//var express = require('express');
//var fs = require('fs');

//var data = fs.readFileSync("index.html","utf-8");


//var app = express.createServer(express.logger());




//app.get('/', function(request, response) {

  //response.send(data);


//});

//var port = process.env.PORT || 5000;
//app.listen(port, function() {
  //console.log("Listening on " + port);
//});

//************************************************





var fs = require("fs");

var express = require("express");

var buffer = new Buffer(128);

// buffer = fs.readFileSync("./index.html");

   var app = express.createServer(express.logger());
// var app = express();

// console.log("Buffer is: " + buffer.toString('utf8'));
app.get('/', function(request, response) {
  response.send(fs.readFileSync("./index.html").toString()) ;
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
