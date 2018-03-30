const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var minify = {};

if (process.env.NODE_ENV === 'production') {
    minify = {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true
    };
}

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.vue$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
                // options: {
                //     loaders: {
                //         // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                //         // the "scss" and "sass" values for the lang attribute to the right configs here.
                //         // other preprocessors should work out of the box, no loader config like this necessary.
                //         'scss': 'vue-style-loader!css-loader!sass-loader',
                //         'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                //     }
                //     // other vue-loader options go here
                // }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details),
            minify: minify
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
            // vuex: 'vue/dist/index.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

/*
if (process.env.NODE_ENV === 'development') {
    module.exports.plugins = (module.exports.plugins || []).concat([
            new BundleAnalyzerPlugin()
        ]);
}*/

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new CleanWebpackPlugin(['dist']),
    ]);
}
