const commonConfig = require('./webpack.config')
const { merge } = require('webpack-merge')

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 8877,
        hot: true,
        open: true
    }
})