const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './app')
];


module.exports = {
  devtool: 'eval',
  entry: {
    app: path.join(__dirname, 'app/scripts', 'initialize.js')
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: 'public'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    //stats: 'errors-only',
  },
  watchOptions: {
    // Delay the rebuild after the first change
    aggregateTimeout: 300,
    // Poll using interval (in ms, accepts boolean too)
    poll: 1000
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'Artists'}),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 3 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    root: [path.join(__dirname, './app')]
  }
};
