const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',

    devServer: {
        port: 8082,
        hot: true,
    },
});
