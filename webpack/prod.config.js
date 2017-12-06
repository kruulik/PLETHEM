// Webpack config for creating the production bundle.
var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var strip = require('strip-loader');

var projectRootPath = path.resolve(__dirname, '../');
var assetsPath = path.resolve(projectRootPath, './static/dist');

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: {
    'main': [
      'bootstrap-loader',
      'font-awesome-webpack!./src/theme/font-awesome.config.prod.js',
      './src/index.js'
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/'
  },
  module: {
   rules: [
     { test: /\.jsx?$/, exclude: /node_modules/, use: [strip.loader('debug'), 'babel-loader']},
     { test: /\.less$/, use: ExtractTextPlugin.extract({
       fallback: 'style-loader',
       use: 'css?modules&importLoaders=2&sourceMap!postcss-loader!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
     }) },
     { test: /\.scss$/, use: ExtractTextPlugin.extract({
       fallback: 'style-loader',
       use: 'css?modules&importLoaders=2&sourceMap!postcss-loader!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
     }) },
     { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: [{
       loader: 'url-loader',

       options: {
         limit: 10000,
         mimetype: 'application/font-woff'
       }
     }] },
     { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: [{
       loader: 'url-loader',

       options: {
         limit: 10000,
         mimetype: 'application/font-woff'
       }
     }] },
     { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [{
       loader: 'url-loader',

       options: {
         limit: 10000,
         mimetype: 'application/octet-stream'
       }
     }] },
     { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: [{
       loader: 'file-loader'
     }] },
     { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: [{
       loader: 'url-loader',

       options: {
         limit: 10000,
         mimetype: 'image/svg+xml'
       }
     }] },
     { test: webpackIsomorphicToolsPlugin.regular_expression('images'), use: [{
       loader: 'url-loader',

       options: {
         limit: 10240
       }
     }] }
   ]
  },
  resolve: {
    modules: [
    path.join(__dirname, "src"),
     "node_modules"
   ],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins: [
    new CleanPlugin([assetsPath], { root: projectRootPath }),

    // css files from the extract-text-plugin loader
    new ExtractTextPlugin('[name]-[chunkhash].css', {allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        "NODE_ENV" : '"production"',
      },

      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false
    }),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //
    //   sourceMap: true
    // }),
    // webpackIsomorphicToolsPlugin,
    //
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};
