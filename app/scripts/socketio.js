/*const {newMessageReceived} = require('../actions/index');*/
export const socket = io();

socket.on('connect', function () {
    console.log('Connected to Server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from Server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});

socket.emit('createMessage', {
    from: "me",
    text: "Sometext"
}, function (data) {
    console.log('Got it!', data)
});
