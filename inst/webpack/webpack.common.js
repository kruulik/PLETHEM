const path = require('path');
const commonPaths = require("./common-paths");
const config = {
    target: 'web',
    resolve: {
      modules: [path.resolve(__dirname, "../src"), "node_modules"],
      extensions: ['.json', '.js', '.jsx']
    },
    entry: [
        'react-hot-loader/patch',
        './src/plethem.jsx'
    ],
    // entry: {
    //     polyfills: [
    //         'core-js/es6/set'
    //     ],
    //     bundle: './src/plethem.js'
    //
    // },
    output: {
        filename: 'static/js/[name].js',
        path: commonPaths.outputPath,
        // chunkFilename: 'static/js/[name].chunk.js',
        // This is the URL that app is served from. We use "/" in development.
        publicPath: ''
    }
};

module.exports = config;
