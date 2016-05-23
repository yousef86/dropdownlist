var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  entry: {
    'bundle': './example/src/index.js',
  },


  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: 'example/scripts/',
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'DropDownList'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader'},

	   // Extract css files
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            // }

    ]
  }

};
