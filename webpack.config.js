var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "../style.css"
});

var bourbon = require('bourbon').includePaths
var neat = require('bourbon-neat').includePaths

var config = {

    entry: ['./assets/js/theme.js', './assets/sass/style.scss'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: [bourbon, neat]
                        }
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },

    plugins: [
        extractSass
    ]
};

module.exports = config;