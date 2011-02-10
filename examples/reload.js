
/**
 * Module dependencies.
 */

var engine = require('../')
  , http = require('http');

// try loading, and changing "Hello", to "Hello World"

var body = 'Hello'
  , len = body.length;
var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Length': len });
  res.end(body);
});

engine(server)
  .use(engine.reload(__dirname))
  .use(engine.debug())
  .listen(3000);