var express = require('express');
var app = express();

var server = app.listen(3000, '127.0.0.1',  function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Down app listening at http://%s:%s', host, port);

});

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	  res.sendFile(__dirname + '/index.html');
});
