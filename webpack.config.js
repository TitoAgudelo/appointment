module.exports = {
  entry: ['./src/main.js'],
  output: {
    filename: './src/bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  }
}
