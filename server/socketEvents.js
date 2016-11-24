const {generateMessage} = require('./utils/message');

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('New user connected');

        socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

        socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

        socket.on('createMessage', (newMessage, cb) => {
            io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
            cb('This is from the server');
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};