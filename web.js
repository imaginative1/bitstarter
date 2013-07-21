/** code for hemeowrk #3
* by : Rene M
*/





var express = require('express');
var fs = require('fs');
var buff = new Buffer(fs.readFileSync("index.html"));
var app = express.createServer(express.logger());
var container = buff.toString()

app.get('/', function(request, response) {  
response.send(container);});


var port = process.env.PORT || 5000;
app.listen(port, function() {  
  console.log("Listening on " + port);
});
