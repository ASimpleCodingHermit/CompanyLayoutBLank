// import Webpack Module
let webpack = require('webpack');

// Import Open Browser Plugin
let OpenBrowserPlugin = require('open-browser-webpack-plugin');

// Import Path Modules
const path = require('path');

module.exports = {
  entry: './src/index.js', //set entry file

  // Resolve to output directory and set the file output:
  output: {
    path: path.resolve('dist/assets'),
    filename: 'bundle.js',
    publicPath: 'assets',
  },
  // Add URL parameters to open Browser Plugin
  plugins: [new OpenBrowserPlugin({ url: 'http://localhost:3000' })],
  // Set Dev-server Configuration
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000,
  },
  // Add Babel-loader to transpile JS and JSX Files
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [{ loader: 'babel-loader' }, (query: { presets: ['react'] })],
      },
    ],
  },
};
