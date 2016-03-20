var app = require('./app');
var http = require('http');
var server = http.createServer(app);

server.listen(process.env.PORT || 3000, function () {
    console.log('server listening on port: 3000');
});
server.on('error', function (e) {
if (e.code == 'EADDRINUSE') {
console.log('Port in use, trying another..');
setTimeout(function() {
  app.close();
  app.listen(3000, 'localhost');
}, 8000);
}
});
