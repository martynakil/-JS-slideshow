

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './assets/js/script.js',
    output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',

    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
           
            }
            ]
    },
    }

