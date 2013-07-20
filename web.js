var express = require('express');

var data = fs.readFileSync("index.html","utf-8");


app.get('/', function(request, response) {
  var fs = require('fs');
  var mybuf = fs.readFileSync("index.html");

  var buffer = new Buffer();
  response.send(buffer.toString('utc-8',mybuf.toString()));
    

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




