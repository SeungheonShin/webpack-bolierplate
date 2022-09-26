const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            filename: path.join(__dirname, 'dist/index.html'),
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.scss'],
        alias: {
            '@js': path.join(__dirname, 'src/js'),
            '@scss': path.join(__dirname, 'src/scss'),
            '@img': path.join(__dirname, 'src/img'),
        },
    },
};

module.exports = config;
