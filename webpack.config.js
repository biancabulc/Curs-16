var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

var config = {
    context: __dirname + '/src',
    module: {
        rules: [
            {
                test: /\.(scss$)/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                },
                {
                    loader: 'sass-loader'
                }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }]
    },
    entry: ['./js/main.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'main.js',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};

module.exports = config;