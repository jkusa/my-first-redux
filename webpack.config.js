var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = {
  entry: './index.js',
  output: {
    path: __dirname + '/lib',
    filename: 'app.js',
    publicPath: __dirname + '/app'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: []
};

new WebpackDevServer(webpack(config), {
  contentBase: './app',
  hot: true,
  debug: true
}).listen('4200', '0.0.0.0', function(err, result) {
  if(err) {
    console.log(err);
  }
});

console.log('-----------------------');
console.log('Server at http://localhost:4200');
console.log('-----------------------');

module.exports = config;
