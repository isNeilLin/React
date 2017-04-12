const webpack = require('webpack');
// 使用 HtmlWebpackPlugin，将 bundle 好的 <script> 插入到 body。${__dirname} 为 ES6 语法对应到 __dirname  
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = {
    template: `${__dirname}/app/index.html`,
    filename: 'index.html',
    inject: 'body'
}
module.exports = {
    entry: './app/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [ 'es2015', 'react' ],
                }
            }
        ]
    },
    // devServer 则是 webpack-dev-server 设定
    devServer: {
        inline: true,
        port: 3008
    },
    // plugins 放置所使用的外挂
    plugins: [new HtmlWebpackPlugin(HtmlWebpackPluginConfig)],
}