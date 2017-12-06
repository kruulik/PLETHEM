// Webpack config for development
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var assetsPath = path.resolve(__dirname, '../static/dist');
var host = (process.env.HOST || 'localhost');
var port = (+ process.env.PORT + 1) || 3001;

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

var babelrc = fs.readFileSync('./.babelrc');
var babelrcObject = {};

try {
  babelrcObject = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

var babelrcObjectDevelopment = babelrcObject.env && babelrcObject.env.development || {};

// merge global and dev-only plugins
var combinedPlugins = babelrcObject.plugins || [];
combinedPlugins = combinedPlugins.concat(babelrcObjectDevelopment.plugins);

var babelLoaderQuery = Object.assign({}, babelrcObjectDevelopment, babelrcObject, {plugins: combinedPlugins});
delete babelLoaderQuery.env;

// Since we use .babelrc for client and server, and we don't want HMR enabled on the server, we have to add
// the babel plugin react-transform-hmr manually here.

// make sure react-transform is enabled
babelLoaderQuery.plugins = babelLoaderQuery.plugins || [];
var reactTransform = null;
for (var i = 0; i < babelLoaderQuery.plugins.length; ++i) {
  var plugin = babelLoaderQuery.plugins[i];
  if (Array.isArray(plugin) && plugin[0] === 'react-transform') {
    reactTransform = plugin;
  }
}

if (!reactTransform) {
  reactTransform = [
    'react-transform', {
      transforms: []
    }
  ];
  babelLoaderQuery.plugins.push(reactTransform);
}

if (!reactTransform[1] || !reactTransform[1].transforms) {
  reactTransform[1] = Object.assign({}, reactTransform[1], {transforms: []});
}

// make sure react-transform-hmr is enabled
reactTransform[1].transforms.push({transform: 'react-transform-hmr', imports: ['react'], locals: ['module']});

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    'main': [
      'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
      'bootstrap-loader',
      'font-awesome-webpack!./src/theme/font-awesome.config.js',
      './src/index.js'
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: 'http://' + host + ':' + port + '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
            {
                loader: 'babel-loader'
            }
        ],
      },
      {
        test: /\.scss$/i,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    importLoaders: 1,
                    minimize: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ],
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            use: 'url-loader',

            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            use: 'url-loader',

            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            use: 'url-loader',

            options: {
              limit: 10000,
              mimetype: 'application/octet-stream'
            }
          }
        ]
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            use: 'file-loader'
          }
        ]
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            use: 'url-loader',

            options: {
              limit: 10000,
              mimetype: 'image/svg+xml'
            }
          }
        ]
      }, {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        use: [
          {
            use: 'url-loader',

            options: {
              limit: 10240
            }
          }
        ]
      }
    ]
  },
  // progress: true,
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins: [
    // hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __DEVELOPMENT__: true}),
    new webpack.LoaderOptionsPlugin({minimize: true}),
    webpackIsomorphicToolsPlugin.development()
  ]
};
