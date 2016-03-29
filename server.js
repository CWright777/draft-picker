var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));

require('./app/config/db.js')
require('./app/config/routes.js')(app);

app.listen(8000, function() {
  console.log('listening on: 8000');
});
