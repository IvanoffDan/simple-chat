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
        loaders: [
            {exclude: /node_modules/, loader: 'babel',},
            { test: /\.css$/, loader: "style-loader!css-loader" }
            ]
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx', '.css']
    },
    devtool: 'inline-source-map'
};