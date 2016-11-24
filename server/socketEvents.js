const {generateMessage} = require('./utils/message');
const {DISPATCH_NEW_MESSAGE} = require ('../app/actions/index');
const {NEW_MESSAGE_RECEIVED} = require ('../app/actions/index');

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('New user connected');

        socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

        socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

        socket.on('action', (action) => {
            if (action.type == DISPATCH_NEW_MESSAGE) {
                io.emit('action', {type: NEW_MESSAGE_RECEIVED, data: generateMessage(action.data.from, action.data.text)});
            }
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};