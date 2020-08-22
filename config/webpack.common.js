const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    index: './src/assets/js/homepage.js',
    login: './src/assets/js/login.js',
    register: './src/assets/js/register.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(
      { 
        patterns: [
          { from: path.resolve(__dirname, '../src/assets/img'), to: 'assets/img' },
        ]
      }
    ),
    new HtmlWebpackPlugin({
      title: 'EczaStok',
      template: path.resolve(__dirname, '../src') + '/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'EczaStok',
      template: path.resolve(__dirname, '../src') + '/login.html',
      filename: 'login.html',
    }),
    new HtmlWebpackPlugin({
      title: 'EczaStok',
      template: path.resolve(__dirname, '../src') + '/register.html',
      filename: 'register.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[path][name].[ext]',
          context: 'src',
        },
      },
    ],
  },
}
