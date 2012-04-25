var zeromq = require('zmq');

var socket = zeromq.socket('pub');

socket.bind('tcp://127.0.0.1:2001', function(error) {

    if (error) {
        console.log(error);
    }

    console.log("Listening on port 2001");

    setInterval(function() {

        var face = "Facepalmer";
        var randNumber = Math.floor(Math.random() *
            999999);
        var message = face + " " + randNumber;

        socket.send("ARNOLD " + message);
        // This message should be dropped on the client
        socket.send("FACEPALMER ARNOLD " + message);
        socket.send("ARNOLDFACEPALMER " + message);

    }, 1000);

});