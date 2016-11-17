const path = require('path');

const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['./app/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?modules&importLoaders=1&sourceMap!postcss!sass?sourceMap&sourceMapContents'],
      },
      {
        test: /\.json$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'json-loader',
      },
      {test: /\.(png|svg)$/, loader: 'url-loader?limit=100000'},
    ],
  },
  plugins: [
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  postcss: [autoprefixer],
};
