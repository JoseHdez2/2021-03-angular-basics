var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var data = require('./data');

app.use(bodyParser.json());

app.set('port', process.env.PORT || 3001);

app.get('/api/habits', function (req, res) {
  res.send(data.habits);
});

app.post('/api/habits', function (req, res) {
  let habit = req.body;
  habit.id = data.habits.length + 1;
  habit.count = 0;
  data.habits.push(habit);
  res.send(habit);
});

app.listen(app.get('port'), function () {
  console.log('Server is running on port ' + app.get('port'));
});