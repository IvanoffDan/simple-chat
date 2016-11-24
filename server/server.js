require('./config');
const path = require('path');
const express = require('express');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const socketEvents = require('./socketEvents');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT;

app.use('/', express.static(publicPath));

socketEvents(io);

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};