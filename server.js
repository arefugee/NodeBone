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

var port = 4711;
app.listen(port, function(){
  console.log('Express server listening on port %d in %s mode',
    port,app.settings.env);
});