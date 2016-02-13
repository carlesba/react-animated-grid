var bourbonPaths = require('bourbon').includePaths
var webpack = require('webpack')

module.exports = {
  context: __dirname + '/example',
  entry: './index',
  output: {
    path: __dirname + '/demo',
    filename: 'demo.js'
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
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.optimize.DedupePlugin()
  ],
  sassLoader: {
    includePaths: [
      __dirname + '/src/styles',
      bourbonPaths
    ],
    indentedSyntax: true
  }
}
