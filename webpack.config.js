const webpack = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};
const PROD = process.env.NODE_ENV === 'production' || process.argv.indexOf('-p') !== -1;

const config = {

    entry: {
        app: './src/js/app.js'
    },

    output: {
        filename: 'bundle.min.js',
        //path: './src/main/resources/static/built',
        path: './dist',
        publicPath: '/dist/'
    },

    devtool: PROD ? 'source-map' : 'eval-source-map',

    target: 'web',

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            jquery: __dirname + '/bower_components/jquery/dist/jquery.js'
        }
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },

            //bootstrap font stuff
            { test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/, loader: 'url?limit=100000&name=fonts/[name].[ext]' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=10000&minetype=image/svg+xml' }
        ]
    },

    plugins: PROD ?
        [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.DefinePlugin(GLOBALS),
            new ExtractTextPlugin('bundle.css'),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
        ] :
        [
            new webpack.optimize.OccurenceOrderPlugin(),
            new ExtractTextPlugin('bundle.css'),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
};

module.exports = config;
