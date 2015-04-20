var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('<h1 style="margin: 0 auto; padding-top:200px;">Vi fikser litt baki her, vennligst kom tilbake etterpå.</h1>');
});

var server = app.listen(3000, '127.0.0.1',  function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
