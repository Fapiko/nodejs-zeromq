var zeromq = require('zmq');

var socket = zeromq.socket('push');
socket.bind('tcp://127.0.0.1:2002');

setInterval(function() {

	console.log("Spawning new batch of work");
	for (var i = 0; i < 20; i++) {
		socket.send(i);
	}

}, 5000);

var receiveSocket = zeromq.socket('pull');
receiveSocket.connect('tcp://127.0.0.1:2003');

receiveSocket.on('message', function(message) {
	console.log(message.toString());
});

