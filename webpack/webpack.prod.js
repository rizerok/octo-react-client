const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pj = require(path.resolve('package.json'));
const rupture = require('rupture');

let extractStylus = new ExtractTextPlugin({
    filename:path.join('static','bundle','[name].css')
});

module.exports = {
    output:{
        path:path.resolve('..','..','static_root'),
        filename:path.join('bundle','[name].js'),
        publicPath:'/static'
    },
    module:{
        rules:[
            {
                test:/\.styl$/,
                exclude:path.resolve('assets','styles'),
                use:extractStylus.extract({
                    fallback: 'style-loader',
                    use:[{
                        loader: 'css-loader',
                        options: {
                            sourceMap:true,
                            modules: true,
                            minimize:true,
                            importModules:2,
                            //https://github.com/webpack/loader-utils#interpolatename
                            localIdentName: '[hash:base64:8]'
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap: true
                        }
                    },
                    {
                        loader:'stylus-loader',
                        options:{
                            use:[rupture()]
                        }
                    }]
                })
            },
            {
                test:/\.styl$/,
                include:path.resolve('assets','styles'),
                use:extractStylus.extract({
                    fallback: 'style-loader',
                    use:[{
                        loader: 'css-loader',
                        options: {
                            sourceMap:true,
                            importModules:2,
                            minimize:true
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap: true
                        }
                    },
                    {
                        loader:'stylus-loader',
                        options:{
                            use:[rupture()]
                        }
                    }]
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg|ico)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:path.join('assets','[hash].[ext]'),
                        publicPath: '/static/'
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /fonts\/.*\.(eot|svg|ttf|woff|woff2)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:path.join('assets','[hash].[ext]'),
                        publicPath: '/static/'
                    }
                }
            }
        ]
    },
    devtool:'cheap-module-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            inject:false,
            template: path.resolve('templates','README.md.ejs'),
            filename:path.resolve('README.md'),
            info:{
                name: pj.name,
                version: pj.version,
                description: pj.description,
                repository:pj.repository.url
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            uglifyOptions:{
                compress: {
                    drop_console: true
                },
                warnings:false,
                output:{
                    comments: false
                }
            }
        }),
        extractStylus
    ]
};