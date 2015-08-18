var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: 'client/',
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    chunks: false
  },
  proxy: {
    '/api/*': 'http://localhost:4040'
  }
}).listen(4030, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:4030');
});
