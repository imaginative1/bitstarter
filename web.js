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



var express = require('express');
var fs = require('fs');
var buff = new Buffer(fs.readFileSync("index.html"));
var app = express.createServer(express.logger());
var content = buff.toString()

app.get('/', function(request, response) {  
response.send(content);});


var port = process.env.PORT || 5000;
app.listen(port, function() {  
  console.log("Listening on " + port);
});
