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
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5000,
            output: {
              publicPath: 'public/assets/',
              filename: '[name].[ext]',
              path: path.resolve(__dirname, 'public/assets/'),
            }
          }
        }
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