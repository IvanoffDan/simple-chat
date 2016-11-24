const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        './app/app.js'
    ],
    externals:{
        jquery: 'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
        }]
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'inline-source-map'
};