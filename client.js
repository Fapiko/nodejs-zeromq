var zeromq = require('zmq');

var sock = zeromq.socket('sub');
sock.connect('tcp://127.0.0.1:2001');
sock.subscribe('ARNOLD');

sock.on('message', function(data) {
   console.log(data.toString());
});