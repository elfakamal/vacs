const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index',
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: path.join(__dirname, 'src/'),
    filename: 'vacs.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './src',
    port: 9001,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  module: {
    rules: [
      // less
      { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
      { test: /\.less$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }] },
      // JS/TS
      { test: /\.jsx?$/, use: [{ loader: 'babel-loader' }] },
      { test: /\.tsx?$/, use: [{ loader: 'ts-loader' }] },
      // images
      { test: /\.(jpe?g|png|gif)$/i, use: [{ loader: 'url-loader', options: { limit: 10240 } }] },
      // Font
      { test: /\.svg(\?[a-z0-9=&.]+)?$/, use: [{ loader: 'url-loader', options: { limit: 65000, mimetype:'image/svg+xml' } }] },
      { test: /\.woff(\?[a-z0-9=&.]+)?$/, use: [{ loader: 'url-loader', options: { limit: 65000, mimetype:'application/font-woff' } }] },
      { test: /\.woff2(\?[a-z0-9=&.]+)?$/, use: [{ loader: 'url-loader', options: { limit: 65000, mimetype:'application/font-woff2' } }] },
      { test: /\.[ot]tf(\?[a-z0-9=&.]+)?$/, use: [{ loader: 'url-loader', options: { limit: 65000, mimetype:'application/octet-stream' } }] },
      { test: /\.eot(\?[a-z0-9=&.]+)?$/, use: [{ loader: 'url-loader', options: { limit: 65000, mimetype:'application/vnd.ms-fontobject' } }] },
    ],
  },
};
