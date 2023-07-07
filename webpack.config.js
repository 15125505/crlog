const path = require('path');

module.exports = {
    entry: './src/log.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'log.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    target: 'node',
    mode: 'production',
    devtool: 'source-map',
};
