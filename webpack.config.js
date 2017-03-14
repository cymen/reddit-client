var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: './src/index',

  output: {
    filename: 'reddit-client.js',
    path: path.resolve('./dist')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader',
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader',
          fallback: 'style-loader',
        })
      },
      {
        test: /\.svg?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      }, {
        test: /\.(ttf|eot)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      }
		]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'reddit-client.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'Reddit Client',
      template: 'src/index.html',
    }),
  ]
};
