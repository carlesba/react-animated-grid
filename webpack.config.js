var webpackDevServer = 'webpack-dev-server/client?http://localhost:8080'
var path = require('path')

module.exports = {
  context: path.join(__dirname, '/example'),
  entry: {
    index: [
      './index',
      webpackDevServer
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].dist.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'resolve-url', 'sass']
      },
      {
        test: /(\.png|\.woff|.ttf)$/,
        loaders: ['url'],
        include: __dirname
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.join(__dirname, '/src/styles')
    ],
    indentedSyntax: true
  }
}
