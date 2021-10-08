var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var itemRouter = require('./routers/item'); // api 

var app = express();

// Connect to database 
var PORT = 8080;
var HOST_NAME = 'localhost';
var DATABASE_NAME = 'shoppingList';

mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);



// Pares Body to Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



//Link Api rputes to server 
app.use('/api', itemRouter);



// listen server on Port 5000
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
