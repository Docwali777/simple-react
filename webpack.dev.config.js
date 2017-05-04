const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'inline-source-map',
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
  plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    inline: true,
    port: 3000,
    contentBase: path.resolve(__dirname, 'build')
  }
}
