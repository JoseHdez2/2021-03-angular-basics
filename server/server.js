var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var data = require('./data');

app.use(bodyParser.json());

app.set('port', process.env.PORT || 3001);

app.get('/api/habits', function (req, res) {
  res.send(data.habits);
});

app.listen(app.get('port'), function () {
  console.log('Server is running on port ' + app.get('port'));
});