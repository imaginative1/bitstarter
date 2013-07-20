/** code for hemeowrk #3

* by : Rene M
*/



var express = require('express');
var app = express();

//var fs = require('fs');

//var data = fs.readFileSync("index.html","utf-8");

//var app = express.createServer(express,logger());


app.use(express.logger());


app.get('/', function(request, response) {

//   response.send(data);
     response.send('Hello World2!');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




