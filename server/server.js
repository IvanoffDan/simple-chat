const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

const app = express();

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 3000;
} else if (env === 'test') {
    process.env.PORT = 3000;
}

const port = process.env.PORT;

app.use('/', express.static(publicPath));

app.listen(port, ()=> {
   console.log(`Started on port ${port}`);
});

module.exports = {app};