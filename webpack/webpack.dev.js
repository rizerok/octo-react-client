const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rupture = require('rupture');

let extractStylus = new ExtractTextPlugin({
    filename:path.join('static','bundle','[name].css')
});

module.exports = {
    devtool:'cheap-eval-source-map',
    devServer:{
        openPage:''
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
                            importModules:2,
                            //https://github.com/webpack/loader-utils#interpolatename
                            localIdentName: '[name]__[local]-[hash:base64:5]'
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
                            importModules:2
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
                        name:path.join('static','bundle','[hash].[ext]')
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /fonts\/.*\.(eot|svg|ttf|woff|woff2)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:path.join('static','bundle','[hash].[ext]')
                    }
                }
            }
        ]
    },
    plugins:[
        extractStylus
    ]
};