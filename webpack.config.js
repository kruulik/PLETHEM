var path = require('path');

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
    extensions: [".js", ".jsx", "*"]
  },
	devServer: {
      inline: true,
      port: 8080
   },
}
