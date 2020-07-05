const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'none',
  entry: './src/index.ts',
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
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
}