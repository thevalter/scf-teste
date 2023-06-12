const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(routes)
app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});