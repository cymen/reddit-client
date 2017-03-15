var nodeExternals = require('webpack-node-externals');

require('./test/setup');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  }
};
