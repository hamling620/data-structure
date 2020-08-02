const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [
        new CleanWebpackPlugin()
    ]
}