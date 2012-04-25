var zeromq = require('zmq');

var socket = zeromq.socket('pull');
socket.connect('tcp://127.0.0.1:2002');

var sendSocket = zeromq.socket('push');
sendSocket.bind('tcp://127.0.0.1:2003');

socket.on('message', function(buffer) {

	var task = buffer.toString();

	console.log(task);
	sendSocket.send("ACK: " + task);

});


