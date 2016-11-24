const socket = io();
/*const {newMessageReceived} = require('../actions/index');*/

socket.on('connect', function () {
    console.log('Connected to Server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from Server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
    /*store.dispatch(newMessageReceived(message));*/
});

socket.emit('createMessage', {
    from: "me",
    text: "Sometext"
}, function (data) {
    console.log('Got it!', data)
});
