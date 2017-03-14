var webpack = require('webpack');

module.exports = {
    // c9.io 용 
    entry: [
        'webpack-dev-server/client?https://0.0.0.0:8080',
        'webpack/hot/dev-server',
         './src/index.js'
    ],
    //entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: __dirname + '/public/',
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
