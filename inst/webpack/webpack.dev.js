const commonPaths = require("./common-paths");
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, '../src/stylesheets/ant-theme-vars.less'), 'utf8'));

const publicUrl = '';

module.exports = {
  devtool: 'inline-source-map',
  output: {
    pathinfo: true
  },

  devServer: {
    // All options here: https://webpack.js.org/configuration/dev-server/

    hot: true, // enable HMR on the server
    contentBase: commonPaths.contentBasePath, // match the output path
    publicPath: '/', // match the output `publicPath`
    //host:"0.0.0.0",  Enable to integrate with Docker
    port: 3000,
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true
    }
  },
  plugins: [

    // Makes some environment variables available in index.html.
    // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    // In development, this will be an empty string.
    new InterpolateHtmlPlugin({PUBLIC_URL: publicUrl}),
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    new WriteFilePlugin({
      // exclude hot-update files
      test: /^(?!.*(hot)).*/
    }),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: commonPaths.contentBasePath + '/index.html'
    }),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    // do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    // loaders -> rules in webpack 2
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["react", "es2015", "stage-0"],
              plugins: [
                [
                  "react-hot-loader/babel",
                  "transform-runtime",
                  "add-module-exports",
                  "transform-decorators-legacy",
                  "transform-react-display-name"
                ]
              ]
            },
          }
        ],
        include: commonPaths.srcPath
      }, {
        test: /\.(scss|css)$/i,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              minimize: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
        include: commonPaths.stylesheetsPath // Use include instead exclude to improve the build performance
      },
      {
      test: /\.less$/,
      use: [
        {loader: "style-loader"},
        {loader: "css-loader"},
        {loader: "less-loader",
          options: {
            modifyVars: themeVariables
          }
        }
      ]
    }
    ]
  }
};
