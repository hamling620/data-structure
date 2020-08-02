const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

module.exports = merge(commonConfig, config)