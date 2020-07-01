const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.ts',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/assets/',
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js','.scss']
  },
  output: {
    publicPath: 'public/assets',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/assets')
  }
}