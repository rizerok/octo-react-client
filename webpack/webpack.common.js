const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry:{
        app:path.resolve('app','index.js')
    },
    output:{
        filename:path.join('static','bundle','[name].js'),
        publicPath:'/'
    },
    resolve:{
        alias:{
            root:path.resolve(),
            bundle:path.resolve('bundle'),
            app:path.resolve('app'),
            components:path.resolve('app','components'),
            styles:path.resolve('assets','styles'),
            styleEnv:path.resolve('assets','styles','env','entry.styl'),
            fonts:path.resolve('assets','fonts'),
            img:path.resolve('assets','images'),
        }
    },
    module:{
        rules:[
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'eslint-loader',
                include: [
                    path.resolve('app')
                ]
            },
            {
                test:/\.js$/,
                include:path.resolve('app'),
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            'env',//https://babeljs.io/docs/plugins/preset-env/
                            'react',
                            'stage-3'//https://babeljs.io/docs/plugins/preset-stage-3/
                        ],
                        plugins:[
                            'transform-decorators-legacy'
                        ],
                        cacheDirectory:true
                    }
                }
            },
        ]
    },
    devServer:{
        port:3000,
        open:true,
        contentBase:path.resolve('..','templates'),
        proxy:{
            '/api/': {
                target: 'http://fakt.octweb.ru',
                changeOrigin: true
            }
        },
        historyApiFallback: {
            index:'base.html'
        }
    },
    plugins:[
        new CleanWebpackPlugin(
            [
                'bundle',
                path.join('..','templates','base.html')
            ],
            {
                root:     path.resolve(),
                verbose:  true
            }
        ),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            inject:false,
            template: path.resolve('templates','index.html.ejs'),
            filename:path.resolve('..','templates','base.html')
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.ProvidePlugin({
            ReactDOM:'react-dom'
        })
    ]
};