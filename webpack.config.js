const path = require('path');
module.exports = {
  entry: './src/index.js',
  output:{
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', ' ']
  },
  devServer: {
    inline: true,
    port: 3000,
    contentBase: path.resolve(__dirname, 'build')
  }
}
