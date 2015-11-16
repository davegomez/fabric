/* global __dirname, module */

import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

const SRC = path.resolve(__dirname, 'src/js');
const BIN = path.resolve(__dirname, 'bin');

module.exports = {
  entry: SRC,

  resolve: {
    extensions: ['', '.js']
  },

  output: {
    path: BIN,
    filename: 'js/app.js'
  },

  devtool: 'eval-source-map',

  module: {
    preLoaders: [
      { test: /\.js?$/, loaders: ['eslint', 'jscs'], include: SRC }
    ],

    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bin)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-2'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract('style-loader',
          'css-loader?sourceMap' +
          '!autoprefixer-loader?browsers=last 2 version' +
          '!sass-loader?outputStyle=expanded&sourceMap&sourceMapContents')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/main.css', {
      allChunks: true
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./bin'] },
      files: ['bin/*.html']
    })
  ]
};
