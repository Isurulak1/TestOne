const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    url: require.resolve('url/'),
    assert: require.resolve('assert/'),
    util: require.resolve('util/'),
    stream: require.resolve('stream-browserify'),
    zlib: require.resolve('browserify-zlib'),
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};
