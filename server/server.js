require('./config');
const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const socketEvents = require('./socketEvents');

const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT;

app.use('/', express.static(publicPath));

socketEvents(io);

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};