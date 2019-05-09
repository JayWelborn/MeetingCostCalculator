const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: path.join(__dirname, 'src', 'components', 'App.js'),

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new CopyPlugin([
      {
        from: path.join(__dirname, 'public', 'css'),
        to: path.join(__dirname, 'build', 'css'),
        type: 'dir'
      },
      {
        from: path.join(__dirname, 'public', 'images'),
        to: path.join(__dirname, 'build', 'images'),
        type: 'dir'
      },
      {
        from: path.join(__dirname, 'public', 'js'),
        to: path.join(__dirname, 'build', 'jss'),
        type: 'dir'
      },
      {
        from: path.join(__dirname, 'public', 'favicon.ico'),
        to: path.join(__dirname, 'build', 'favicon.ico'),
        type: 'file'
      }
    ])
  ]
}
