// Setup the app module dependencies
var application_root = __dirname,
  express = require('express'),
  path = require('path'),
  mongoose = require('mongoose');

// Create the app server with an express instance
var app = express();

// Configure the server
app.configure( function() {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, 'client')));
  app.use(express.errorHandler({dumpExecutions:true, showStack:true}));
});

// Mongoose connect & schema setup
mongoose.connect('mongodb://localhost/library_database');

var Book = new mongoose.Schema({
  title: String,
  author: String,
  releaseDate: Date
});

var BookModel = mongoose.model('Book', Book);

app.get('/api', function(request, response){
  response.send('API up and running');
});

app.get('/api/books', function(request, response){
  return BookModel.find(function(err, books){
    if(!err){
      return response.send(books);
    } else {
      return console.log(err);
    }
  });
});

var port = 4711;
app.listen(port, function(){
  console.log('Express server listening on port %d in %s mode',
    port,app.settings.env);
});