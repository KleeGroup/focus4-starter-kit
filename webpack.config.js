const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/static/'
    },
    resolve: {
        alias: {
            'focus-core/translation': path.resolve(__dirname, './node_modules/autofocus/translation.js'),
            'focus-core/component/builder': path.resolve(__dirname, './src/$focus/builder.ts'),
            'focus-core/component/types': path.resolve(__dirname, './src/$focus/types.ts')
        },
        extensions: ['', '.js', '.ts', '.tsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                include: [
                    path.resolve(__dirname, './src')
                ]
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]'
                }
            }
        ]
    }
};