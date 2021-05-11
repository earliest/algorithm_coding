const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.ts', //entry point for webpack, the first file to compile. relative path to webpack.config.js.
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: 'public', //relative path
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'), //absolute path, we need the path module
    }
}