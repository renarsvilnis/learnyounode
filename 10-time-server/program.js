var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  // socket handling logic
  // socket.write(somedata);
  socket.end(strftime('%Y-%m-%e %H:%M') + '\n'); // we only have chucnk to send
});

server.listen(process.argv[2]);
