const webpack = require('webpack'); // eslint-disable-line
const webpackConfig = require('../webpack.config.dev.js'); // eslint-disable-line
const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
const webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line
const compiler = webpack(webpackConfig);

function devMiddleware(app) {
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
    historyApiFallback: true,
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log, // eslint-disable-line
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}

module.exports = devMiddleware;
